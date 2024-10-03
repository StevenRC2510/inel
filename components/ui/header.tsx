"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* branding */}
          <div className="flex flex-1 items-center">
            <Logo />
            <p className="pl-2 text-lg text-indigo-200/65">W Steven Ruiz</p>
          </div>

          {/* links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {[
              "Inicio",
              "Conócenos",
              "Estudia",
              "Para Empresas",
              "Trabaja en Inel",
            ].map((section, index) => (
              <motion.li
                key={section}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/${section.toLowerCase().replace(/\s+/g, "-")}`}
                  className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] hover:bg-custom-purple"
                >
                  {section}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
