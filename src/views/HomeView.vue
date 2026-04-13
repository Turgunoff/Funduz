<script setup lang="ts">
</script>

<template>
  <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <!-- Left Content -->
      <div class="order-2 lg:order-1">
        <!-- Label -->
        <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f0f9ff] mb-8">
          <span class="text-[#1ba0f2] text-[15px] font-bold">
            O'zbekistonning birinchi kraudfanding platformasi
          </span>
        </div>

        <!-- Heading -->
        <h1 class="text-[52px] sm:text-[64px] lg:text-[76px] font-bold text-gray-900 leading-[1.05] tracking-tight mb-8">
          Yaxshilikni <br />
          birgalikda <br />
          <span class="text-[#1ba0f2] italic">moliyalashtiramiz</span>
        </h1>

        <!-- Description -->
        <p class="text-[17px] sm:text-[19px] text-gray-500 leading-relaxed mb-10 max-w-[500px]">
          Funduz orqali ijtimoiy muhim loyihalarni qo'llab-quvvatlang yoki o'z g'oyangizni 
          amalga oshirish uchun sarmoya to'plang.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4">
          <button class="px-8 py-[18px] border border-gray-200 rounded-xl font-bold text-[16px] text-gray-800 bg-white hover:bg-[#1ba0f2] hover:text-white hover:border-[#1ba0f2] transition-all shadow-sm hover:shadow-lg hover:shadow-blue-100/50 cursor-pointer">
            Hozir hissa qo'shish
          </button>
          <button class="px-8 py-[18px] border border-gray-200 rounded-xl font-bold text-[16px] text-gray-800 bg-white hover:bg-[#1ba0f2] hover:text-white hover:border-[#1ba0f2] transition-all flex items-center justify-center gap-2 cursor-pointer">
            Loyiha yaratish
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Right Image Section -->
      <div class="order-1 lg:order-2 relative">
        <div class="rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
          <img 
            src="/celebration_hero.png" 
            alt="Crowdfunding success celebration" 
            class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <!-- Bottom Overlay Message -->
          <div class="absolute bottom-0 left-0 right-0 p-8 lg:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h3 class="text-white text-[24px] lg:text-[28px] font-bold leading-tight mb-3">
              "Oromgoh" loyihasi 2 haftada kerakli summani to'pladi
            </h3>
            <p class="text-white/90 text-[16px] lg:text-[18px] font-medium font-sans">
              345 ta donor tomonidan qo'llab-quvvatlandi
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Дополнительные стили, если Tailwind не покрывает все нюансы */
h1 {
  letter-spacing: -0.02em;
}

/* Эффект для заголовка, чтобы он выглядел более премиально */
.italic {
  display: inline-block;
  font-style: italic;
}
</style>
