import Profile from './components/profile';
import Search from './components/search';
import Sidebar from './components/sidebar';

export default function Home() {
  return (
    <div className="bg-background h-full">
      <main className="p-4">
        <Sidebar />
        <Profile />

        <div className="relative ml-[200px]">
          <div className="absolute top-50 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[30px]">
            <h1 className="font-semibold text-[32px] text-[#E4E6E8]">
              What Song to Create?
            </h1>

            <Search />

            <p className="text-[#FFFFFF40] font-normal text-sm flex gap-3">
              <span>MusicGPT v6 Pro - Our latest AI audio model</span>
              <span className="underline cursor-pointer">Example prompts</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
