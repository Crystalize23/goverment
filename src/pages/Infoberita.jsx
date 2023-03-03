import React from 'react';
import { IoIosMoon } from 'react-icons/io';
// import Home from './Home.jsx';
import Navbar from '../bar/Navbar.jsx';
// import Beritalain from '../pages/Beritalain.jsx';
import Footer from './Footers.jsx';

import { useState, useEffect } from "react";

// const stats = [
//     { label: 'Founded', value: '2021' },
//     { label: 'Employees', value: '37' },
//     { label: 'Countries', value: '12' },
//     { label: 'Raised', value: '$25M' },
// ]

export default function InfoBerita() {

    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('light');
        }
        else {
            setTheme('dark');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
            <Navbar />

            <div className="bg-white dark:bg-black">
                <button className="mt-10 bg-green-200 w-8 h-8 fixed right-10 rounded-full flex bottom-10" onClick={handleThemeSwitch}>
                    <IoIosMoon className="h-5 w-5 m-auto"></IoIosMoon>
                </button>

                <div className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-y-16 gap-x-8 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                            <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                                <img className="w-[20rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://diskominfo.pemkomedan.go.id/img/foto_berita/146a47c1556be199536d62503b658e30.jpg" alt="" />
                            </div>

                            <div>
                                <div className="text-base leading-7 text-gray-700 lg:max-w-lg text-justify">
                                    <p className="text-base font-semibold leading-7 text-indigo-600">Rabu, 08 Februari 2023</p>
                                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Rangkaian Peringatan HPN, Bobby Nasution Ikuti Dialog Kebudayaan dan Paparkan Inovasi Digitalisasi Sandang</h1>

                                    <div className="max-w-xl text-black dark:text-white">
                                        <p className="mt-6">Wali Kota Medan, Bobby Nasution mengikuti dialog Kebudayaan yang merupakan rangkaian kegiatan Hari Pers Nasional (HPN) di Hotel Santika Dyandra, Selasa (7/2). Dalam dialog ini Bobby Nasution bersama sembilan Kepala Daerah yang meraih Anugerah Kebudayaan Persatuan Wartawan Indonesia (PWI) 2023 menjadi narasumber dan memaparkan inovasi yang telah dilakukan khususnya di bidang pangan, sandang dan papan berbasis kebudayaan atau kearifan lokal.

                                            <br />
                                            <br />

                                            Dijelaskan Bobby Nasution, sebagai kota Multikultural saat ini terdapat 13 etnis yang telah ditetapkan sebagai etnis yang ada di Kota Medan. Keberagaman etnis dan budaya ini menjadi modal dasar Pemko Medan berinovasi dalam mengembangkan sandang dengan memanfaatkan digitalisasi. Hal pertama yang dilakukan yakni mewajibkan setiap hari Jumat setiap ASN untuk mengenakan pakaian adat dan boleh memilih pakaian adat dari 13 etnis tersebut.</p>

                                        <p className="mt-8">"Setelah ketersediaan marketnya, Tugas kami selanjutnya adalah bagaimana memastikan produksi sandang terus berjalan. Selain itu ketersediaannya bahan produksi harus diperhatikan karena selaras dengan permintaan produksi pasti terhambat. Ditambah lagi dengan bahan produksi yang langka, maka akan berdampak dengan harga yang mahal. Untuk itu harga produksi harus diturunkan dengan memastikan bahan-bahan produksinya terjangkau,” kata Bobby Nasution.

                                            <br />
                                            <br />

                                            Menurut Bobby Nasution, kain dari etnis yang ada memiliki makna yang berbeda peruntukannya, ada untuk acara umum, berduka dan lainnya sehingga tidak bisa sembarang dijadikan pakaian karena ada artinya masing-masing. Atas dasar itu saat ini kami tengah mengkonsepkan motif yang bisa dipakai untuk umum tanpa mengurangi nilai kebudayaannya.</p>

                                        <p className="mt-8">"Pengrajin pakaian adat hampir semua bukan berasal dari Kota Medan. Oleh karenanya kita telah meminta Dinas Koperasi UKM, Perdagangan dan Perindustrian Kota Medan untuk menjalin kolaborasi dengan pengrajin, agar dapat mengembangkan pakaian adat dan menjaga nilai kebudayaan kedepannya," Ujar Bobby Nasution dihadapan Ketua PWI Pusat, Atal S Depari dan Ketua Dewan Pers, Ninik Rahayu.

                                            <br />
                                            <br />

                                            Bobby Nasution menambahkan Pemko Medan juga memberikan dukungan promosi terkait dengan potensi keunikan dan keunggulan daerah Kota Medan dalam bidang sandang dengan memanfaatkan platform digital untuk pemasarannya.</p>

                                        <p className="mt-8">"Kita juga telah memiliki program kartu kredit pemerintah daerah, dimana ini memberikan kemudahan untuk pelaku UMKM mendapatkan tambahan modal untuk mengembangkan usahanya, tanpa harus menunggu berbulan-bulan. Dengan adanya program ini setiap produk UMKM dipesankan dalam E-Katalog, langsung dibayarkan," pungkas Bobby Nasution.

                                            <br />
                                            <br />

                                            Selain Bobby Nasution, kesembilan Kepala Daerah lainnya juga memaparkan inovasi yang dilakukannya. Diantaranya </p>

                                        <p className="mt-8">Bupati Kuningan, Acep Purnama, Walikota Surabaya, Eri Cahyadi, Bupati Malang, Muhammad Sanusi, Bupati Pesawaran, Dendi Ramadhona, Bupati Indragiri Hilir, Muhammad Wardan, Bupati Agam, Andri Warman, Bupati Halmahera Selatan, Usman Sidik, Bupati Serdang Bedagai, Darma Wijaya dan Bupati Sleman, Kustini Sri Purnomo.

                                            <br />
                                            <br />

                                            Selanjutnya Dialog Kebudayaan ini diisi dengan tanya jawab dan diakhiri dengan pemberian cenderamata kepada seluruh narasumber 10 Kepala Daerah yang terpilih mendapatkan Anugerah Kebudayaan Persatuan Wartawan Indonesia (PWI) 2023.</p>

                                        <br />

                                        <p className="text-gray-700 dark:text-white">Sumber : Dinas Kominfo Kota Medan</p>
                                    </div>
                                </div>

                                {/* <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                                {stats.map((stat, statIdx) => (
                                    <div key={statIdx}>
                                        <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl> */}

                                {/* <div className="mt-10 flex">
                                <a href="#" className="text-base font-semibold leading-7 text-indigo-600">
                                    Learn more about our company <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Beritalain /> */}
            </div>

            <Footer />
        </div >
    )
}