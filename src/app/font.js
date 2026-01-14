// font.js
import localFont from "next/font/local";

export const myFont = localFont({
    src: [
        {
            path: 'font/ArticulatCF-Thin.otf',
            weight: '100',
        },
        {
            path: 'font/ArticulatCF-Light.otf',
            weight: '200',
        },
        {
            path: 'font/ArticulatCF-ExtraLight.otf',
            weight: '300',
        },
        {
            path: 'font/articulatcf-normal.otf',
            weight: '400',
        },
        {
            path: 'font/ArticulatCF-Medium.otf',
            weight: '500',
        },
        {
            path: 'font/ArticulatCF-DemiBold.otf',
            weight: '600',
        },
        {
            path: 'font/ArticulatCF-Bold.otf',
            weight: '700',
        },
        {
            path: 'font/ArticulatCF-ExtraBold.otf',
            weight: '800',
        },
        {
            path: 'font/ArticulatCF-Heavy.otf',
            weight: '900',
        },
    ],
    variable: '--font-articulat',
    display: 'swap',
});
