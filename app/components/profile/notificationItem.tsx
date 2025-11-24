'use client';

import Image from 'next/image';
import { AnimatePresence, useAnimate, motion } from 'motion/react';
import { useEffect, useRef } from 'react';

function NotificationItem({
  version,
  percent,
  title,
  step,
  id,
}: {
  version: string;
  percent: number;
  title: string;
  step: string;
  id: string;
}) {
  const [motionRef, animate] = useAnimate();
  const percentRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const greenDotRef = useRef<HTMLDivElement>(null);

  const gradients = [
    'radial-gradient(227.54% 59.42% at 42.03% 86.23%, #FF6200 0%, rgba(170, 0, 255, 0.5) 30.42%, rgba(0, 0, 0, 0) 100%), #000',
    'radial-gradient(381.16% 99.21% at 83.33% 78.99%, #FF6200 0%, rgba(170, 0, 255, 0.5) 48.76%, rgba(0, 0, 0, 0) 100%), #000',
    'radial-gradient(256.72% 316.94% at -26.81% 115.94%, #FF6200 0%, rgba(170, 0, 255, 0.5) 30.42%, rgba(0, 0, 0, 0) 100%), #000',
    'radial-gradient(134.78% 607.75% at 85.51% -94.93%, #FF6200 0%, rgba(170, 0, 255, 0.5) 30.42%, rgba(0, 0, 0, 0) 100%), #000',
    'radial-gradient(806.32% 145.65% at 94.2% 0%, #FF6200 0%, rgba(170, 0, 255, 0.5) 30.42%, rgba(0, 0, 0, 0) 100%), #000',
    'radial - gradient(555.92 % 279.47 % at 41.3 % 100 %, #FF6200 0 %, rgba(170, 0, 255, 0.5) 30.42 %, rgba(0, 0, 0, 0) 100 %), #000',
  ];

  useEffect(() => {
    if (percent !== 100) {
      const backgroundGradientElement = motionRef.current;

      const gradientAnimation = animate(
        backgroundGradientElement,
        { background: gradients, opacity: [1, 1, 1, 1, 1, 0] },
        {
          duration: 10.8,
          ease: 'linear',
        }
      );

      return () => {
        gradientAnimation.cancel();
      };
    }
  }, []);

  // useEffect(() => {
  //   if (percent === 100) {
  //     const pulseElement = pulseRef.current;
  //     // const greenDotElement = greenDotRef.current;

  //     if (!pulseElement) return;
  //     // if (!greenDotElement) return;

  //     const pulseAnimation = animate(
  //       pulseElement,
  //       {
  //         transform: ['scale(1)', 'scale(1.5)'],
  //         opacity: [1, 0],
  //       },
  //       {
  //         duration: 0,
  //         repeat: Infinity,
  //         ease: 'linear',
  //       }
  //     );

  //     // const scaleAnimation = animate(
  //     //   greenDotElement,
  //     //   {
  //     //     transform: ['scale(0)', 'scale(1.1)', 'scale(1)'],
  //     //     opacity: [1],
  //     //   },
  //     //   {
  //     //     duration: 8,
  //     //     ease: 'easeInOut',
  //     //   }
  //     // );

  //     return () => {
  //       pulseAnimation.cancel();
  //       // scaleAnimation.cancel();
  //     };
  //   }
  // }, [percent]);

  return (
    <div className="flex items-center gap-3 p-2 hover:bg-[#222528] rounded-3xl cursor-pointer">
      <div className="min-w-16 min-h-16 rounded-2xl gap-2.5 grid place-items-center relative">
        {percent === 100 && (
          <>
            <motion.div
              className="w-4 h-4 rounded-full bg-[#6BFFAC] absolute z-20 -left-[3px] -top-[3px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.6],
                opacity: [0, 1, 0], // multiple opacity steps
              }}
              transition={{
                duration: 1.3,
                ease: 'circInOut',
                repeat: Infinity,
              }}
            ></motion.div>
            <motion.div
              className="w-4 h-4 rounded-full bg-[#6BFFAC] absolute z-20 -left-[3px] -top-[3px]"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            ></motion.div>
          </>
        )}
        <AnimatePresence>
          <div className="relative overflow-hidden w-full h-full rounded-2xl">
            <div
              ref={motionRef}
              className="w-full h-full absolute inset-0 z-10"
            />

            <Image src="/pic.png" alt="Item" fill={true} />
            {percent !== 100 && (
              <span
                className="text-xs font-medium text-[#FFFFFF80] z-30 grid place-items-center h-full relative"
                ref={percentRef}
              >
                {percent}
              </span>
            )}
          </div>
        </AnimatePresence>
      </div>
      <div className="flex flex-col gap-1 truncate">
        <p className="font-normal text-xs truncate">{title}</p>
        <span className="font-normal text-xs text-[#5D6165]">{step}</span>
      </div>
      <span className="min-w-8 h-6 flex items-center rounded-md justify-center text-sm text-[#BFC2C8] font-normal border border-solid border-[#5D6165]">
        {version}
      </span>
    </div>
  );
}

export default NotificationItem;
