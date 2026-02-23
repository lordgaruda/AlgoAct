import { motion } from 'framer-motion'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToFeatures = (e: React.MouseEvent) => {
        e.preventDefault()
        window.location.hash = '#/'
        setTimeout(() => {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    const quickLinks = [
        { href: '#/', label: 'Home' },
        { href: '#/', label: 'Features', onClick: scrollToFeatures },
        { href: '#/about', label: 'About' },
    ]

    const resourceLinks = [
        { href: 'https://github.com/lordgaruda', label: 'GitHub', external: true },
        { href: '#/privacy', label: 'Privacy Policy' },
        { href: '#/disclaimer', label: 'Disclaimer' },
    ]

    return (
        <footer className="py-12 border-t border-white/5 bg-midnight">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <motion.div
                            className="flex items-center gap-2 text-xl font-bold mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-2xl">⚡</span>
                            <span className="bg-gradient-to-r from-cyan to-cyan-light bg-clip-text text-transparent">
                                AlgoAct
                            </span>
                        </motion.div>
                        <p className="text-slate max-w-md leading-relaxed">
                            Professional algorithmic trading information and resources for traders worldwide.
                            Empowering you with the tools and knowledge to succeed.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={link.onClick}
                                        className="text-slate hover:text-cyan transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {resourceLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        {...(link.external
                                            ? { target: '_blank', rel: 'noopener noreferrer' }
                                            : {})}
                                        className="text-slate hover:text-cyan transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate text-sm">
                        © {currentYear} AlgoAct. All rights reserved.
                    </p>
                    <a
                        href="https://github.com/lordgaruda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan hover:text-cyan-light transition-colors flex items-center gap-2 group"
                    >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                        </svg>
                        Developed by @lordgaruda
                    </a>
                </div>
            </div>
        </footer>
    )
}
