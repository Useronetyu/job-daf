# SmileDetect - Sistem Pakar Diagnosa Penyakit Gigi Berbasis Web

## Tentang Proyek
[cite_start]Proyek ini adalah **Sistem Pakar Berbasis Web** yang dirancang untuk membantu masyarakat melakukan diagnosa awal terhadap penyakit gigi manusia[cite: 47]. [cite_start]Aplikasi ini dikembangkan untuk mengatasi rendahnya kesadaran masyarakat akan kesehatan gigi serta keterbatasan waktu dan biaya untuk berkonsultasi langsung ke dokter gigi[cite: 43, 45].

[cite_start]Sistem ini bekerja dengan meniru kemampuan seorang pakar (dokter gigi) dalam menyelesaikan masalah diagnosa berdasarkan pengetahuan dan pengalaman[cite: 41]. [cite_start]Pengguna cukup memasukkan gejala yang dirasakan, dan sistem akan memberikan hasil diagnosa serta saran penanganan awal[cite: 49].

## Tim Pengembang (Kelompok 1)
[cite_start]Proyek ini disusun sebagai tugas Sarjana Ilmu Komputer, Fakultas Sains & Teknologi, Universitas Putra Bangsa[cite: 9, 10, 11].

* [cite_start]**Gilas Zein Ramdani** (230202756) [cite: 3]
* [cite_start]**Dafa Afriza Julianto** (230202740) [cite: 4]
* [cite_start]**Dimas Eko Wicaksono** (230202745) [cite: 5]
* [cite_start]**Naufal Raa’id** (230202771) [cite: 6]
* [cite_start]**Anjani Rahmawati** (230202734) [cite: 7]

## Metode: Forward Chaining
Sistem ini menggunakan metode inferensi **Forward Chaining**. [cite_start]Metode ini bekerja dengan cara menelusuri fakta-fakta (gejala) yang dimasukkan oleh pengguna terlebih dahulu (*data-driven reasoning*) untuk kemudian dicocokkan dengan aturan (*rules*) hingga menghasilkan suatu kesimpulan (diagnosa)[cite: 51, 52, 109].

Alur kerja sistem:
1.  Pengguna input gejala.
2.  Sistem mencocokkan gejala dengan *Knowledge Base* (Aturan IF-THEN).
3.  [cite_start]Sistem memberikan kesimpulan penyakit[cite: 113, 114, 115].

## Basis Pengetahuan (Knowledge Base)
[cite_start]Sistem dapat mendiagnosa 7 jenis penyakit gigi berdasarkan 23 gejala yang terdaftar[cite: 148, 149]:

| Kode | Penyakit Terdeteksi | Aturan Utama (Contoh Gejala) |
| :--- | :--- | :--- |
| **P01** | Karies Gigi | [cite_start]Plak menumpuk, gigi berlubang, noda pada gigi [cite: 149] |
| **P02** | Erosi Gigi | [cite_start]Ngilu panas/dingin, gigi tampak kuning, permukaan menipis [cite: 149] |
| **P03** | Gingivitis | [cite_start]Gusi bengkak, gusi berdarah, radang gusi [cite: 149] |
| **P04** | Pulpitis | [cite_start]Gigi berlubang, nyeri terus menerus, nyeri berdenyut [cite: 149] |
| **P05** | Abses Gigi | [cite_start]Gusi bernanah, gusi bengkak, demam ringan [cite: 149] |
| **P06** | Periodontitis | [cite_start]Gigi goyang, gusi turun, gigi renggang [cite: 149] |
| **P07** | Halitosis | [cite_start]Bau mulut, mulut pahit, mulut kering [cite: 149] |

## Fitur Utama
1.  [cite_start]**Diagnosa Mandiri:** Pengguna dapat memilih gejala yang dialami dari daftar 23 gejala medis[cite: 148].
2.  **Hasil & Rekomendasi:** Menampilkan nama penyakit, tingkat keparahan, dan solusi perawatan.
3.  **Riwayat Diagnosa:** Menyimpan hasil pemeriksaan sebelumnya untuk pemantauan.
4.  **Informasi Penyakit:** Edukasi mengenai berbagai jenis penyakit gigi.
5.  **Tips Kesehatan:** Panduan menjaga kesehatan gigi dan mulut.

## Teknologi yang Digunakan
[cite_start]Sesuai dengan implementasi Bab IV, sistem ini dibangun menggunakan teknologi web modern untuk memastikan aksesibilitas yang luas[cite: 48, 144]:

* **Frontend:** React, TypeScript, Vite
* **Styling:** Tailwind CSS, Shadcn UI
* **Bahasa Pemrograman:** JavaScript/TypeScript

## Cara Menjalankan Proyek (Instalasi)

Jika Anda ingin menjalankan proyek ini di lingkungan lokal (Localhost):

1.  **Clone Repositori**
    ```bash
    git clone <URL_REPO_ANDA>
    cd <NAMA_FOLDER_PROYEK>
    ```

2.  **Instalasi Dependensi**
    Pastikan Node.js sudah terinstall.
    ```bash
    npm install
    ```

3.  **Jalankan Server Development**
    ```bash
    npm run dev
    ```

4.  **Akses Aplikasi**
    Buka browser dan kunjungi alamat yang muncul di terminal (biasanya `http://localhost:8080`).

---
*Dokumen ini disusun berdasarkan Laporan Perancangan Sistem Pakar Berbasis Web Untuk Diagnosa Penyakit Gigi Manusia Menggunakan Metode Forward Chaining - Universitas Putra Bangsa, 2025.*