import { motion, useTransform } from "framer-motion";

function Header({ scrollYProgress, scrollY }) {
  // header block
  const y = useTransform(scrollY, (latest) =>
    latest < 200 ? -latest / 2 : -100
  );

  // airport codes
  const scale = useTransform(scrollY, (latest) =>
    latest < 200 ? (500 - latest) / 500 : 0.6
  );

  // disapearing texts
  const opacity = useTransform(scrollY, (latest) =>
    latest < 100 ? 1 - latest / 100 : 0
  );

  // frost glass reactangle
  const appear = useTransform(scrollY, (latest) =>
    latest < 100 ? latest / 100 : 1
  );
  const scaleX = useTransform(scrollY, (latest) => {
    if (latest >= 200) return 1;
    if (latest > 80 && latest < 200) return 0.6 + (0.4 * (latest - 80)) / 120;
    if (latest <= 80) return 0.6;
  });

  // dates shrink
  const shrinkL1 = useTransform(scrollY, (latest) =>
    latest < 200 ? latest / 8 : 25
  );
  const shrinkL2 = useTransform(scrollY, (latest) =>
    latest < 200 ? latest / 16 : 12.5
  );
  const shrinkR1 = useTransform(scrollY, (latest) =>
    latest < 200 ? -latest / 8 : -25
  );
  const shrinkR2 = useTransform(scrollY, (latest) =>
    latest < 200 ? -latest / 16 : -12.5
  );

  return (
    <motion.div className="bg-blue-700 text-white z-10" style={{ y }}>
      <motion.div
        className="flex justify-center items-center relative pt-10 px-10"
        style={{ opacity }}
      >
        <button className="absolute left-10 cursor-pointer">
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="white"
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        </button>
        <div className="text-3xl font-bold italic opacity-60">SAS</div>
      </motion.div>
      <div className="flex items-end pt-5 px-10">
        <div className="basis-5/12 flex flex-col items-start">
          <motion.div className="text-sm opacity-60 mb-1" style={{ opacity }}>
            San Francisco
          </motion.div>
          <motion.div className="text-3xl" style={{ scale, x: shrinkR2 }}>
            SFO
          </motion.div>
        </div>
        <div className="basis-2/12 flex justify-center h-9 items-center">
          <svg style={{ width: "18px", height: "18px" }} viewBox="0 0 29 29">
            <path
              fill="white"
              d="m25 12.54-8.295.166-6.413-6.413A.995.995 0 0 0 9.586 6h-.777a.5.5 0 0 0-.447.724l3.044 6.088-7.644.153-.805-1.812c-.219-.493-.957-.337-.957.203v6.288c0 .54.738.697.957.203l.805-1.812 7.644.153-3.044 6.088a.5.5 0 0 0 .447.724h.777c.265 0 .52-.105.707-.293l6.413-6.413L25 16.46a1.96 1.96 0 1 0 0-3.92z"
            />
          </svg>
        </div>
        <div className="basis-5/12 flex flex-col items-end">
          <motion.div className="text-sm opacity-60 mb-1" style={{ opacity }}>
            New York
          </motion.div>
          <motion.div className="text-3xl" style={{ scale, x: shrinkL2 }}>
            JFK
          </motion.div>
        </div>
      </div>
      <motion.div className="flex relative" style={{ y: shrinkL1 }}>
        <div className="absolute b-0 w-full h-full flex justify-center">
          <motion.div
            className="w-11/12 h-full rounded-lg bg-white bg-opacity-10 backdrop-blur-md"
            style={{ opacity: appear, scaleX }}
          />
        </div>
        <div className="basis-1/3 flex justify-around pt-5">
          <motion.div className="opacity-20" style={{ x: shrinkL1 }}>
            5
          </motion.div>
          <motion.div className="opacity-40" style={{ x: shrinkL2 }}>
            6
          </motion.div>
          <motion.div className="opacity-60">7</motion.div>
        </div>
        <div className="basis-1/3 flex justify-center pt-5 z-20">
          <div className="border-b-white border-b-4 pb-5">September 8</div>
        </div>
        <div className="basis-1/3 flex justify-around pt-5">
          <motion.div className="opacity-60">9</motion.div>
          <motion.div className="opacity-40" style={{ x: shrinkR2 }}>
            10
          </motion.div>
          <motion.div className="opacity-20" style={{ x: shrinkR1 }}>
            11
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Header;
