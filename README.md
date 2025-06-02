# E-MPP Supervision Website
E-MPP Supervision Website adalah sebuah platform digital yang dirancang khusus untuk mempermudah Manager on Duty (MoD) di rumah sakit dalam mengelola dan mengisikan laporan-laporan terkait pelayanan perawatan. Website ini bertujuan untuk meningkatkan efisiensi, akurasi, dan dokumentasi laporan harian dalam operasional rumah sakit.

## ✨ Fitur Utama
- Pengisian laporan harian oleh Manager on Duty
- Rekap laporan yang terorganisir berdasarkan tanggal dan shift
- Aksesibilitas berbasis web yang responsive dan mudah digunakan
- Pengelolaan data layanan perawatan secara digital dan tersentralisasi

## 🛠️ Tech Stack
Website ini dibangun menggunakan dua teknologi utama:

- Frontend: Next.js – Framework React modern untuk membangun antarmuka pengguna yang responsif dan cepat.
- Backend: Laravel – Framework PHP yang kuat dan elegan untuk manajemen API, autentikasi, dan logika bisnis aplikasi.

## 🚀 Deployment
Website ini dideploy secara online menggunakan layanan hosting dari Niagahoster, yang menyediakan performa server yang handal serta dukungan penuh untuk deployment aplikasi berbasis Laravel dan Next.js.

📂 Struktur Proyek
```
e-mpp-supervision/
├── client/         # Next.js app
├── server          # Laravel app
├── README.md
```

## ⚙️ Setup Lokal
Prasyarat
- Node.js & NPM
- PHP & Composer
- MySQL
- Git

## Langkah Instalasi
1. Clone repositori:
    ```
    bash
    git clone https://github.com/diqimusyaffa29/project-empp.git
    ```

2. Frontend (Next.js):
    ```
    bash
    cd frontend
    npm install
    npm run dev
    ```
3. Backend (Laravel):
    ```
    bash
    cd backend
    composer install
    cp .env.example .env
    php artisan key:generate
    php artisan migrate
    php artisan serve
    ```
4. Pastikan frontend dan backend terhubung dengan konfigurasi API yang sesuai.

## 📞 Kontak
Untuk pertanyaan, saran, atau laporan bug, silakan hubungi tim pengembang melalui email: diqimusyaffa.business@gmail.com  or lanaeleven@gmail.com
