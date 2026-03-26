import RecommendationCard from "./RecommendationCard";
import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, useRef } from "react";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import { animate, stagger, splitText } from "animejs";

const Recommendations = () => {
  const headingRef = useRef(null);
  useEffect(() => {
    if (headingRef.current) {
      const { chars } = splitText(headingRef.current, {
        words: false,
        chars: true,
      });
      animate(chars, {
        y: [
          { to: "-1.5rem", ease: "easeOutQuad", duration: 1200 },
          { to: 0, ease: "easeInOutSine", duration: 1400, delay: 200 },
        ],
        rotate: { from: "-1turn", delay: 0 },
        delay: stagger(50),
        ease: "easeInOutSine",
        loopDelay: 2000,
        loop: true,
      });
    }
  }, []);

  const { isLoading, error, data } = useQuery("recommendations", () =>
    axios
      .get("api/recommendations")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error)),
  );

  return (
    <>
      {/* <div className="px-2 md:px-8 py-4 text-2xl font-bold text-Snow">
        Projects
      </div> */}
      <div className="large grid centered square-grid font-bold text-Snow pt-4 ml-6">
        {" "}
        <h2 ref={headingRef} className="text-2xl">
          My Projects
        </h2>{" "}
      </div>
      <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
        {isLoading
          ? [1, 2, 3, 4].map(() => (
              <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
            ))
          : data?.map((data, key) => (
              <RecommendationCard key={key} data={data} />
            ))}
      </div>
    </>
  );
};

export default Recommendations;
