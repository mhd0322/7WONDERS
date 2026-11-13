# 7WONDERS: Seven Wonders. Infinite Stories.
Website multi-halaman (HTML + Tailwind CSS + JavaScript). Semua path aset memakai `./` agar aman di GitHub Pages.

## Cara menjalankan
Buka `index.html` di browser (perlu internet untuk Tailwind CDN, Google Fonts, Leaflet, dan tile peta).
Untuk GitHub Pages: upload isi folder ini ke repo, lalu aktifkan Pages.

## Halaman
index, wonders, wonder-*.html (7 halaman), map, timeline, stories, gallery, about, contact, 404.

## Mengganti gambar dengan foto asli
Semua gambar ada di `assets/img/` dan berformat `.jpg`. Gambar bawaan dibuat lewat kode (ilustrasi sinematik), bukan foto.
Untuk memakai foto asli, simpan foto dengan NAMA FILE YANG SAMA (contoh: `petra.jpg`) lalu timpa file lama.
Nama file: great-wall, petra, colosseum, chichen-itza, machu-picchu, taj-mahal, christ-redeemer, columns, earth, stars, world-lights.
Sumber foto bebas: Unsplash, Pexels, Wikimedia Commons (cek lisensi dan atribusi tiap foto).

## Bumi sinematik
Bumi berputar di loading dan halaman Contact digambar dengan canvas memakai tekstur `assets/js/earth-data.js` (dibuat dari `assets/img/world-lights.jpg`).
Jika punya video bumi berlisensi, taruh di `assets/video/earth.mp4` lalu pasang dengan tag `<video autoplay muted loop playsinline>`.

## Edit konten
Teks keajaiban dan terjemahan EN/ID ada di `assets/js/data.js`. Tampilan memakai kelas Tailwind; `assets/css/extra.css` hanya untuk gaya Leaflet dan scrollbar.

## WhatsApp
Nomor belum diisi. Setelah nomor resmi tersedia, ganti `href="#"` pada kartu WhatsApp di `assets/js/app.js` (bagian `contact`) menjadi `https://wa.me/62xxxxxxxxxx`.
