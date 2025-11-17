import Image from 'next/image';

import CmdIcon from '@/app/icons/cmdIcon';
import CompassIcon from '@/app/icons/compassIcon';
import CreateIcon from '@/app/icons/createIcon';
import HeartIcon from '@/app/icons/heartIcon';
import HomeIcon from '@/app/icons/homeIcon';
import PlusIcon from '@/app/icons/plusIcon';
import ProfileIcon from '@/app/icons/profileIcon';
import SearchIcon from '@/app/icons/searchIcon';
import UsaFlag from '@/app/icons/usaFlag';
import ChevronDownIcon from '@/app/icons/chevronDownIcon';

function Sidebar() {
  const Menu = [
    {
      icon: <HomeIcon />,
      title: 'Home',
    },

    {
      icon: <CreateIcon />,
      title: 'Create',
    },

    {
      icon: <CompassIcon />,
      title: 'Explore',
    },
  ];

  const LibraryMenu = [
    {
      icon: <ProfileIcon />,
      title: 'Profile',
    },

    {
      icon: <HeartIcon />,
      title: 'Liked',
    },

    {
      icon: <PlusIcon />,
      title: 'New playlist',
    },
  ];

  const FooterLinks = [
    'Pricing',
    'Affiliate',
    'API',
    'About',
    'Terms',
    'Privacy',
  ];

  return (
    <div className="w-[200px] h-screen p-4 bg-sidebar-bg text-white flex flex-col gap-8">
      <h1 className="flex items-center gap-1.5">
        <Image
          src="/logo.png"
          alt="Music GPT Logo"
          width={32}
          height={32}
          priority
        />
        MusicGPT
      </h1>

      <div className="w-[146px] rounded-[30px] flex justify-between px-4 py-2.5 h-[37px] items-center border-[#ffffff29] border border-solid">
        <SearchIcon />
        <p className="font-medium text-sm">Search</p>
        <div className="flex items-center opacity-20">
          <CmdIcon />K
        </div>
      </div>

      <div className="flex flex-col gap-[3px] w-max">
        {Menu.map((item, index) => (
          <div
            key={item.title + index}
            className="py-[8.5px] rounded-full px-4 cursor-pointer font-medium text-sm text-white flex items-center gap-2 hover:bg-[#2D2F30] transition-all duration-100"
          >
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>

      <div>
        <p className="py-[8.5px] rounded-full px-4 font-medium text-sm text-[#FFFFFF80]">
          Library
        </p>
        {LibraryMenu.map((item, index) => (
          <div
            key={item.title + index}
            className="py-[8.5px] rounded-full px-4 cursor-pointer font-medium text-sm text-white flex items-center gap-2 hover:bg-[#2D2F30] transition-all duration-100"
          >
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-2.5 px-3 rounded-xl bg-linear-(--gradient) mt-auto">
        <p className="font-semibold text-xs">Model v6 Pro is here!</p>
        <p className="font-normal text-xs text-[#FFFFFFA3]">
          Pushing boundaries to the world’s best AI music model
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {FooterLinks.map((link, index) => (
          <span
            key={link + index}
            className="text-[#FFFFFF80] text-xs cursor-pointer font-medium hover:underline"
          >
            {link}
          </span>
        ))}

        <p className="text-[#FFFFFF80] text-xs cursor-pointer font-medium hover:underline flex items-center gap-0.5">
          <UsaFlag /> EN
          <ChevronDownIcon />
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
