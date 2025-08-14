<template>
  <div>
    <section id="vision" class="relative text-center py-24 px-4 rounded-2xl overflow-hidden shadow-xl bg-gray-800 text-white">
      <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-cyan-800/40"></div>
      
      <!-- ENHANCED ULTRA-VISIBLE SEQUENTIAL WINDSHIELD RAINDROPS for Accessibility -->
      <!-- ROW 1 - TOP SECTION -->
      <div class="absolute w-12 h-15 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 8%; left: 10%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.1s; animation-fill-mode: forwards; box-shadow: 0 0 10px rgba(255,255,255,0.6);"></div>
      <div class="absolute w-14 h-17 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 12%; left: 22%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.2s; animation-fill-mode: forwards; box-shadow: 0 0 12px rgba(255,255,255,0.5);"></div>
      <div class="absolute w-10 h-13 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 10%; left: 34%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.3s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.7);"></div>
      <div class="absolute w-16 h-19 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 14%; left: 46%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.4s; animation-fill-mode: forwards; box-shadow: 0 0 14px rgba(255,255,255,0.4);"></div>
      <div class="absolute w-11 h-14 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 9%; left: 58%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.5s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.6);"></div>
      <div class="absolute w-13 h-16 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 13%; left: 70%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.6s; animation-fill-mode: forwards; box-shadow: 0 0 11px rgba(255,255,255,0.5);"></div>
      <div class="absolute w-9 h-12 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 11%; left: 82%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.7s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.7);"></div>
      <div class="absolute w-15 h-18 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 15%; left: 94%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.8s; animation-fill-mode: forwards; box-shadow: 0 0 13px rgba(255,255,255,0.4);"></div>
      
      <!-- ROW 2 - UPPER MIDDLE -->
      <div class="absolute w-10 h-13 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 24%; left: 5%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.9s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
      <div class="absolute w-12 h-15 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 28%; left: 16%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.0s; animation-fill-mode: forwards; box-shadow: 0 0 10px rgba(255,255,255,0.5);"></div>
      <div class="absolute w-8 h-11 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 26%; left: 28%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.1s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.7);"></div>
      <div class="absolute w-14 h-17 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 30%; left: 40%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.2s; animation-fill-mode: forwards; box-shadow: 0 0 12px rgba(255,255,255,0.4);"></div>
      <div class="absolute w-9 h-12 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 25%; left: 52%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.3s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.6);"></div>
      <div class="absolute w-11 h-14 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 29%; left: 64%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.4s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.5);"></div>
      <div class="absolute w-13 h-16 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 27%; left: 76%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.5s; animation-fill-mode: forwards; box-shadow: 0 0 11px rgba(255,255,255,0.5);"></div>
      <div class="absolute w-10 h-13 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 31%; left: 88%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.6s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
      
      <!-- ADDITIONAL ENHANCED DROPLETS for maximum saturation and ultra-visibility -->
      <div class="absolute w-8 h-10 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 15%; left: 3%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 8.6s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.7);"></div>
      <div class="absolute w-12 h-14 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 35%; left: 97%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 8.7s; animation-fill-mode: forwards; box-shadow: 0 0 10px rgba(255,255,255,0.5);"></div>
      <div class="absolute w-10 h-12 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 55%; left: 2%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 8.8s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
      <div class="absolute w-14 h-16 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 75%; left: 95%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 8.9s; animation-fill-mode: forwards; box-shadow: 0 0 12px rgba(255,255,255,0.4);"></div>
      <div class="absolute w-9 h-11 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 95%; left: 5%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 9.0s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.7);"></div>
            <div class="absolute w-10 h-11 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 75%; left: 47%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 8.5s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-7 h-8 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 11%; left: 62%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 8.6s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-11 h-12 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 39%; left: 89%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 8.7s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-9 h-10 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 67%; left: 2%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 8.8s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-8 h-9 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 92%; left: 72%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 8.9s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-12 h-13 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 18%; left: 14%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 9.0s; animation-fill-mode: forwards; box-shadow: 0 0 10px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-10 h-11 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 86%; left: 95%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 9.1s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-9 h-10 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 54%; left: 71%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 9.2s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
            
            <!-- MAXIMUM COVERAGE - Final layer for complete windshield saturation -->
            <div class="absolute w-8 h-9 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 7%; left: 41%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 9.3s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-10 h-11 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 96%; left: 51%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 9.4s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-7 h-8 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 43%; left: 97%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 9.5s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.7);"></div>
            <div class="absolute w-11 h-12 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 61%; left: 17%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 9.6s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-9 h-10 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 84%; left: 7%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 9.7s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-8 h-9 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 29%; left: 76%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 9.8s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-12 h-13 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 52%; left: 84%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 9.9s; animation-fill-mode: forwards; box-shadow: 0 0 10px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-10 h-11 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 77%; left: 59%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 10.0s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-8 h-9 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 99%; left: 31%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 10.1s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.7);"></div>
            <div class="absolute w-13 h-15 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 35%; left: 54%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 10.2s; animation-fill-mode: forwards; box-shadow: 0 0 11px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-11 h-12 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 13%; left: 9%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 10.3s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-9 h-10 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 71%; left: 85%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 10.4s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-14 h-16 bg-white/75 rounded-full opacity-0 animate-pulse" style="top: 46%; left: 25%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 10.5s; animation-fill-mode: forwards; box-shadow: 0 0 12px rgba(255,255,255,0.3);"></div>shadow-xl bg-gray-800 text-white">
      <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-cyan-800/40"></div>
      <div class="relative z-10">
        <h1 class="text-5xl md:text-6xl font-extrabold text-white" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">
          Protecting Every Drop
        </h1>
        <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-200" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.5);">
          Water is our most precious resource. Learn about our comprehensive strategy to conserve water, improve efficiency, and protect our local watershed.
        </p>
      </div>
    </section>

    <section id="consumption" ref="consumptionSection" class="text-center py-12">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Measuring Our Consumption</h2>
        <p class="mt-2 text-lg text-gray-500 dark:text-gray-400">Understanding our usage is the first step toward conservation.</p>
        <div class="mt-8 flex justify-center items-center gap-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-blue-400 dark:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.354 0 2.653-.255 3.84-.717M12 21c-1.354 0-2.653-.255-3.84-.717M12 3c1.354 0 2.653-.255 3.84-.717M12 3c-1.354 0-2.653-.255-3.84-.717m6.113 13.56c-2.48.513-5.26.513-7.74 0M1.5 9.75h1.5a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75zm21 0h-1.5a.75.75 0 00-.75.75v3a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75z" /></svg>
            <div>
                <span ref="consumptionNumber" class="text-6xl font-extrabold text-gray-800 dark:text-gray-100">0</span>
                <span class="text-2xl font-medium text-gray-500 dark:text-gray-400">Tons/Month</span>
            </div>
        </div>
        <p class="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto">This is the average monthly water consumption across campus. Our goal is to reduce this through the following initiatives.</p>
    </section>

    <section id="solutions" class="space-y-20">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="relative rounded-2xl overflow-hidden shadow-lg h-96 group">
          <img :src="efficientImage" alt="Water conservation concept" class="w-full h-full object-cover">
          <!-- Magical rainy day window - complete windshield water droplet coverage -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            
            <!-- MASSIVE DROPLET COVERAGE - Sequential appearance animation -->
            <!-- ROW 1 - TOP SECTION -->
            <div class="absolute w-10 h-12 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 5%; left: 3%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.1s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-8 h-10 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 8%; left: 12%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.2s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-14 h-17 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 6%; left: 22%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.3s; animation-fill-mode: forwards; box-shadow: 0 0 10px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-6 h-8 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 10%; left: 33%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.4s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-11 h-13 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 7%; left: 42%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.5s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-12 h-14 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 12%; left: 53%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.6s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-7 h-9 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 9%; left: 63%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.7s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.7);"></div>
            <div class="absolute w-9 h-11 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 6%; left: 72%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.8s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-13 h-15 bg-white/75 rounded-full opacity-0 animate-pulse" style="top: 11%; left: 82%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 0.9s; animation-fill-mode: forwards; box-shadow: 0 0 10px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-8 h-10 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 8%; left: 92%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.0s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.6);"></div>
            
            <!-- ROW 2 - UPPER-MID SECTION -->
            <div class="absolute w-9 h-11 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 18%; left: 5%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.1s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-7 h-8 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 22%; left: 15%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.2s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-11 h-13 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 20%; left: 26%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.3s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-10 h-12 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 24%; left: 37%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.4s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-8 h-9 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 19%; left: 47%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.5s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-12 h-14 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 23%; left: 58%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.6s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-6 h-7 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 21%; left: 68%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.7s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.7);"></div>
            <div class="absolute w-10 h-11 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 25%; left: 77%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.8s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-9 h-10 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 18%; left: 87%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 1.9s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-7 h-8 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 22%; left: 95%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 2.0s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.6);"></div>
            
            <!-- ROW 3 - MID SECTION -->
            <div class="absolute w-11 h-13 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 32%; left: 7%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 2.1s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-8 h-10 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 36%; left: 18%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 2.2s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-13 h-15 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 34%; left: 29%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 2.3s; animation-fill-mode: forwards; box-shadow: 0 0 10px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-9 h-11 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 38%; left: 40%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 2.4s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-10 h-12 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 33%; left: 51%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 2.5s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-7 h-8 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 37%; left: 61%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 2.6s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.7);"></div>
            <div class="absolute w-12 h-14 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 35%; left: 71%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 2.7s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-8 h-9 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 39%; left: 82%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 2.8s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-6 h-7 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 32%; left: 92%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 2.9s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.7);"></div>
            
            <!-- ROW 4 - LOWER-MID SECTION -->
            <div class="absolute w-10 h-12 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 46%; left: 4%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 3.0s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-14 h-16 bg-white/75 rounded-full opacity-0 animate-pulse" style="top: 50%; left: 16%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 3.1s; animation-fill-mode: forwards; box-shadow: 0 0 11px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-8 h-10 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 48%; left: 28%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 3.2s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-11 h-13 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 52%; left: 39%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 3.3s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-9 h-11 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 47%; left: 50%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 3.4s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-7 h-8 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 51%; left: 60%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 3.5s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.7);"></div>
            <div class="absolute w-12 h-14 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 49%; left: 70%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 3.6s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-10 h-12 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 53%; left: 81%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 3.7s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-8 h-9 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 46%; left: 91%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 3.8s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.6);"></div>
            
            <!-- ROW 5 - LOWER SECTION -->
            <div class="absolute w-9 h-11 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 62%; left: 6%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 3.9s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-11 h-13 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 66%; left: 17%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 4.0s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-13 h-16 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 64%; left: 29%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 4.1s; animation-fill-mode: forwards; box-shadow: 0 0 10px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-7 h-9 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 68%; left: 41%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 4.2s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.7);"></div>
            <div class="absolute w-10 h-12 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 63%; left: 52%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 4.3s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-8 h-10 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 67%; left: 63%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 4.4s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-12 h-14 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 65%; left: 74%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 4.5s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-9 h-11 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 69%; left: 85%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 4.6s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-6 h-7 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 62%; left: 94%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 4.7s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.7);"></div>
            
            <!-- ROW 6 - BOTTOM SECTION -->
            <div class="absolute w-8 h-10 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 78%; left: 8%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 4.8s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-10 h-12 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 82%; left: 20%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 4.9s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-7 h-8 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 80%; left: 32%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 5.0s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-11 h-13 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 84%; left: 43%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 5.1s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-9 h-11 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 79%; left: 55%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 5.2s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-12 h-14 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 83%; left: 66%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 5.3s; animation-fill-mode: forwards; box-shadow: 0 0 9px rgba(255,255,255,0.4);"></div>
            <div class="absolute w-8 h-10 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 81%; left: 77%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 5.4s; animation-fill-mode: forwards; box-shadow: 0 0 7px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-10 h-12 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 85%; left: 88%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 5.5s; animation-fill-mode: forwards; box-shadow: 0 0 8px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-6 h-7 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 78%; left: 96%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 5.6s; animation-fill-mode: forwards; box-shadow: 0 0 6px rgba(255,255,255,0.7);"></div>
            
            <!-- SMALL SCATTERED DROPLETS - Fill gaps everywhere with sequential timing -->
            <div class="absolute w-5 h-6 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 14%; left: 8%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 5.7s; animation-fill-mode: forwards; box-shadow: 0 0 5px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-4 h-5 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 27%; left: 23%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 5.8s; animation-fill-mode: forwards; box-shadow: 0 0 4px rgba(255,255,255,0.7);"></div>
            <div class="absolute w-6 h-7 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 41%; left: 35%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 5.9s; animation-fill-mode: forwards; box-shadow: 0 0 5px rgba(255,255,255,0.5);"></div>
            <div class="absolute w-5 h-6 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 55%; left: 48%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 6.0s; animation-fill-mode: forwards; box-shadow: 0 0 5px rgba(255,255,255,0.7);"></div>
            <div class="absolute w-4 h-5 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 72%; left: 58%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 6.1s; animation-fill-mode: forwards; box-shadow: 0 0 4px rgba(255,255,255,0.6);"></div>
            <div class="absolute w-6 h-7 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 87%; left: 73%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.2px); animation-delay: 6.2s; animation-fill-mode: forwards; box-shadow: 0 0 5px rgba(255,255,255,0.6);"></div>
            
            <!-- Additional gap fillers -->
            <div class="absolute w-3 h-4 bg-white/75 rounded-full opacity-0 animate-pulse" style="top: 16%; left: 38%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 6.3s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-2 h-3 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 29%; left: 54%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 6.4s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-4 h-5 bg-white/70 rounded-full opacity-0 animate-pulse" style="top: 43%; left: 66%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 6.5s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-3 h-4 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 57%; left: 79%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 6.6s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-2 h-3 bg-white/80 rounded-full opacity-0 animate-pulse" style="top: 74%; left: 12%; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; filter: blur(0.3px); animation-delay: 6.7s; animation-fill-mode: forwards;"></div>
            
            <!-- TINY WATER BEADS - Complete saturation with sequential appearance -->
            <div class="absolute w-1 h-1 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 11%; left: 45%; filter: blur(0.1px); animation-delay: 6.8s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 26%; left: 52%; filter: blur(0.1px); animation-delay: 6.9s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 38%; left: 68%; filter: blur(0.1px); animation-delay: 7.0s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 44%; left: 82%; filter: blur(0.1px); animation-delay: 7.1s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 58%; left: 15%; filter: blur(0.1px); animation-delay: 7.2s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 64%; left: 42%; filter: blur(0.1px); animation-delay: 7.3s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 76%; left: 58%; filter: blur(0.1px); animation-delay: 7.4s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 84%; left: 25%; filter: blur(0.1px); animation-delay: 7.5s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 90%; left: 70%; filter: blur(0.1px); animation-delay: 7.6s; animation-fill-mode: forwards;"></div>
            
            <!-- More tiny beads for ultimate coverage -->
            <div class="absolute w-1 h-1 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 13%; left: 65%; filter: blur(0.1px); animation-delay: 7.7s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 31%; left: 78%; filter: blur(0.1px); animation-delay: 7.8s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/85 rounded-full opacity-0 animate-pulse" style="top: 45%; left: 24%; filter: blur(0.1px); animation-delay: 7.9s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/95 rounded-full opacity-0 animate-pulse" style="top: 59%; left: 86%; filter: blur(0.1px); animation-delay: 8.0s; animation-fill-mode: forwards;"></div>
            <div class="absolute w-1 h-1 bg-white/90 rounded-full opacity-0 animate-pulse" style="top: 73%; left: 35%; filter: blur(0.1px); animation-delay: 8.1s; animation-fill-mode: forwards;"></div>
            
            <!-- WATER TRAILS - Natural drip patterns with delayed appearance -->
            <div class="absolute w-1 h-16 bg-gradient-to-b from-white/60 via-white/40 to-white/0 opacity-0" style="top: 25%; left: 22%; transform: skew(-1deg); filter: blur(0.5px); animation: fadeInTrail 0.5s ease-in 8.5s forwards;"></div>
            <div class="absolute w-1 h-20 bg-gradient-to-b from-white/50 via-white/30 to-white/0 opacity-0" style="top: 43%; left: 46%; transform: skew(-2deg); filter: blur(0.5px); animation: fadeInTrail 0.5s ease-in 9.0s forwards;"></div>
            <div class="absolute w-1 h-12 bg-gradient-to-b from-white/70 via-white/50 to-white/0 opacity-0" style="top: 58%; left: 63%; transform: skew(-1deg); filter: blur(0.5px); animation: fadeInTrail 0.5s ease-in 9.5s forwards;"></div>
            <div class="absolute w-1 h-18 bg-gradient-to-b from-white/45 via-white/25 to-white/0 opacity-0" style="top: 32%; left: 78%; transform: skew(-3deg); filter: blur(0.5px); animation: fadeInTrail 0.5s ease-in 10.0s forwards;"></div>
            <div class="absolute w-1 h-14 bg-gradient-to-b from-white/65 via-white/35 to-white/0 opacity-0" style="top: 68%; left: 28%; transform: skew(-2deg); filter: blur(0.5px); animation: fadeInTrail 0.5s ease-in 10.5s forwards;"></div>
            
            <!-- WINDSHIELD SURFACE EFFECTS -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/8 mix-blend-soft-light"></div>
            <div class="absolute inset-0 bg-gradient-to-tl from-transparent via-white/6 to-transparent mix-blend-overlay"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-100/10 via-transparent to-cyan-100/15 mix-blend-screen"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <ImpactCard value="75" unit="%" label="Water-Efficient Appliances" analogy="Three-quarters of our campus fixtures are modern, water-saving models." />
          </div>
        </div>
        <div class="space-y-6">
          <h3 class="text-3xl font-bold text-blue-600 dark:text-blue-400">Efficient Technology</h3>
          <FeaturePane 
            icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>'
            title="Low-Flow Fixtures" 
            description="Installation of modern, low-flow toilets, faucets, and showerheads in all campus buildings." 
          />
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="relative md:order-2 rounded-2xl overflow-hidden shadow-lg h-96 group">
          <img :src="conservationImage" alt="Campus green space near water" class="w-full h-full object-cover">
          <!-- Simplified intense rainfall that actually works -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
            <!-- PRIMARY HEAVY RAIN LAYER - Every 2% across width for maximum density -->
            <div class="absolute w-1 h-24 bg-white/95 animate-rain" style="left: 0%; animation-delay: 0s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-20 bg-white/90 animate-rain" style="left: 2%; animation-delay: 0.05s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-28 bg-white/85 animate-rain" style="left: 4%; animation-delay: 0.1s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-22 bg-white/95 animate-rain" style="left: 6%; animation-delay: 0.15s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-26 bg-white/80 animate-rain" style="left: 8%; animation-delay: 0.2s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-18 bg-white/90 animate-rain" style="left: 10%; animation-delay: 0.25s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-24 bg-white/95 animate-rain" style="left: 12%; animation-delay: 0.3s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-30 bg-white/85 animate-rain" style="left: 14%; animation-delay: 0.35s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-20 bg-white/90 animate-rain" style="left: 16%; animation-delay: 0.4s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-26 bg-white/95 animate-rain" style="left: 18%; animation-delay: 0.45s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-22 bg-white/80 animate-rain" style="left: 20%; animation-delay: 0.5s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-28 bg-white/90 animate-rain" style="left: 22%; animation-delay: 0.55s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-18 bg-white/95 animate-rain" style="left: 24%; animation-delay: 0.6s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-24 bg-white/85 animate-rain" style="left: 26%; animation-delay: 0.65s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-30 bg-white/90 animate-rain" style="left: 28%; animation-delay: 0.7s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-20 bg-white/95 animate-rain" style="left: 30%; animation-delay: 0.75s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-26 bg-white/80 animate-rain" style="left: 32%; animation-delay: 0.8s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-22 bg-white/90 animate-rain" style="left: 34%; animation-delay: 0.85s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-28 bg-white/95 animate-rain" style="left: 36%; animation-delay: 0.9s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-18 bg-white/85 animate-rain" style="left: 38%; animation-delay: 0.95s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-24 bg-white/90 animate-rain" style="left: 40%; animation-delay: 1.0s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-30 bg-white/95 animate-rain" style="left: 42%; animation-delay: 1.05s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-20 bg-white/80 animate-rain" style="left: 44%; animation-delay: 1.1s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-26 bg-white/90 animate-rain" style="left: 46%; animation-delay: 1.15s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-22 bg-white/95 animate-rain" style="left: 48%; animation-delay: 1.2s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-28 bg-white/85 animate-rain" style="left: 50%; animation-delay: 1.25s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-18 bg-white/90 animate-rain" style="left: 52%; animation-delay: 1.3s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-24 bg-white/95 animate-rain" style="left: 54%; animation-delay: 1.35s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-30 bg-white/80 animate-rain" style="left: 56%; animation-delay: 1.4s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-20 bg-white/90 animate-rain" style="left: 58%; animation-delay: 1.45s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-26 bg-white/95 animate-rain" style="left: 60%; animation-delay: 1.5s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-22 bg-white/85 animate-rain" style="left: 62%; animation-delay: 1.55s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-28 bg-white/90 animate-rain" style="left: 64%; animation-delay: 1.6s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-18 bg-white/95 animate-rain" style="left: 66%; animation-delay: 1.65s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-24 bg-white/80 animate-rain" style="left: 68%; animation-delay: 1.7s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-30 bg-white/90 animate-rain" style="left: 70%; animation-delay: 1.75s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-20 bg-white/95 animate-rain" style="left: 72%; animation-delay: 1.8s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-26 bg-white/85 animate-rain" style="left: 74%; animation-delay: 1.85s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-22 bg-white/90 animate-rain" style="left: 76%; animation-delay: 1.9s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-28 bg-white/95 animate-rain" style="left: 78%; animation-delay: 1.95s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-18 bg-white/80 animate-rain" style="left: 80%; animation-delay: 2.0s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-24 bg-white/90 animate-rain" style="left: 82%; animation-delay: 2.05s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-30 bg-white/95 animate-rain" style="left: 84%; animation-delay: 2.1s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-20 bg-white/85 animate-rain" style="left: 86%; animation-delay: 2.15s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-26 bg-white/90 animate-rain" style="left: 88%; animation-delay: 2.2s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-22 bg-white/95 animate-rain" style="left: 90%; animation-delay: 2.25s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-28 bg-white/80 animate-rain" style="left: 92%; animation-delay: 2.3s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-18 bg-white/90 animate-rain" style="left: 94%; animation-delay: 2.35s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-24 bg-white/95 animate-rain" style="left: 96%; animation-delay: 2.4s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-30 bg-white/85 animate-rain" style="left: 98%; animation-delay: 2.45s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-1 h-20 bg-white/90 animate-rain" style="left: 100%; animation-delay: 2.5s; border-radius: 0 0 50% 50%;"></div>
            
            <!-- SECONDARY DENSE LAYER - Every 1% offset for ultra coverage -->
            <div class="absolute w-0.5 h-16 bg-white/75 animate-rain" style="left: 1%; animation-delay: 0.025s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-18 bg-white/70 animate-rain" style="left: 3%; animation-delay: 0.075s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/80 animate-rain" style="left: 5%; animation-delay: 0.125s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-20 bg-white/65 animate-rain" style="left: 7%; animation-delay: 0.175s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/75 animate-rain" style="left: 9%; animation-delay: 0.225s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-16 bg-white/70 animate-rain" style="left: 11%; animation-delay: 0.275s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-18 bg-white/80 animate-rain" style="left: 13%; animation-delay: 0.325s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/65 animate-rain" style="left: 15%; animation-delay: 0.375s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-20 bg-white/75 animate-rain" style="left: 17%; animation-delay: 0.425s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/70 animate-rain" style="left: 19%; animation-delay: 0.475s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-16 bg-white/80 animate-rain" style="left: 21%; animation-delay: 0.525s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-18 bg-white/65 animate-rain" style="left: 23%; animation-delay: 0.575s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/75 animate-rain" style="left: 25%; animation-delay: 0.625s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-20 bg-white/70 animate-rain" style="left: 27%; animation-delay: 0.675s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/80 animate-rain" style="left: 29%; animation-delay: 0.725s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-16 bg-white/65 animate-rain" style="left: 31%; animation-delay: 0.775s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-18 bg-white/75 animate-rain" style="left: 33%; animation-delay: 0.825s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/70 animate-rain" style="left: 35%; animation-delay: 0.875s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-20 bg-white/80 animate-rain" style="left: 37%; animation-delay: 0.925s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/65 animate-rain" style="left: 39%; animation-delay: 0.975s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-16 bg-white/75 animate-rain" style="left: 41%; animation-delay: 1.025s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-18 bg-white/70 animate-rain" style="left: 43%; animation-delay: 1.075s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/80 animate-rain" style="left: 45%; animation-delay: 1.125s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-20 bg-white/65 animate-rain" style="left: 47%; animation-delay: 1.175s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/75 animate-rain" style="left: 49%; animation-delay: 1.225s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-16 bg-white/70 animate-rain" style="left: 51%; animation-delay: 1.275s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-18 bg-white/80 animate-rain" style="left: 53%; animation-delay: 1.325s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/65 animate-rain" style="left: 55%; animation-delay: 1.375s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-20 bg-white/75 animate-rain" style="left: 57%; animation-delay: 1.425s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/70 animate-rain" style="left: 59%; animation-delay: 1.475s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-16 bg-white/80 animate-rain" style="left: 61%; animation-delay: 1.525s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-18 bg-white/65 animate-rain" style="left: 63%; animation-delay: 1.575s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/75 animate-rain" style="left: 65%; animation-delay: 1.625s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-20 bg-white/70 animate-rain" style="left: 67%; animation-delay: 1.675s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/80 animate-rain" style="left: 69%; animation-delay: 1.725s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-16 bg-white/65 animate-rain" style="left: 71%; animation-delay: 1.775s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-18 bg-white/75 animate-rain" style="left: 73%; animation-delay: 1.825s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/70 animate-rain" style="left: 75%; animation-delay: 1.875s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-20 bg-white/80 animate-rain" style="left: 77%; animation-delay: 1.925s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/65 animate-rain" style="left: 79%; animation-delay: 1.975s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-16 bg-white/75 animate-rain" style="left: 81%; animation-delay: 2.025s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-18 bg-white/70 animate-rain" style="left: 83%; animation-delay: 2.075s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/80 animate-rain" style="left: 85%; animation-delay: 2.125s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-20 bg-white/65 animate-rain" style="left: 87%; animation-delay: 2.175s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/75 animate-rain" style="left: 89%; animation-delay: 2.225s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-16 bg-white/70 animate-rain" style="left: 91%; animation-delay: 2.275s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-18 bg-white/80 animate-rain" style="left: 93%; animation-delay: 2.325s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/65 animate-rain" style="left: 95%; animation-delay: 2.375s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-20 bg-white/75 animate-rain" style="left: 97%; animation-delay: 2.425s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/70 animate-rain" style="left: 99%; animation-delay: 2.475s; border-radius: 0 0 50% 50%;"></div>
            
            <!-- TERTIARY FINE MIST LAYER - Maximum saturation -->
            <div class="absolute w-0.5 h-8 bg-white/55 animate-rain" style="left: 0.5%; animation-delay: 0.01s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-10 bg-white/50 animate-rain" style="left: 1.5%; animation-delay: 0.03s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-6 bg-white/60 animate-rain" style="left: 2.5%; animation-delay: 0.05s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/45 animate-rain" style="left: 3.5%; animation-delay: 0.07s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-8 bg-white/55 animate-rain" style="left: 4.5%; animation-delay: 0.09s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/50 animate-rain" style="left: 5.5%; animation-delay: 0.11s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-6 bg-white/65 animate-rain" style="left: 6.5%; animation-delay: 0.13s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-10 bg-white/40 animate-rain" style="left: 7.5%; animation-delay: 0.15s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-8 bg-white/55 animate-rain" style="left: 8.5%; animation-delay: 0.17s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/50 animate-rain" style="left: 9.5%; animation-delay: 0.19s; border-radius: 0 0 50% 50%;"></div>
            
            <!-- Continue the mist pattern across the full width -->
            <div class="absolute w-0.5 h-6 bg-white/60 animate-rain" style="left: 10.5%; animation-delay: 0.21s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/45 animate-rain" style="left: 11.5%; animation-delay: 0.23s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-8 bg-white/55 animate-rain" style="left: 12.5%; animation-delay: 0.25s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-10 bg-white/50 animate-rain" style="left: 13.5%; animation-delay: 0.27s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-6 bg-white/65 animate-rain" style="left: 14.5%; animation-delay: 0.29s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-12 bg-white/40 animate-rain" style="left: 15.5%; animation-delay: 0.31s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-8 bg-white/55 animate-rain" style="left: 16.5%; animation-delay: 0.33s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-14 bg-white/50 animate-rain" style="left: 17.5%; animation-delay: 0.35s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-6 bg-white/60 animate-rain" style="left: 18.5%; animation-delay: 0.37s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-10 bg-white/45 animate-rain" style="left: 19.5%; animation-delay: 0.39s; border-radius: 0 0 50% 50%;"></div>
            
            <!-- Add even more tiny drops for complete saturation -->
            <div class="absolute w-0.5 h-4 bg-white/35 animate-rain" style="left: 25%; animation-delay: 0.5s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-6 bg-white/40 animate-rain" style="left: 35%; animation-delay: 0.7s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-4 bg-white/45 animate-rain" style="left: 45%; animation-delay: 0.9s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-8 bg-white/35 animate-rain" style="left: 55%; animation-delay: 1.1s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-6 bg-white/40 animate-rain" style="left: 65%; animation-delay: 1.3s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-4 bg-white/45 animate-rain" style="left: 75%; animation-delay: 1.5s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-8 bg-white/35 animate-rain" style="left: 85%; animation-delay: 1.7s; border-radius: 0 0 50% 50%;"></div>
            <div class="absolute w-0.5 h-6 bg-white/40 animate-rain" style="left: 95%; animation-delay: 1.9s; border-radius: 0 0 50% 50%;"></div>
          </div>
        </div>
        <div class="md:order-1 space-y-6">
            <h3 class="text-3xl font-bold text-blue-600 dark:text-blue-400">Smart Conservation</h3>
            <FeaturePane 
              icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>'
              title="Smart Irrigation" 
              description="Weather-based smart irrigation systems that only water our green spaces when absolutely necessary." 
            />
            <FeaturePane 
              icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
              title="Water Pollution Control" 
              description="Comprehensive programs to treat wastewater and protect our local watershed." 
            />
        </div>
      </div>
    </section>
    
    <section id="pledge">
      <PledgeSection 
        title="Join Our Mission: Conserve Every Drop" 
        :pledges="waterPledges" 
      />
    </section>

    <section id="data-hub" class="relative p-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div class="relative text-center max-w-4xl mx-auto">
        <h3 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Explore the Complete Data Journey</h3>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Dive deeper into our comprehensive water management metrics and discover the full scope of our conservation efforts.
        </p>
        <router-link 
          to="/dashboard/water" 
          class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <span class="text-lg">Go to Data Hub</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import ImpactCard from '../components/ImpactCard.vue';
