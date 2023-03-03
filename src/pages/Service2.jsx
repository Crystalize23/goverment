import { ShieldCheckIcon, CodeBracketIcon, InformationCircleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const service = [
    {
        name: 'Keamanan Informasi',
        description: 'Menerapkan ISO 27001:2013 untuk mendukung sistem manajemen keamanan informasi.',
        icon: ShieldCheckIcon,
    },

    {
        name: 'Software',
        description: 'Pengembangan software aplikasi untuk menyediakan layanan - layanan berbasis digital',
        icon: CodeBracketIcon,
    },

    {
        name: 'Media Informasi',
        description: 'Publikasi Program kegiatan pemerintah melalui media cetak,media elektronik serta media sosial',
        icon: InformationCircleIcon,
    },

    {
        name: 'Pengaduan Masyarakat',
        description: 'Menampung partisipasi masyarakat baik dalam bentuk keluhan/pengaduan/informasi/saran pada proses pembangunan kota',
        icon: ChatBubbleLeftRightIcon,
    }
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                    <h2 className="text-3xl font-bold tracking-tight sm:text-2xl">Program dan Layanan Kominfo Medan</h2>

                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                        {service.map((service) => (
                            <div key={service.name}>
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400 hover:bg-green-400">

                                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {service.name}
                                </dt>

                                <dd className="mt-1 text-base leading-7 text-gray-600">{service.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>


        </div>
    )
}