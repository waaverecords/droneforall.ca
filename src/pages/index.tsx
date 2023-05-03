import Image from 'next/image';
import { Inter } from 'next/font/google';
import $ from 'jquery';
import 'tilt.js';
import { useEffect } from 'react';
import { Button } from '@/components/button';

declare global {
    interface JQuery<TElement = HTMLElement> {
        tilt(options?: {
            perspective?: number
        }): void;
    }
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    useEffect(() => {
        $('.js-tilt').tilt({ perspective: 1500 });
    }, []);

    return (
        <div
            className={`
                ${inter.className}
                max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1440px]
                m-auto
            `}
        >
            <header
                className={`
                    flex justify-between
                    py-6
                    mb-20
                `}
            >
                <a
                    href="/"
                >
                    <h1
                        className="text-4xl font-bold"
                    >
                        Drone for All
                    </h1>
                </a>
                <Button>
                    Contact us
                </Button>
            </header>
            <main>
                <div
                    className={`
                        flex flex-col lg:flex-row justify-between
                    `
                    }
                >
                    <div
                        className="
                            order-1 md:order-2
                        "
                    >
                        <Image
                            src={'/images/hero.jpg'}
                            alt="hero"
                            width={454}
                            height={663}
                            className="
                                w-[378px] h-[552px]
                                sm:w-[454px] sm:h-[663px]
                                lg:w-[428px] md:h-[625px]
                                xl:w-[454px] xl:h-[663px]
                                overflow-hidden
                                rounded-[500px]
                                js-tilt
                            "
                        />
                    </div>
                    <div
                        className="
                            flex-1
                            order-2 md:order-1
                        "
                    >
                        <h2
                            className="
                                text-[50px] sm:text-6xl xl:text-[70px] 2xl:text-[90px]
                                font-bold leading-15
                                mb-15
                            "
                        >
                            Drone Cleaning Services
                        </h2>
                        <div
                            className="
                                flex gap-5
                            "
                        >
                            <Button
                                reverse
                            >
                                Our services
                            </Button>
                        </div>
                    </div>
                </div>
                <div
                    className="pt-6"
                >
                    Under construction
                </div>
            </main>
        </div>
    )
};