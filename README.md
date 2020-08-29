# Test-DWID-Kloter5

untuk nomor 1,2 dan 3 dibuat dengan javascript. sehingga dijalankan dengan `<node nomor.js>` contohnya `<node 1.js>`.

query untuk menampilkan data video beserta category adalah `SELECT video_tb.id, video_tb.title,category_tb.name as category, video_tb.attache, video_tb.thumbnail FROM video_tb INNER JOIN category_tb ON video_tb.category_id = category_tb.id;`
hasilnya adalah sebagai berikut
![Hasil query](https://github.com/hendyby/test-dumbways/blob/master/folder%20SS/table%20video%20beserta%20category.JPG)

query untuk menampilkan tabel spesifik data video dengan Category `SELECT video_tb.id, video_tb.title,category_tb.name as category, video_tb.attache, video_tb.thumbnail FROM video_tb INNER JOIN category_tb ON video_tb.category_id = category_tb.id WHERE video_tb.id = '1';`
hasilnya adalah sebagai berikut
![Hasil query](https://github.com/hendyby/test-dumbways/blob/master/folder%20SS/spesifik%20data%20video%20dengan%20Category.JPG)

query untuk menampilkan data video berdasarkan category tertentu.JPG `SELECT video_tb.id, video_tb.title,category_tb.name as category, video_tb.attache, video_tb.thumbnail FROM video_tb INNER JOIN category_tb ON video_tb.category_id = category_tb.id WHERE category_id = '1';`
hasilnya adalah sebagai berikut
![Hasil query](https://github.com/hendyby/test-dumbways/blob/master/folder%20SS/data%20video%20berdasarkan%20category%20tertentu.JPG)

#### Berikut adalah hasil POST/Query menambah data

Tambah data video_tb
![Tambah video_tb]
(https://github.com/hendyby/test-dumbways/blob/master/folder%20SS/tambah%20data%20category_tb.JPG)

Hasil Tambah data category_tb
![Hasil category_tb](https://github.com/hendyby/test-dumbways/blob/master/folder%20SS/tambah%20data%20category_tb.JPG)

#### Aplikasi

aplikasi ini dibuat dengan node.js untuk menjalankan ketik `npx nodemon index.js` pada cmd/terminal kemudian akses pada `localhost:3000`. Database sudah saya upload juga silahkan di import ke sql `db_video`.
