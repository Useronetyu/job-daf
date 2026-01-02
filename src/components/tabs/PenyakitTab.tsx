import { PENYAKIT, GEJALA } from '@/data/dentalData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export function PenyakitTab() {
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

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">Penyakit Gigi Umum</h2>
        <p className="mt-2 text-muted-foreground">
          Pelajari tentang berbagai penyakit gigi, gejala, dan cara pencegahannya.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {PENYAKIT.map((penyakit) => (
          <Card key={penyakit.id} className="card-shadow animate-fade-in">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full',
                  penyakit.severity === 'Parah' ? 'bg-destructive/10' : 
                  penyakit.severity === 'Sedang' ? 'bg-primary/10' : 'bg-cyan-500/10'
                )}>
                  <AlertCircle className={cn(
                    'h-5 w-5',
                    penyakit.severity === 'Parah' ? 'text-destructive' : 
                    penyakit.severity === 'Sedang' ? 'text-primary' : 'text-cyan-500'
                  )} />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-lg">{penyakit.nama}</CardTitle>
                  <Badge className={cn('text-xs', getSeverityClass(penyakit.severity))}>
                    {penyakit.severity}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{penyakit.deskripsi}</p>

              <div>
                <h4 className="mb-2 text-sm font-semibold text-foreground">Gejala:</h4>
                <ul className="space-y-1">
                  {getGejalaNames(penyakit.gejala).map((nama, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                      {nama}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold text-foreground">Rekomendasi:</h4>
                <ul className="space-y-1">
                  {penyakit.rekomendasi.map((rec, index) => (
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
    </div>
  );
}
