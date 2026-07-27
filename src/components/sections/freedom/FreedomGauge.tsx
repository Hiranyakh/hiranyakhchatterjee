"use client";

import { motion } from "framer-motion";

import GaugeRing from "./gauge/GaugeRing";
import GaugeNeedle from "./gauge/GaugeNeedle";
import GaugeCenter from "./gauge/GaugeCenter";
import GaugeLabels from "./gauge/GaugeLabels";

export default function FreedomGauge() {
  return (
    <div className="flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          flex
          h-[460px]
          w-[460px]
          items-center
          justify-center
        "
      >
        <GaugeRing />

        <GaugeNeedle />

        <GaugeLabels />

        <GaugeCenter />

      </motion.div>

    </div>
  );
}