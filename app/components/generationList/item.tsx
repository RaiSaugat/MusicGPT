import DislikeIcon from '@/app/icons/dislikeIcon';
import DotsIcon from '@/app/icons/dotsIcon';
import LikeIcon from '@/app/icons/likeIcon';
import PlayIcon from '@/app/icons/playIcon';
import Image from 'next/image';

function Item({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-[#222528] rounded-3xl cursor-pointer group relative transition-all duration-500 ease-in-out">
      <div className="min-w-[60px] min-h-[60px] rounded-2xl gap-2.5 grid place-items-center relative overflow-hidden">
        <Image src="/pic.png" alt="Item" fill={true} />
        <span className="z-10 relative opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-600 ease-in-out">
          <PlayIcon />
        </span>
      </div>
      <div className="flex flex-col gap-1 truncate">
        <p className="font-normal text-base truncate text-[#E4E6E8]">{title}</p>
        <span className="font-normal text-sm text-[#898C92]">
          {description ||
            'Create a pop-rock song about old times, nostalgic opera theme style, guitar solo like slash'}
        </span>
      </div>
      <div className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-600 ease-in-out flex items-center gap-4 z-10 absolute right-0 bg-[linear-gradient(269.93deg,#1D2125_48.52%,rgba(29,33,37,0)_99.69%)] h-full rounded-2xl pr-2">
        <button className="text-[#5D6165] hover:text-white cursor-pointer transition-all duration-200 ease-out">
          <LikeIcon />
        </button>
        <button className="text-[#5D6165] hover:text-white cursor-pointer transition-all duration-200 ease-out">
          <DislikeIcon />
        </button>
        <button className="bg-[#16191C] hover:bg-[#262A2E] transition-all duration-200 ease-out  border border-solid border-[#5D6165] rounded-[10px] px-3 font-medium text-[#BFC2C8] text-sm h-[26px] cursor-pointer">
          v1
        </button>
        <DotsIcon />
      </div>
    </div>
  );
}

export default Item;
