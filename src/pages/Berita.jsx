const news = [
  {
    id: 1,
    name: 'Dinas Komunikasi dan Informatika Kota Medan Akan Integrasikan Seluruh Aplikasi dan Data Perangkat Daerah',
    href: '/infoberita',
    waktu: 'Selasa, 28 Februari 2023',
    imageSrc: 'https://diskominfo.pemkomedan.go.id/img/foto_berita/e6678606e38b3a9678f54d727a6a2603.jpg',
    imageAlt: 'Kominfo Medan, Aplikasi dan Data Perangkat Daerah.',
  },

  {
    id: 2,
    name: 'Rangkaian Peringatan HPN, Bobby Nasution Ikuti Dialog Kebudayaan dan Paparkan Inovasi Digitalisasi Sandang',
    href: '/infoberita',
    waktu: 'Rabu, 08 Februari 2023',
    imageSrc: 'https://diskominfo.pemkomedan.go.id/img/foto_berita/146a47c1556be199536d62503b658e30.jpg',
    imageAlt: 'Bobby Nasution, Peringatan HPN.',
  },

  {
    id: 3,
    name: 'Dinas Kominfo Kota Medan Terima Kunjungan Kerja Dinas Kominfo SP Kota Cilegon',
    href: '#',
    waktu: 'Rabu, 08 Februari 2023',
    imageSrc: 'https://diskominfo.pemkomedan.go.id/img/foto_berita/cb0749b50e3812324bb5f93ad3468c84.jpg',
    imageAlt: 'Kominfo Medan, Kominfo Cilegon',
  },

  {
    id: 4,
    name: 'Pemerintah Kota Medan Apresiasi Dilantiknya Pengurus SMSI Provinsi Sumatera Utara',
    href: '#',
    waktu: 'Selasa, 07 Februari 2023',
    imageSrc: 'https://diskominfo.pemkomedan.go.id/img/foto_berita/dceb50bcb458c14ac0c343c801fff3ec.jpg',
    imageAlt: 'Pemko Medan, Provinsi Sumut',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Berita Seputar Kominfo Medan</h2>
          <a href="/berita" className="hidden text-sm font-medium hover:text-indigo-500 md:block">Lihat Berita Lainnya
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {news.map((news) => (
            <a key={news.id} href={news.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img src={news.imageSrc} alt={news.imageAlt} className="h-60 w-full object-cover object-center group-hover:opacity-75" />
              </div>

              <h3 className="mt-4 text-sm text-gray-700 text-justify">{news.name}</h3>
              <p className="mt-1 text-sm font-medium text-gray-900 text-justify">{news.waktu}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a href="/berita" className="font-medium text-indigo-600 hover:text-indigo-500">Lihat Berita Lainnya
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
