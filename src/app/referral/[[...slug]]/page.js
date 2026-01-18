"use client";

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ReferralPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const [status, setStatus] = useState("Checking for Wave Money app...");

    const slugCode = params.slug?.[0];
    const queryCode = searchParams.get("referral_code") || searchParams.get("code");
    const referralCode = slugCode || queryCode;

    useEffect(() => {
        const deepLink = `wavemoney://referral?code=${referralCode || ""}`;
        const androidStore = `https://play.google.com/store/apps/details?id=com.onewave.money${referralCode ? `&referrer=referral_code%3D${referralCode}` : ""
            }`;


        const timeout = setTimeout(() => {
            setStatus("App not detected. Please download below to claim your referral.");

        }, 2500);

        try {
            window.location.href = deepLink;
        } catch (e) {
            console.error("Deep link failed", e);
        }

        return () => clearTimeout(timeout);
    }, [referralCode]);

    return (
        <div className="min-h-screen bg-[#1A1A19] text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden font-inter">


            <div className="absolute top-[-20%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#29339B]/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#BBFF2A]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-[90%] sm:max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl z-10"
            >
                <div className="mb-6 sm:mb-8">
                    <Image
                        src="/assets/img/logo-light.png"
                        alt="Wave Money"
                        width={180}
                        height={40}
                        className="h-8 sm:h-10 w-auto"
                        priority
                    />
                </div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 sm:mb-8 w-full"
                >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-t-2 border-r-2 border-[#BBFF2A] border-b-2 border-white/20 border-l-2 border-white/20 animate-spin mx-auto mb-4" />
                    <h1 className="text-lg sm:text-xl font-medium tracking-wide leading-relaxed px-2">{status}</h1>
                    {referralCode && (
                        <p className="text-white/60 text-xs sm:text-sm mt-2 break-all">Referral Code applied: <span className="text-[#BBFF2A] font-mono">{referralCode}</span></p>
                    )}
                </motion.div>

                <div className="space-y-3 sm:space-y-4 w-full">
                    <a
                        href={`wavemoney://referral?code=${referralCode || ""}`}
                        className="block w-full py-3 sm:py-4 bg-white text-[#484848] font-bold rounded-xl hover:bg-[#BBFF2A] hover:text-black transition-all duration-300 ease-in-out transform hover:scale-[1.02] shadow-lg active:scale-95 uppercase tracking-wide text-sm sm:text-base"
                    >
                        Open Wave Money App
                    </a>

                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink-0 mx-4 text-white/40 text-[10px] sm:text-xs uppercase tracking-widest">
                            Or Download
                        </span>
                        <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    <div >
                        <a
                            href="https://play.google.com/store/apps/details?id=com.onewave.money"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-2 sm:p-3 transition-colors"
                        >
                            <img src="/assets/img/google-play.png" alt="Play Store" className="h-6 sm:h-8 w-auto object-contain" />
                        </a>


                    </div>
                </div>

                <div className="mt-6 sm:mt-8 text-white/30 text-[10px] sm:text-xs">
                    Redirecting securely to Wave Money
                </div>
            </motion.div>
        </div>
    );
}
