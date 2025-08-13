// components/NewsListSection.jsx
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

function formatDate(iso) {
  const d = new Date(iso);
  return isNaN(d)
    ? String(iso ?? "")
    : d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
}

/**
 * Props:
 * - title: string
 * - items: [{ slug, title, date }] (date in ISO or display string)
 * - baseUrl: string (e.g. "/news")
 * - autoScroll: boolean (default true)
 * - speed: number in seconds for one full loop (default 10)
 * - heightClass: Tailwind height class (default "h-80")
 */
export default function NewsListSection({
  title = "In The News",
  items = [],
  baseUrl = "/news",
  autoScroll = true,
  speed = 10,
  heightClass = "h-80",
}) {
  const validItems = Array.isArray(items) ? items.filter(Boolean) : [];
  if (validItems.length === 0) return null;

  const shouldScroll = autoScroll && validItems.length >= 3;

  const list = useMemo(
    () => [...validItems].sort((a, b) => String(b.date).localeCompare(String(a.date))),
    [validItems]
  );

  const loopList = useMemo(
    () => (shouldScroll ? [...list, ...list] : list),
    [list, shouldScroll]
  );

  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!shouldScroll || prefersReducedMotion) return;
    controls.start({
      y: ["0%", "-50%"],
      transition: { duration: Math.max(1, Number(speed) || 10), ease: "linear", repeat: Infinity },
    });
    return () => controls.stop();
  }, [controls, shouldScroll, prefersReducedMotion, speed]);

  const handleMouseEnter = () => {
    if (!shouldScroll || prefersReducedMotion) return;
    controls.stop();
  };

  const handleMouseLeave = () => {
    if (!shouldScroll || prefersReducedMotion) return;
    controls.start({
      y: ["0%", "-50%"],
      transition: { duration: Math.max(1, Number(speed) || 10), ease: "linear", repeat: Infinity },
    });
  };

  return (
    <section className="w-full mb-10">
      <h3 className="Project-heading py-1 text-2xl">{title}</h3>

      <div
        className={`relative overflow-hidden ${heightClass}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.ul
          className="absolute w-full pr-2 space-y-5"
          aria-label={title}
          animate={shouldScroll && !prefersReducedMotion ? controls : undefined}
          initial={{ y: 0 }}
        >
          {loopList.map((n, i) => (
            <li key={`${n.slug}-${i}`} className="leading-snug">
              <div className="Date-section">{formatDate(n.date)}</div>
              <Link to={`${baseUrl}/${n.slug}`} className="block title-section hover:underline">
                {n.title}
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

