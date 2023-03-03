import { RiFacebookCircleFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';

const navigation = {
    // menu: [
    //     { name: 'Beranda', href: '#' },
    //     { name: 'Berita', href: '#' },
    //     { name: 'Kontak', href: '#' },
    //     { name: 'Privacy Policy', href: '#' },
    //     { name: 'Terms Of Service', href: '#' },
    // ],

    sosmed: [
        { name: 'Facebook', href: 'https://www.facebook.com/diskominfomedan/', image: <RiFacebookCircleFill size={30} /> },
    ],

    sosmed1: [
        { name: 'Twitter', href: 'https://twitter.com/diskominfomedan/', image: <RiTwitterFill size={30} /> }
    ],

    sosmed2: [
        { name: 'Instagram', href: 'https://www.instagram.com/pemko.medan/', image: <RiInstagramFill size={30} /> },
    ],

    sosmed3: [
        { name: 'YouTube', href: 'https://www.youtube.com/channel/UCepSQ87cuYtv77diFLDilXg', image: <RiYoutubeFill size={30} /> },
    ]
}

export default function Example() {
    return (
        <footer className="bg-gradient-to-r from-yellow-400 via-orange-200 to-green-400">
            <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
                {/* <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.menu.map((menu) => (
                        <div key={menu.name} className="pb-6">
                            <a href={menu.href} className="text-sm leading-6 text-gray-600 hover:text-black">
                                {menu.name}
                            </a>
                        </div>
                    ))}
                </nav> */}

                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.sosmed.map((sosmed) => (
                        <a key={sosmed.name} href={sosmed.href} target="_blank" className="text-gray-500 hover:text-blue-500">
                            <span className="sr-only">{sosmed.name}</span>
                            {sosmed.image}
                        </a>
                    ))}

                    {navigation.sosmed1.map((sosmed) => (
                        <a key={sosmed.name} href={sosmed.href} target="_blank" className="text-gray-500 hover:text-blue-400">
                            <span className="sr-only">{sosmed.name}</span>
                            {sosmed.image}
                        </a>
                    ))}

                    {navigation.sosmed2.map((sosmed) => (
                        <a key={sosmed.name} href={sosmed.href} target="_blank" className="text-gray-500 hover:text-red-400">
                            <span className="sr-only">{sosmed.name}</span>
                            {sosmed.image}
                        </a>
                    ))}

                    {navigation.sosmed3.map((sosmed) => (
                        <a key={sosmed.name} href={sosmed.href} target="_blank" className="text-gray-500 hover:text-red-600">
                            <span className="sr-only">{sosmed.name}</span>
                            {sosmed.image}
                        </a>
                    ))}
                </div>

                <p className="mt-10 text-center text-base leading-5 text-gray-500">&copy; 2023 Dinas Komunikasi dan Informatika Kota Medan.</p>
            </div>
        </footer>
    )
}
