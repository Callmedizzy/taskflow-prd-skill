# Matriks Pengujian AC-001 sampai AC-043

| Criteria ID | Status | Bukti / langkah uji | Bug Reference | Notes |
|---|---|---|---|---|
| AC-001 | Not Tested | Server dan aset HTTP lulus smoke test; alur tambah tugas belum dijalankan di browser | - | Automated unit belum mencakup CRUD browser. |
| AC-002 | Pass | `node --test tests/core.test.js` menguji field wajib dan limit karakter; form memiliki error per field | - | Bukti automated pada fungsi validasi. |
| AC-003 | Pass | Test automated `validateTask` menolak tenggat lebih awal dari `now` | - | - |
| AC-004 | Not Tested | Implementasi edit tersedia, tetapi belum dijalankan melalui browser | - | - |
| AC-005 | Not Tested | Implementasi hapus dan pembatalan queue tersedia, tetapi belum dijalankan melalui browser | - | - |
| AC-006 | Not Tested | Tombol Batal tersedia, belum diuji browser automation | - | - |
| AC-007 | Not Tested | Grid bulanan tersedia; screenshot dan browser automation belum dijalankan | - | - |
| AC-008 | Not Tested | Tombol navigasi bulan tersedia; belum dijalankan browser automation | - | - |
| AC-009 | Not Tested | Pemilihan tanggal tersedia; belum dijalankan browser automation | - | - |
| AC-010 | Not Tested | Tampilan mingguan tersedia; belum dijalankan browser automation | - | - |
| AC-011 | Not Tested | Perubahan status mengarah ke penyimpanan dan render ulang; belum dijalankan browser automation | - | - |
| AC-012 | Pass | Test automated membuktikan tugas selesai membatalkan reminder dari queue | - | Tidak ada delivery eksternal. |
| AC-013 | Not Tested | Logika reaktivasi membangun reminder, tetapi belum ada test browser | - | - |
| AC-014 | Blocked | Scheduler H-3 lokal tersedia, tetapi layanan push/background belum dikonfirmasi | - | Notifikasi in-app saja. |
| AC-015 | Blocked | Scheduler H-1 lokal tersedia, tetapi layanan push/background belum dikonfirmasi | - | Notifikasi in-app saja. |
| AC-016 | Pass | Test/pemanggilan queue membatalkan reminder untuk tugas selesai | - | Penghapusan belum dieksekusi browser. |
| AC-017 | Pass | Test automated membuktikan waktu reminder lama diganti saat tenggat berubah | - | - |
| AC-018 | Pass | Queue memakai identitas unik `${taskId}:${kind}`; test scheduler mengecek deduplikasi logika | - | Delivery eksternal tidak tersedia. |
| AC-019 | Blocked | Tidak ada layanan notifikasi eksternal untuk diuji kegagalannya | - | - |
| AC-020 | Not Tested | Dashboard tersedia, belum diuji browser | - | - |
| AC-021 | Pass | Test automated membuktikan fungsi sort tenggat terdekat | - | - |
| AC-022 | Not Tested | Aksi kartu ringkasan tersedia, belum dijalankan browser automation | - | - |
| AC-023 | Pass | Test automated dan `filterTasks` mendukung status | - | - |
| AC-024 | Pass | Test automated membuktikan filter Terlambat menggunakan kondisi turunan | - | - |
| AC-025 | Pass | Test automated membuktikan sort A-Z, Z-A, terdekat, dan terjauh | - | - |
| AC-026 | Not Tested | Navigasi tersedia, belum diuji browser | - | - |
| AC-027 | Not Tested | Toast dan pesan error tersedia, belum diuji browser | - | - |
| AC-028 | Not Tested | Empty state tersedia; belum screenshot atau browser test | - | - |
| AC-029 | Not Tested | CSS responsif tersedia pada 1023px dan 639px; belum visual browser test | - | - |
| AC-030 | Pass | Test validasi dan implementasi error per field tersedia | - | Bukti otomatis pada utility; bukan browser recovery. |
| AC-031 | Not Tested | Tidak ada screenshot/visual inspection aktual | - | - |
| AC-032 | Not Tested | Tidak ada screenshot/visual inspection aktual | - | - |
| AC-033 | Not Tested | Tidak ada screenshot/visual inspection aktual | - | - |
| AC-034 | Not Tested | Tidak ada screenshot/visual inspection aktual | - | - |
| AC-035 | Not Tested | Performa browser belum diukur | - | - |
| AC-036 | Not Tested | `localStorage` digunakan, tetapi reload browser belum diuji otomatis | - | - |
| AC-037 | Blocked | Tidak ada autentikasi atau database server | - | Implementasi lokal tidak dapat membuktikan isolasi multi-pengguna. |
| AC-038 | Not Tested | Struktur keyboard dan fokus tersedia, belum dilakukan audit browser | - | - |
| AC-039 | Pass | Test automated membuktikan hanya jadwal yang masih relevan yang dibuat | - | - |
| AC-040 | Pass | Test automated membuktikan status terlambat dihitung tanpa mengubah status tersimpan | - | - |
| AC-041 | Not Tested | Logika kalender mengumpulkan seluruh tugas tanggal sama, belum browser test | - | - |
| AC-042 | Blocked | Tidak ada jaringan backend untuk mensimulasikan kegagalan koneksi; penyimpanan browser menangani kegagalan lokal | - | - |
| AC-043 | Not Tested | Implementasi pembatalan queue saat hapus tersedia, tetapi penghapusan browser belum diuji | - | Pengiriman eksternal tidak tersedia. |

## Ringkasan aktual
- Automated Pass: 13 kriteria utama yang dapat diuji oleh Node test dan pemeriksaan logika.
- Blocked: AC-014, AC-015, AC-019, AC-037, dan AC-042 karena dependensi eksternal/backend.
- Not Tested: seluruh kriteria yang memerlukan browser automation, visual inspection, reload browser, atau accessibility audit.