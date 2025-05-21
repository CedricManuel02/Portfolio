"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TSkill = {
  image: string;
  name: string;
  index: number;
};

export default function Skill({ image, name, index }: TSkill) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1, 
      }}
      viewport={{
        once: true,     
        amount: 0.3,     
      }}
      className="bg-[#1E1E1E] h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg"
    >
      <Image
        className="w-10 h-7 object-contain"
        width={100}
        height={100}
        src={image}
        alt={name}
      />
      <h3 className="text-slate-400 text-sm">{name}</h3>
    </motion.div>
  );
}
