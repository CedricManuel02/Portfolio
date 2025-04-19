"use client";
import React from "react";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";
export default function MotionContainer({children} : {children: React.ReactNode}) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  return <motion.div ref={element} style={{opacity: scrollYProgress}}>{children}</motion.div >;
}
