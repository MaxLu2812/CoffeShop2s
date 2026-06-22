"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FaqEntry } from "@/lib/types";

interface Props {
  entries: FaqEntry[];
}

export default function FaqAccordion({ entries }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="divide-y divide-[var(--color-cream-200)]">
      {entries.map((entry) => {
        const isOpen = openId === entry.id;
        const panelId = `${baseId}-panel-${entry.id}`;
        const triggerId = `${baseId}-trigger-${entry.id}`;

        return (
          <div key={entry.id}>
            <h3>
              <button
                id={triggerId}
                onClick={() => toggle(entry.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(entry.id);
                  }
                }}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-[var(--font-heading)] text-lg font-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                <span>{entry.question}</span>
                <motion.span
                  aria-hidden
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-[var(--color-accent)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 font-[var(--font-body)] text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {entry.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
