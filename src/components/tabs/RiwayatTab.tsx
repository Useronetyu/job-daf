import { GEJALA, type DiagnosisHistory } from '@/data/dentalData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Trash2, Calendar, AlertCircle, History } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface RiwayatTabProps {
  history: DiagnosisHistory[];
  onDeleteHistory: (id: string) => void;
}

export function RiwayatTab({ history, onDeleteHistory }: RiwayatTabProps) {
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

  const getGejalaNames = (gejalaIds: string[]) => {
    return gejalaIds.map((id) => GEJALA.find((g) => g.id === id)?.nama || '');
  };

  const handleDelete = (id: string) => {
    onDeleteHistory(id);
    toast({
      title: 'Berhasil Dihapus',
      description: 'Riwayat diagnosa telah dihapus.',
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">Riwayat Diagnosa</h2>
        <p className="mt-2 text-muted-foreground">
          Lihat semua hasil diagnosa yang pernah Anda lakukan beserta rekomendasi perawatannya.
        </p>
      </div>

      {history.length === 0 ? (
        <Card className="card-shadow">
          <CardContent className="py-12 text-center">
            <History className="mx-auto mb-4 h-16 w-16 text-muted-foreground/50" />
            <h3 className="text-lg font-semibold text-foreground">Belum Ada Riwayat</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Anda belum melakukan diagnosa apapun. Mulai diagnosa untuk melihat riwayat di sini.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <Card key={item.id} className="card-shadow animate-fade-in">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <AlertCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <CardTitle className="text-lg">{item.penyakit.nama}</CardTitle>
                        <Badge className={cn('text-xs', getSeverityClass(item.penyakit.severity))}>
                          {item.penyakit.severity}
                        </Badge>
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {item.tanggal}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{item.penyakit.deskripsi}</p>

                <div>
                  <h4 className="mb-2 text-sm font-semibold text-foreground">Gejala yang dilaporkan:</h4>
                  <div className="flex flex-wrap gap-2">
                    {getGejalaNames(item.gejalaSelected).map((nama, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {nama}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold text-foreground">Rekomendasi:</h4>
                  <ul className="space-y-1.5">
                    {item.penyakit.rekomendasi.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
