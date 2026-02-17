'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface WorkshopCardProps {
    title: React.ReactNode;
    description: React.ReactNode;
    time: string;
    delay: number;
}

function WorkshopCard({ title, description, time, delay }: WorkshopCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="relative group"
        >
            <div className="absolute inset-0 bg-cyber-blue blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative border border-cyber-blue/30 bg-cyber-dark/90 p-6 clip-path-slant h-full hover:border-cyber-gold/50 transition-colors">
                <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-base font-display font-bold text-cyber-gold flex-1 min-w-0 leading-tight tracking-normal">{title}</h3>
                    <span className="text-sm font-mono text-cyber-blue border border-cyber-blue/30 px-2 py-1 shrink-0">{time}</span>
                </div>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

import HumainBrand from './HumainBrand';

// ... (other imports)

// ...

export default function WorkshopDetails() {
    const schedule = [
        {
            title: "ARRIVE & DRINKS",
            time: "18:00",
            description: "Arrive, grab a drink, say hi"
        },
        {
            title: "WHAT'S NEW",
            time: "18:15",
            description: "Updates to Humain One and Cisco AI Suite including AI Defense"
        },
        {
            title: "COMMUNITY DEMOS",
            time: "20:00",
            description: "See what builders have been creating with Humain and Cisco"
        },
        {
            title: "LIVE Q&A",
            time: "20:40",
            description: "Live Q&A Session w/ Humain and Cisco"
        },
        {
            title: "NETWORKING",
            time: "21:00",
            description: "Stick around, meet people, keep the conversation going"
        }
    ];

    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Intro / Landmarks Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] border-2 border-cyber-gold p-2"
                    >
                        <div className="absolute inset-0 bg-cyber-gold/10" />
                        <Image
                            src="/landmark-kingdom-centre.png"
                            alt="Kingdom Centre Cyberpunk"
                            fill
                            className="object-cover opacity-80"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/80 p-2 border border-cyber-gold">
                            <p className="font-display text-cyber-gold text-lg">LOCATION: RIYADH</p>
                            <p className="font-mono text-xs text-white">COORDINATES: 24.7136° N, 46.6753° E</p>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                            <span className="text-cyber-orange">///</span> ABOUT THIS EVENT
                        </h2>
                        <div className="space-y-4 text-lg font-mono text-muted-foreground">
                            <p>
                                Join us for an exclusive Cisco and <HumainBrand className="align-baseline" /> Meetup on March 22nd (TBC) starting from 5 PM at Cisco Office, where we dive deep into the latest breakthroughs in Artificial Intelligence. This event features expert speakers from both <HumainBrand className="align-baseline" /> and Cisco, sharing insights into the newest AI developments and hardware-software integration in addition to hands-on learning where you will gain practical experience with cutting-edge tools and frameworks.
                            </p>
                            <p>
                                Don&apos;t miss this chance to learn from the best in the industry. RSVP now to request your spot!
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-widest text-black bg-cyber-gold hover:bg-white transition-colors font-display"
                            >
                                RSVP NOW
                            </a>
                            <div className="flex gap-4 items-center text-sm font-mono text-cyber-blue px-4 py-2 border border-cyber-blue/30 bg-cyber-blue/5">
                                <span>[ STATUS: CONFIRMED ]</span>
                                <span>[ CAPACITY: LIMITED ]</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Schedule Grid */}
                <div>
                    <h2 className="text-3xl font-display font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-white">
                        EVENT SCHEDULE
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {schedule.map((item, idx) => (
                            <WorkshopCard key={idx} {...item} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-display font-bold text-cyber-gold mb-4">
                                <span className="text-white">///</span> WHAT IS HUMAIN ONE?
                            </h3>
                            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
                                <HumainBrand className="align-baseline" /> One is the agentic AI operating system. Automate complex workflows, deploy autonomous AI agents, and run your business from a single intelligence platform. It securely connects all your data with one simple interface, transforming human intent into executable actions across your meetings, tasks, and insights within the Saudi sovereign cloud.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-display font-bold text-cyber-blue mb-4">
                                <span className="text-white">///</span> CISCO AI SUITE & DEFENSE
                            </h3>
                            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
                                Experience the power of the Cisco AI Suite, a comprehensive platform for building, deploying, and managing AI applications. Integrated with <strong>Cisco AI Defense</strong>, it ensures your AI agents and models are secure from the ground up, providing real-time threat detection and robust policy enforcement for enterprise-grade safety.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8 bg-cyber-dark/50 p-8 border border-cyber-blue/20 backdrop-blur-sm">
                        <div className="space-y-4">
                            <h3 className="text-xl font-display font-bold text-white mb-2">EVENT DETAILS</h3>

                            <p className="text-muted-foreground font-mono">
                                <span className="text-cyber-green block mb-2">ACCESS GRANTED:</span>
                                Food & beverages available. <HumainBrand className="align-baseline" /> / Cisco stickers while they last.
                            </p>

                            <div className="w-full h-px bg-white/10 my-6" />

                            <div className="space-y-2">
                                <p className="text-sm font-bold text-cyber-orange">HOSTED BY</p>
                                <p className="text-lg font-display text-white">HUMAIN AND CISCO</p>
                                <p className="text-sm font-mono text-muted-foreground">
                                    AI software developer, Boulder entrepreneur, and AI enthusiast.
                                </p>
                            </div>

                            <div className="w-full h-px bg-white/10 my-6" />

                            <div className="space-y-2">
                                <p className="text-sm font-bold text-cyber-blue">WANT TO DEMO?</p>
                                <p className="text-sm font-mono text-muted-foreground">
                                    We&apos;d love to see what you&apos;ve built. DM the host or reach out at <a href="mailto:xxx@xxxx.com" className="text-cyber-gold hover:underline">xxx@xxxx.com</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
