import React from 'react';
import Container from './Container';


const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-gray-300 py-10">
                <Container>
                    <div className=" px-6 grid grid-cols-1 md:grid-cols-4 gap-8">


                        <div>
                            <h2 className="text-white text-lg font-semibold">CS — Ticket System</h2>
                            <p className="text-sm mt-4 leading-6 text-gray-400">
                                Bangladesh is a vibrant South Asian nation known for its rich cultural heritage, lush riverine landscapes, and significant population density. Home to the world's largest mangrove forest, the Sundarbans, and the longest sea beach, Cox's Bazar, it boasts immense natural beauty. A testament to resilience, Bangladesh has a history of striving for progress and development since gaining independence in 1971 after a liberation war, and its people are noted for their hospitality.  
                           <h3 className="text-white font-semibold mb-4">Services</h3>

                            </p>
                        </div>


                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">About Us</a></li>
                                <li><a href="#" className="hover:text-white">Our Mission</a></li>
                                <li><a href="#" className="hover:text-white">Contact Saled</a></li>
                            </ul>
                        </div>


                        <div>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">Products & Services</a></li>
                                <li><a href="#" className="hover:text-white">Customer Stories</a></li>
                                <li><a href="#" className="hover:text-white">Download Apps</a></li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-white font-semibold mb-4">Information</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-white">Join Us</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">


                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="hover:text-white">✖ @CS — Ticket System</a>
                            <a href="#" className="hover:text-white">in @CS — Ticket System</a>
                            <a href="#" className="hover:text-white">f @CS — Ticket System</a>
                            <a href="mailto:support@cst.com" className="hover:text-white">support@cst.com</a>
                        </div>


                        <p className="text-xs text-gray-500">
                            © 2025 CS — Ticket System. All rights reserved.
                        </p>
                    </div>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;