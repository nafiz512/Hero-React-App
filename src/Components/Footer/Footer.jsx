import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-b from-[#040308] to-[#603e8f] text-white py-12 mt-20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand Section */}
                    <div>
                        <div className="flex  items-center mb-5">
                            <img className="h-15" src="/logo.png" alt="" />
                            <h2 className="text-2xl font-bold mb-3">
                                HERO APPS
                            </h2>
                        </div>

                        <p className="text-sm opacity-80 leading-relaxed">
                            Building smart, intuitive, and powerful apps that
                            make everyday productivity effortless. Join millions
                            who trust HERO for better workflow.
                        </p>
                        <div className="flex gap-3 mt-4">
                            <a
                                href="https://www.youtube.com/@AiStudio-q7w"
                                className="hover:scale-110 transition"
                            >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                                    alt="youtube"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a className="hover:scale-110 transition">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                                    alt="Twitter"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/nafiz.muntasir.245464"
                                className="hover:scale-110 transition"
                            >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1384/1384069.png"
                                    alt="LinkedIn"
                                    className="w-6 h-6"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Explore</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li>
                                <a className="hover:underline">Apps</a>
                            </li>
                            <li>
                                <a className="hover:underline">About Us</a>
                            </li>
                            <li>
                                <a className="hover:underline">Contact</a>
                            </li>
                            <li>
                                <a className="hover:underline">Careers</a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            Resources
                        </h3>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li>
                                <a className="hover:underline">Blog</a>
                            </li>
                            <li>
                                <a className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline">Support</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            Stay Updated
                        </h3>
                        <p className="text-sm opacity-80 mb-3">
                            Subscribe to get the latest updates on new apps and
                            features.
                        </p>
                        <div className="join">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered join-item w-full max-w-xs text-black"
                            />
                            <button className="btn join-item bg-white text-purple-700 font-semibold hover:bg-purple-100">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-80">
                    © {new Date().getFullYear()} HERO APPS. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
