import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type RotatingRolesProps = {
  roles: string[];
  intervalMs?: number;
};

export function RotatingRoles({ roles, intervalMs = 2800 }: RotatingRolesProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length <= 1) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [roles.length, intervalMs]);

  const role = roles[index] ?? roles[0];

  return (
    <span className="inline-flex min-w-[180px] items-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={role}
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
          transition={{ duration: 0.35 }}
          className="font-medium text-cursor-accent"
        >
          {role.split("").map((char, i) => (
            <motion.span
              key={`${role}-${i}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.2 }}
              className="inline-block"
              style={{ minWidth: char === " " ? "0.3em" : undefined }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
