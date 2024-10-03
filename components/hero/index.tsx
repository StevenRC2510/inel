"use client";

import { motion } from "framer-motion";

import VideoThumb from "@/public/images/hero-image.jpg";

import ModalVideo from "@/components/modalVideo";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-6 text-center">
            <motion.h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              data-aos="fade-up"
            >
              Innovación en la Ingeniería con INEL
            </motion.h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                En INEL, ofrecemos una educación avanzada para futuros
                ingenieros con un enfoque en tecnología y soluciones
                innovadoras. Nuestro compromiso es preparar a nuestros
                estudiantes para liderar el cambio en la industria.
              </p>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
          />
        </div>
      </div>
    </section>
  );
}
