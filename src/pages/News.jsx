// import Home from './Home.jsx';
import Navbar from '../bar/Navbar.jsx';
import Barnews from '../bar/Barnews.jsx';
import Footer from './Footers.jsx';

const news = [
    {
        id: 1,
        name: 'Dinas Komunikasi dan Informatika Kota Medan Akan Integrasikan Seluruh Aplikasi dan Data Perangkat Daerah',
        href: '#',
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

    {
        id: 5,
        name: 'Medan Kota Terkotor Hoaks! Pengumuman Adipura 2022 Direncanakan Pada Tanggal 21 Februari 2023 Mendatang',
        href: '#',
        waktu: 'Rabu, 25 Januari 2023',
        imageSrc: 'https://diskominfo.pemkomedan.go.id/img/foto_berita/bc05a50e841bd73261a98ec9676515fb.jpg',
        imageAlt: 'Kota Medan, Adipura 2022',
    },

    {
        id: 6,
        name: 'Terima Kasih Pak Bobby Nasution, Kami Sudah Terbebas Dari Banjir Dan Jalan Rusak',
        href: '#',
        waktu: 'Jumat, 20 Januari 2023',
        imageSrc: 'https://diskominfo.pemkomedan.go.id/img/foto_berita/97a3b46deb6566eb61b0cfcde90b9236.jpg',
        imageAlt: 'Bobby Nasution, Banjir',
    },

    {
        id: 7,
        name: 'Kadis Kominfo Kota Medan Mewakili Walikota Medan Terima Penghargaan Sahabat Pers Dari SPS Sumut ',
        href: '#',
        waktu: 'Jumat, 30 Desember 2023',
        imageSrc: 'https://diskominfo.pemkomedan.go.id/img/foto_berita/289a3a8e215e20318ced158a926512df.jpg',
        imageAlt: 'Kominfo Medan, Walikota Medan',
    },

    {
        id: 8,
        name: 'Pemko Medan Terima Kunjungan Study Best Practice Dinas Kominfo Dan Wartawan Kota Bukittinggi',
        href: '#',
        waktu: 'Rabu, 01 Desember 2022',
        imageSrc: 'https://diskominfo.pemkomedan.go.id/img/foto_berita/5d5fcaaba418869cd3dd45d6e0eb8aa8.jpg',
        imageAlt: 'Pemko Medan, Kota Bukittinggi.',
    },

    {
        id: 9,
        name: 'Sebanyak 10 Pejabat Eselon II Pemko Medan Selesai Mengikuti PKN Tk II Tahun 2022, Asmum : Implementasikan Apa Yang Sudah Diperbuat Dalam Projek Perubahan',
        href: '#',
        waktu: 'Kamis, 01 Desember 2022',
        imageSrc: 'https://diskominfo.pemkomedan.go.id/img/foto_berita/7b2d25c68e16b0986b0c07f8946cb9dd.jpg',
        imageAlt: 'Pemko Medan, Bukit Tinggi.',
    },
]

export default function News() {
    return (
        <div>
            <Navbar />
            <Barnews />

            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {news.map((news) => (
                            <a key={news.id} href={news.href} className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <img src={news.imageSrc} alt={news.imageAlt} className="h-60 w-full object-cover object-center group-hover:opacity-75" />
                                </div>

                                <h3 className="mt-4 text-sm text-gray-700">{news.name}</h3>
                                <p className="mt-1 text-sm font-medium text-gray-900">{news.waktu}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <br />

            <Footer />

        </div>
    )
}