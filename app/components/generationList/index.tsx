'use client';

import { useQueryStore } from '@/app/provider';
import Item from './item';

function GenerationList() {
  const { queryList } = useQueryStore((state) => state);

  if (queryList.length === 0) return null;

  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-lg mb-5">Recent generations</h1>

      <div className="flex flex-col gap-1">
        {queryList.map((list, index) => {
          return (
            <Item title={list.query} description={''} image={''} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default GenerationList;
