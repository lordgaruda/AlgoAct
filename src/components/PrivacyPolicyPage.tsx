import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PrivacyPolicyPage() {
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
                        Privacy <span className="text-cyan">Policy</span>
                    </motion.h1>
                    <motion.p
                        className="text-slate text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Last updated: October 15, 2025
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            <motion.div
                                className="glass rounded-2xl p-6 border-l-4 border-cyan bg-cyan/5"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="flex gap-4">
                                    <span className="text-3xl">ℹ️</span>
                                    <div>
                                        <p className="text-slate">
                                            This Privacy Policy describes how AlgoAct collects, uses, and protects your information
                                            when you visit our website. We are committed to ensuring that your privacy is protected.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {[
                                {
                                    title: '1. Information We Collect',
                                    content: 'As a static informational website, AlgoAct collects minimal information about visitors. We may collect the following types of information:',
                                    list: [
                                        { icon: '🌐', text: 'Usage Data: Information about how you interact with our website, including pages visited, time spent, and navigation patterns.' },
                                        { icon: '📱', text: 'Device Information: Browser type, operating system, IP address, and device identifiers for analytics purposes.' },
                                        { icon: '📍', text: 'Location Data: General geographic location based on IP address (country/region level only).' }
                                    ]
                                },
                                {
                                    title: '2. How We Use Information',
                                    content: 'We use the collected information for the following purposes:',
                                    list: [
                                        { icon: '📈', text: 'To analyze website usage and improve user experience' },
                                        { icon: '🔒', text: 'To maintain the security and integrity of our website' },
                                        { icon: '👥', text: 'To understand visitor demographics and preferences' },
                                        { icon: '🛠️', text: 'To improve our content and services' }
                                    ]
                                },
                                {
                                    title: '3. Cookies and Tracking Technologies',
                                    content: 'Our website may use cookies and similar tracking technologies to enhance user experience. Cookies are small files stored on your device that help us:',
                                    list: [
                                        { icon: '🍪', text: 'Remember your preferences and settings' },
                                        { icon: '📊', text: 'Analyze website traffic and usage patterns' },
                                        { icon: '⚡', text: 'Improve website performance and load times' }
                                    ],
                                    afterContent: 'You can control cookie settings through your browser preferences. However, disabling cookies may affect your ability to use certain features of our website.'
                                },
                                {
                                    title: '4. Third-Party Services',
                                    content: 'Our website may contain links to third-party websites and services, including GitHub. We are not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies before providing any personal information.',
                                    box: {
                                        title: 'External Links',
                                        content: 'When you click on links to external websites (such as our GitHub profile), you will be subject to their respective privacy policies.'
                                    }
                                },
                                {
                                    title: '5. Data Security',
                                    content: 'We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
                                },
                                {
                                    title: '6. Data Retention',
                                    content: 'We retain collected data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Analytics data is typically aggregated and anonymized for long-term storage.'
                                },
                                {
                                    title: '7. Your Rights',
                                    content: 'Depending on your location, you may have the following rights regarding your data:',
                                    list: [
                                        { icon: '👁️', text: 'Right to Access: Request information about data we hold about you' },
                                        { icon: '📝', text: 'Right to Correction: Request correction of inaccurate data' },
                                        { icon: '🗑️', text: 'Right to Deletion: Request deletion of your personal data' },
                                        { icon: '🚫', text: 'Right to Object: Object to certain types of data processing' },
                                        { icon: '⬇️', text: 'Right to Portability: Request a copy of your data in a portable format' }
                                    ]
                                },
                                {
                                    title: '8. Children\'s Privacy',
                                    content: 'Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.'
                                },
                                {
                                    title: '9. International Data Transfers',
                                    content: 'As our website is accessible globally, your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.'
                                },
                                {
                                    title: '10. Changes to This Privacy Policy',
                                    content: 'We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The "Last Updated" date at the top of this page indicates when the policy was last revised.'
                                }
                            ].map((section, i) => (
                                <motion.div
                                    key={i}
                                    className="glass rounded-2xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * (i + 1) }}
                                >
                                    <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
                                    <p className="text-slate mb-4">{section.content}</p>

                                    {section.list && (
                                        <ul className="space-y-3 mb-4">
                                            {section.list.map((item, j) => (
                                                <li key={j} className="flex items-start gap-3 text-slate">
                                                    <span className="text-xl mt-0.5">{item.icon}</span>
                                                    <span>{item.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.afterContent && (
                                        <p className="text-slate">{section.afterContent}</p>
                                    )}

                                    {section.box && (
                                        <div className="bg-white/5 border-l-4 border-cyan rounded-r-lg p-4 mt-4">
                                            <h4 className="text-white font-bold mb-2">{section.box.title}</h4>
                                            <p className="text-slate text-sm">{section.box.content}</p>
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            <motion.div
                                className="glass rounded-2xl p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                            >
                                <h2 className="text-xl font-bold text-white mb-3">11. Contact Information</h2>
                                <p className="text-slate mb-4">
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or our
                                    data practices, please contact us through our GitHub profile:
                                </p>
                                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-4">
                                    <span className="text-2xl">💻</span>
                                    <div>
                                        <div className="text-white font-medium">GitHub</div>
                                        <a href="https://github.com/lordgaruda" target="_blank" rel="noopener noreferrer" className="text-cyan text-sm hover:underline">
                                            @lordgaruda
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="glass rounded-2xl p-6 border-l-4 border-green-500"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.3 }}
                            >
                                <div className="flex gap-4">
                                    <span className="text-2xl">✅</span>
                                    <p className="text-slate">
                                        By using this website, you acknowledge that you have read and understood this
                                        Privacy Policy and agree to its terms.
                                    </p>
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
                                <h3 className="font-bold text-white mb-4">Your Privacy Matters</h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl text-cyan">🛡️</span>
                                    <p className="text-slate text-sm">
                                        We are committed to protecting your privacy and handling your data responsibly.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="glass rounded-2xl p-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="font-bold text-white mb-4">Related Pages</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#/disclaimer" className="text-cyan hover:underline text-sm">Disclaimer</a>
                                    </li>
                                    <li>
                                        <a href="#/about" className="text-cyan hover:underline text-sm">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#/" className="text-cyan hover:underline text-sm">Home</a>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
