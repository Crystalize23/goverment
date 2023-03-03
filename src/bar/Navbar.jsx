import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, EyeIcon } from '@heroicons/react/24/outline';
import { VscOrganization } from 'react-icons/vsc';
import { SlPeople } from 'react-icons/sl';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import bg from '../assets/kominfomedan.png';

const menu = [
    {
        name: 'Visi dan Misi',
        description: 'Gotong Royong Menuju Kota Dunia Yang Maju, Humanis Dan Berkelanjutan.',
        href: '/visi',
        icon: EyeIcon
    },

    {
        name: 'Tentang',
        description: 'Kedudukan Dinas Komunikasi dan Informatika diatur dalam Peraturan Walikota Medan Nomor 82 Tahun 2021.',
        href: '#',
        icon: BsFillQuestionCircleFill
    },

    {
        name: 'Organisasi',
        description: 'Rekapitulasi Organisasi dari Komunikasi dan Informatika Kota Medan.',
        href: '/organ',
        icon: VscOrganization
    },

    {
        name: 'Daftar Pegawai',
        description: 'Rekapitulasi Jumlah Pegawai Dinas Komunikasi dan Informatika Kota Medan.',
        href: '/pegawai',
        icon: SlPeople
    },
]
const callsToAction = [
    {
        name: 'Seputar Kominfo Kota Medan',
        href: '#',
        icon: PlayCircleIcon
    },

    {
        name: 'Kontak Kominfo Kota Medan',
        href: '/kontak',
        icon: PhoneIcon
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-gradient-to-r from-yellow-400 via-orange-200 to-green-400 text-justify">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Dinas Komunikasi dan Informasi Kota Medan</span>
                        <img className="h-12 w-auto" src={bg} alt="" />
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Buka menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">

                    <a href="/" className="text-base font-semibold leading-6 text-gray-500 hover:text-black">Beranda</a>

                    <Popover className="relative">

                        <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-500 hover:text-black">Profile
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-500 hover:text-black" aria-hidden="true" />
                        </Popover.Button>

                        <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1" >

                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {menu.map((item) => (
                                        <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">

                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>

                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a key={item.name} href={item.href} className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="/berita" className="text-base font-semibold leading-6 text-gray-500 hover:text-black">Berita</a>
                    <a href="/galeri" className="text-base font-semibold leading-6 text-gray-500 hover:text-black">Galeri</a>
                    <a href="#" className="text-base font-semibold leading-6 text-gray-500 hover:text-black">Dokumen</a>
                    <a href="/kontak" className="text-base font-semibold leading-6 text-gray-500 hover:text-black">Kontak</a>
                </Popover.Group>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Dinas Komunikasi dan Informasi Kota Medan</span>
                            <img className="h-12 w-auto" src={bg} alt="" /> </a>

                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Tutup menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">Profile
                                                <ChevronDownIcon className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} aria-hidden="true" />
                                            </Disclosure.Button>

                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...menu, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <a href="/berita" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Berita</a>

                                <a href="/galeri" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Galeri</a>

                                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Dokumen</a>

                                <a href="/kontak" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Kontak</a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
