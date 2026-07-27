"use client";

import { motion } from "framer-motion";

interface FrameworkConnectorProps {
  active?: boolean;
}

export default function FrameworkConnector({
  active = true,
}: FrameworkConnectorProps) {
  return (
    <div className="relative flex justify-center py-2">

      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 90 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className={`
          w-[3px]
          rounded-full
          ${
            active
              ? "bg-gradient-to-b from-[#D4AF37] via-[#0F7A5C] to-[#D4AF37]"
              : "bg-slate-200"
          }
        `}
      />

    </div>
  );
}