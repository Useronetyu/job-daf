export interface Gejala {
  id: string;
  nama: string;
}

export interface Penyakit {
  id: string;
  nama: string;
  deskripsi: string;
  severity: 'Ringan' | 'Sedang' | 'Parah';
  gejala: string[];
  rekomendasi: string[];
}

export interface Rule {
  gejala: string[];
  penyakit: string;
}

export interface DiagnosisHistory {
  id: string;
  penyakit: Penyakit;
  gejalaSelected: string[];
  tanggal: string;
}

export const GEJALA: Gejala[] = [
  { id: 'G01', nama: 'Gusi bengkak' },
  { id: 'G02', nama: 'Gigi ngilu' },
  { id: 'G03', nama: 'Bau Mulut Tidak Sedap' },
  { id: 'G04', nama: 'Gusi sakit saat di sentuh' },
  { id: 'G05', nama: 'Sakit Panas / Dingin' },
  { id: 'G06', nama: 'Gusi Berdarah' },
  { id: 'G07', nama: 'Gusi Nyeri' },
  { id: 'G08', nama: 'Gusi Bernanah' },
  { id: 'G09', nama: 'Gigi Goyang' },
  { id: 'G10', nama: 'Penumpukan Plak' },
  { id: 'G11', nama: 'Gigi Berlubang' },
  { id: 'G12', nama: 'Gigi Patah' },
  { id: 'G13', nama: 'Nyeri Terus Menerus' },
  { id: 'G14', nama: 'Noda Hitam/Coklat/Putih' },
  { id: 'G15', nama: 'Gigi Tampak Kuning' },
  { id: 'G16', nama: 'Radang Gusi' },
  { id: 'G17', nama: 'Gusi Mengkilap' },
  { id: 'G18', nama: 'Mulut Pahit' },
  { id: 'G19', nama: 'Gigi Renggang' },
  { id: 'G20', nama: 'Gusi memerah / keunguan' },
  { id: 'G21', nama: 'Gusi yang mendorong maju' },
  { id: 'G22', nama: 'Nyeri saat mengunyah' },
  { id: 'G23', nama: 'Mulut menjadi kering' },
];

export const PENYAKIT: Penyakit[] = [
  {
    id: 'P01',
    nama: 'Karies Gigi',
    deskripsi: 'Kerusakan jaringan gigi akibat bakteri dan penumpukan plak yang menghasilkan asam sehingga membentuk lubang pada gigi.',
    severity: 'Sedang',
    gejala: ['G10', 'G11', 'G14', 'G05', 'G15'],
    rekomendasi: [
      'Menggosok gigi secara teratur dengan teknik yang benar.',
      'Gunakan pasta gigi berfluoride.',
      'Gunakan obat kumur antiseptik.',
      'Kurangi konsumsi makanan manis.',
      'Periksa gigi secara rutin ke dokter.',
    ],
  },
  {
    id: 'P02',
    nama: 'Erosi Gigi',
    deskripsi: 'Hilangnya lapisan enamel gigi secara bertahap akibat paparan asam berlebihan dari makanan, minuman, atau kondisi medis tertentu.',
    severity: 'Ringan',
    gejala: ['G05', 'G15', 'G14', 'G12', 'G02'],
    rekomendasi: [
      'Kurangi konsumsi makanan dan minuman asam.',
      'Minum air putih setelah minuman berasam.',
      'Gunakan pasta gigi untuk gigi sensitif.',
      'Hindari menyikat gigi terlalu keras.',
    ],
  },
  {
    id: 'P03',
    nama: 'Gingivitis',
    deskripsi: 'Peradangan gusi akibat penumpukan plak pada gigi yang menyebabkan pembengkakan, kemerahan, dan nyeri.',
    severity: 'Sedang',
    gejala: ['G01', 'G06', 'G16', 'G20', 'G17'],
    rekomendasi: [
      'Menyikat gigi dengan benar dan teratur.',
      'Flossing setiap hari.',
      'Gunakan obat kumur antiseptik.',
      'Bersihkan karang gigi secara rutin.',
      'Sikat gigi berbulu lembut.',
    ],
  },
  {
    id: 'P04',
    nama: 'Pulpitis',
    deskripsi: 'Peradangan pada pulpa (saraf gigi) akibat infeksi atau kerusakan jaringan yang menyebabkan rasa nyeri terus-menerus.',
    severity: 'Parah',
    gejala: ['G11', 'G13', 'G05', 'G22', 'G07'],
    rekomendasi: [
      'Segera lakukan pemeriksaan ke dokter gigi jika terjadi nyeri hebat.',
      'Hindari konsumsi makanan & minuman manis.',
      'Rawat gigi berlubang sebelum infeksi meluas.',
      'Perawatan saluran akar jika diperlukan.',
      'Kontrol rutin setelah perawatan.',
    ],
  },
  {
    id: 'P05',
    nama: 'Abses Gigi',
    deskripsi: 'Infeksi bakteri serius yang membentuk nanah pada gusi atau akar gigi dan menyebabkan nyeri berat serta pembengkakan.',
    severity: 'Parah',
    gejala: ['G08', 'G01', 'G07', 'G22'],
    rekomendasi: [
      'Segera periksakan ke dokter (darurat).',
      'Perawatan saluran akar atau pencabutan jika diperlukan.',
      'Mengonsumsi obat antibiotik sesuai resep dokter.',
      'Hindari menekan / memencet gusi bernanah.',
      'Menjaga kebersihan mulut untuk mencegah infeksi kembali.',
    ],
  },
  {
    id: 'P06',
    nama: 'Periodontitis',
    deskripsi: 'Infeksi lanjutan gingivitis yang merusak jaringan penyangga gigi & tulang rahang hingga menyebabkan gigi goyang atau tanggal.',
    severity: 'Parah',
    gejala: ['G09', 'G21', 'G16', 'G19', 'G06'],
    rekomendasi: [
      'Segera lakukan pemeriksaan ke dokter gigi jika terjadi nyeri hebat.',
      'Hindari konsumsi makanan & minuman manis.',
      'Rawat gigi berlubang sebelum infeksi meluas.',
      'Perawatan saluran akar jika diperlukan.',
      'Kontrol rutin setelah perawatan.',
    ],
  },
  {
    id: 'P07',
    nama: 'Halitosis',
    deskripsi: 'Bau mulut kronis akibat penumpukan bakteri pada mulut, lidah, atau gigi.',
    severity: 'Ringan',
    gejala: ['G03', 'G18', 'G23', 'G10', 'G15'],
    rekomendasi: [
      'Membersihkan lidah secara rutin menggunakan tongue scraper.',
      'Gunakan obat kumur antibakteri.',
      'Konsumsi air putih yang cukup.',
      'Hindari rokok dan alkohol.',
      'Menyikat gigi secara teratur.',
    ],
  },
];

