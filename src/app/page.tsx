"use client";

import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans flex flex-col">
      {/* Top Promo Bar */}
      <div className="w-full bg-gradient-to-r from-[#ff0b7b] via-[#ff2f69] to-[#00c4ff] text-white text-center text-[13px] sm:text-sm font-semibold tracking-tight py-3 px-4 leading-snug">
        <span role="img" aria-label="rocket" className="mr-1">🚀</span>
        <span className="uppercase" style={{ color: '#00E7F9' }}>Fresh Beginnings Sale:</span>
        <span className="font-normal ml-1">
          Extra 25% OFF,
          <span className="inline sm:hidden"><br /></span>
          <span className="hidden sm:inline"> </span>
          Limited Spots - start your journey today!
        </span>
      </div>

      {/* Header & Hero Wrapper */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-6 lg:pt-10 flex items-center justify-between relative">
        {/* Centered logo on mobile, left on desktop */}
        <div className="flex-1 flex justify-center md:justify-start">
          <a href="#" className="flex items-center select-none" aria-label="Home">
            <Image
              src="/logo.png"
              alt="Fametonic Logo"
              width={140}
              height={60}
              priority
              className="h-[48px] w-auto sm:h-[60px]"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#about" className="hover:underline inline-block">About us</a>
          <a href="#contact" className="hover:underline inline-block">Contact</a>
        </nav>

        {/* Mobile Menu Icon (static link) */}
        <a href="#menu" aria-label="Menu" className="md:hidden flex flex-col gap-1.5">
          <span className="w-8 h-0.5 bg-white" />
          <span className="w-8 h-0.5 bg-white" />
          <span className="w-8 h-0.5 bg-white" />
        </a>
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-10 md:pt-12 pb-14 lg:pb-24 flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-20">
        {/* Image (mobile top, desktop right) */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end mb-10 lg:mb-0">
          <div className="relative max-w-[460px] w-full">
            <Image
              src="/influe.png"
              alt="App preview"
              width={900}
              height={900}
              priority
              className="relative w-full h-auto"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col max-w-[690px]">
            <h1 className="text-[32px] leading-[1.15] sm:text-[40px] md:text-[44px] font-semibold tracking-tight mb-5 pr-4 text-center sm:text-left">
            Want to Turn Social Media Into a Profitable Career?
            </h1>
            <h2
              className="text-[30px] sm:text-[38px] md:text-[42px] font-extrabold leading-snug tracking-tight mb-8 text-center"
              style={{
                color: '#00E7F9',
                textShadow: '0px 4px 4px #FC004E'
              }}
            >
              Discover your way to success with Fametonic:
            </h2>
          <ul className="space-y-5 text-[17px] sm:text-[18px] leading-relaxed font-medium">
            <li className="flex gap-3"><span className="text-yellow-300 text-xl leading-none">✨</span><span>Start growing your influence right away—no waiting required!</span></li>
            <li className="flex gap-3"><span className="text-yellow-300 text-xl leading-none">✨</span><span>Create viral TikToks and Reels step by step with easy-to-follow lessons</span></li>
            <li className="flex gap-3"><span className="text-yellow-300 text-xl leading-none">✨</span><span>Use a Personal AI Worker to boost your content</span></li>
            <li className="flex gap-3"><span className="text-yellow-300 text-xl leading-none">✨</span><span>Learn from expert-led courses designed for aspiring influencers</span></li>
          </ul>
          {/* Mobile: Show legal and copyright above button */}
          <div className="block sm:hidden">
            <p className="mt-8 text-[12px] leading-relaxed text-center opacity-80 px-10">
              By clicking "Get Started", you agree with Terms and <br /> Conditions, Privacy Policy, Subscription Terms
            </p>
            <p className="mt-4 text-[12px] text-center opacity-70">Fametonic 2025 ©All Rights Reserved.</p>
            <br />
          </div>
          <div className="w-full">
            <a
              href="#get-started"
              className="relative inline-flex justify-center items-center w-full sm:w-auto text-center font-semibold text-[20px] tracking-wide text-white px-10 py-4"
              style={{
                background: '#FC004E',
                boxShadow: '2px 2px 10px #00E7F9',
                borderRadius: '10px'
              }}
            >
              GET STARTED <span className="ml-2 text-[22px]" aria-hidden>›</span>
            </a>
            <p className="mt-3 text-[12px] sm:text-xs text-center sm:text-left">1-minute quiz for personalized Insights</p>
          </div>
          {/* Desktop: Show legal and copyright below button */}
          <p className="hidden sm:block mt-12 text-[12px] leading-relaxed text-left opacity-80 px-0">
            By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
          </p>
          <p className="hidden sm:block mt-6 text-[12px] text-left opacity-70">Fametonic 2025 ©All Rights Reserved.</p>
        </div>
      </main>
    </div>
  );
}
