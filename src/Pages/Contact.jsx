import { useState } from "react";
import ContentComponent from "@/Components/Content";
import { motion } from "framer-motion";
import { TbSend, TbMail, TbMapPin, TbPhone, TbBrandGithub, TbBrandInstagram, TbBrandFacebook, TbBrandTiktok, TbCheck, TbHeart } from "react-icons/tb";

const services = [
  'Website design', 'Content creation', 'UX design',
  'Strategy & consulting', 'User research', 'Other'
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', website: '', phone: '', message: '', services: []
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mwppwjej", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', website: '', phone: '', message: '', services: [] });
      }
    } catch (err) {
      console.error("Form error:", err);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 text-center"
      >
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">Message Sent!</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Thank you for reaching out! I'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-purple-500 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm duration-300 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm duration-300 outline-none"
        />
        <input
          type="text"
          name="website"
          placeholder="Your Website (optional)"
          value={formData.website}
          onChange={handleChange}
          className="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm duration-300 outline-none"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm duration-300 outline-none"
        />
      </div>
      <textarea
        name="message"
        placeholder="Tell me about your project..."
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm duration-300 outline-none resize-none"
      />
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Services interested in</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {services.map(service => {
            const selected = formData.services.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => handleServiceToggle(service)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs duration-300 border ${
                  selected
                    ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300'
                    : 'bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400 hover:border-purple-300'
                }`}
              >
                {selected && <TbCheck className="text-purple-500" />}
                {service}
              </button>
            );
          })}
        </div>
      </div>
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
      >
        {loading ? (
          <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
        ) : (
          <><TbSend /> Send Message</>
        )}
      </motion.button>
    </form>
  );
};

const ContactMain = () => (
  <div className="pb-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">What's need to be fixed?</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
            Have a project, idea, or just want to say hi? Fill in the form and I'll get back to you!
          </p>
          <ContactForm />
        </div>
      </div>
      <div>
        <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm h-full">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Let's Connect</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
            I'm always open to new opportunities, collaborations, or just a good conversation.
          </p>
          <div className="space-y-4">
            {[
              { icon: <TbMail className="text-xl" />, label: "Email", value: "arifrh9185@gmail.com" },
              { icon: <TbMapPin className="text-xl" />, label: "Location", value: "Bekasi, Indonesia" },
              { icon: <TbPhone className="text-xl" />, label: "Phone", value: "+62 xxx-xxxx-xxxx (DM Me On Instagram)" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-neutral-800/50">
                <div className="text-purple-500">{item.icon}</div>
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.label}</p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Social Media</h4>
            <div className="flex gap-3">
              {[
                { icon: <TbBrandGithub />, url: "https://github.com/aapinn", label: "GitHub" },
                { icon: <TbBrandInstagram />, url: "https://www.instagram.com/__aapinn/#", label: "Instagram" },
                { icon: <TbBrandFacebook />, url: "https://www.facebook.com/avenged.arifsevenfold", label: "Facebook" },
                { icon: <TbBrandTiktok />, url: "https://www.tiktok.com/@arifpake.ef?lang=en", label: "TikTok" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/50 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200 dark:border-purple-800/30">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
              <TbHeart className="text-pink-500" /> 
              I typically respond within 24 hours. Can't wait to hear from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => {
    return(
        <div data-aos='fade-down' data-aos-duration='1000' className="min-h-screen flex flex-col bg-white dark:bg-transparent">
            <ContentComponent
              className={'pb-2 border-b border-dashed'}
              text={'Contact'}
              showCards={false}
            />
            <main className="flex-grow mt-6">
              <ContactMain />
            </main>
        </div>
    )
}

export default Contact
