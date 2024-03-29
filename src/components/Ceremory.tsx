import React from 'react';
import Image from 'next/image';

type CeremonyProps = {
    
};

const Ceremony:React.FC<CeremonyProps> = () => {
    
    return(
        <div className="bg-gray-900">
            <div className="relative isolate overflow-hidden pt-14">
                <Image
                    src="/assets/images/stmichaelarchangelparish.jpg"
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
                    alt="Picture of the author"
                    width={2000}
                    height={2000}
                />
                <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
                >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
                </div>
                <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        
                        <p className="mt-6 text-xl leading-8 text-gray-300 mb-10">
                            CEREMONY
                        </p>
                        <h1 className={`text-5xl font-bold tracking-tight text-white sm:text-[100px]`}>
                            {`St. Michael Archangel Parish Church`}
                        </h1>
                        <p className="mt-11 text-xl leading-2 text-gray-300 p-8">
                            Mahayag, Zamboanga del Sur
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            target="_blank"
                            href="https://maps.app.goo.gl/RzAAPrfeX9r6Y3DNA"
                            className="mt-10 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                            GOOGLE MAPS
                        </a>
                        </div>
                    </div>
                </div>
                <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
                >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
                </div>
            </div>
        </div>
    )
}
export default Ceremony;