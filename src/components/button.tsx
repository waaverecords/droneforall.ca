import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
    children?: ReactNode;
    reverse?: boolean;
}

export function Button({
    children,
    reverse
}: ButtonProps) {
    return <div
        className="
            relative
            h-15
            font-bold
            border border-black
            rounded-md

            active:scale-95
        "
    >
        <span
            className="
                absolute
                w-full h-full
                flex items-center justify-center
            "
        >
            {children}
        </span>
        <button
            style={{
                WebkitMask: 'url(/images/button-sprite.png)',
                WebkitMaskSize: '3000% 100%'
            }}
            className={twMerge(
                `
                    w-full h-full
                    px-7
                    bg-black
                    text-white

                    animate-wipein hover:animate-wipeout
                `,
                reverse && 'animate-wipeout hover:animate-wipein'
            )}
        >
            {children}
        </button>
    </div>
}