import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Children } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  itemClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2.5)",
  scrollStart = "bottom bottom=0",
  scrollEnd = "bottom bottom-=60%",
  stagger = 0.003,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const itemElements = el.querySelectorAll(".animated-item");

    gsap.fromTo(
      itemElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 1.7,
        scaleX: 0.5,
        transformOrigin: "10% 0%",
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  return (
    <div
      ref={containerRef}
      className={`my-5 overflow-hidden ${containerClassName}`}
    >
      <div className=" flex-wrap">
        {Children.toArray(children).map((child, index) => (
          <span key={index} className={`animated-item inline-block ${itemClassName}`}>
            {child}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollFloat;
