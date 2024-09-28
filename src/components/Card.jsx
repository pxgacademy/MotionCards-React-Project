import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, containerRef }) {
  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      whileDrag={{ scale: 1.1 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[35px] bg-zinc-900/90 text-white py-10 px-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-xs mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer z-[4] absolute bottom-0 w-full left-0">
        <div className="flex justify-between items-center mb-3 py-3 px-5">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <FiDownload size={"0.8em"} color="#ffffff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div className={`tag w-full py-3 px-5 ${data.tag.tagColor}`}>
            <h3 className="text-sm font-semibold text-center">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
