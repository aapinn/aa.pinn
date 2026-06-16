import { Helmet } from 'react-helmet-async'
import { motion } from "framer-motion";
import Content from "../Components/Content";
import { servicesData } from "../data";
import { RiServiceLine } from "react-icons/ri";
import { TbArrowRight, TbCheck } from "react-icons/tb";
import Typewriter from "./components/Typewriter";
import { NavLink } from "react-router-dom";

const Services = () => {
    return (
        <div data-aos='fade-down' data-aos-duration='1000'>
          <Helmet>
            <title>Layanan - Arif Rahman Hidayat</title>
            <meta name="description" content="Layanan yang ditawarkan Arif Rahman Hidayat: Web Development, UI/UX Design, Digital Marketing, Tech Consulting, dan Graphic Design." />
            <meta property="og:title" content="Layanan - Arif Rahman Hidayat" />
            <meta property="og:description" content="Layanan Web Development, UI/UX Design, dan konsultasi teknologi dari Arif Rahman Hidayat." />
            <meta property="og:url" content="https://aapinn.vercel.app/services" />
          </Helmet>
          <Content
            icon={<RiServiceLine />}
            text={'Services'}
            subtitle={'What I can do for you'}
            showCards={false}
          />

          <div className="text-center my-8">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              I offer{" "}
              <Typewriter
                words={[
                  "Web Development",
                  "UI/UX Design",
                  "Tech Consulting",
                  "Graphic Design",
                ]}
                className="text-purple-500 font-semibold"
              />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm hover:shadow-lg dark:hover:shadow-neutral-800/50 duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                      <TbCheck className="text-purple-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 flex items-center gap-1 text-xs text-purple-500 font-medium opacity-0 group-hover:opacity-100 duration-300"
                >
                  Learn More <TbArrowRight />
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-200 dark:border-purple-800/30 text-center"
          >
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Let's Work Together! 🚀
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Have a project in mind? I'd love to hear about it!
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 duration-300 text-sm font-medium"
            >
              Get in Touch <TbArrowRight />
            </NavLink>

          </motion.div>
        </div>
    )
}

export default Services
