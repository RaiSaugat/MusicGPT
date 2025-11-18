'use client';

import { useState } from 'react';

import './profile.css';

import CrossWithCircleIcon from '@/app/icons/crossWithCircleIcon';
import DangerIcon from '@/app/icons/dangerIcon';
import InfoIcon from '@/app/icons/infoIcon';
import SettingIcon from '@/app/icons/settingIcon';
import NotificationItem from './notificationItem';
import InvalidPrompt from '../invalidPrompt';
import ChevronRightIcon from '@/app/icons/chevronRightIcon';

function ProfileDropdown() {
  return (
    <div className="profile__card w-[400px] absolute top-[calc(100%+12px)] right-0">
      <div className="rounded-[20px] w-full max-h-[639px] px-4 py-5 text-white border border-solid border-[#1D2125] overflow-y-auto relative pb-20 bg-[#16191C]">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center justify-center gap-3">
            <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-linear-(--border-gradient) p-0.5">
              <div className="rounded-full bg-black w-full h-full flex items-center justify-center">
                <p className="text-xl font-normal">J</p>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-medium text-[#E4E6E8]">Johnny</p>
              <p className="text-sm font-normal text-[#898C92]">@Johnny</p>
            </div>
          </div>

          <SettingIcon />
        </div>

        {/* Credit block */}
        <div className="rounded-xl bg-[#212529] p-4 flex items-center justify-between text-sm">
          <p className="flex items-center gap-1 font-semibold text-[#E4E6E8]">
            <span>120/500 credits</span> <InfoIcon />
          </p>

          <p className="flex items-center gap-1 text-[#777A80] font-medium">
            <span>Top Up</span>
            <ChevronRightIcon />
          </p>
        </div>

        <span className="inline-block border-[#303438] border border-solid w-full my-5" />

        {/* Credit Balance block */}
        <div className="relative rounded-xl bg-[#D89C3A14] p-4 flex items-center justify-between text-sm">
          <button className="absolute -right-2 -top-2">
            <CrossWithCircleIcon />
          </button>
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 font-medium text-sm text-[#D89C3A]">
              <DangerIcon />
              <span>Insufficient credits</span>
            </p>
            <p className="font-medium text-[#BFC2C8] text-sm">
              Your credit balance : 0
            </p>
          </div>

          <button className="h-8 p-3 text-white font-medium text-sm rounded-[10px] border border-solid border-[#5D6165] flex items-center cursor-pointer">
            Top Up
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <NotificationItem
            version="v1"
            percent={0}
            step="Generating"
            title="Create a funky house song with female vocals"
          />
          <NotificationItem
            version="v2"
            percent={50}
            step="Starting AI audio engine"
            title="Create a funky house song with female vocals"
          />

          <div className="bg-[#EE0D3714] p-4 rounded-xl flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <DangerIcon color="#EE0D37" />
              <p className="text-[#EE0D37] font-normal text-sm">
                Oops! Server busy.
              </p>
            </div>
            <p className="text-sm font-normal text-[#BFC2C8]">
              4.9K users in the queue. <span className="underline">Retry</span>
            </p>
          </div>

          <InvalidPrompt />

          <NotificationItem
            version="v1"
            percent={50}
            step="Out in the street"
            title="Create a funky house song with female vocals"
          />
        </div>
      </div>
    </div>
  );
}

function Profile() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="relative">
      <div
        className="ml-auto w-10 h-10 rounded-full flex items-center justify-center bg-linear-(--border-gradient) p-0.5 relative cursor-pointer"
        onClick={() => setShowDropdown((s) => !s)}
      >
        <div className="rounded-full bg-black w-full h-full flex items-center justify-center">
          <p className="text-xl font-normal">J</p>
        </div>

        <div className="w-4 h-4 rounded-full bg-[#6BFFAC] grid place-items-center absolute -top-0.5 -right-0.5">
          <span className="font-semibold text-[10px] text-[#16191C]">2</span>
        </div>
      </div>

      {showDropdown && <ProfileDropdown />}
    </div>
  );
}

export default Profile;
