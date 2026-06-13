"use client";

import { useEffect, useState } from "react";

const EPOCH = Math.floor(new Date("2026-06-09T00:00:00Z").getTime() / 1000);
const CYCLE = 7 * 24 * 3600;

function getRemaining() {
  const now = Math.floor(Date.now() / 1000);
  return CYCLE - ((now - EPOCH) % CYCLE);
}

function fmt(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownBanner() {
  const [rem, setRem] = useState<number | null>(null);

  useEffect(() => {
    setRem(getRemaining());
    const id = setInterval(() => setRem(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const days    = rem !== null ? Math.floor(rem / 86400) : 0;
  const hours   = rem !== null ? Math.floor((rem % 86400) / 3600) : 0;
  const minutes = rem !== null ? Math.floor((rem % 3600) / 60) : 0;
  const seconds = rem !== null ? rem % 60 : 0;

  const units = [
    { v: fmt(days),    u: "j" },
    { v: fmt(hours),   u: "h" },
    { v: fmt(minutes), u: "m" },
    { v: fmt(seconds), u: "s" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 flex items-center justify-center gap-5"
      style={{ background: "#1A1618", borderBottom: "1px solid #2E2A2C" }}>

      <span className="type-label tracking-[0.18em] text-brand" style={{ fontSize: "0.5rem" }}>
        BIENTÔT DISPONIBLE
      </span>

      <div style={{ width: 1, height: 12, background: "#2E2A2C" }} />

      <span className="type-label tracking-[0.1em]" style={{ fontSize: "0.5rem", color: "#6B6368" }}>
        Lancement dans
      </span>

      {rem !== null ? (
        <div className="flex items-center">
          {units.map(({ v, u }, i) => (
            <div key={u} className="flex items-center">
              {i > 0 && (
                <span style={{ color: "#3E3A3C", fontSize: "0.52rem", margin: "0 3px" }}>:</span>
              )}
              <div className="flex items-baseline" style={{ gap: 2 }}>
                <span style={{
                  color: "#F0EEF0",
                  fontWeight: 700,
                  fontSize: "0.65rem",
                  fontVariantNumeric: "tabular-nums",
                  fontFamily: "ui-monospace, monospace",
                  minWidth: "1.4ch",
                  textAlign: "center",
                }}>
                  {v}
                </span>
                <span style={{ color: "#6B6368", fontSize: "0.42rem" }}>{u}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ height: 14, width: 120, background: "#2E2A2C" }} className="animate-pulse" />
      )}
    </div>
  );
}
