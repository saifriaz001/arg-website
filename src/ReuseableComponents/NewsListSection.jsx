// components/NewsListSection.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function formatDate(iso) {
  const d = new Date(iso);
  return isNaN(d)
    ? iso
    : d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

export default function NewsListSection({
  title = "In The News",
  items = [],
  baseUrl = "/news",
  autoScroll = true,
  speed = 10, // seconds for one full loop
}) {
  // ✅ Don't render anything if no news
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const list = [...items]
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));

  // Duplicate list for seamless scroll
  const loopList = [...list, ...list];

  return (
    <section className="w-full mb-10 ">
      <h3 className="Project-heading py-1 text-2xl">{title}</h3>

      <div className="relative h-80 overflow-hidden">
        <motion.ul
          className="absolute w-full space-y-5 pr-2"
          aria-label={title}
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopList.map((n, i) => (
            <li key={`${n.slug}-${i}`} className="leading-snug">
              <div className="Date-section">{formatDate(n.date)}</div>
              <Link
                to={`${baseUrl}/${n.slug}`}
                className="block title-section hover:underline"
              >
                {n.title}
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
