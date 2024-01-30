const { SitemapStream, streamToPromise } = require('sitemap');

// Daftar URL situs Anda dengan prioritas
const yourDynamicUrls = [
  { url: '/', priority: 1.0 },
  { url: '/cv', priority: 0.3 },
  // Tambahkan URL lain sesuai dengan struktur situs Anda dengan prioritas yang sesuai
];

// Buat objek SitemapStream
const stream = new SitemapStream({ hostname: 'https://daffa-af.tech' });

// Tambahkan URL ke sitemap dengan prioritas
yourDynamicUrls.forEach((item) => {
  const { url, priority } = item;
  stream.write({ url, priority });
});

// Akhiri sitemap
stream.end();

// Konversi sitemap stream ke string XML
streamToPromise(stream).then((xml) => {
  // Tulis XML ke file sitemap.xml
  const fs = require('fs');
  fs.writeFileSync('../public/sitemap.xml', xml);
  console.log('Sitemap generated successfully');
});
