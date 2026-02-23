import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

export default function DisclaimerPage() {
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
                        <span className="text-cyan">Disclaimer</span>
                    </motion.h1>
                    <motion.p
                        className="text-slate text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Important information and risk disclosure
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Warning Box */}
                            <motion.div
                                className="glass rounded-2xl p-6 border-l-4 border-yellow-500 bg-yellow-500/5"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="flex gap-4">
                                    <span className="text-3xl">⚠️</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Important Notice</h3>
                                        <p className="text-slate">
                                            Trading in financial markets involves substantial risk and is not suitable for
                                            every investor. Please read this disclaimer carefully before using any information
                                            or resources provided on this website.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Sections */}
                            {[
                                {
                                    title: '1. General Information',
                                    content: 'The information provided on AlgoAct is for educational and informational purposes only. This website does not provide financial, investment, trading, or any other type of professional advice. All content is provided "as is" without any warranties, express or implied.'
                                },
                                {
                                    title: '2. Not Financial Advice',
                                    content: 'Nothing on this website constitutes financial advice, investment advice, trading advice, or any other sort of advice. You should not treat any of the website\'s content as such.',
                                    list: [
                                        'AlgoAct does not recommend buying, selling, or holding any financial instruments',
                                        'We do not provide personalized investment recommendations',
                                        'Our content should not be considered professional financial advice',
                                        'Always consult with a qualified financial advisor before making investment decisions'
                                    ]
                                },
                                {
                                    title: '3. Trading Risks',
                                    content: 'Trading and investing in financial markets carries inherent risks.',
                                    risks: [
                                        { icon: '📉', title: 'Loss of Capital', desc: 'You can lose some or all of your invested capital.' },
                                        { icon: '📊', title: 'Market Volatility', desc: 'Markets can be highly volatile and unpredictable.' },
                                        { icon: '💻', title: 'Technology Risks', desc: 'Algorithmic systems can malfunction or fail.' },
                                        { icon: '📅', title: 'Past Performance', desc: 'Past results do not guarantee future success.' }
                                    ]
                                },
                                {
                                    title: '4. No Guarantees',
                                    content: 'AlgoAct makes no representations or warranties regarding the accuracy, completeness, or reliability of any information, strategies, or tools provided on this website. We do not guarantee any specific results, profits, or outcomes.'
                                },
                                {
                                    title: '5. Software and Code',
                                    content: 'Any software, code, or algorithms shared on this website or through our GitHub repositories are provided "as is" without warranty of any kind. Users are solely responsible for testing, validating, and implementing any code or algorithms.'
                                },
                                {
                                    title: '6. Limitation of Liability',
                                    content: 'To the maximum extent permitted by law, AlgoAct and its developers shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of this website or any information provided herein.'
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
                                        <ul className="space-y-2">
                                            {section.list.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2 text-slate">
                                                    <span className="text-red-400 mt-1">✕</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.risks && (
                                        <div className="grid grid-cols-2 gap-3 mt-4">
                                            {section.risks.map((risk, j) => (
                                                <div key={j} className="bg-white/5 rounded-lg p-3">
                                                    <div className="text-xl mb-1">{risk.icon}</div>
                                                    <h4 className="text-white font-medium text-sm">{risk.title}</h4>
                                                    <p className="text-slate text-xs">{risk.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Acknowledgment */}
                            <motion.div
                                className="glass rounded-2xl p-6 border-l-4 border-green-500"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <div className="flex gap-4">
                                    <span className="text-2xl">✅</span>
                                    <p className="text-slate">
                                        By using this website, you acknowledge that you have read, understood, and agree
                                        to this disclaimer. You accept full responsibility for your trading decisions.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <motion.div
                                className="glass rounded-2xl p-6 border-l-4 border-red-500 bg-red-500/5"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    ⚠️ Risk Warning
                                </h3>
                                <p className="text-slate text-sm">
                                    Trading involves substantial risk. You may lose all of your invested capital.
                                </p>
                            </motion.div>

                            <motion.div
                                className="glass rounded-2xl p-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="font-bold text-white mb-4">Key Points</h3>
                                <ul className="space-y-2 text-slate text-sm">
                                    <li>• Not financial advice</li>
                                    <li>• Educational purpose only</li>
                                    <li>• High risk of loss</li>
                                    <li>• No guarantees</li>
                                    <li>• Consult professionals</li>
                                    <li>• Use at your own risk</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                className="glass rounded-2xl p-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h3 className="font-bold text-white mb-4">Related Pages</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#/privacy" className="text-cyan hover:underline text-sm">Privacy Policy</a>
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
