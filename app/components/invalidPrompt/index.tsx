function InvalidPrompt() {
  return (
    <div className="flex items-start gap-3 p-2">
      <div
        className="min-h-[60px] min-w-[60px] rounded-2xl grid place-items-center"
        style={{
          background:
            'linear-gradient(312.88deg, #C800FF 0%, #FF2C9B 29.4%, #FF7B00 67.47%, #FF8504 85.3%, #FFD363 96.39%)',
        }}
      >
        <p className="text-4xl h-9">🥲</p>
      </div>
      <div className="flex flex-col gap-2 max-w-[280px]">
        <p className="font-semibold text-sm">Invalid prompt</p>
        <p className="text-sm font-normal bg-linear-(--text-gradient) bg-clip-text text-transparent truncate">
          This is not good prompt, throw invalid prompt
        </p>
        <p className="font-medium text-[#E4E6E8] text-sm">
          Your prompt does not seem to be valid. Please provide a prompt related
          to song creation, remixing, covers, or similar music tasks.
        </p>
        <div className="flex gap-1">
          <button className="text-sm text-[#9DA0A6] border border-solid border-[#9DA0A6] p-1 px-2 h-[30px] rounded-lg hover:bg-[#262A2E] cursor-pointer">
            Retry
          </button>
          <button className="text-sm text-[#9DA0A6] border border-solid border-[#9DA0A6] p-1 px-2 h-[30px] rounded-lg hover:bg-[#262A2E] cursor-pointer">
            Copy Prompt
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvalidPrompt;
