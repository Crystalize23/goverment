import { MdOutlineMiscellaneousServices } from 'react-icons/md';

const services = [
    {
        name: 'Software',
        description: 'Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum. Labore asperiores non corporis molestiae.',
        icon: <MdOutlineMiscellaneousServices className="h-6 w-6 text-white" aria-hidden="true"/>
    },
]


export default function Service() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>

                    <h2 className="text-sm font-bold tracking-tight text-gray-600 hover:text-black sm:text-2xl">Program dan Layanan Kominfo Medan</h2>

                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                        {services.map((services) => (
                            <div key={services.name}>
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-200 to-green-400">{services.icon}</div>
                                    
                                    {services.name}
                                </dt>

                                <dd className="mt-1 text-base leading-7 text-gray-600">{services.description}</dd>
                            </div>
                        ))}
                    </dl>
            </div>
        </div>
    )

}
