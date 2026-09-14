"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface KeychainCharm {
  cartId: string;
  productId: string;
  name: string;
  accent: string;
  formatLabel: string;
  price: number;
}

interface KeychainContextValue {
  charms: KeychainCharm[];
  total: number;
  addCharm: (charm: Omit<KeychainCharm, "cartId">) => void;
  removeCharm: (cartId: string) => void;
  clear: () => void;
}

const KeychainContext = createContext<KeychainContextValue | null>(null);

export function KeychainProvider({ children }: { children: ReactNode }) {
  const [charms, setCharms] = useState<KeychainCharm[]>([]);

  const addCharm = useCallback((charm: Omit<KeychainCharm, "cartId">) => {
    setCharms((prev) => [
      ...prev,
      { ...charm, cartId: `${charm.productId}-${prev.length}-${Date.now()}` },
    ]);
  }, []);

  const removeCharm = useCallback((cartId: string) => {
    setCharms((prev) => prev.filter((charm) => charm.cartId !== cartId));
  }, []);

  const clear = useCallback(() => setCharms([]), []);

  const total = useMemo(
    () => charms.reduce((sum, charm) => sum + charm.price, 0),
    [charms],
  );

  const value = useMemo<KeychainContextValue>(
    () => ({ charms, total, addCharm, removeCharm, clear }),
    [charms, total, addCharm, removeCharm, clear],
  );

  return (
    <KeychainContext.Provider value={value}>
      {children}
    </KeychainContext.Provider>
  );
}

export function useKeychain() {
  const ctx = useContext(KeychainContext);
  if (!ctx) {
    throw new Error("useKeychain must be used within a KeychainProvider");
  }
  return ctx;
}
