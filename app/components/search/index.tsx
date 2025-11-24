'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, useAnimate, motion } from 'motion/react';

import ArrowRight from '@/app/icons/arrowRight';
import ChevronDownIcon from '@/app/icons/chevronDownIcon';
import ClipIcon from '@/app/icons/clipIcon';
import FilterIcon from '@/app/icons/filterIcon';
import PlusIcon from '@/app/icons/plusIcon';
import WaveIcon from '@/app/icons/waveIcon';
import Image from 'next/image';
import { socket } from '@/app/socket';
import { useQueryStore } from '@/app/provider';

const placeholderText = [
  'R&B cover of 2010s',
  'Instrumental cover of happy birthday',
  'Cover song of Rolling in the deep',
];

function Search() {
  const [scope, animate] = useAnimate();
  const [searchText, setSearchText] = useState('');
  const [currentPlaceholder, setCurrentPlaceholder] = useState(
    placeholderText[0]
  );

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { addQuery, setIsProfileDrawerOpen, setCurrentQuery } = useQueryStore(
    (state) => state
  );

  const startPlaceholderRotation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => {
        const index = placeholderText.indexOf(prev);
        const next = index === placeholderText.length - 1 ? 0 : index + 1;
        return placeholderText[next];
      });
    }, 4000);
  };

  useEffect(() => {
    startPlaceholderRotation();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    socket.on('notification', (data) => {
      console.log('Received:', data);
    });
  }, []);

  useEffect(() => {
    animate(
      '.image-0',
      { x: ['-50px', '0px', '50px', '0px'], opacity: [0, 1, 1, 0] },
      { duration: 3.5, ease: 'linear' }
    );
  }, []);

  useEffect(() => {
    animate(
      '.image-1',
      { x: ['-50px', '0px', '50px', '0px'], opacity: [0, 1, 1, 0] },
      { duration: 3.5, ease: 'linear' }
    );
  }, []);

  useEffect(() => {
    animate(
      '.image-2',
      { x: ['-50px', '0px', '50px', '0px'], opacity: [0, 1, 1, 0] },
      { duration: 3.5, ease: 'linear' }
    );
  }, []);

  return (
    <div className="relative w-full" ref={scope}>
      <Image
        src="/0.png"
        alt="gradient-0"
        fill={true}
        className="image-0 translate-y-[-30px] translate-x-[30px] z-0"
      />
      <Image
        src="/1.png"
        alt="gradient-1"
        fill={true}
        className="image-1 translate-y-[-30px] translate-x-[30px] z-0"
      />
      <Image
        src="/2.png"
        alt="gradient-2"
        fill={true}
        className="image-2 translate-y-[30px] translate-x-[30px] z-0"
      />
      <div className="bg-[#1D2125] w-full rounded-4xl relative z-10">
        <AnimatePresence>
          <motion.div
            className="absolute left-6 top-[34px] pointer-events-none opacity-0 placeholder"
            hidden={!!searchText}
            key={currentPlaceholder}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: '-10px' }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[#5D6165] font-normal">{currentPlaceholder}</p>
          </motion.div>
        </AnimatePresence>
        <textarea
          className="font-normal w-full outline-none resize-none p-6 pb-0 field-sizing-content max-h-[200px]"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onFocus={() => {
            if (intervalRef.current) clearInterval(intervalRef.current);
          }}
          onBlur={() => {
            startPlaceholderRotation();
          }}
        ></textarea>
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-2">
            <button className="bg-[#1D2125] hover:bg-[#3a3e42] cursor-pointer transition-all duration-200 ease-out border border-solid border-[#303438] w-10 h-10 rounded-3xl grid place-items-center">
              <ClipIcon />
            </button>
            <button className="bg-[#1D2125] hover:bg-[#3a3e42] cursor-pointer transition-all duration-200 ease-out border border-solid border-[#303438] w-10 h-10 rounded-3xl grid place-items-center">
              <FilterIcon />
            </button>
            <button className="bg-[#1D2125] hover:bg-[#3a3e42] cursor-pointer transition-all duration-200 ease-out border border-solid border-[#303438] w-10 h-10 rounded-3xl grid place-items-center">
              <WaveIcon />
            </button>
            <button className="bg-[#1D2125] hover:bg-[#3a3e42] cursor-pointer transition-all duration-200 ease-out border border-solid border-[#303438] h-10 px-3 rounded-3xl flex gap-1.5 items-center">
              <PlusIcon /> <span className="font-semibold text-sm">Lyrics</span>
            </button>
          </div>

          <div className="flex gap-3.5">
            <button className="border border-solid border-[#303438] rounded-full w-[92px] h-10 flex items-center justify-center gap-1.5 cursor-pointer">
              <span className="font-semibold text-sm">Tools</span>
              <ChevronDownIcon />
            </button>
            <button
              className="w-9 h-9 grid place-content-center bg-[#44484C] rounded-full enabled:cursor-pointer scale-100 transition duration-200 enabled:bg-white enabled:hover:scale-105 enabled:hover:bg-white"
              disabled={!searchText}
              onClick={async () => {
                const data = await fetch('/api/search', {
                  method: 'POST',
                  body: JSON.stringify({
                    data: {
                      id: Math.random().toString(36).slice(2),
                      query: searchText,
                      progress: 0,
                    },
                  }),
                }).then((d) => d.json());
                addQuery({
                  id: data.data.id,
                  query: data.data.query,
                  progress: data.data.progress,
                });
                setIsProfileDrawerOpen(true);
                setCurrentQuery(searchText);
                setSearchText('');
              }}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
