import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-midnight">
            <Navbar />

            {/* Page Header */}
            <section className="pt-24 pb-12">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        About <span className="text-cyan">AlgoAct</span>
                    </motion.h1>
                    <motion.p
                        className="text-slate text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Learn about our mission and the team behind the platform
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <motion.div
                                className="glass rounded-2xl p-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                                <p className="text-slate leading-relaxed">
                                    AlgoAct is dedicated to democratizing algorithmic trading by providing comprehensive
                                    information, resources, and tools for traders of all levels. We believe that with the
                                    right knowledge and technology, anyone can harness the power of automated trading systems.
                                </p>
                            </motion.div>

                            <motion.div
                                className="glass rounded-2xl p-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
                                <p className="text-slate mb-4">
                                    We focus on providing educational content, trading strategies, and technical resources
                                    that help traders understand and implement algorithmic trading solutions.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        { icon: '📚', text: 'Educational resources and trading guides' },
                                        { icon: '💻', text: 'Open-source trading algorithms and tools' },
                                        { icon: '🎓', text: 'Best practices for algorithmic trading' },
                                        { icon: '📊', text: 'Market analysis and trading insights' },
                                        { icon: '👥', text: 'Community-driven development and collaboration' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white">
                                            <span className="text-xl">{item.icon}</span>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                className="glass rounded-2xl p-8 border-l-4 border-cyan"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    💡 Our Vision
                                </h3>
                                <p className="text-slate">
                                    To empower traders worldwide with accessible, reliable, and innovative algorithmic
                                    trading solutions that level the playing field and promote financial independence.
                                </p>
                            </motion.div>

                            {/* Values */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: '✓', title: 'Integrity', desc: 'Honest, transparent information with full risk disclosure' },
                                        { icon: '⭐', title: 'Excellence', desc: 'Highest quality code and educational resources' },
                                        { icon: '👥', title: 'Community', desc: 'Collaborative environment for growth' },
                                        { icon: '💡', title: 'Innovation', desc: 'Continuous exploration of new technologies' }
                                    ].map((value, i) => (
                                        <div key={i} className="glass rounded-xl p-4 text-center">
                                            <div className="text-2xl mb-2">{value.icon}</div>
                                            <h4 className="font-bold text-white mb-1">{value.title}</h4>
                                            <p className="text-slate text-sm">{value.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <motion.div
                                className="glass rounded-2xl p-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="font-bold text-white mb-4">Quick Info</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-cyan">📅</span>
                                        <div>
                                            <div className="text-white font-medium">Established</div>
                                            <div className="text-slate text-sm">2025</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-cyan">🌐</span>
                                        <div>
                                            <div className="text-white font-medium">Location</div>
                                            <div className="text-slate text-sm">Global</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-cyan">💻</span>
                                        <div>
                                            <div className="text-white font-medium">GitHub</div>
                                            <a href="https://github.com/lordgaruda" target="_blank" rel="noopener noreferrer" className="text-cyan text-sm hover:underline">
                                                @lordgaruda
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="glass rounded-2xl p-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="font-bold text-white mb-4">Open Source</h3>
                                <p className="text-slate text-sm mb-4">
                                    Check out our open-source projects on GitHub.
                                </p>
                                <a
                                    href="https://github.com/lordgaruda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full text-center block"
                                >
                                    Visit GitHub
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
