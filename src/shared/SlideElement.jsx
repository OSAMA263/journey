import { motion } from "framer-motion";

export default function SlideElement(props) {
  const { children, y = "35%", className = "", i = 0 } = props;
  return (
    <motion.div
      className={className}
      initial={{ y, opacity: 0 }}
      whileInView={{
        opacity: 1,
        y: "0%",
        transition: { duration: 0.6, delay: 0.2 * i },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
