"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, Mountains, X } from "@phosphor-icons/react";
import { useKeychain } from "./KeychainProvider";

const NAV_LINKS = [
  { href: "#collections", label: "Collections" },
  { href: "#points-forts", label: "Points forts" },
  { href: "#boutique", label: "Boutique" },
  { href: "#carnet", label: "Carnet de sortie" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { charms } = useKeychain();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-alpine-white/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-graphite"
        >
          <Mountains size={22} weight="fill" className="text-ice" />
          ALLTERRA
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate transition-colors hover:text-graphite"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#configurateur"
            className="hidden items-center gap-2 rounded-control border border-line bg-alpine-paper px-3 py-2 text-sm font-medium text-graphite transition-colors hover:border-ice hover:text-ice sm:flex"
          >
            Mon porte-clé
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-ice px-1 text-xs font-semibold text-alpine-white">
              {charms.length}
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-10 w-10 items-center justify-center rounded-control border border-line text-graphite lg:hidden"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-alpine-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-control px-2 py-3 text-base text-graphite hover:bg-alpine-mist"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#configurateur"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-between rounded-control border border-line px-3 py-3 text-base font-medium text-graphite"
              >
                Mon porte-clé
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-ice px-1.5 text-xs font-semibold text-alpine-white">
                  {charms.length}
                </span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
