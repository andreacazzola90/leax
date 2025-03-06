"use client";

import { motion } from "framer-motion";

export default function MotionWrapper({
    children = undefined,
    variants,
    initial = "hidden",
    animate = "visible",
    transition = { duration: 0.5 },
}) {
    return (
        <motion.div
            variants={variants}
            initial={initial}
            whileInView={animate}
            transition={transition}
            viewport={{ once: true, amount: 0.5 }} // Animazione una volta sola
        >
            {children}
        </motion.div>
    );
}