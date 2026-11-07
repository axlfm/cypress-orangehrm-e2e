# OrangeHRM Cypress E2E Testing

## Deskripsi
Project ini merupakan pengujian otomatis (End-to-End Testing) pada aplikasi OrangeHRM menggunakan Cypress.

Pengujian mencakup:
1. Login sebagai Admin.
2. Mengakses halaman Admin.
3. Membuka form Add User.
4. Menambahkan Admin User baru.
5. Memverifikasi data pengguna berhasil ditambahkan.

## Tools
- JavaScript
- Cypress 16.2.1
- Node.js
- Visual Studio Code

## Cara Menjalankan
Install dependencies:

```bash
npm install
```

Menjalankan Cypress melalui GUI:

```bash
npx cypress open
```

Menjalankan pengujian melalui Headless Mode:

```bash
npx cypress run
```

## Hasil Pengujian
Pengujian berhasil dijalankan dengan hasil:

- Total Test: 1
- Passing: 1
- Failing: 0

## Screenshots

**Note:** Seluruh screenshot hasil pengujian tersedia di dalam folder `cypress`, dengan lokasi:

`cypress/screenshots/orangehrm-login.cy.js/`

Screenshot mencakup halaman Dashboard, Admin, form Add User, hasil penambahan pengguna, dan bukti Run Headless.
