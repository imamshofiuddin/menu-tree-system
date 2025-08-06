# 📁 Menu Tree System

**Menu Tree System** adalah aplikasi manajemen menu dan sub-menu berbasis **Laravel 11** sebagai backend dan **React.js + Inertia.js** sebagai frontend. Aplikasi ini memungkinkan pengguna membuat struktur menu secara hierarkis (tree) dengan tampilan interaktif dan responsif.

---

## 🛠️ Teknologi yang Digunakan

- Laravel 11 (API & Server-Side Logic)
- React.js (Frontend)
- Inertia.js (SPA Bridge)
- Tailwind CSS (UI Styling)
- PostgreSQL (Database)
- Vite (Module bundler)

---

## 📥 Instalasi & Setup

Berikut adalah langkah-langkah untuk menjalankan project ini secara lokal:

1. **Clone Project**

```bash
git clone https://github.com/username/menu-tree-system.git
cd menu-tree-system
```

2. **Install dependency FE**
   ```bash
   npm install
   ```
3. **Install dependency BE**
   ```bash
   composer install
   ```
4. **Set Database Information at .env**
   copy dan rename file ```.env.example``` menjadi ```.env``` dan isi informasi bagian database
   
5. **Migrate database**
   ```bash
   php artisan migrate
   ```
Untuk menjalankan project jalankan :
```npm run dev``` dan ```php artisan serve```
