import { useState } from 'react';
import { GEJALA, PENYAKIT, forwardChaining, type Penyakit, type DiagnosisHistory } from '@/data/dentalData';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check, RotateCcw, Save, AlertCircle, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface DiagnosaTabProps {
  onSaveHistory: (history: DiagnosisHistory) => void;
}

export function DiagnosaTab({ onSaveHistory }: DiagnosaTabProps) {
  const [selectedGejala, setSelectedGejala] = useState<string[]>([]);
  const [result, setResult] = useState<Penyakit | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleGejalaChange = (gejalaId: string, checked: boolean) => {
    if (checked) {
      setSelectedGejala([...selectedGejala, gejalaId]);
    } else {
      setSelectedGejala(selectedGejala.filter((id) => id !== gejalaId));
    }
    setShowResult(false);
    setSaved(false);
  };

  const handleAnalysis = () => {
    if (selectedGejala.length < 3) {
      toast({
        title: 'Gejala Kurang',
        description: 'Pilih minimal 3 gejala untuk melakukan analisis.',
        variant: 'destructive',
      });
      return;
    }

    const diagnosis = forwardChaining(selectedGejala);
    setResult(diagnosis);
    setShowResult(true);
    setSaved(false);

    if (!diagnosis) {
      toast({
        title: 'Tidak Ditemukan',
        description: 'Tidak ada penyakit yang cocok dengan gejala yang dipilih.',
        variant: 'destructive',
      });
    }
  };

  const handleReset = () => {
    setSelectedGejala([]);
    setResult(null);
    setShowResult(false);
    setSaved(false);
  };

  const handleSaveHistory = () => {
    if (!result) return;

    const history: DiagnosisHistory = {
      id: Date.now().toString(),
      penyakit: result,
      gejalaSelected: selectedGejala,
      tanggal: new Date().toLocaleString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    onSaveHistory(history);
    setSaved(true);
    toast({
      title: 'Berhasil Disimpan',
      description: 'Hasil diagnosa telah disimpan ke riwayat.',
    });
  };

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'Ringan':
        return 'severity-ringan';
      case 'Sedang':
        return 'severity-sedang';
      case 'Parah':
        return 'severity-parah';
      default:
        return 'severity-sedang';
    }
  };

  const getSelectedGejalaNames = () => {
    return selectedGejala.map((id) => GEJALA.find((g) => g.id === id)?.nama || '');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">Diagnosa Penyakit Gigi</h2>
        <p className="mt-2 text-muted-foreground">Pilih gejala yang Anda alami untuk mendapatkan diagnosa</p>
      </div>

      <Card className="card-shadow">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">Pilih Gejala Yang di Alami</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {GEJALA.map((gejala) => (
              <label
                key={gejala.id}
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all',
                  selectedGejala.includes(gejala.id)
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                )}
              >
                <Checkbox
                  checked={selectedGejala.includes(gejala.id)}
                  onCheckedChange={(checked) => handleGejalaChange(gejala.id, checked as boolean)}
                />
                <span className="text-sm text-foreground">{gejala.nama}</span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button onClick={handleAnalysis} className="flex-1 gap-2" size="lg">
              <Sparkles className="h-4 w-4" />
              Analisa Gejala
            </Button>
            <Button onClick={handleReset} variant="outline" size="lg" className="gap-2 sm:w-auto">
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {showResult && result && (
        <Card className="card-shadow-lg animate-fade-in border-primary/20">
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <AlertCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-xl">{result.nama}</CardTitle>
                <Badge className={cn('text-xs', getSeverityClass(result.severity))}>
                  {result.severity}
                </Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{result.deskripsi}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">Gejala yang dilaporkan:</h4>
              <div className="flex flex-wrap gap-2">
                {getSelectedGejalaNames().map((nama, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {nama}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">Rekomendasi:</h4>
              <ul className="space-y-1.5">
                {result.rekomendasi.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-secondary/50 p-4">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">Catatan Penting:</strong> Diagnosa ini bersifat informatif dan tidak menggantikan konsultasi dengan dokter gigi profesional. Segera hubungi dokter gigi untuk pemeriksaan yang lebih akurat.
              </p>
            </div>

            <Button
              onClick={handleSaveHistory}
              disabled={saved}
              variant={saved ? 'secondary' : 'outline'}
              className="w-full gap-2"
            >
              {saved ? (
                <>
                  <Check className="h-4 w-4" />
                  Hasil Diagnosa Tersimpan di Riwayat
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Simpan Riwayat Diagnosa
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}

      {showResult && !result && (
        <Card className="card-shadow animate-fade-in border-destructive/20">
          <CardContent className="py-8 text-center">
            <AlertCircle className="mx-auto mb-4 h-12 w-12 text-destructive" />
            <h3 className="text-lg font-semibold text-foreground">Tidak Ditemukan Diagnosa</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Berdasarkan gejala yang Anda pilih, tidak ditemukan penyakit yang cocok.
              Silakan coba pilih gejala lainnya atau konsultasikan dengan dokter gigi.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
