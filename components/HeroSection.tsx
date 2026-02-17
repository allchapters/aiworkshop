'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import HumainBrand from './HumainBrand';

export default function HeroSection() {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 200);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-cyber-dark/50 p-4">
            {/* Background Gradients/Effects - Cyber Vibe */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-cyber-blue)_0%,_transparent_25%)] opacity-20 blur-3xl" />
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-gold to-transparent opacity-50" />

            <div className="z-10 text-center space-y-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-center gap-4 md:gap-8 mb-8"
                >
                    {/* Mock Logos for Cisco x Humain */}
                    <div className="text-xl md:text-3xl font-display font-bold text-cyber-blue tracking-wider border border-cyber-blue/50 px-4 py-2 rounded-sm bg-cyber-dark/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                        CISCO
                    </div>
                    <div className="text-2xl text-cyber-gold font-mono">X</div>
                    <div className="text-xl md:text-3xl font-display font-bold text-cyber-orange tracking-wider border border-cyber-orange/50 px-4 py-2 rounded-sm bg-cyber-dark/80 backdrop-blur-sm shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                        <HumainBrand />
                    </div>
                </motion.div>

                <motion.h1
                    className={`text-5xl md:text-8xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-white to-cyber-gold ${glitch ? 'animate-pulse skew-x-2' : ''}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    AI WORKSHOP
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl font-mono text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <span className="text-cyber-green mr-2">$</span>
                    INITIATING PROTOCOL: <span className="text-cyber-gold">FUTURE OF WORK</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12"
                >
                    <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none border border-cyber-gold transition-all hover:bg-cyber-gold/10">
                        <div className="absolute inset-0 w-0 bg-cyber-gold transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
                        <span className="relative text-cyber-gold font-display font-bold tracking-widest group-hover:text-white transition-colors">
                            ENTER SYSTEM
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Decorative Grid Floor */}
            <div className="absolute bottom-0 w-full h-[30vh] bg-[linear-gradient(to_bottom,transparent,rgba(0,240,255,0.05)_50%,rgba(0,0,0,0.8))] pointer-events-none" />
            <div className="absolute bottom-0 w-full h-full bg-[linear-gradient(transparent_95%,rgba(0,240,255,0.1)_96%,transparent_96%)] bg-[length:40px_40px] perspective-[500px] rotate-x-60 opacity-20 pointer-events-none" />
        </section>
    );
}
