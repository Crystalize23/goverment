import React from 'react';
// import Home from './Home.jsx';
import Navbar from '../bar/Navbar.jsx';
import Footer from './Footers.jsx';
import Barkontak from '../bar/Barkontak.jsx';
import bg from '../assets/kominfomedan.png';

export default function Kontak() {
    return (
        <div>
            <Navbar />

            <Barkontak />

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">

                        <img className="w-auto sm:h-10" src={bg} alt="" />

                        <br />

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Dinas Komunikasi dan Informatika Kota Medan</h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">Silahkan Hubungi Kami Melalui Kontak dan Alamat yang Tertera di Bawah Ini : </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4 selection:bg-yellow-400">
                        <div>
                            <h3 className="border-l border-green-400 pl-6 font-semibold text-gray-900">Lokasi Kantor</h3>
                            <address className="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600">
                                <a href="https://goo.gl/maps/TF2EhzuqLw6HYfZw8" className="hover:text-blue-400">Jl. Sidorukun No 35 Medan</a>
                            </address>
                        </div>

                        <div>
                            <h3 className="border-l border-green-400 pl-6 font-semibold text-gray-900">Telepon 1</h3>
                            <address className="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600">
                                <a href="phoneto:0616611410" className="hover:text-blue-400">0616611410</a>
                            </address>
                        </div>

                        <div>
                            <h3 className="border-l border-green-400 pl-6 font-semibold text-gray-900">Telepon 2</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <a href="phoneto:0616611410" className="hover:text-blue-400">0616611410</a>
                            </address>
                        </div>

                        <div>
                            <h3 className="border-l border-green-400 pl-6 font-semibold text-gray-900">Email</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <a href="mailto:kominfo@pemkomedan.go.id" className="hover:text-blue-400">kominfo@pemkomedan.go.id</a>
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <Footer />
        </div>
    )
}