import FeaturePane from '../components/FeaturePane.vue';
import PledgeSection from '../components/PledgeSection.vue';
import heroImage from '../assets/waterpage.jpg';
import efficientImage from '../assets/waterefficient.jpg';
import conservationImage from '../assets/greencampuswater.jpg';

const emit = defineEmits(['update-active-section']);
const consumptionSection = ref<HTMLElement | null>(null);
const consumptionNumber = ref<HTMLElement | null>(null);

const navItems = [
  { id: 'vision', title: 'Our Vision' },
  { id: 'consumption', title: 'Our Consumption' },
  { id: 'solutions', title: 'Our Solutions' },
  { id: 'pledge', title: 'Make a Pledge' },
  { id: 'data-hub', title: 'Data Hub' },
];

const waterPledges = ref([
  { id: 1, text: "I'll take shorter showers", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`, pledged: false },
  { id: 2, text: "I'll report leaky faucets", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>`, pledged: false },
  { id: 3, text: "I'll use a reusable water bottle", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>`, pledged: false },
]);

let scrollObserver: IntersectionObserver;

onMounted(() => {
  emit('update-active-section', 'vision', navItems);
  const sections = navItems.map(item => document.getElementById(item.id));
  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        emit('update-active-section', entry.target.id, navItems);
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(sec => { if (sec) scrollObserver.observe(sec); });
  
  gsap.fromTo(consumptionNumber.value, { innerText: 0 }, {
    innerText: 4500,
    duration: 2,
    ease: 'power2.out',
    snap: { innerText: 10 },
    scrollTrigger: { trigger: consumptionSection.value, start: 'top center' }
  });
});

onUnmounted(() => {
  if (scrollObserver) scrollObserver.disconnect();
});
</script>

<style scoped>
@keyframes fadeInTrail {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
