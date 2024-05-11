import { Button } from "@/components/ui/button";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ShareJob = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap mt-10">
      <span className="text-">Share this job </span>
      <Button
        isRipple
        className="text-sm flex items-center gap-2 !bg-primary-blue !hover:bg-primary-blue/90"
      >
        <FaFacebookF />
        Facebook
      </Button>
      <Button
        isRipple
        className="text-sm flex items-center gap-2 !bg-[#59a8e4] !hover:bg-[#78BDF2]"
      >
        <FaXTwitter /> Twitter
      </Button>
      <Button
        isRipple
        className="text-sm flex items-center gap-2 !bg-[#2b98ca] !hover:bg-[#3696C3]"
      >
        <FaLinkedinIn /> Linkedin
      </Button>
    </div>
  );
};

export default ShareJob;
