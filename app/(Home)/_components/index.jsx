"use client";
import { Camera, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const HomeIndex = () => {
  const router = useRouter();

  let userinfo;
  if (typeof window !== "undefined") {
    userinfo = JSON.parse(localStorage.getItem("userinfo"));
  }
  // console.log(userinfo);
  useEffect(() => {
    if (!userinfo) {
      router.push("/login");
    }
  }, [userinfo, router]);
  // // console.log(userinfo)

  return (
    <div className="w-full">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

const Navbar = () => {
  const navbarlist = ["About", "Contact"];

  return (
    <div className="w-full py-6 bg-[#000] flex">
      <div className="w-full px-8 flex items-center justify-between">
        <span className="text-lg md:text-2xl font-bold flex items-center gap-3 text-white">
          <Lock />
          Secure Voting
        </span>
        <div className="flex items-center gap-8 justify-end">
          <div className="hidden lg:flex items-center gap-8">
            {navbarlist?.map((nav, index) => {
              return (
                <Link
                  key={index}
                  className="text-base font-normal text-[#fff]"
                  href={"/"}
                >
                  {nav}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-6">
            <Link
              href={"/register"}
              className="p-2 px-4 rounded-sm text-base font-normal text-dark bg-[#f7f7f7]"
            >
              Sign Up
            </Link>

            <Link
              href={"/login"}
              className="p-2 px-4 rounded-sm md:flex hidden text-base font-normal hover:text-[#000] text-[#fff] cursor-pointer hover:bg-[#f7f7f7]"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  let userinfo = null;
  if (typeof window !== "undefined") {
    userinfo = JSON.parse(localStorage.getItem("userinfo"));
  }

  const handleVotingEligibility = () => {
    if (userinfo?.details?.age < 18) {
      toast.error("You are not eligible to vote");
    } else {
      toast.error("You are eligible to vote");
    }
  };

  const votingData = [
    {
      title: " Upgrade Community CenterInstall Solar Panels",
      subText: "  Implement a solar energy system for the community.",
    },
    {
      title: "   Upgrade Community Center",
      subText: "  Renovate and expand the community center.",
    },
    {
      title: "          Improve Local Park",
      subText: " Renovate and expand the community park.",
    },
  ];

  return (
    <div className="w-full py-20 flex flex-col gap-4">
      <div className="w-[90%] rounded-2xl md:w-[550px] mx-auto border p-12 shadow-xl px-8 flex flex-col gap-8 ">
        <span className="text-3xl font-bold gap-3 text-[#000]">
          Community Voting
          <span className="block font-normal text-base text-grey">
            Review the projects and cast your secure vote.
          </span>
        </span>
        <div className="flex flex-col gap-4">
          {votingData?.map((voteItem, index) => {
            return (
              <div
                key={index}
                className="text-base flex items-center justify-between gap-4 font-semibold"
              >
                <span className="block text-base font-bold">
                  {voteItem?.title}
                  <span className="block text-sm font-normal">
                    {voteItem?.subText}
                  </span>
                </span>
                <div
                  onClick={handleVotingEligibility}
                  className="p-2 hover:opacity-[.78] hover:shadow-lg cursor-pointer px-4 rounded-sm text-base text-center font-semibold border"
                >
                  Vote
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const navbarlist = ["About", "Contact"];

  return (
    <div className="w-full sticky bottom-0 py-3 bg-[#000] flex">
      <div className="w-full px-8 flex items-center justify-between">
        <span className="text-sm font-normal flex items-center gap-3 text-white">
          © 2024 Secure Voting. All rights reserved.
        </span>
        <div className="flex items-center gap-8 justify-end">
          <div className="text-sm font-semibold text-[#fff] ">
            Powe
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeIndex;
