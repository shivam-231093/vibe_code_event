import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);
  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurElement = ({
  elements = [], // Array of JSX elements or strings
  delay = 200,
  className = '',
  direction = 'top',
  animationFrom,
  animationTo,
  stepDuration = 0.35,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // triggers animation while scrolling through the element
  });

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -50 }
        : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const keyframes = buildKeyframes(fromSnapshot, toSnapshots);
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
    >
      {elements.map((el, index) => {
        const transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: "easeOut",
        };

        return (
          <motion.div
            key={index}
            className="inline-block will-change-[transform,filter,opacity]"
            style={{
              opacity: useTransform(scrollYProgress, [0, 1], [fromSnapshot.opacity, 1]),
              y: useTransform(scrollYProgress, [0, 1], [fromSnapshot.y, 0]),
              filter: useTransform(
                scrollYProgress,
                [0, 1],
                [fromSnapshot.filter, 'blur(0px)']
              ),
            }}
            transition={transition}
          >
            {el}
          </motion.div>
        );
      })}
    </div>
  );
};

export default BlurElement;
