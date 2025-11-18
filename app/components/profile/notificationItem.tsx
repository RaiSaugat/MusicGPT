import Image from 'next/image';

function NotificationItem({
  version,
  percent,
  title,
  step,
}: {
  version: string;
  percent: number;
  title: string;
  step: string;
}) {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-[#222528] rounded-3xl cursor-pointer">
      <div className="min-w-16 min-h-16 rounded-2xl gap-2.5 grid place-items-center relative overflow-hidden">
        <Image src="/pic.png" alt="Item" fill={true} />
        <span className="text-xs font-medium text-[#FFFFFF80]">{percent}</span>
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
