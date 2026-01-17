import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from '../../VectorImages';

export default function FAQs() {
    const [openIdx, setOpenIdx] = useState(null);
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const badgeRef = useRef(null);
    const faqItemsRef = useRef([]);

    const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

    const faqData = [
        {
            question: "Is Wave Money secure?",
            answer: "Yes. Wave Money follows industry-standard security practices, including data encryption, secure infrastructure, and user verification processes to help protect accounts and transactions.",
        },
        {
            question: "How do I convert crypto to USD?",
            answer: "You can convert supported crypto currencies to USD directly within the Wave Money platform. The process is straightforward and designed to be transparent, with rates shown before confirmation.",
        },
        {
            question: "How fast are transactions processed?",
            answer: "Most transactions are processed within minutes. Processing time may vary depending on blockchain network activity, payment method, and compliance checks.",
        },
        {
            question: "Can I open an account if I don't own crypto?",
            answer: "Yes. You can open a Wave Money account without owning any crypto. The platform supports fiat onboarding, allowing you to get started with traditional currency.",
        },
        {
            question: "What happens if I lose my phone?",
            answer: "Your funds remain secure. You can regain access to your account through identity verification and by contacting Wave Money support for account recovery.",
        },
        {
            question: "Do you accept cash payments?",
            answer: "No. Wave Money does not accept cash payments. All transactions are handled digitally through supported payment methods.",
        },
        {
            question: "Will the account be under my name?",
            answer: "Yes. All accounts are registered under the user's verified legal name to meet compliance and security requirements.",
        },
        {
            question: "What if I face any difficulties, can you help me?",
            answer: "Yes. Wave Money provides customer support to assist with technical issues, account questions, and general inquiries.",
        },
    ];

    useEffect(() => {
        if (typeof window === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

            if (headingRef.current) {
                gsap.fromTo(
                    headingRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: headingRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            }

            if (badgeRef.current) {
                gsap.fromTo(
                    badgeRef.current,
                    { opacity: 0, scale: 0.9 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: "back.out(1.2)",
                        scrollTrigger: {
                            trigger: badgeRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            }

            faqItemsRef.current.forEach((item, index) => {
                if (!item) return;

                gsap.fromTo(
                    item,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 90%",
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        faqItemsRef.current.forEach((item, idx) => {
            if (!item) return;

            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');

            if (answer && icon) {
                if (openIdx === idx) {
                    gsap.to(answer, {
                        height: 'auto',
                        opacity: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    gsap.to(icon, {
                        rotation: 45,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(answer, {
                        height: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.in"
                    });
                    gsap.to(icon, {
                        rotation: 0,
                        duration: 0.3,
                        ease: "power2.in"
                    });
                }
            }
        });
    }, [openIdx]);

    return (
        <div ref={containerRef} className="relative bg-black py-20 overflow-hidden" id='faqs'>
            <div className='max-w-[1440px] w-full mx-auto px-4 md:px-6 lg:px-10 xxl:px-20 relative z-10'>
                <div className='flex flex-col lg:flex-row gap-16 lg:gap-20'>

                    <div className='lg:w-1/3 flex flex-col items-start'>
                        <h2
                            ref={headingRef}
                            className='font-normal text-[54px] md:text-[64px] leading-[1] text-white mb-12 tracking-tight'
                        >
                            FAQ
                        </h2>

                        <div
                            ref={badgeRef}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white text-[#BAD0FF] text-sm font-medium font-inter"
                        >
                            <span className="w-2 h-2 rounded-full bg-white"></span>
                            Getting Started
                        </div>
                    </div>

                    <div className='lg:w-2/3'>
                        <div className='space-y-0'>
                            {faqData.map((faq, idx) => (
                                <div
                                    key={idx}
                                    ref={(el) => faqItemsRef.current[idx] = el}
                                    className="border-b border-white/10"
                                >
                                    <button
                                        className="w-full text-white text-left py-6 md:py-8 flex justify-between items-center group"
                                        onClick={() => toggle(idx)}
                                    >
                                        <span className="text-lg md:text-xl font-normal pr-8">{faq.question}</span>

                                        <div className="faq-icon w-10 h-10 min-w-[40px] min-h-[40px] rounded-[8px] border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors relative flex-shrink-0">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <Star />
                                            </div>
                                        </div>
                                    </button>
                                    <div
                                        className="faq-answer overflow-hidden"
                                        style={{ height: 0, opacity: 0 }}
                                    >
                                        <div className="text-base md:text-lg text-white/70 leading-relaxed max-w-[90%] pb-8">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}