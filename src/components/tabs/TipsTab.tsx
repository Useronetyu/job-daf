import { TIPS } from '@/data/dentalData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Droplet, Apple, Calendar, Moon, Smile } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  tooth: Sparkles,
  droplet: Droplet,
  apple: Apple,
  calendar: Calendar,
  moon: Moon,
  smile: Smile,
};

const colorMap: Record<string, string> = {
  tooth: 'bg-primary/10 text-primary',
  droplet: 'bg-cyan-500/10 text-cyan-500',
  apple: 'bg-rose-500/10 text-rose-500',
  calendar: 'bg-orange-500/10 text-orange-500',
  moon: 'bg-indigo-500/10 text-indigo-500',
  smile: 'bg-pink-500/10 text-pink-500',
};

export function TipsTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">Tips Kesehatan Gigi</h2>
        <p className="mt-2 text-muted-foreground">
          Ikuti panduan praktis ini untuk menjaga kesehatan gigi dan mulut Anda.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TIPS.map((tip) => {
          const Icon = iconMap[tip.icon] || Sparkles;
          const colorClass = colorMap[tip.icon] || colorMap.tooth;

          return (
            <Card key={tip.id} className="card-shadow animate-fade-in transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${colorClass}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{tip.judul}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{tip.deskripsi}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
