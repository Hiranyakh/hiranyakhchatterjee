"use client";

import { motion } from "framer-motion";

interface FrameworkConnectorProps {
  active?: boolean;
  horizontal?: boolean;
}

export default function FrameworkConnector({
  active = true,
  horizontal = false,
}: FrameworkConnectorProps) {
  if (horizontal) {
    return (
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="origin-left"
      >
        <div
          className={`h-[3px] w-full rounded-full ${
            active
              ? "bg-gradient-to-r from-[#D4AF37] via-[#0F7A5C] to-[#D4AF37]"
              : "bg-slate-200"
          }`}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="origin-top"
    >
      <div
        className={`h-[90px] w-[3px] rounded-full ${
          active
            ? "bg-gradient-to-b from-[#D4AF37] via-[#0F7A5C] to-[#D4AF37]"
            : "bg-slate-200"
        }`}
      />
    </motion.div>
  );
}