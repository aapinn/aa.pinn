import Header from "../Components/Header"
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ContentComponent from "@/Components/Content";

// --- START: Component Definitions for Dark Mode ---

const ContactMain = () => (
    <div className="pb-20 bg-white dark:bg-transparent">
        <div className="text-center mb-16 px-4">
            <h1 className="lg:text-5xl pt-10 text-3xl font-bold text-gray-900 dark:text-white">We'd love to hear from you</h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">I'll really appreciated your mind</p>
        </div>

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10"> 
                <div className="w-full">
                <div 
                    className="h-96 rounded-lg border border-gray-200 dark:border-gray-700 bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url('/src/image/contact-bg.JPG')` 
                    }}
                ></div>
                </div>

                <div className="w-full">
                    <div className="p-8 bg-gray-50 dark:bg-transparent rounded-lg shadow-xl mx-auto"> 
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What's need to be fixed ?</h2>
                        
                        <form className="space-y-4">
                            <input type="text" placeholder="Your name" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
                            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
                            <input type="text" placeholder="Your Website" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
                            <div className="flex items-center space-x-2">
                                <input type="text" placeholder="Number phone" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
                            </div>
                            <textarea placeholder="Tell us a little about the project..." rows="3" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"></textarea>
                            
                            <div className="pt-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Services</label>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    {['Website design', 'Content creation', 'UX design', 'Strategy & consulting', 'User research', 'Other'].map(service => (
                                        <div key={service} className="flex items-center">
                                            <input id={service.replace(/\s/g, '-')} name="services" type="checkbox" className="h-4 w-4 text-purple-600 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700" />
                                            <label htmlFor={service.replace(/\s/g, '-')} className="ml-2 text-gray-700 dark:text-gray-300">{service}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button type="submit" className="w-full py-3 mt-4 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-150">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const NewsletterForm = () => (
    <div className="max-w-7xl mx-auto pb-24 px-4 sm:px-6 lg:px-8">
        <div className="lg:max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sign up for our newsletter</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Be the first to know about releases and industry news and insights.</p>
            <form className="flex flex-col sm:flex-row gap-2">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                />
                <button type="submit" className="py-3 px-6 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-150 sm:w-auto">Subscribe</button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                We care about your data in our <a href="#" className="text-purple-600 hover:underline">privacy policy</a>.
            </p>
        </div>
    </div>
);

const Footer = () => (
    <footer className="bg-purple-900 rounded-2xl text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Contact me</h3>
            <p className="text-purple-200 mb-6">Find me on social media</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
                <div>
                    <h4 className="font-semibold mb-2">Facebook</h4>
                    <a className="text-sm text-purple-300" target="_blank" href="https://www.facebook.com/avenged.arifsevenfold" >Arif Rahman Hidayat</a>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Tiktok</h4>
                    <a className="text-sm text-purple-300" target="_blank" href="https://www.tiktok.com/@arifpake.ef?lang=en" >Arif Rahman Hidayat</a>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Github</h4>
                    <a className="text-sm text-purple-300" target="_blank" href="https://github.com/aapinn/aa.pinn" >Arif Rahman Hidayat</a>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Instagram</h4>
                    <a className="text-sm text-purple-300" target="_blank" href="https://www.instagram.com/aaa.pinnn/#" >Arif Rahman Hidayat</a>
                </div>
            </div>
        </div>
    </footer>
);

// --- END: Component Definitions ---


const Contact = () => {

    return(
        // Tambahkan kelas "dark" pada elemen terluar untuk mengaktifkan Dark Mode
        // Tambahkan juga bg-white dark:bg-gray-900 pada body agar latar belakang default berubah
        <div 
            data-aos='fade-down' 
            data-aos-duration='1000' 
            className="min-h-screen flex flex-col bg-white dark:bg-transparent"
        >
            <ContentComponent
            className={'pb-2 border-b border-dashed'}
            text={'Contact'}
            showCards={false}
            />
            
            <main className="flex-grow">
                <ContactMain /> 
            </main>

            <NewsletterForm />
            <Footer />
            
        </div>
    )
}

export default Contact