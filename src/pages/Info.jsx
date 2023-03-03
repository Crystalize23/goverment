export default function Example() {
    return (
        <div className="bg-indigo-100">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-400 sm:text-4xl">Situs Resmi Pemerintah Kota Medan!
                    {/* 
                    <br />

                    Klik Link Disamping Ini. */}
                </h2>

                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                    <a href="https://portal.pemkomedan.go.id/" target="_blank" className="rounded-md bg-gradient-to-r from-yellow-400 to-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-yellow-400 hover:via-orange-200 hover:to-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Pemko Medan
                        <span aria-hidden="true"> &rarr; </span>
                    </a>

                    <a href="https://sumutprov.go.id/" target="_blank" className="rounded-md bg-gradient-to-r from-yellow-400 to-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-yellow-400 hover:via-orange-200 hover:to-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Pemprov Medan
                        <span aria-hidden="true"> &rarr; </span>
                    </a>

                    <a href="https://covid19.sumutprov.go.id/" target="_blank" className="rounded-md bg-gradient-to-r from-yellow-400 to-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-yellow-400 hover:via-orange-200 hover:to-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Covid19 Medan
                        <span aria-hidden="true"> &rarr; </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
