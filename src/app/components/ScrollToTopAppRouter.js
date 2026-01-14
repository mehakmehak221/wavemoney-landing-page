// components/ScrollToTopAppRouter.js
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        gsap.to(window, {
            scrollTo: 0,
            duration: 0,            
        });
    }, [pathname]);

    return null;
}
