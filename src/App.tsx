import { HashRouter, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import DisclaimerPage from './components/DisclaimerPage'

/* ─────────────  Reusable fade-up variant  ───────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
    }),
}

/* ═══════════════════════════════════════════════════════
   Home Page
   ═══════════════════════════════════════════════════════ */
function HomePage() {
    /* ── Feature cards data ── */
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
            ),
            title: 'Algorithmic Strategies',
            desc: 'Curated collection of algo strategies designed for various market conditions and asset classes.',
            gradient: 'from-cyan/20 to-cyan/5',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
            ),
            title: 'Real-Time Analytics',
            desc: 'Track performance, backtest strategies, and optimize execution with powerful analytics tools.',
            gradient: 'from-violet/20 to-violet/5',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
            ),
            title: 'Risk Management',
            desc: 'Built-in risk controls and position sizing to protect your capital from unexpected drawdowns.',
            gradient: 'from-green-400/20 to-green-400/5',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
            ),
            title: 'High Performance',
            desc: 'Low-latency infrastructure optimized for speed and reliability in live trading environments.',
            gradient: 'from-amber-400/20 to-amber-400/5',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
            ),
            title: 'Open Source Tools',
            desc: 'Free, open-source trading tools and libraries — inspect every line, contribute freely.',
            gradient: 'from-pink-400/20 to-pink-400/5',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
            ),
            title: 'Educational Resources',
            desc: 'Comprehensive guides, tutorials and documentation for traders of every experience level.',
            gradient: 'from-cyan/20 to-violet/5',
        },
    ]

    /* ── Stats ── */
    const stats = [
        { value: '100%', label: 'Open Source' },
        { value: '24/7', label: 'Market Coverage' },
        { value: '∞', label: 'Strategies' },
        { value: '0', label: 'Hidden Fees' },
    ]

    return (
        <div className="min-h-screen bg-midnight">
            <Navbar />

            {/* ═══════ HERO ═══════ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
                {/* Ambient orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-cyan/[0.04] rounded-full blur-[120px] animate-float" />
                    <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-violet/[0.04] rounded-full blur-[120px] animate-float-slow" />
                    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/[0.02] rounded-full blur-[150px]" />
                </div>

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                <div className="container mx-auto px-6 text-center relative z-10">
                    {/* Badge */}
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 glass rounded-full text-sm font-medium text-cyan mb-10 border border-cyan/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
                            </span>
                            Open Source Algorithmic Trading
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.1}
                    >
                        Trade Smarter
                        <br />
                        with <span className="shimmer-text">AlgoAct</span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        className="text-slate text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.2}
                    >
                        Professional algorithmic trading resources, strategies, and open-source tools
                        to navigate financial markets with confidence.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.3}
                    >
                        <a
                            href="#features"
                            className="btn-primary"
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            Explore Features
                        </a>
                        <a
                            href="https://github.com/lordgaruda"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                            </svg>
                            View on GitHub
                        </a>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    >
                        <div className="w-5 h-8 rounded-full border-2 border-white/15 flex items-start justify-center p-1">
                            <motion.div
                                className="w-1 h-2 bg-cyan rounded-full"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════ STATS BAR ═══════ */}
            <section className="py-16 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <div className="font-heading text-3xl md:text-4xl font-bold text-cyan mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-slate text-sm font-medium uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ FEATURES ═══════ */}
            <section id="features" className="py-28">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-cyan text-sm font-semibold tracking-widest uppercase mb-4">
                            What We Offer
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5">
                            Powerful Features
                        </h2>
                        <p className="text-slate max-w-lg mx-auto text-lg">
                            Everything you need to build, test, and deploy algorithmic trading systems
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                className="glass glass-hover gradient-border rounded-2xl p-7 group cursor-default"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-cyan mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="font-heading text-lg font-semibold text-white mb-2.5 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-slate text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ CTA ═══════ */}
            <section className="py-28">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="relative rounded-3xl overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Background layers */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-midnight-50 to-violet/10" />
                        <div className="absolute inset-0 glass" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

                        <div className="relative z-10 py-20 px-8 text-center">
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5">
                                Ready to Get Started?
                            </h2>
                            <p className="text-slate max-w-xl mx-auto mb-10 text-lg">
                                Explore our open-source projects on GitHub and start building
                                your algorithmic trading edge today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://github.com/lordgaruda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                                    </svg>
                                    Explore on GitHub
                                </a>
                                <a href="#/about" className="btn-secondary">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

/* ═══════════════════════════════════════════════════════
   App — Root with HashRouter
   ═══════════════════════════════════════════════════════ */
export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
            </Routes>
        </HashRouter>
    )
}
