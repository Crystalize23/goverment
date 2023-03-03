import Navbar from '../bar/Navbar.jsx';
import Visi from '../bar/Barvisimisi';
import Footer from '../pages/Footers.jsx';
import bg from '../assets/medan.png';

export default function Visimisi() {
    return (
        <div>
            <Navbar />
            <Visi />

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl lg:px-3 grid grid-cols-2 space-x-5">
                    <div className="mx-auto max-w-2xl lg:mx-0 text-justify">

                        <h1 className="mt-2 font-bold tracking-tight text-gray-600 sm:text-3xl"> VISI KOMINFO MEDAN : </h1>

                        <div className="max-w-xl">
                            <p className="mt-6 text-xl leading-8 text-gray-600">Terwujudnya masyarakat Kota Medan yang berkah, maju, kondusif, aman, tentram, serta damai sentosa selamanya.</p>
                        </div>

                        <h1 className="mt-10 font-bold tracking-tight text-gray-600 sm:text-3xl"> PERAN DINAS KOMINFO MEDAN : </h1>

                        <div className="max-w-xl">
                            <p className="mt-6 text-xl leading-8 text-gray-600">Peran dari Dinas Komunikasi dan Informatika Kota Medan masuk dalam Misi Ke-4.</p>
                        </div>

                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Dinas Komunikasi dan Informasi Kota Medan</span>
                            <img className="mt-10 h-auto w-auto ml-40" src={bg} alt="" />
                        </a>
                    </div>

                    <div className="mx-auto max-w-2xl lg:mx-0">

                        <h1 className="mt-2 font-bold tracking-tight text-gray-600 sm:text-3xl"> MISI KOMINFO MEDAN : </h1>

                        <div className="grid grid-cols-2 space-x-16 text-justify">
                            <div className="max-w-xl">

                                <p className="mt-6 font-bold text-xl leading-8 text-gray-600">1. MEDAN BERKAH</p>
                                <p className="text-lg leading-8 text-gray-600">Mewujudkan Kota Medan sebagai kota yang berkah dengan memegang teguh nilai-nilai keagamaan dan menjadikan Medan sebagai kota layak huni juga berkualitas bagi seluruh lapisan masyarakat.</p>

                                <p className="mt-5 font-bold text-xl leading-8 text-gray-600">2. MEDAN MAJU</p>
                                <p className="text-lg leading-8 text-gray-600">Memajukan masyarakat Kota Medan melalui revitalisasi pelayanan pendidikan dan kesehatan yang modern, terjangkau oleh semua.</p>

                                <p className="mt-5 font-bold text-xl leading-8 text-gray-600">3. MEDAN BERSIH</p>
                                <p className="text-lg leading-8 text-gray-600">Menciptakan keadilan sosial melalui reformasi birokrasi yang bersih, profesional, akuntabel dan transparan berlandaskan semangat melayani masyarakat serta terciptanya pelayanan publik yang prima, adil dan merata.</p>

                                <p className="mt-5 font-bold text-xl leading-8 text-gray-600">4. MEDAN MEMBANGUN</p>
                                <p className="text-lg leading-8 text-gray-600">Membangun sarana dan prasarana yang mendukung peningkatan perekonomian dan potensi lokal masyarakat yang berkeadilan agar terciptanya lapangan kerja, iklim kewirausahaan yang sehat dan peningkatan kualitas SDM.</p>

                            </div>

                            <div className="max-w-xl">

                                <p className="mt-6 font-bold text-xl leading-8 text-gray-600">5. MEDAN KONDUSIF</p>
                                <p className="text-lg leading-8 text-gray-600">Mewujudkan kenyamanan dan iklim kondusif bagi segenap masyarakat Kota Medan melalui peningkatan supremasi hukum berbasis partisipasi masyarakat.</p>

                                <p className="mt-5 font-bold text-xl leading-8 text-gray-600">6. MEDAN INOVATIF</p>
                                <p className="text-lg leading-8 text-gray-600">Mewujudkan Kota Medan sebagai kota ekonomi kreatif dan inovatif yang berbasis pada penguatan human capital, teknologi digital sosial budaya.</p>

                                <p className="mt-5 font-bold text-xl leading-8 text-gray-600">7. MEDAN BERIDENTITAS</p>
                                <p className="text-lg leading-8 text-gray-600">Mewujudkan Kota Medan yang beradab, santun, harmonis, toleran dalam kemajemukan demokratis dan cinta tanah air.</p>
                            </div>


                            {/* <p className="mt-3 text-lg leading-8 text-gray-600">3. MEDAN BERSIH</p>
                        <p className="mt-3 text-lg leading-8 text-gray-600">4. MEDAN MEMBANGUN</p>
                        <p className="mt-3 text-lg leading-8 text-gray-600">5. MEDAN KONDUSIF</p>
                        <p className="mt-3 text-lg leading-8 text-gray-600">6. MEDAN INOVATIF</p>
                        <p className="mt-3 text-lg leading-8 text-gray-600">7. MEDAN BERIDENTITAS</p> */}

                            <br />

                            <p className="text-gray-700"></p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}