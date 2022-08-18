import { useRef } from "react";
import List from "./List";
import Header from "./Header";
import { from, to, flights } from "../../mock";
import { useScroll } from "framer-motion";

function Flights() {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({ container: ref });

  return (
    <div className="h-full flex flex-col relative">
      <Header scrollYProgress={scrollYProgress} scrollY={scrollY} />
      <List flights={flights} to={to} from={from} scrollRef={ref} />
    </div>
  );
}

export default Flights;
