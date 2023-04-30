import { useEffect, useRef } from "react";

export default function Cursor() {

    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onMouseMove = (event: MouseEvent) => {
            if (outerRef.current)
                outerRef.current.style.transform = `translate3d(calc(${event.clientX}px - 50%), calc(${event.clientY}px - 50%), 0)`;
            if (innerRef.current)
                innerRef.current.style.transform = `translate3d(calc(${event.clientX}px - 50%), calc(${event.clientY}px - 50%), 0)`;
        };

        addEventListener('mousemove', onMouseMove);
    }, []);

    return <>
        <div
            ref={outerRef}
            className="
                w-7 aspect-square
                fixed
                border border-black rounded-full
                pointer-events-none
                z-50
                transition-all duration-80 ease-out
            "
        >
        </div>
        <div
            ref={innerRef}
            className="
                w-1.5 aspect-square
                fixed
                rounded-full
                bg-black
                pointer-events-none
                z-50
            "
        >
        </div>
    </>;
};