# Kalender Tugas Terintegrasi — Eksperimen B — PRD + Skill

UX-driven.

## Input eksperimen
PRD.md, UX-SPEC.md, DESIGN-SYSTEM.md, INTERACTION-SPEC.md, ACCEPTANCE-CRITERIA.md, dan AGENTS.md.

## Menjalankan aplikasi
Dari terminal pada folder proyek, jalankan `python -m http.server 8000`, lalu buka `http://localhost:8000`. Aplikasi menggunakan HTML, CSS, JavaScript tanpa dependensi build eksternal. Stack ini dipilih sebagai implementasi awal sisi-klien karena PRD tidak menetapkan framework atau stack tertentu.

## Fitur yang tersedia pada prototipe
- Dashboard dengan ringkasan total, status tugas, tugas mendatang, dan tugas terlambat.
- Tambah dan edit tugas dengan validasi field wajib dan tenggat.
- Hapus tugas dengan konfirmasi.
- Kalender bulanan dan tampilan mingguan.
- Daftar tugas dengan filter status dan pengurutan.
- Perubahan status: Belum Dikerjakan, Sedang Dikerjakan, dan Selesai. Terlambat dihitung sebagai kondisi berdasarkan tenggat, bukan status keempat tersimpan.
- Jadwal lokal H-3/H-1 pukul 09.00 ketika aplikasi terbuka.
- Penyimpanan data pada `localStorage` browser dan layout responsif.

## Penyesuaian yang ditekankan oleh dokumen Skill
- Navigasi kartu ringkasan menuju daftar tugas dengan filter terkait.
- Fokus keyboard dan indikator `focus-visible` pada kartu ringkasan.
- Pemisahan tampilan serta interaksi yang lebih terarah pada daftar status dan kalender.
- Enam dokumen spesifikasi disertakan di repository sebagai sumber acuan.

## Batasan
Versi ini tetap merupakan prototipe sisi-klien. Pengingat hanya diperiksa saat aplikasi terbuka dan ditampilkan di dalam aplikasi; belum ada layanan push/background atau backend scheduler. Autentikasi, database server, dan isolasi data multi-pengguna juga belum dikonfigurasi. Karena itu, AC terkait layanan notifikasi produksi dan isolasi multi-pengguna belum boleh dinyatakan lulus.

Isi `EXPERIMENT-LOG-TEMPLATE.md` berdasarkan penggunaan AI coding yang benar-benar dilakukan. `COMPARISON-METRICS.md` digunakan untuk mencatat bukti perbandingan, bukan mengarang hasil.
