import { RiFacebookCircleFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';

const Navigation = {
    menu: [
        { name: 'Home', href: '#' },
        { name: 'About Me', href: '#' },
        { name: 'Contact Me', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms Of Service', href: '#' },
    ],

    sosmed: [
        { Image: <RiFacebookCircleFill size={30} />, href: '#' },
        { Image: <RiTwitterFill size={30} />, href: '#' },
    ],

    sosmed1: [
        { Image: <RiInstagramFill size={30} />, href: '#' },
        { Image: <RiYoutubeFill size={30} />, href: '#' },
    ],
}

export default function Example() {
    return (
        <footer className="bg-gradient-to-r from-yellow-400 via-orange-200 to-green-400">
            <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {Navigation.menu.map((menu) => (
                        <div key={menu.name} className="pb-6">
                            <a href={menu.href} className="text-sm leading-6 text-gray-600 hover:text-black">{menu.name}</a>
                        </div>
                    ))}
                </nav>

                <br />

                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {Navigation.sosmed.map((sosmed) => (
                        <div key={sosmed.Image} className="pb-6">
                            <a href={sosmed.href} className="text-sm leading-6 text-gray-600 hover:text-blue-400">{sosmed.Image}</a>
                        </div>
                    ))}

                    {Navigation.sosmed1.map((sosmed1) => (
                        <div key={sosmed1.Image} className="gradient">
                            <a href={sosmed1.href} className="text-sm leading-6 text-gray-600 hover:text-red-500">{sosmed1.Image}</a>
                        </div>
                    ))}

                </nav>

                <p className="mt-10 text-center text-xs leading-5 text-gray-500">&copy; 2023 Dinas Komunikasi dan Informatika Kota Medan.</p>
            </div>
        </footer>
    )
}