import { ReactNode } from "react";

interface ButtonProps {
    children?: ReactNode;
}

export function Button({
    children
}: ButtonProps) {
    return <div
        className="
            relative
            h-15
            font-bold
            border border-black
            rounded-md
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
            className="
                w-full h-full
                px-7
                bg-black
                text-white

                animate-wipein hover:animate-wipeout
            "
        >
            {children}
        </button>
    </div>
}