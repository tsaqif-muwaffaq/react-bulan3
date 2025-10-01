2.
html(hypertext markup language) adalah: bahasa standar untuk membangun struktur halaman web secara statis.
jsx(javascript xml) adalah ekstensi JavaScript yang digunakan di React untuk membuat tampilan UI. JSX terlihat mirip HTML, tetapi lebih dinamis karena bisa menyisipkan logika JavaScript langsung di dalamnya.
| Perbedaan           | HTML                       | JSX                           |
| ------------------- | -------------------------- | ----------------------------- |
| Bahasa              | Markup murni               | Sintaks JavaScript mirip HTML |
| File                | `.html`                    | `.js` atau `.jsx`             |
| Atribut             | `class`, `for`, dll.       | `className`, `htmlFor`, dll.  |
| Ekspresi JavaScript | Tidak bisa                 | Bisa (menggunakan `{ }`)      |
| Penutupan Tag       | Tidak wajib selalu ditutup | Harus selalu ditutup          |

contoh : 

html : 
<h1 class="title">Halo Dunia</h1>
<p>2 + 2 = 4</p>
jsx : 
function App() {
  const a = 2;
  const b = 2;
  return (
    <div>
      <h1 className="title">Halo Dunia</h1>
      <p>2 + 2 = {a + b}</p>
    </div>
  );
}

3.
virtual DOM (VDOM) adalah representasi tiruan dari DOM asli yang disimpan di memori oleh React. Saat ada perubahan pada tampilan, React tidak langsung memodifikasi DOM asli, tetapi:
1.membuat versi Virtual DOM baru sesuai perubahan
2.membandingkannya (diffing) dengan Virtual DOM lama
3.hanya memperbarui bagian yang berubah di DOM asli (reconciliation)
cara kerja sederhana:

1.tanpa Virtual DOM : setiap perubahan membuat browser merender ulang seluruh halaman → lambat

2.dengan Virtual DOM : hanya elemen yang berubah yang diperbarui → cepat dan efisien

4.
SPA(single page application)
aplikasi web yang berjalan di satu halaman saja. Saat pengguna berpindah halaman, halaman tidak dimuat ulang sepenuhnya — hanya konten yang berubah menggunakan JavaScript
MPA(multi page application)

SPA(single page application)
kelebihan:

1.navigasi cepat tanpa reload penuh

2.pengalaman pengguna lebih interaktif seperti aplikasi mobile

kekurangan:

1.SEO lebih sulit karena konten dimuat secara dinamis

2.ukuran awal halaman lebih besar sehingga waktu muat pertama lebih lama

MPA(multi page application)
kelebihan:

1.SEO lebih mudah karena konten setiap halaman dapat diindeks

2.struktur cocok untuk aplikasi besar dengan banyak halaman

kekurangan:

1.navigasi lebih lambat karena reload penuh setiap pindah halaman

2.performa bisa menurun jika jumlah halaman sangat banyak
