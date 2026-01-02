import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Camera,
  Sun,
  Moon,
  Bell,
  Globe,
  Trash2,
  ArrowLeft,
  Save,
  Smile,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { toast } from '@/hooks/use-toast';

export default function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('id');

  const handleSaveProfile = () => {
    updateProfile({ name, email, phone });
    toast({
      title: 'Profil Diperbarui',
      description: 'Perubahan profil Anda telah disimpan.',
    });
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus akun? Tindakan ini tidak dapat dibatalkan.')) {
      logout();
      navigate('/login');
      toast({
        title: 'Akun Dihapus',
        description: 'Akun Anda telah berhasil dihapus.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glassmorphism-strong border-b px-4 py-3 md:px-8">
        <div className="container mx-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Smile className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Profil & Pengaturan</h1>
              <p className="text-xs text-muted-foreground">Kelola akun Anda</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Profil</TabsTrigger>
              <TabsTrigger value="settings">Pengaturan</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Informasi Profil</CardTitle>
                  <CardDescription>Perbarui informasi profil Anda di sini.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Picture */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                        <User className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">Klik ikon kamera untuk mengubah foto</p>
                  </div>

                  <Separator />

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-10"
                          placeholder="+62 xxx xxxx xxxx"
                        />
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleSaveProfile} className="w-full gap-2">
                    <Save className="h-4 w-4" />
                    Simpan Perubahan
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <div className="space-y-6">
                {/* Appearance */}
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                      Tampilan
                    </CardTitle>
                    <CardDescription>Sesuaikan tampilan aplikasi.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Mode Gelap</p>
                        <p className="text-sm text-muted-foreground">
                          Aktifkan mode gelap untuk tampilan yang lebih nyaman di malam hari.
                        </p>
                      </div>
                      <Switch
                        checked={theme === 'dark'}
                        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Notifications */}
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Notifikasi
                    </CardTitle>
                    <CardDescription>Kelola preferensi notifikasi Anda.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Reminder</p>
                        <p className="text-sm text-muted-foreground">
                          Terima pengingat untuk pemeriksaan gigi rutin.
                        </p>
                      </div>
                      <Switch checked={notifications} onCheckedChange={setNotifications} />
                    </div>
                  </CardContent>
                </Card>

                {/* Language */}
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Bahasa
                    </CardTitle>
                    <CardDescription>Pilih bahasa yang digunakan.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="id">Bahasa Indonesia</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                {/* Danger Zone */}
                <Card className="card-shadow border-destructive/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <Trash2 className="h-5 w-5" />
                      Zona Berbahaya
                    </CardTitle>
                    <CardDescription>Tindakan yang tidak dapat dibatalkan.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="destructive" onClick={handleDeleteAccount} className="gap-2">
                      <Trash2 className="h-4 w-4" />
                      Hapus Akun
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
}
