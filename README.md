# Kalender Tugas Terintegrasi — Eksperimen B

Versi UX-driven — PRD + Skill .

## Menjalankan
Buka `index.html` di browser modern. Untuk menghindari pembatasan browser pada penyimpanan lokal, jalankan server statis dari folder proyek, misalnya `python -m http.server 8000`, lalu buka `http://localhost:8000`. Tidak ada dependensi build eksternal.

## Cakupan yang diimplementasikan
- Dashboard dan ringkasan tugas
- CRUD tugas dengan validasi wajib dan batas panjang input
- Kalender bulanan dan mingguan serta pemilihan tanggal
- Daftar tugas, filter, dan pengurutan
- Status Belum Dikerjakan, Sedang Dikerjakan, Selesai; keterlambatan dihitung, bukan status tersimpan
- Jadwal H-3 dan H-1 lokal pada pukul 09.00 ketika aplikasi terbuka
- localStorage untuk persistensi pada browser/perangkat yang sama
- Layout responsif

## Batasan penting
Ini adalah prototipe aplikasi sisi-klien. Pengingat diperiksa saat aplikasi terbuka dan ditampilkan sebagai notifikasi lokal dalam aplikasi; layanan push/background, backend scheduler, autentikasi, database server, dan isolasi data multi-pengguna belum dikonfigurasi. Karena itu AC-014/015/019/037 belum dapat dinyatakan lulus produksi.

## Perbedaan eksperimen
- Eksperimen A: baseline implementasi berdasarkan PRD.md saja; visual dan interaksi dibuat sederhana untuk baseline.
- Eksperimen B: implementasi memakai PRD.md bersama UX-SPEC.md, DESIGN-SYSTEM.md, INTERACTION-SPEC.md, ACCEPTANCE-CRITERIA.md, dan AGENTS.md; penekanan pada fokus keyboard, state interaksi, kalender mingguan, error recovery, dan konsistensi komponen.

**Catatan:** Paket ini disiapkan sebagai kode awal yang dapat dijalankan dan diuji. Catatan penggunaan AI coding agent, revisi, waktu pengerjaan, dan commit eksperimen perlu dilengkapi berdasarkan proses aktual sebelum laporan perbandingan final.
