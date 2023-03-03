import React from 'react';
import Navbar from '../bar/Navbar.jsx';
import Footer from './Footers.jsx';

const pegawai = [
    { name: 'ARRAHMAAN PANE, S.S.T.P., M.A.P.', role: 'Kepala Dinas Kominfo Medan', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/200bf9341542b68deee79ab80623f81f.jpg' },
    { name: 'M. AGHA NOVRIAN, S.S.T.P., M.Si', role: 'Sekretaris', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/image-user.png' },
    { name: 'FEBRYNA MARINGGA DAMANIK, S.H', role: 'Kepala Sub Bagian Umum', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/9116edf1cdf7e30dc28a8667b8d8ee71.jpg' },
    { name: 'KHAIRUNNISAH', role: 'Perencana Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/f0a77f9871bfdbfbdaf3fc6b450afe29.jpg' },
    { name: 'HELENTINA NADEAK, SE.,M.SP', role: 'Kepala Sub Bagian Keuangan', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/image-user.png' },
]

{/* Daftar Pegawai Bidang Komunikasi Publik*/ }
const pegawai2 = [
    { name: 'MUHAMMAD RIZKI HUSNI, S.H', role: 'Kepala Bidang Komunikasi Publik', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/eda38810067a660810c6b0e3c4b49db2.jpg' },
    { name: 'ALFRED PASCAL SIMARMATA, ST, M.AP', role: 'Pranata Humas Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/05caca703ad25f1820137ac7661e77a5.jpeg' },
    { name: 'HENDRA SYAHPUTRA LUBIS, SE', role: 'Pranata Humas Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/32bdad0273997bf84ca17dad8be2dcab.jpg' },
    { name: 'FRANSISCA PURBA, S.Sos', role: 'Pranata Humas Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/bbb3ba92e6ef2822a7e6edc50aeb7e74.jpeg' },
]

{/* Daftar Pegawai Bidang Teknologi Informatika*/ }
const pegawai3 = [
    { name: 'JUANG AKBAR HARAHAP, S.Kom', role: 'Plt. Kepala Bidang Teknologi Informatika', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/0652bd4a906619a91708da8796c41bf9.jpg' },
    { name: 'IKA FERAWATI SILALAHI, S.T', role: 'Pranata Komputer Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/9c2eacf4ab23c1ac2d3aa3c7fd0252d1.jpg' },
]

{/* Daftar Pegawai Bidang Statistik dan Informasi Publik*/ }
const pegawai4 = [
    { name: 'RIZKA FIRDAHLIA, S.Sos', role: 'Kepala Bidang Statistika dan Informasi Publik', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/b82004c94dc081b1a6a3488635cc3c77.jpeg' },
    { name: 'SYAFRIDA DAMANIK, S.T.,M.T', role: 'Statistisi Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/f7fd0a0d57812389e687039fcf512135.jpeg' },
]

{/* Daftar Pegawai Bidang Persandian*/ }
const pegawai5 = [
    { name: 'IRFAN ARFIANDY, S.STP,.M.A.P', role: 'Kepala Bidang Persandian', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/dcca02eb8358e0fcf5c2da83923cb6f4.jpg' },
    { name: 'BACHTIAR RIVAI NASUTION, S.STP, M.AP', role: 'Sadiman Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/9e2a790d547b12f00f8d49933b50d68c.jpeg' },
    { name: 'SRI RAMADHANTY, S.T,.M.I.Kom', role: 'Sadiman Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/c9ac8509691858afa0c318a04770eeca.jpg' },
    { name: 'ADELINA, S.T', role: 'Sadiman Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/1bc9e9cfff424ee1dd7687440d3bef70.jpg' },
]

{/* Daftar Pegawai Bidang Aplikasi Informatika*/ }
const pegawai6 = [
    { name: 'AHMAD KHAIDIR, S.Kom.,M.T', role: 'Kepala Bidang Aplikasi Informatika', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/7317a7e775fc87f1fccd78d30525fbea.jpeg' },
    { name: 'CENDANA WIRA ADYMARTA, S.Sos, ST, M.AP', role: 'Pranata Komputer Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/a255226b35cb9d9a0c822f3e5feeea82.jpg' },
    { name: 'ROBERT SIANTURI, S.Sos', role: 'Pranata Komputer Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/edccbed83706a21005f14efa73682ae0.jpg' },
    { name: 'YONGKIE SYAM, S.T.,M.B.A', role: 'Pranata Komputer Muda', imageUrl: 'https://diskominfo.pemkomedan.go.id/img/foto_pegawai/ca461663b6f400e8078871ddb3873f8b.jpeg' },
]

export default function Employee() {
    return (

        <div>

            <Navbar />

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Pegawai Dinas Komunikasi dan Informatika Kota Medan</h2>
                    </div>

                    <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
                        {pegawai.map((person) => (
                            <li key={person.name}>
                                <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Daftar Pegawai Bidang Komunikasi Publik*/}

                    <div className="bg-white py-24 sm:py-32">
                        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Bidang Komunikasi Publik</h2>
                            </div>

                            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                {pegawai2.map((person) => (
                                    <li key={person.name}>
                                        <div className="flex items-center gap-x-6">
                                            <img className="h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                                            <div>
                                                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                <p className="text-sm font-semibold leading-6 text-gray-600">{person.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Daftar Pegawai Bidang Teknologi Informatika*/}

                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Bidang Teknologi Informatika</h2>
                            </div>

                            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                {pegawai3.map((person) => (
                                    <li key={person.name}>
                                        <div className="flex items-center gap-x-6">
                                            <img className="h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                                            <div>
                                                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                <p className="text-sm font-semibold leading-6 text-gray-600">{person.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Daftar Pegawai Bidang Statistika dan Informasi Publik*/}

                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Bidang Statistika dan Informasi Publik</h2>
                            </div>

                            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                {pegawai4.map((person) => (
                                    <li key={person.name}>
                                        <div className="flex items-center gap-x-6">
                                            <img className="h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                                            <div>
                                                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                <p className="text-sm font-semibold leading-6 text-gray-600">{person.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Daftar Pegawai Bidang Persandian*/}

                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Bidang Persandian</h2>
                            </div>

                            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                {pegawai5.map((person) => (
                                    <li key={person.name}>
                                        <div className="flex items-center gap-x-6">
                                            <img className="h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                                            <div>
                                                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                <p className="text-sm font-semibold leading-6 text-gray-600">{person.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Daftar Pegawai Bidang Aplikasi Informatika*/}

                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Bidang Aplikasi Informatika</h2>
                            </div>

                            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                {pegawai6.map((person) => (
                                    <li key={person.name}>
                                        <div className="flex items-center gap-x-6">
                                            <img className="h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                                            <div>
                                                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                <p className="text-sm font-semibold leading-6 text-gray-600">{person.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}