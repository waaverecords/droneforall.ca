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
                            width={378}
                            height={552}
                            className="js-tilt rounded-[500px]"
                        />
                    </div>
                    <div
                        className="order-2 md:order-1"
                    >
                        <h2
                            className="
                                text-5xl font-bold leading-15
                            "
                        >
                            Drone Cleaning Services
                        </h2>
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