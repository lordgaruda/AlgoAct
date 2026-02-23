import { HashRouter, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import DisclaimerPage from './components/DisclaimerPage'

/* ───────────────────────────────────────────────
   Home Page — Hero + Features
   ─────────────────────────────────────────────── */
function HomePage() {
    const features = [
        {
            icon: '🤖',
            title: 'Algorithmic Strategies',
            desc: 'Explore a curated collection of algorithmic trading strategies designed for various market conditions.',
        },
        {
            icon: '📊',
            title: 'Real-Time Analytics',
            desc: 'Access powerful analytics tools to track performance, backtest strategies, and optimize execution.',
        },
        {
            icon: '🔒',
            title: 'Risk Management',
            desc: 'Built-in risk controls and position sizing algorithms to protect your capital.',
        },
        {
            icon: '⚡',
            title: 'High Performance',
            desc: 'Low-latency infrastructure optimized for speed and reliability in live trading.',
        },
        {
            icon: '💻',
            title: 'Open Source Tools',
            desc: 'Free, open-source trading tools and libraries available on our GitHub.',
        },
        {
            icon: '🎓',
            title: 'Educational Resources',
            desc: 'Comprehensive guides, tutorials, and documentation for traders of all levels.',
        },
    ]

    return (
        <div className="min-h-screen bg-midnight">
            <Navbar />

            {/* ── Hero Section ── */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated background orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-cyan mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
                            </span>
                            Open Source Algorithmic Trading
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Trade Smarter with{' '}
                        <span className="bg-gradient-to-r from-cyan to-cyan-light bg-clip-text text-transparent">
                            AlgoAct
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-slate text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Professional algorithmic trading resources, strategies, and open-source tools
                        to help you navigate the financial markets with confidence.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <a href="#features" className="btn-primary">
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
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    >
                        <svg className="w-6 h-6 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </div>
            </section>

            {/* ── Features Section ── */}
            <section id="features" className="py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Powerful <span className="text-cyan">Features</span>
                        </h2>
                        <p className="text-slate max-w-xl mx-auto">
                            Everything you need to start your algorithmic trading journey
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                className="glass glass-hover rounded-2xl p-6 group cursor-default"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
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

            {/* ── CTA Section ── */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="glass rounded-3xl p-12 text-center relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-cyan/5 pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Get Started?
                            </h2>
                            <p className="text-slate max-w-xl mx-auto mb-8">
                                Check out our open-source projects on GitHub and start building
                                your algorithmic trading solutions today.
                            </p>
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
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

/* ───────────────────────────────────────────────
   App — Root with HashRouter
   ─────────────────────────────────────────────── */
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
