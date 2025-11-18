import ArrowRight from '@/app/icons/arrowRight';
import ChevronDownIcon from '@/app/icons/chevronDownIcon';
import ClipIcon from '@/app/icons/clipIcon';
import FilterIcon from '@/app/icons/filterIcon';
import PlusIcon from '@/app/icons/plusIcon';
import WaveIcon from '@/app/icons/waveIcon';

function Search() {
  return (
    <div className="bg-[#1D2125] max-w-[800px] w-[600px] rounded-4xl">
      <textarea
        placeholder="Describe your song"
        className="font-normal placeholder:text-[#5D6165] placeholder:font-normal w-full outline-none resize-none p-6 pb-0"
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
          <button className="w-9 h-9 grid place-content-center bg-[#44484C] rounded-full cursor-pointer scale-100 transition duration-200 hover:scale-105 hover:bg-white">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
