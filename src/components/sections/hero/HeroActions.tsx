"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-10 flex flex-wrap gap-5"
    >
      <Button href="/freedom-score">
        Take Your Freedom Score™
      </Button>

      <Button
        href="/framework"
        variant="outline"
      >
        Explore Framework
      </Button>
    </motion.div>
  );
}