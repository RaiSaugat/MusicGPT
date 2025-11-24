import GenerationList from './components/generationList';
import Profile from './components/profile';
import Search from './components/search';
import Sidebar from './components/sidebar';

export default function Home() {
  return (
    <div className="bg-background h-full">
      <main className="p-4">
        <Sidebar />
        <Profile />

        <div className="relative ml-[200px] flex flex-col items-center mt-64">
          <div className="flex flex-col items-center gap-[30px] w-[800px]">
            <h1 className="font-semibold text-[32px] text-[#E4E6E8]">
              What Song to Create?
            </h1>

            <Search />

            <p className="text-[#FFFFFF40] font-normal text-sm flex gap-3">
              <span>MusicGPT v6 Pro - Our latest AI audio model</span>
              <span className="underline cursor-pointer">Example prompts</span>
            </p>
          </div>

          <div className="mt-[254px] w-[800px]">
            <GenerationList />
          </div>
        </div>
      </main>
    </div>
  );
}
