import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToTop = useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        window.location.hash = '#/'
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const scrollToFeatures = useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        if (window.location.hash !== '#/' && window.location.hash !== '') {
            window.location.hash = '#/'
            setTimeout(() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
            }, 150)
        } else {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    const navLinks = [
        { href: '#/', label: 'Home', onClick: scrollToTop },
        { href: '#/', label: 'Features', onClick: scrollToFeatures },
        { href: '#/about', label: 'About' },
        { href: '#/privacy', label: 'Privacy' },
        { href: '#/disclaimer', label: 'Disclaimer' },
    ]

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 glass-strong"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-18 py-4">
                    {/* Logo */}
                    <motion.a
                        href="#/"
                        onClick={scrollToTop}
                        className="flex items-center gap-2.5 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan to-cyan-dark flex items-center justify-center text-midnight font-bold text-sm shadow-glow-cyan">
                            A
                        </div>
                        <span className="font-heading text-xl font-bold tracking-tight text-white group-hover:text-cyan transition-colors duration-300">
                            AlgoAct
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                onClick={link.onClick}
                                className="relative px-4 py-2 text-sm font-medium text-slate hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                                whileHover={{ y: -1 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </div>

                    {/* GitHub CTA */}
                    <motion.a
                        href="https://github.com/lordgaruda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                                   bg-white/5 border border-white/10 text-slate hover:text-white hover:border-cyan/30
                                   transition-all duration-300"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                        </svg>
                        GitHub
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 text-slate hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden pb-4 border-t border-white/5"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="flex flex-col gap-1 pt-3">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-slate hover:text-white transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5 text-sm"
                                        onClick={(e) => {
                                            if (link.onClick) link.onClick(e)
                                            setIsMenuOpen(false)
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href="https://github.com/lordgaruda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-cyan py-2.5 px-3 text-sm"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}
