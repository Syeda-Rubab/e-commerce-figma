import React from "react";
import { ChevronRight } from "lucide-react";
import ShopBannerSection from "@/components/sections/shop/ShopBannerSection";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";

function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-shop-hero h-[316px] flex justify-center flex-col items-center">
        <p className="font-medium text-[48px] sm:text-[36px] xs:text-[28px]">Contact</p>
        <div className="flex gap-2">
          <p className="font-bold">Home</p>
          <ChevronRight />
          <p>Contact</p>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white py-16 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 text-center">
          Get In Touch with Us
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed text-center">
          For more information about our products and services, please feel
          free to Drop us<br/> An Email. Our staff will always be there to help
          you out. Do not hesitate!
        </p>

        {/* Main Content */}
        <div className="mt-32 flex flex-col lg:flex-row lg:gap-16">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <h1 className="relative left-48 font-bold flex items-center mb-4">
              Address  <MdLocationPin className="relative right-24" />
            </h1>
            <p className="mb-4 relative left-48">
              236 5th SE Avenue,<br /> New York NY 10000, United States
            </p>

            <h1 className="font-bold flex items-center mb-1 relative left-[25%]">
              <FaPhoneAlt className="mr-2 relative right-2" /> Phone
            </h1>
            <p className="mb-2 relative left-48">Mobile: +(84) 546-6789</p>
            <p className="mb-6 relative left-48">Hotline: +(84) 456-6789</p>

            <h1 className="font-bold flex items-center mb-4 relative left-[25%]">
              <MdWatchLater className="mr-2 relative right-2" /> Working Time
            </h1>
            <p className="relative left-48">Monday-Friday: 9:00 - 22:00</p>
            <p className="relative left-48">Saturday-Sunday: 9:00 - 21:00</p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 relative -left-10">
            <div className="mb-4">
              <h1 className="mb-2">Your Name</h1>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-400 rounded-lg px-40 py-3  text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <h1 className="mb-2">Email Address</h1>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-400 rounded-lg px-40 py-3  text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <h1 className="mb-2">Subject</h1>
              <input
                type="text"
                placeholder="Enter subject (optional)"
                className="border border-gray-400 rounded-lg px-40 py-3  text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <h1 className="mb-2">Message</h1>
              <textarea
                placeholder="Enter your message"
                className="border border-gray-400 rounded-lg px-44 pt-2  text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={6}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="px-14 py-2 rounded-sm text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-300" style={{ backgroundColor: '#C19531', color: "#FFFFFF" }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Banner Section */}
      <div className="relative top-10">
        <ShopBannerSection />
      </div>
    </div>
  );
}

export default ContactPage;

