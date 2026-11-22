# Kalender Tugas Terintegrasi — Eksperimen B

Implementasi mandiri berbasis `PRD.md`, `UX-SPEC.md`, `DESIGN-SYSTEM.md`, `INTERACTION-SPEC.md`, `ACCEPTANCE-CRITERIA.md`, dan `AGENTS.md`.

## Menjalankan aplikasi

Diperlukan Python 3 untuk server statis lokal.

```powershell
python -m http.server 8000
```

Buka `http://localhost:8000`.

Pengujian logika:

```powershell
npm test
```

## Fitur

- Dashboard ringkasan total, belum dikerjakan, sedang dikerjakan, selesai, mendatang, dan terlambat.
- CRUD tugas lengkap dengan validasi nama, mata kuliah, deskripsi, tenggat, dan status.
- Konfirmasi penghapusan serta pembatalan jadwal pengingat terkait.
- Kalender bulanan dan mingguan, pemilihan tanggal, navigasi bulan, Hari ini, dan daftar tugas per tanggal.
- Daftar tugas dengan filter status/terlambat dan pengurutan tenggat/nama.
- Perubahan status dengan feedback; status terlambat dihitung turunan.
- Jadwal pengingat H-3 dan H-1 pukul 09.00 waktu lokal.
- Penyimpanan persisten lokal menggunakan `localStorage`.
- Layout responsif desktop, tablet, dan mobile; navigasi mobile, fokus keyboard, label form, modal, dan toast.

## Keputusan implementasi

- Stack HTML/CSS/JavaScript vanilla dipilih karena spesifikasi tidak menetapkan framework dan aplikasi dapat berjalan statis tanpa dependensi build.
- Penyimpanan dan pengingat bersifat lokal. Pengingat dievaluasi saat aplikasi terbuka dan setiap 60 detik.
- Tidak ada autentikasi, database server, layanan push, atau scheduler background. Konteks pengguna diimplementasikan sebagai pengguna demonstrasi Budi.
- Pengingat tidak diklaim terkirim ke layanan eksternal. Versi lokal menampilkan feedback in-app dan menyimpan status queue lokal.

Rincian terdapat pada `DECISIONS.md`.

## Batasan

- Data hanya tersedia pada browser yang sama.
- Tidak ada isolasi data lintas pengguna.
- Tidak ada autentikasi atau otorisasi server.
- Pengingat tidak berjalan ketika aplikasi tidak dibuka dan tidak ada push/background delivery.
- Tidak diuji integrasi notifikasi eksternal, database produksi, security multi-pengguna, atau kegagalan jaringan backend.

## Pengujian aktual

- Pengujian logika dijalankan dengan Node `node:test` melalui `npm test`.
- Hasil mencakup validasi, jadwal kurang dari tiga hari, status terlambat, pembatalan tugas selesai, rescheduling, deduplikasi, filter, dan sorting.
- Server statis diuji dengan HTTP smoke test.
- Browser automation/screenshot belum tersedia pada sesi implementasi; pembuktian browser visual dan visual responsive ditandai Not Tested atau bukti terbatas pada pemeriksaan implementasi.

Matriks lengkap AC-001 sampai AC-043: `tests/AC-MATRIX.md`.

## Struktur utama

- `index.html` — entry-point aplikasi.
- `src/styles/app.css` — design tokens dan layout responsif.
- `src/utils/core.js` — validasi, status, jadwal, filter, dan sorting.
- `src/utils/app-new.js` — render halaman dan interaksi browser.
- `tests/core.test.js` — automated test logika.
- `tests/AC-MATRIX.md` — matriks penerimaan.
