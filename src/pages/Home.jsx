import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
// import { ArrowPathIcon, Bars3Icon, ChartBarIcon, CursorArrowRaysIcon, DocumentChartBarIcon, ShieldCheckIcon, Squares2X2Icon, XMarkIcon,} from '@heroicons/react/24/outline';
import { XMarkIcon, } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import bg from '../assets/kominfomedan.png';

const resources = [
    {
        name: 'Visi dan Misi',
        description: 'Gotong Royong Menuju Kota Dunia Yang Maju, Humanis Dan Berkelanjutan.',
        href: '#',
    },

    {
        name: 'Tentang',
        description: 'Kedudukan Dinas Komunikasi dan Informatika diatur dalam Peraturan Walikota Medan Nomor 82 Tahun 2021.',
        href: '#'
    },

    {
        name: 'Organisasi',
        description: 'Rekapitulasi Organisasi dari Kominfo.',
        href: '#'
    },

    {
        name: 'Daftar Pegawai',
        description: 'Rekapitulasi Jumlah Pegawai Dinas Komunikasi dan Informatika.',
        href: '/pegawai'
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    return (
        <Popover className="relative bg-gradient-to-r from-yellow-400 via-orange-200 to-green-400 aspect-w-16 aspect-h-9">
            <div className="flex items-center justify-between sm:py-6 md:justify-start md:space-x-10 lg:flex-1">
                <div className="flex sm:px-20">
                    <a href="/">
                        <span className="sr-only">Kominfo</span>
                        <img className="h-8 w-auto sm:h-10" src={bg} alt="" />
                    </a>
                </div>

                <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                    <Popover className="relative">
                        {({ open }) => (<>

                            <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">

                                <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                        )}
                    </Popover>

                    <a href="/" className="text-base font-medium text-gray-500 hover:text-black">Beranda</a>

                    <Popover className="relative">
                        {({ open }) => (<>
                            <Popover.Button className={classNames(open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md text-base font-medium')}>

                                <span className="text-gray-500 hover:text-black">Profile</span>
                                <ChevronDownIcon className={classNames(open ? 'text-gray-500' : 'text-gray-500', 'ml-2 h-5 w-5 group-hover:text-black')} aria-hidden="true" />
                            </Popover.Button>

                            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">

                                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            {resources.map((resource) => (
                                                <a key={resource.name} href={resource.href} className="-m-3 block rounded-md p-3 hover:bg-yellow-400">

                                                    <p className="text-base font-medium text-gray-900">{resource.name}</p>
                                                    <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                        )}
                    </Popover>
                    <a href="/news" className="text-base font-medium text-gray-500 hover:text-black">Berita</a>
                    <a href="https://dashboard.prakerja.go.id/masuk" className="text-base font-medium text-gray-500 hover:text-black">Galeri</a>
                    <a href="https://www.dpr.go.id/" className="text-base font-medium text-gray-500 hover:text-black">Dokumen</a>
                    <a href="/kontak" className="text-base font-medium text-gray-500 hover:text-black">Kontak</a>
                </Popover.Group>
            </div>

            <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">

                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                                </div>

                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}