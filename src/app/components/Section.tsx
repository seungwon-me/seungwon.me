"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export function Section({ title, children }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold tracking-tight mb-8">{title}</h2>
      {children}
    </motion.section>
  );
}