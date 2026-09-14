"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Key } from "@phosphor-icons/react";
import { useKeychain } from "./KeychainProvider";

interface AddToKeychainButtonProps {
  productId: string;
  name: string;
  accent: string;
  formatLabel: string;
  price: number;
  className?: string;
}

export function AddToKeychainButton({
  productId,
  name,
  accent,
  formatLabel,
  price,
  className,
}: AddToKeychainButtonProps) {
  const { addCharm } = useKeychain();
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (!justAdded) return;
    const timeout = window.setTimeout(() => setJustAdded(false), 1400);
    return () => window.clearTimeout(timeout);
  }, [justAdded]);

  function handleClick() {
    addCharm({ productId, name, accent, formatLabel, price });
    setJustAdded(true);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Ajouter ${name} (${formatLabel}) à mon porte-clé`}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control bg-ice px-4 py-3 text-[13px] font-medium text-alpine-white transition-colors hover:bg-ice-600 active:scale-[0.98] ${
        className ?? ""
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {justAdded ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="inline-flex items-center gap-2"
          >
            <Check size={16} weight="bold" />
            Ajouté au porte-clé
          </motion.span>
        ) : (
          <motion.span
            key="add"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="inline-flex items-center gap-2"
          >
            <Key size={16} weight="bold" />
            Ajouter à mon porte-clé
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