export const RULES: Rule[] = [
  { gejala: ['G10', 'G11', 'G14', 'G05', 'G15'], penyakit: 'P01' },
  { gejala: ['G05', 'G15', 'G14', 'G12', 'G02'], penyakit: 'P02' },
  { gejala: ['G01', 'G06', 'G16', 'G20', 'G17'], penyakit: 'P03' },
  { gejala: ['G11', 'G13', 'G05', 'G22', 'G07'], penyakit: 'P04' },
  { gejala: ['G08', 'G01', 'G07', 'G22'], penyakit: 'P05' },
  { gejala: ['G09', 'G21', 'G16', 'G19', 'G06'], penyakit: 'P06' },
  { gejala: ['G03', 'G18', 'G23', 'G10', 'G15'], penyakit: 'P07' },
];

export const TIPS = [
  {
    id: 1,
    judul: 'Sikat Gigi dengan Benar',
    deskripsi: 'Sikat gigi minimal 2 kali sehari selama 2 menit dengan teknik yang benar. Gunakan sikat gigi berbulu lembut dan pasta gigi berfluoride.',
    icon: 'tooth',
  },
  {
    id: 2,
    judul: 'Gunakan Benang Gigi',
    deskripsi: 'Flossing setiap hari membantu membersihkan sisa makanan dan plak di antara gigi yang tidak terjangkau sikat gigi.',
    icon: 'droplet',
  },
  {
    id: 3,
    judul: 'Pola Makan Sehat',
    deskripsi: 'Kurangi makanan manis dan asam. Konsumsi makanan kaya kalsium seperti susu dan keju untuk memperkuat gigi.',
    icon: 'apple',
  },
  {
    id: 4,
    judul: 'Kunjungi Dokter Gigi Rutin',
    deskripsi: 'Lakukan pemeriksaan gigi setiap 6 bulan sekali untuk deteksi dini masalah gigi dan pembersihan karang gigi profesional.',
    icon: 'calendar',
  },
  {
    id: 5,
    judul: 'Hindari Kebiasaan Buruk',
    deskripsi: 'Jangan merokok, menggigit kuku, atau menggunakan gigi untuk membuka sesuatu. Hindari menggertakkan gigi saat tidur.',
    icon: 'moon',
  },
  {
    id: 6,
    judul: 'Gunakan Obat Kumur',
    deskripsi: 'Obat kumur antiseptik membantu mengurangi bakteri di mulut dan memberikan perlindungan ekstra terhadap penyakit gusi.',
    icon: 'smile',
  },
];

// Forward Chaining Logic
export function forwardChaining(selectedGejala: string[]): Penyakit | null {
  if (selectedGejala.length === 0) return null;

  let bestMatch: { penyakit: Penyakit; matchCount: number } | null = null;

  for (const rule of RULES) {
    const matchCount = rule.gejala.filter((g) => selectedGejala.includes(g)).length;
    
    if (matchCount >= 3) {
      const penyakit = PENYAKIT.find((p) => p.id === rule.penyakit);
      if (penyakit && (!bestMatch || matchCount > bestMatch.matchCount)) {
        bestMatch = { penyakit, matchCount };
      }
    }
  }

  return bestMatch?.penyakit || null;
}
