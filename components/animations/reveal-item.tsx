"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeSlideUp } from "@/lib/animations";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function RevealItem({ children, className }: Props) {
  return (
    <motion.div className={className} variants={fadeSlideUp}>
      {children}
    </motion.div>
  );
}
