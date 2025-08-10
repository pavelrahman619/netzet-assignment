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
        <span className="font-normal ml-1">Extra 25% OFF, Limited Spots - start your journey today!</span>
      </div>

      {/* Header & Hero Wrapper */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-6 lg:pt-10 flex items-center justify-between">
        {/* Logo (text-based approximation) */}
        <a href="#" className="flex flex-col leading-none select-none">
          <span className="text-4xl sm:text-[46px] font-extrabold tracking-tight text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]">fame</span>
          <span className="-mt-2 text-4xl sm:text-[46px] font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-pink-400 to-fuchsia-600 text-transparent bg-clip-text drop-shadow-[0_0_6px_rgba(255,0,180,0.55)]">tonic</span>
        </a>

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
            {/* Glow ring background approximation */}
            <div className="absolute -top-10 -left-6 right-0 mx-auto w-[140%] aspect-square rounded-full blur-3xl opacity-40 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-blue-600 pointer-events-none select-none" />
            <Image
              src="/influe.png"
              alt="App preview"
              width={900}
              height={900}
              priority
              className="relative w-full h-auto drop-shadow-[0_0_18px_rgba(0,200,255,0.25)]"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col max-w-[690px]">
          <h1 className="text-[32px] leading-[1.15] sm:text-[40px] md:text-[44px] font-semibold tracking-tight mb-5 pr-4">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h2 className="text-[30px] sm:text-[38px] md:text-[42px] font-extrabold leading-snug tracking-tight mb-8 bg-gradient-to-r from-cyan-300 via-pink-400 to-fuchsia-600 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,0,180,0.6)]">
            Discover your way to success with Fametonic:
          </h2>
          <ul className="space-y-5 text-[17px] sm:text-[18px] leading-relaxed font-medium mb-10">
            <li className="flex gap-3"><span className="text-yellow-300 text-xl leading-none">✨</span><span>Start growing your influence right away—no waiting required!</span></li>
            <li className="flex gap-3"><span className="text-yellow-300 text-xl leading-none">✨</span><span>Create viral TikToks and Reels step by step with easy-to-follow lessons</span></li>
            <li className="flex gap-3"><span className="text-yellow-300 text-xl leading-none">✨</span><span>Use a Personal AI Worker to boost your content</span></li>
            <li className="flex gap-3"><span className="text-yellow-300 text-xl leading-none">✨</span><span>Learn from expert-led courses designed for aspiring influencers</span></li>
          </ul>
          <div className="w-full">
            <a
              href="#get-started"
              className="relative inline-flex justify-center items-center w-full sm:w-auto text-center font-semibold text-[20px] tracking-wide bg-[#ff0069] text-white px-10 py-4 rounded-md shadow-[0_0_18px_4px_rgba(0,255,247,0.5)]"
            >
              GET STARTED <span className="ml-2 text-[22px]" aria-hidden>›</span>
            </a>
            <p className="mt-3 text-[11px] sm:text-xs text-center sm:text-left opacity-80">1-minute quiz for personalized Insights</p>
          </div>
          <p className="mt-12 text-[11px] sm:text-[12px] leading-relaxed text-center sm:text-left opacity-80 px-2 sm:px-0">
            By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
          </p>
          <p className="mt-6 text-[11px] sm:text-[12px] text-center sm:text-left opacity-70">Fametonic 2025 ©All Rights Reserved.</p>
        </div>
      </main>
    </div>
  );
}
