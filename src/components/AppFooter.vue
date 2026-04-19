<template>
  <footer class="bg-white pt-16 pb-10 border-t border-gray-100">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Section: Links -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center sm:text-left"
      >
        <!-- Brand & Desc -->
        <div class="max-w-[280px] mx-auto sm:mx-0">
          <div class="text-[#0f5238] text-[24px] font-black tracking-tight mb-6">FUNDUZ</div>
          <p class="text-gray-500 text-[15px] leading-relaxed">
            {{ $t("footer.description") }}
          </p>
        </div>

        <!-- Loyihalar -->
        <div>
          <h4 class="text-gray-900 text-[18px] font-bold mb-6">
            {{ $t("footer.projects_title") }}
          </h4>
          <ul class="space-y-4">
            <li>
              <a href="#" class="text-gray-500 hover:text-[#0f5238] transition-colors">{{
                $t("footer.p_tech")
              }}</a>
            </li>
            <li>
              <a href="#" class="text-gray-500 hover:text-[#0f5238] transition-colors">{{
                $t("footer.p_art")
              }}</a>
            </li>
            <li>
              <a href="#" class="text-gray-500 hover:text-[#0f5238] transition-colors">{{
                $t("footer.p_social")
              }}</a>
            </li>
            <li>
              <router-link to="/articles" class="text-gray-500 hover:text-[#0f5238] transition-colors">{{
                $t("footer.p_articles")
              }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Kompaniya -->
        <div>
          <h4 class="text-gray-900 text-[18px] font-bold mb-6">{{ $t("footer.company_title") }}</h4>
          <ul class="space-y-4">
            <li>
              <router-link
                to="/about"
                class="text-gray-500 hover:text-[#0f5238] transition-colors"
                >{{ $t("footer.c_about") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/community"
                class="text-gray-500 hover:text-[#0f5238] transition-colors"
                >{{ $t("nav.cooperation") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-gray-500 hover:text-[#0f5238] transition-colors"
                >{{ $t("footer.c_contact") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/faq"
                class="text-gray-500 hover:text-[#0f5238] transition-colors"
                >{{ $t("footer.c_faq") }}</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Yuridik -->
        <div>
          <h4 class="text-gray-900 text-[18px] font-bold mb-6">{{ $t("footer.legal_title") }}</h4>
          <ul class="space-y-4">
            <li>
              <router-link
                to="/terms"
                class="text-gray-500 hover:text-[#0f5238] transition-colors"
                >{{ $t("footer.l_terms") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/privacy"
                class="text-gray-500 hover:text-[#0f5238] transition-colors"
                >{{ $t("footer.l_privacy") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/security"
                class="text-gray-500 hover:text-[#0f5238] transition-colors"
                >{{ $t("footer.l_security") }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-[1px] w-full bg-gray-100 mb-10"></div>

      <!-- Bottom Section: Copyright & Socials -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 text-center">
        <p class="text-gray-400 text-[14px] order-2 md:order-1">
          {{ $t("footer.copyright") }}
        </p>
        <div class="flex flex-wrap justify-center items-center gap-6 sm:gap-8 order-1 md:order-2">
          <a
            href="#"
            class="text-gray-500 hover:text-[#0f5238] text-[14px] font-medium transition-colors"
            >{{ $t("footer.social_tg") }}</a
          >
          <a
            href="#"
            class="text-gray-500 hover:text-[#0f5238] text-[14px] font-medium transition-colors"
            >{{ $t("footer.social_inst") }}</a
          >
          <a
            href="#"
            class="text-gray-500 hover:text-[#0f5238] text-[14px] font-medium transition-colors"
            >{{ $t("footer.social_fb") }}</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
