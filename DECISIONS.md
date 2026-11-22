# Keputusan Implementasi — Eksperimen B

## Putusan Utama
- Stack: HTML, CSS, dan JavaScript vanilla tanpa build tooling. Dipilih karena dokumen tidak menetapkan framework dan kebutuhan dapat dipenuhi sebagai aplikasi browser statis.
- Penyimpanan: `localStorage` browser. Ini memenuhi persistence lokal/prototype, tetapi bukan database server atau otorisasi multi-pengguna.
- Autentikasi: tidak tersedia. Aplikasi menampilkan konteks pengguna demonstrasi Budi dan menyimpan data per browser.
- Pengingat: scheduler lokal mengevaluasi jadwal saat aplikasi terbuka dan setiap 60 detik. Jadwal disimpan, dibatalkan saat selesai/dihapus, dan dihitung ulang saat tenggat berubah.
- Pengiriman: pesan pengingat ditampilkan sebagai notifikasi in-app/toast. Tidak ada claim bahwa push notification atau delivery eksternal telah berhasil.
- Status terlambat: dihitung turunan dari tenggat dan status, bukan status tersimpan.

## Ketidaksesuaian yang Dicatat
Tidak ditemukan konflik inti antara PRD dan dokumen pendukung yang memerlukan klarifikasi. Ketentuan produk yang bergantung pada backend (auth, database server, push service) tidak dapat disimulasikan sebagai layanan produksi lokal dan ditandai Blocked atau Not Tested.