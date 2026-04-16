import { createI18n } from "vue-i18n";

const messages = {
  uz: {
    nav: {
      projects: "Loyihalarni ko'rish",
      about: "Qanday ishlaydi?",
      cooperation: "Jamiyat",
      trends: "Texnologik tendensiyalar",
      projects_short: "Loyihalar",
      about_short: "Biz haqimizda",
      cooperation_short: "Hamkorlik",
      login: "Kirish",
      view_projects: "Loyihalarni ko'rish",
      how_it_works: "Qanday ishlaydi?",
      community: "Jamiyat",
      search_placeholder: "Loyiha qidirish...",
      start_project: "Loyiha boshlash",
    },
    how_it_works: {
      badge: "PLATFORMA BO'YICHA QO'LLANMA",
      title_start: "Funduz qanday",
      title_end: "ishlaydi?",
      subtitle: "G'oyalarni haqiqatga aylantiring yoki o'zingizga befarq bo'lmagan loyihalarni qo'llab-quvvatlang. Biz innovatsiyalar o'sishi uchun maydon yaratdik.",
      btn_authors: "Mualliflar uchun",
      btn_sponsors: "Sponsorlar uchun",
      steps_prefix: "QADAM",
      steps: [
        {
          title: "Loyiha yarating",
          desc: "O'z tarixingizni so'zlab bering, prototiplarni ko'rsating va amalga oshirish uchun moliyaviy maqsadni belgilang."
        },
        {
          title: "Ulashing",
          desc: "Ijtimoiy tarmoqlar orqali do'stlaringiz, oilangiz va hamjamiyatingiz o'rtasida ma'lumot tarqating."
        },
        {
          title: "Mablag' yig'ing",
          desc: "Sizning g'oyangizga ishonadigan butun dunyo bo'ylab homiylardan yordam oling."
        },
        {
          title: "G'oyani amalga oshiring",
          desc: "Loyihani amalga oshiring, homiylarni xabardor qilib turing va ularga munosib mukofotlarni yuboring."
        }
      ],
      steps_sponsors: [
        {
          title: "Loyihani tanlang",
          desc: "O'zingizga yoqqan va jamiyat uchun foydali deb hisoblagan innovatsion g'oyalarni toping."
        },
        {
          title: "Mukofotni belgilang",
          desc: "Loyihani shunchaki qo'llab-quvvatlang yoki mualliflar tomonidan tayyorlangan qiziqarli sovg'alarni tanlang."
        },
        {
          title: "Xavfsiz hissa qo'shing",
          desc: "Zamonaviy to'lov tizimlari orqali xavfsiz va tezkor ravishda mablag' o'tkazing."
        },
        {
          title: "Natijani kuzating",
          desc: "Loyiha rivojlanishini kuzatib boring, yangiliklardan xabardor bo'ling va mukofotingizni oling."
        }
      ],
      features: {
        transparency: {
          title: "Shaffoflik har bir bosqichda",
          desc: "Biz ishonch — kroudfandingning asosi ekanligiga ishonamiz. Funduz tranzaksiyalar xavfsizligi va muloqot shaffofligini ta'minlaydi."
        },
        security: {
          title: "Xavfsizlik",
          desc: "Sizning mablag'laringiz va ma'lumotlaringiz bank darajasidagi shifrlash protokollari bilan himoyalangan."
        },
        community: {
          title: "Kuchli hamjamiyat",
          desc: "Innovatsion g'oyalarni qo'llab-quvvatlashga tayyor minglab faol homiylardan foydalanish imkoniyati."
        }
      },
      faq: {
        title: "Tez-tez beriladigan savollar",
        subtitle: "Ishonch bilan boshlash uchun bilishingiz kerak bo'lgan hamma narsa.",
        items: [
          {
            q: "Agar kerakli summani yig'a olmasam-chi?",
            a: "Biz 'Hammasi yoki hech narsa' modelidan foydalanamiz. Agar maqsad belgilangan muddatda amalga oshmasa, mablag'lar homiylarga to'liq hajmda avtomatik ravishda qaytariladi."
          },
          {
            q: "Pullarimni qanday qabul qilaman?",
            a: "Kampaniya muvaffaqiyatli yakunlangach va yakuniy tekshiruvdan o'tgach, mablag'lar platforma komissiyasi (5%) chegirib tashlangan holda sizning tasdiqlangan bank hisobingizga o'tkaziladi."
          },
          {
            q: "Bu xavfsizmi?",
            a: "Ha, biz zamonaviy shifrlash usullari va tekshirilgan to'lov tizimlaridan foydalanamiz. Barcha akkauntlar firibgarlikning oldini olish uchun KYC jarayonidan o'tadi."
          }
        ]
      },
      cta: {
        title: "O'z yo'lingizni boshlashga tayyormisiz?",
        btn_create: "Loyiha yaratish",
        btn_projects: "Loyihalarni ko'rish"
      }
    },
    search: {
      results_overline: "QIDIRUV NATIJALARI",
      results_count: "natija",
      for_query: "so'rovi bo'yicha",
      featured_projects: "Aralash loyihalar",
      recent_searches: "Oxirgi qidiruvlar",
      popular_tags: "Mashhur teglar",
      tabs: {
        all: "Barchasi",
        projects: "Loyihalar",
        creators: "Mualliflar",
        categories: "Toifalar"
      },
      sort_by: "Saralash:",
      sort: {
        relevant: "Eng moslari",
        newest: "Eng yangi",
        popular: "Mashhur"
      },
      cat_all: "Barcha toifalar",
      cats: {
        tech: "Texnologiya",
        art: "San'at",
        eco: "Ekologiya",
        innovation: "Innovatsiya",
        urbanism: "Urbanistika",
        education: "Ta'lim"
      },
      matched_categories: "Mos toifalar",
      projects_found: "loyihalar topildi",
      influential_creators: "Nufuzli mualliflar",
      top_creator: "Top muallif",
      view_profile: "Profilni ko'rish",
      stats: {
        projects: "LOYIHALAR",
        raised: "TO'PLANGAN",
        backers: "HOMIYLAR"
      },
      empty_filter_title: "Filtringiz bo'yicha boshqa natija yo'q",
      empty_filter_desc: "Kiritilgan toifa filtri bo'yicha boshqa loyihalar topilmadi. Qidiruvingizni kengaytiring yoki mashhur toifalarni ko'rib chiqing.",
      empty_chips: {
        ai: "Sun'iy intellekt",
        digital_art: "Raqamli san'at",
        micro_finance: "Mikromoliya"
      }
    },
    explore: {
      title: "Barcha loyihalar",
      hero_title: "O'zbekistonning eng yaxshi loyihalarini kashf eting",
      search_placeholder: "Loyiha, toifa yoki muallifni qidiring...",
      categories: {
        all: "Barchasi",
        tech: "Texnologiya",
        art: "San'at",
        social: "Jamiyat",
        edu: "Ta'lim",
        eco: "Ekologiya"
      },
      sort: {
        newest: "Eng yangi",
        popular: "Mashhur",
        ending: "Yaqinda tugaydi"
      },
      load_more: "Yana ko'rsatish",
      empty_title: "Hali loyihalar yo'q",
      empty_desc: "Tez orada bu yerda O'zbekistondagi eng qiziqarli va foydali loyihalar ro'yxati paydo bo'ladi.",
      projects_list: [
        {
          id: 1,
          title: "Toshkent Yashil Bog'lari: Shahar Ichida Tabiat",
          author: "Anvar Qosimov",
          category: "Ekologiya",
          raised: "120,000,000",
          goal: "150,000,000",
          progress: 80,
          days: 12,
          donors: 845,
          img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          title: "Bilim-AI: O'zbek Tili Uchun Sun'iy Intellekt",
          author: "Malika Karimova",
          category: "Ta'lim",
          raised: "45,000,000",
          goal: "100,000,000",
          progress: 45,
          days: 24,
          donors: 312,
          img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          title: "Samarqand Keramikasi: Yangi Avlod Markazi",
          author: "Umar Ali",
          category: "San'at",
          raised: "82,800,000",
          goal: "90,000,000",
          progress: 92,
          days: 3,
          donors: 156,
          img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          title: "Agro-Dron: Paxta Dalalarini Monitoring Qilish",
          author: "Jasur Olimov",
          category: "Texnologiya",
          raised: "30,000,000",
          goal: "60,000,000",
          progress: 50,
          days: 15,
          donors: 89,
          img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 5,
          title: "Kitobxon: Yoshlar Uchun Zamonaviy Kutubxona",
          author: "Aziza Karimova",
          category: "Jamiyat",
          raised: "15,000,000",
          goal: "25,000,000",
          progress: 60,
          days: 8,
          donors: 124,
          img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 6,
          title: "Quyosh Panellari: Maktablarni Energiya Bilan Ta'minlash",
          author: "Sardor Ahmedov",
          category: "Ekologiya",
          raised: "95,000,000",
          goal: "120,000,000",
          progress: 79,
          days: 20,
          donors: 432,
          img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    hero: {
      badge: "O'zbekistonning birinchi kraudfanding platformasi",
      title_1: "Yaxshilikni",
      title_2: "birgalikda",
      title_3: "moliyalashtiramiz",
      description: "Funduz orqali ijtimoiy muhim loyihalarni qo'llab-quvvatlang yoki o'z g'oyangizni amalga oshirish uchun sarmoya to'plang.",
      btn_contribute: "Hozir hissa qo'shish",
      btn_create: "Loyiha yaratish",
      success_title: '"Oromgoh" loyihasi 2 haftada kerakli summani to\'pladi',
      success_donors: "345 ta donor tomonidan qo'llab-quvvatlandi",
    },
    stats: {
      projects: "Muvaffaqiyatli loyihalar",
      donors: "Faol donorlar",
      collected: "Yig'ilgan mablag'",
    },
    about: {
      hero_title: "Biz innovatsiyalarni birgalikda yaratamiz",
      hero_desc: "Funduz — bu g'oyalar hayotga tatbiq etiladigan va jamiyat taraqqiyoti uchun muhim bo'lgan loyihalar qo'llab-quvvatlanadigan platforma.",
      mission_label: "Bizning missiya",
      mission_text: "O'zbekistondagi har bir xayolparast uchun sarmoyadan foydalanish imkoniyatini demokratlashtirish. Samarqandning gavjum ustaxonalaridan tortib Toshkentning texnoparklarigacha, biz mahalliy g'oyalarni global haqiqatga aylantirish uchun zarur bo'lgan platforma, vositalar va hamjamiyatni taqdim etamiz.",
      mission_quote: "Har bir buyuk loyiha unga ishonadigan kishidan boshlanadi.",
      story_title: "Bizning tariximiz",
      timeline: [
        {
          date: "Yanvar 2024",
          title: "G'oya tug'ilishi",
          desc: "Funduz Toshkentda mahalliy kreativ iqtisodiyotdagi bo'shliqni ko'rgan dizaynerlar va tadbirkorlar guruhi tomonidan tashkil etilgan."
        },
        {
          date: "Mart 2025",
          title: "Milliy kengayish",
          desc: "Mahalliy hunarmandlar va madaniy meros loyihalarini qo'llab-quvvatlash uchun Samarqand, Buxoro va Xivada mintaqaviy ofislar ochildi."
        },
        {
          date: "Vision 2026",
          title: "Markaziy Osiyo xabi",
          desc: "Butun Markaziy Osiyo mintaqasida innovatsiyalar uchun asosiy katalizatorga aylanishni maqsad qilganmiz."
        }
      ],
      stats: [
        { value: "250+", label: "Muvaffaqiyatli loyihalar" },
        { value: "12,500+", label: "Homiylar" },
        { value: "15B", label: "UZS to'plandi" },
        { value: "14", label: "Shahar" }
      ],
      believes_title: "Biz nimalarga ishonamiz",
      believes: [
        {
          title: "Ishonch",
          desc: "Biz ham ijodkorlar, ham homiylar uchun shaffoflik va javobgarlikni birinchi o'ringa qo'yamiz.",
          icon: "🛡️"
        },
        {
          title: "Hamjamiyat",
          desc: "Muvaffaqiyat nafaqat pul bilan bog'liq; bu sayohatga qo'shilgan insonlar haqida.",
          icon: "👥"
        },
        {
          title: "Innovatsiya",
          desc: "Chegaralarni kengaytiradigan va mahalliy muammolarni hal qiladigan g'oyalarni qo'llab-quvvatlash.",
          icon: "💡"
        },
        {
          title: "Birinchi navbatda mahalliy",
          desc: "O'zbekistondagi o'ziga xos madaniy o'ziga xoslik va iste'dodni tarannum etish.",
          icon: "📍"
        }
      ],
      cta_title: "G'oyangizni hayotga tatbiq etishga tayyormisiz?",
      cta_btn_start: "Loyiha boshlash",
      cta_btn_explore: "Loyihalarni ko'rish",
      team_title: "Jamoamiz bilan tanishing",
      team: [
        { name: "Baxtiyor Aliyev", role: "Asoschi va CEO" },
        { name: "Nigora Jo'rayeva", role: "Loyihalar rahbari" },
        { name: "Azizbek Qodirov", role: "CTO" },
        { name: "Zulayxo Saidova", role: "Hamjamiyat rahbari" }
      ],
      partners_title: "Bizning hamkorlarimiz"
    },
    projects: {
      title: "Tanlangan loyihalar",
      subtitle: "O'zbekiston bo'ylab eng dolzarb va qiziqarli tashabbuslar",
      view_all: "Barcha loyihalar",
      more: "Batafsil ma'lumot",
      goal: "Maqsad",
      donors: "donor",
      cat_education: "Ta'lim",
      cat_ecology: "Ekologiya",
      cat_art: "San'at",
      cat_music: "Musiqa",
      project_count: "{count} loyiha",
      p1_title: "Qishloq maktabi uchun zamonaviy kutubxona",
      p2_title: "Yashil shahar: 10,000 daraxt ekish aksiyasi",
      p3_title: "Yosh IT mutaxassislar uchun bepul kurslar",
    },
    cta: {
      title: "O'z g'oyangizni haqiqatga aylantiring",
      subtitle: "Biznesingiz, ijtimoiy loyihangiz yoki ijodingiz uchun kerakli sarmoyani Funduz hamjamiyati bilan birga to'plang.",
      btn_start: "Loyiha boshlash",
      btn_expert: "Mutaxassis bilan bog'lanish",
      feature1: "Oson boshqaruv",
      feature1_desc: "To'liq shaffof dashboard",
      feature2: "Katta auditoriya",
      feature2_desc: "Minglab potensial donorlar",
    },
    footer: {
      description: "O'zbekistonning kelajagini birgalikda barpo etamiz. Har bir hissa muhim.",
      projects_title: "Loyihalar",
      p_tech: "Texnologiya",
      p_art: "San'at",
      p_social: "Ijtimoiy yordam",
      company_title: "Kompaniya",
      c_about: "Biz haqimizda",
      c_contact: "Bog'lanish",
      c_faq: "Savollar",
      legal_title: "Yuridik",
      l_terms: "Foydalanish shartlari",
      l_privacy: "Maxfiylik siyosati",
      copyright: "© 2024 Funduz. Barcha huquqlar himoyalangan.",
      social_tg: "Telegram",
      social_inst: "Instagram",
      social_fb: "Facebook",
    },
    project_view: {
      title: "Eco-Paket: O'zbekistonda birinchi marta bio-parchalanadigan qadoqlar ishlab chiqarish",
      author_label: "Muallif",
      author_success: "2 ta muvaffaqiyatli loyiha",
      goal: "Maqsad",
      raised: "yig'ildi",
      donors_count: "ta donolar",
      stat_donors: "Donolar",
      stat_days: "Kun qoldi",
      stat_done: "Bajarildi",
      btn_support: "Loyihani qo'llab-quvvatlash",
      tabs: ["Loyiha haqida", "Yangiliklar", "Fikrlar"],
      reward_title: "Mukofotlar",
      reward_count: "ta mavjud",
      reward_select: "Tanlash",
      reward_1_title: "Rahmatnoma",
      reward_1_price: "100,000 UZS",
      reward_1_desc: "Bizning loyihamizni qo'llab-quvvatlaganingiz uchun elektron rahmatnoma va loyiha saytida ismingiz chop etiladi.",
      reward_2_title: "Eco-To'plam",
      reward_2_price: "500,000 UZS",
      reward_2_desc: "100 dona bio-paketlar to'plami va brendli eko-sumka (tote bag). O'zbekiston bo'ylab yetkazib berish bepul.",
      reward_3_title: "Homiy Hamkor",
      reward_3_price: "2,000,000 UZS",
      reward_3_desc: "Sizning logotipingiz birinchi partiya qadoqlari ustida 'Hamkor' sifatida ko'rsatiladi.",
      delivery_label: "Kutilayotgan yetkazib berish:",
      reward_1_delivery: "Sentyabr, 2024",
      reward_2_delivery: "Oktyabr, 2024",
      reward_3_delivery: "Oktyabr, 2024",
      special_title: "Maxsus yordam?",
      special_desc: "Agar siz yirik investor bo'lsangiz yoki maxsus hamkorlik shartlarini muhokama qilmoqchi bo'lsangiz, biz bilan bog'laning.",
      special_btn: "Aloqaga chiqish",
      detail_title: "Ekologiya uchun yangi davr",
      detail_text_1: "O'zbekistonda har yili millionlab tonna plastik chiqindilar hosil bo'ladi. Ularning asosiy qismini bir marta ishlatiladigan paketlar tashkil etadi. Bizning Eco-Paket loyihamiz makkajo'xori kraxmalidan tayyorlangan, 6-12 oy ichida to'liq parchalanib ketadigan qadoqlarni оmmalashtirishni maqsad qilgan.",
      detail_text_2: "Yig'ilgan mablag'lar Xitoydan yuqori texnologiyali uskunalarni sotib olish va dastlabki xom-ashyo zaxirasini shakllantirishga sarflanadi. Loyihamiz Toshkent shahrida o'z faoliyatini boshlaydi va keyinchalik butun respublika bo'ylab kengayadi.",
      image_caption: "Biz ishlab chiqaradigan bio-parchalanadigan paketlar namunalari",
      benefits_title: "Nima uchun bizni qo'llab-quvvatlashingiz kerak?",
      benefits: [
        "Tabiatni plastik ifloslanishidan asraysiz.",
        "Mahalliy ishlab chiqarishni rivojlantirishga hissa qo'shasiz.",
        "Yuqori sifatli eko-mahsulotlarni birinchilardan bo'lib qo'lga kiritasiz.",
      ],
    },
    community: {
      badge: "FUNDUZ HAMJAMIYATI",
      title: "Platformamizning yuragi — bu odamlar",
      subtitle: "Muvaffaqiyat hikoyalari bilan tanishing va bizning o'sib borayotgan innovatorlar hamjamiyatimizga qo'shiling. Birgalikda g'oyalarni haqiqatga aylantiramiz.",
      stats: {
        collected_val: "12+ Mlrd so'm",
        collected_label: "YIG'ILGAN MABLAG'LAR",
        sponsors_val: "45,000+",
        sponsors_label: "FAOL HOMIYLAR",
        projects_val: "1,200+",
        projects_label: "MUVAFFAQIYATLI LOYIHALAR"
      },
      stories: {
        title: "Muvaffaqiyat hikoyalari",
        subtitle: "Hozirgi vaqtda dunyoni o'zgartirayotgan haqiqiy insonlar.",
        view_all: "Barchasini ko'rish",
        read_story: "Hikoyani o'qish",
        badge: "100% MUVAFFAQIYATLI",
        items: [
          {
            title: "Kelajak eko-fermasi",
            desc: "Funduz hamjamiyatining qo'llab-quvvatlashi tufayli biz mamlakatdagi birinchi vertikal fermani ishga tushirishga muvaffaq bo'ldik."
          },
          {
            title: "Hamma uchun IT-ta'lim",
            desc: "Bizning vazifamiz — 10,000 nafar o'smirga dasturlashni o'rgatish va biz allaqachon yo'lning yarmidamiz."
          },
          {
            title: "'Talant' hunarmandchilik markazi",
            desc: "Biz unutilgan an'analarni tiklamoqdamiz va butun mamlakat bo'ylab yuzlab ustalar uchun ish o'rinlari yaratmoqdamiz."
          }
        ]
      },
      sponsors_section: {
        title: "Bizning Super-Homiylarimiz",
        label: "SUPER-HOMIY",
        items: [
          "Aziz Karimov",
          "Madina Aliyeva",
          "Rustam Saidov",
          "Yelena Kim",
          "Sardor Umarov"
        ]
      },
      telegram: {
        title: "Telegram-kanalimizga qo'shiling",
        desc: "Barcha yangi loyihalar, eksklyuziv intervyular va platforma yangiliklaridan xabardor bo'ling.",
        btn: "Telegramga o'tish"
      }
    },
    login: {
      title: "Xush kelibsiz!",
      subtitle: "Platformaga kirish uchun ma'lumotlaringizni kiritng",
      tab_login: "Kirish",
      tab_register: "Ro'yxatdan o'tish",
      social_google: "Google orqali",
      or: "Yoki",
      label_email: "Elektron pochta",
      label_password: "Parol",
      forgot_password: "Parolni unutdingizmi?",
      btn_submit: "Tizimga kirish",
      label_name: "F.I.SH (TO'LIQ ISM)",
      placeholder_name: "Ism sharifingiz",
      label_password_reg: "Parol yaratish",
      btn_register: "Hisob yaratish",
      footer_text_start: "Kirish yoki ro'yxatdan o'tish orqali siz Funduz'ning ",
      footer_text_and: " va ",
      footer_text_end: "ga rozilik bildirasiz.",
      hero_title: "Yaxshilikni birgalikda moliyalashtiramiz",
      hero_subtitle: "Kichik hissa — katta o'zgarishlar asosi. Loyihalarni qo'llab-quvvatlang yoki o'z g'oyangizni hayotga tadbiq eting."
    },
    create: {
      header_title: "Yangi loyiha boshlash",
      cancel: "Bekor qilish",
      step_prefix: "QADAM",
      step1_title: "Asosiy ma'lumotlar",
      name_label: "Loyiha nomi",
      name_help: "O'z loyihangizga kishini jalb qiladigan, qisqa va mazmunli nom bering.",
      name_placeholder: "Masalan: Yashil shahar bog'dorchiligi",
      category_label: "Kategoriya",
      duration_label: "Davomiyligi (kun)",
      goal_label: "Kerakli mablag' miqdori",
      tax_info: "Platforma komissiyasi va soliqlar haqida unutmang.",
      media_title: "Media va Hikoya",
      back: "Orqaga",
      next: "Keyingi qadam",
      tab_info: "Ma'lumotlar",
      tab_media: "Media",
      tab_rewards: "Mukofotlar",
      media_placeholder: "Rasm yoki videoni ushbu yerga sudrab o'tkazing yoki bosing"
    },
    story: {
      back: "Orqaga qaytish",
      badge: "Muvaffaqiyat tarixi",
      title: "Kelajak Eko-fermasi: Orzuning Ro'yobi",
      author: "Aziz Karimov",
      date: "Sentyabr 2024",
      history_title: "Loyiha tarixi",
      history_p1: "Barchasi Toshkent chekkasidagi tashlandiq yer uchastkasidan boshlandi. Mening g'oyam qishloq xo'jaligini hatto kichik maydonlarda ham texnologik va ekologik toza bo'lishini isbotlash edi.",
      history_p2: "Dastlabki oylar eng qiyini bo'ldi. Tuproqning sho'rlanishi va barqaror sug'orish yo'qligiga duch keldik. Ammo Funduz platformasidagi 450 homiy yordami tufayli qisqa fursatda tomchilatib sug'orish tizimini o'rnatdik.",
      history_p3: "Bugungi kunda fermamiz oyiga 2 tonnadan ortiq organik sabzavot yetishtirmoqda. Bu shunchaki biznes emas, bu hamjamiyat kuchining isboti.",
      funds_title: "Mablag'lar nimaga sarflandi",
      funds_equip: "Uskunalar",
      funds_equip_desc: "Aqlli datchiklar va avtomatika",
      funds_seeds: "Urug'lar",
      funds_seeds_desc: "Saralangan organik navlar",
      funds_water: "Sug'orish",
      funds_water_desc: "Tomchilatib sug'orish tizimi",
      gallery: "Amalga oshirish galereyasi",
      stats_title: "Yig'im natijalari",
      stats_collected: "Yig'ildi",
      stats_goal: "Maqsad",
      stats_percent: "Foiz",
      stats_sponsors: "Homiylar qo'llab-quvvatladi",
      quote: "\"Funduz bizga nafaqat pul, balki g'oyamiz odamlar uchun muhim ekanligiga ishonch berdi. Bu ongli iste'molning yangi davri boshlanishidir.\"",
      similar_title: "O'xshash tarixlar"
    },
    contact: {
      badge: "Qo'llab-quvvatlash markazi",
      title: "Bog'lanish",
      subtitle: "Savolingiz bormi yoki katalizatorga muhtoj loyihangiz? Bizning jamoamiz sizga kuratorlik kroudfanding olamida harakat qilishingizga yordam beradi.",
      search_placeholder: "Savollar, kalit so'zlar yoki mavzular bo'yicha qidirish...",
      cats: {
        all: "Barchasi",
        general: "Umumiy",
        creators: "Mualliflar uchun",
        backers: "Homiylar uchun",
        payments: "To'lovlar va Qaytarishlar",
        security: "Xavfsizlik va Ishonch"
      },
      faq: [
        {
          q: "Funduzda loyihani qanday qo'llab-quvvatlash mumkin?",
          a: "Loyihani qo'llab-quvvatlash uchun loyiha sahifasiga o'ting, 'Hissa qo'shish' tugmasini bosing, mukofotni tanlang va qulay to'lov usuli (Payme, Click yoki karta) orqali to'lovni amalga oshiring.",
          cat: "backers"
        },
        {
          q: "Loyiha amalga oshmasa, pullar qaytariladimi?",
          a: "Ha, Funduz 'Hammasi yoki hech narsa' tamoyili asosida ishlaydi. Agar loyiha belgilangan muddatda o'z maqsadiga erisha olmasa, barcha mablag'lar homiylarga komissiyasiz to'liq qaytariladi.",
          cat: "payments"
        },
        {
          q: "Payme qanday to'lov usullarini qo'llab-quvvatlaydi?",
          a: "Payme orqali siz Uzcard, Humo kartalari, shuningdek, Payme balansidagi mablag'lar orqali loyihalarni qo'llab-quvvatlashingiz mumkin.",
          cat: "payments"
        },
        {
          q: "Mening shaxsiy ma'lumotlarim va karta ma'lumotlarim qanday himoyalangan?",
          a: "Xavfsizlik — bizning birinchi darajali vazifamizdir. Funduz barcha ma'lumotlarni saqlash uchun AES-256 shifrlash usulidan foydalanadi. To'lovlar uchun biz Payme va Click kabi jahon darajasidagi provayderlar bilan hamkorlik qilamiz, karta ma'lumotlari to'g'ridan-to'g'ri bizning serverlarimizga tegmaydi.",
          cat: "security"
        },
        {
          q: "Mualliflar uchun platforma komissiyasi qancha?",
          a: "Mualliflar uchun komissiya faqat loyiha muvaffaqiyatli yakunlanganda olinadi va u yig'ilgan summaning 5% ini tashkil qiladi. Agar loyiha yig'ilmasa, hech qanday komissiya olinmaydi.",
          cat: "creators"
        },
        {
          q: "Mukofotlarimni qanday kuzatib borishim mumkin?",
          a: "Siz o'z shaxsiy kabinetingizda 'Mening yordamlarim' bo'limida barcha qo'llab-quvvatlagan loyihalaringiz va ularning holatini kuzatib borishingiz mumkin. Shuningdek, loyiha muallifi yangiliklar yuborganda sizga bildirishnoma keladi.",
          cat: "backers"
        },
        {
          q: "Loyiha boshlangandan keyin o'z hissamni (pledge) o'zgartira olamanmi?",
          a: "Ha, loyiha yig'ish muddati yakunlanmaguncha siz o'z hissangizni oshirishingiz yoki boshqa mukofotni tanlashingiz mumkin.",
          cat: "backers"
        },
        {
          q: "Muallifning shaxsini qanday tasdiqlash mumkin?",
          a: "Platformamizdagi barcha mualliflar majburiy KYC (shaxsni tasdiqlash) jarayonidan o'tadilar. Tasdiqlangan mualliflar sahifasida maxsus belgi (check-mark) bo'ladi.",
          cat: "security"
        },
        {
          q: "Click xalqaro kredit kartalarini qo'llab-quvvatlaydimi?",
          a: "Hozirgi vaqtda Click orqali O'zbekistonning barcha mahalliy kartalari (Uzcard, Humo) orqali to'lov qilish mumkin. Xalqaro kartalar (Visa, Mastercard) bo'yicha imkoniyatlarni kengaytirish ustida ishlayapmiz.",
          cat: "payments"
        },
        {
          q: "Agar loyiha maqsad qilinganidan ko'proq mablag' yig'sa nima bo'ladi?",
          a: "Agar loyiha 100% dan ko'p mablag' to'plasa, barcha qo'shimcha mablag'lar muallifga loyihani yanada yaxshilash yoki qo'shimcha mukofotlar taqdim etish uchun beriladi.",
          cat: "general"
        }
      ],
      form: {
        title: "Bizga xabar qoldiring",
        subtitle: "Savollaringiz bormi yoki hamkorlik qilmoqchimisiz? Bizning jamoamiz sizga yordam berishdan xursand bo'ladi.",
        name: "Ismingiz",
        email: "Email manzilingiz",
        subject: "Mavzu",
        message: "Xabaringiz",
        send: "Xabarni yuborish",
        success: "Rahmat! Xabangiz yuborildi. Tez orada siz bilan bog'lanamiz.",
        subjects: {
          general: "Umumiy savollar",
          support: "Texnik yordam",
          partnership: "Hamkorlik",
          legal: "Huquqiy masalalar"
        }
      },
      info: {
        title: "Aloqa ma'lumotlari",
        email_label: "Email",
        email_val: "support@funduz.uz",
        phone_label: "Telefon",
        phone_val: "+998 71 200-00-00",
        address_label: "Manzil",
        address_val: "Toshkent shahri, Yunusobod tumani, Amir Temur ko'chasi, 19-uy",
        hours_label: "Ish vaqti",
        hours_val: "Dush - Juma: 09:00 - 18:00"
      }
    },
    terms: {
      badge: "Yuridik ma'lumotlar",
      title: "Foydalanish shartlari",
      last_updated: "Oxirgi yangilanish",
      footer_title: "Savollaringiz bormi?",
      footer_desc: "Agar sizda ushbu shartlar bo'yicha tushunmovchiliklar bo'lsa, bizning qo'llab-quvvatlash jamoamizga murojaat qiling.",
      footer_link: "Bog'lanish",
      toc: "Mundarija",
      download_pdf: "PDF yuklab olish",
      important_note: "Muhim: 'Ro'yxatdan o'tish' tugmasini bosish yoki platformadan foydalanish orqali siz ushbu shartlarni o'qiganingizni, tushunganingizni va ularga rioya qilishga roziligingizni tasdiqlaysiz.",
      sections: [
        {
          title: "Kirish",
          summary: "Ushbu shartlar siz va Funduz o'rtasidagi kelishuvdir.",
          content: [
            "Funduz platformasiga xush kelibsiz. Bizning veb-saytimiz va xizmatlarimizdan foydalanish orqali siz Funduz bilan qonuniy shartnomaga kirishasiz. Ushbu foydalanish shartlari sizning bizning kroudfanding ekotizimimizga kirishingizni tartibga soladi.",
            "Muhim: Ro'yxatdan o'tish yoki platformadan foydalanish orqali siz ushbu shartlarni o'qiganingizni, tushunganingizni va ularga rioya qilishga roziligingizni tasdiqlaysiz."
          ]
        },
        {
          title: "Ta'riflar",
          summary: "Asosiy tushunchalar va atamalar izohi.",
          content: [
            "Ushbu hujjatda 'Funduz', 'Biz' va 'Bizning' deganda platforma kompaniyasi tushuniladi. 'Foydalanuvchi' deganda har qanday tashrif buyuruvchi yoki a'zo tushuniladi. 'Muallif' — mablag' yig'ish kampaniyasini boshlagan foydalanuvchi. 'Homiylar' — loyihalarni moliyaviy qo'llab-quvvatlovchi shaxslar."
          ]
        },
        {
          title: "Muvofiqlik",
          summary: "Platformadan foydalanish uchun yosh chegarasi.",
          content: [
            "Funduzdan foydalanish uchun siz kamida 18 yoshga to'lgan bo'lishingiz kerak. Agar siz platformadan kompaniya nomidan foydalanayotgan bo'lsangiz, siz ushbu tashkilotni ushbu Shartlar bilan bog'lash vakolatiga ega ekanligingizni bildirasiz."
          ]
        },
        {
          title: "Foydalanuvchi hisoblari",
          summary: "Hisobingiz xavfsizligi sizning javobgarligingizda.",
          content: [
            "Siz hisob ma'lumotlaringizning maxfiyligini saqlash uchun javobgarsiz. Hisobingiz ostidagi barcha harakatlar sizning javobgarligingizda bo'ladi. Biz hamjamiyat standartlarimizni buzgan hisoblarni to'xtatib turish yoki bekor qilish huquqini saqlab qolamiz."
          ]
        },
        {
          title: "Loyiha yaratish",
          summary: "Mualliflar uchun asosiy qoidalar.",
          content: [
            "Loyiha mualliflari o'z maqsadlari haqida halol, aniq va to'liq ma'lumot berishlari shart. Chalg'ituvchi kampaniyalar qat'iyan man etiladi. Siz intellektual mulkingizga egalik huquqini saqlab qolasiz, ammo Funduzga loyihangizni reklama maqsadida namoyish etishga ruxsat berasiz."
          ]
        },
        {
          title: "Loyihani qo'llab-quvvatlash",
          summary: "Homiylik va mukofotlar haqida.",
          content: [
            "Loyihani qo'llab-quvvatlash — bu yordam ifodasidir, ulush sotib olish yoki oddiy chakana savdo tranzaksiyasi emas. Mualliflar mukofotlarni yetkazib berish uchun barcha choralarni ko'rishlari shart bo'lsa-da, Funduz loyiha natijalarini kafolatlamaydi."
          ]
        },
        {
          title: "To'lovlar va komissiyalar",
          summary: "Platforma va bank komissiyalari miqdori.",
          content: [
            "Hisob yaratish bepul. Funduz muvaffaqiyatli moliyalashtirilgan loyihalardan 5% miqdorida platforma komissiyasi oladi. To'lov provayderlari (Payme, Click) qo'shimcha tranzaksiya komissiyalarini olishlari mumkin."
          ]
        },
        {
          title: "Hammasi yoki hech narsa modeli",
          summary: "Loyiha yig'ilmasa mablag'lar olinmaydi.",
          content: [
            "Funduz 'hammasi yoki hech narsa' modeli asosida ishlaydi. Homiylardan faqat loyiha belgilangan vaqt ichida 100% moliyaviy maqsadiga erishgandagina mablag' yechib olinadi. Maqsadga erishilmasa, hech qanday mablag' olinmaydi."
          ]
        },
        {
          title: "Qaytarishlar",
          summary: "Mablag'larni qaytarish shartlari.",
          content: [
            "Loyiha muvaffaqiyatli moliyalashtirilib, mablag'lar Muallifga o'tkazilgandan so'ng, Funduz mablag'larni qaytarib bermaydi. Barcha qaytarib berish bo'yicha so'rovlar bevosita Loyiha Muallifiga yuborilishi kerak."
          ]
        },
        {
          title: "Taqiqlangan xatti-harakatlar",
          summary: "Nimalar qilish qat'iyan man etiladi.",
          content: [
            "Foydalanuvchilar Funduzdan noqonuniy harakatlar, haqorat qilish, spam yuborish yoki boshqalarning intellektual mulkini buzish uchun foydalana olmaydilar. Ushbu qoidalarni buzish hisobingizning darhol to'xtatilishiga olib keladi."
          ]
        },
        {
          title: "Intellektual mulk",
          summary: "Mualliflik huquqlarini himoya qilish.",
          content: [
            "Funduz nomi, logotipi va dizayn elementlari mualliflik huquqi va savdo belgisi qonunlari bilan himoyalangan. Siz bizning brendingizdan yozma ruxsatsiz foydalana olmaysiz."
          ]
        },
        {
          title: "Nizolar",
          summary: "Muammolarni hal qilish tartibi.",
          content: [
            "Har qanday huquqiy nizolar O'zbekiston Respublikasi qonunchiligi asosida hal qilinadi. Biz sudga murojaat qilishdan oldin nizolarni muzokaralar yo'li bilan hal qilishni tavsiya etamiz."
          ]
        },
        {
          title: "Javobgarlik",
          summary: "Funduz javobgarligining chegaralari.",
          content: [
            "Funduz platformadan foydalanish natijasida yuzaga keladigan har qanday zarar uchun javobgar emas. Biz xizmatni 'boricha' (as is) tamoyili asosida, hech qanday kafolatlarsiz taqdim etamiz."
          ]
        },
        {
          title: "O'zgarishlar",
          summary: "Shartlarning yangilanishi haqida.",
          content: [
            "Biz ushbu shartlarni vaqti-vaqti bilan yangilab turishimiz mumkin. Muhim o'zgarishlar haqida foydalanuvchilarni bildirishnoma orqali xabardor qilamiz. O'zgarishlardan keyin foydalanishni davom ettirish — bu ularga rozilikni bildiradi."
          ]
        },
        {
          title: "Bog'lanish",
          summary: "Biz bilan bog'lanish usullari.",
          content: [
            "Agar sizda ushbu Shartlar bo'yicha savollaringiz bo'lsa, iltimos, bizning yuridik jamoamizga legal@funduz.com manzili orqali murojaat qiling."
          ]
        }
      ]
    },
    privacy: {
      badge: "Xavfsizlik va Maxfiylik",
      title: "Maxfiylik siyosati",
      desc: "Funduzda biz shaffoflik ishonch asosi ekanligiga ishonamiz. Ushbu siyosat sizning raqamli izingizni qanday himoya qilishimizni belgilaydi.",
      last_updated: "Oxirgi yangilanis",
      last_updated_date: "14-Aprel, 2024",
      toc: "Mundarija",
      footer_title: "Maxfiyligingiz bo'yicha savollar bormi?",
      footer_desc: "Bizning maxfiylik bo'yicha maxsus jamoamiz sizga huquqlaringiz va ma'lumotlaringizni himoya qilishda yordam berishga tayyor.",
      footer_link: "So'rov yuborish",
      download_pdf: "PDF yuklab olish",
      cards: [
        { title: "Ma'lumotlarni sotmaymiz", icon: "shield" },
        { title: "Xavfsiz to'lovlar", icon: "lock" },
        { title: "Hisobni boshqarish", icon: "user" },
        { title: "Qonuniy muvofiqlik", icon: "globe" }
      ],
      sections: [
        {
          title: "To'planadigan ma'lumotlar",
          summary: "Profil yaratishda yig'iladigan shaxsiy ma'lumotlar.",
          content: [
            "Siz Funduz platformasida profil yaratganingizda, biz sizning ismingiz, elektron pochta manzilingiz va mukofotlarni yetkazib berish uchun pochta manzilingiz kabi shaxsiy identifikatsiya ma'lumotlarini to'playmiz.",
            "Loyiha mualliflari uchun biz global KYC (Mijozingizni biling) qoidalariga muvofiq mablag' o'tkazmalarini amalga oshirish uchun shaxsni tasdiqlovchi hujjatlar va moliyaviy ma'lumotlarni ham yig'amiz."
          ]
        },
        {
          title: "Ulardan qanday foydalanamiz",
          summary: "Ma'lumotlaringiz xizmat sifatini oshirish uchun yoqilg'idir.",
          content: [
            "Biz ma'lumotlardan quyidagilar uchun foydalanamiz:",
            "• Hissalaringizni qayta ishlash va mukofotlarni ta'minlash.",
            "• Siz qo'llab-quvvatlagan loyihalar asosida yangiliklar tasmasini shaxsiylashtirish.",
            "• Kampaniya yangiliklari va xavfsizlik bildirishnomalarini yuborish."
          ]
        },
        {
          title: "Ma'lumotlarni almashish",
          summary: "Uchinchi tomonlar bilan hamkorlik qoidalari.",
          content: [
            "Biz sizning ismingiz va elektron pochtangizni siz qo'llab-quvvatlagan loyiha mualliflariga, ular mukofotlarni yetkazib berishlari uchun taqdim etamiz. Biz hech qachon shaxsiy ma'lumotlaringizni uchinchi tomon reklama beruvchilariga sotmaymiz."
          ]
        },
        {
          title: "Cookie fayllari",
          summary: "Brauzer tajribasini yaxshilash texnologiyalari.",
          content: [
            "Biz sizning tizimga kirganingizni saqlab qolish uchun texnik cookie-fayllardan va afzalliklaringizni eslab qolish uchun funksional cookie-fayllardan foydalanamiz. Analitik cookie-fayllar faqat sizning roziligingiz bilan faollashtiriladi."
          ]
        },
        {
          title: "Ma'lumotlarni saqlash",
          summary: "Ma'lumotlar qancha muddat saqlanadi.",
          content: [
            "Biz sizning ma'lumotlaringizni hisobingiz faol bo'lgan muddatda saqlaymiz. Agar hisobingizni o'chirishga qaror qilsangiz, biz qonuniy yoki moliyaviy hisobot majburiyatlari uchun zarur bo'lgan ba'zi ma'lumotlarni saqlab qolishimiz mumkin."
          ]
        },
        {
          title: "Xavfsizlik",
          summary: "Sanoat standartidagi himoya choralari.",
          content: [
            "Barcha tranzaksiya ma'lumotlari sanoat standarti bo'lgan TLS yordamida shifrlanadi. Biz shaxsiy ma'lumotlarni ruxsatsiz kirishdan himoyalangan xavfsiz serverlarda saqlaymiz."
          ]
        },
        {
          title: "Sizning huquqlaringiz",
          summary: "Ma'lumotlaringiz ustidan to'liq nazorat.",
          content: [
            "Siz o'z ma'lumotlaringizga egalik qilasiz. Global maxfiylik qoidalariga (GDPR va CCPA) muvofiq, siz quyidagi huquqlarga egasiz:",
            "• Ma'lumotlarga kirish va ularni ko'chirish huquqi.",
            "• Unutilish (o'chirish) huquqi.",
            "• Xatolarni tuzatish huquqi.",
            "• Qayta ishlashga e'tiroz bildirish huquqi."
          ]
        },
        {
          title: "Bolalar maxfiyligi",
          summary: "Voyaga yetmaganlar ma'lumotlarini himoya qilish.",
          content: [
            "Bizning xizmatlarimiz 18 yoshdan kichik shaxslar uchun mo'ljallanmagan. Biz bila turib voyaga yetmaganlardan ma'lumot to'plamaymiz."
          ]
        },
        {
          title: "Xalqaro o'tkazmalar",
          summary: "Ma'lumotlarning chegarasiz himoyasi.",
          content: [
            "Platformadan foydalanish orqali siz ma'lumotlaringiz biz faoliyat yuritadigan mamlakatlar o'rtasida o'tkazilishiga rozilik berasiz, bunda himoya darajasi bir xil darajada saqlanadi."
          ]
        },
        {
          title: "O'zgarishlar",
          summary: "Siyosat yangilanishi haqida ogohlantirishlar.",
          content: [
            "Biz ushbu siyosatni vaqti-vaqti bilan yangilab turamiz. Muhim o'zgarishlar haqida ro'yxatdan o'tgan foydalanuvchilarga elektron pochta orqali xabar beriladi."
          ]
        },
        {
          title: "Bog'lanish",
          summary: "Biz bilan muloqot qilish usullari.",
          content: [
            "Maxfiylik bo'yicha har qanday savollar uchun privacy@funduz.com manzili orqali biz bilan bog'laning."
          ]
        }
      ]
    },
    error404: {
      badge: "Xatolik 404",
      title: "Biz bu sahifani topa olmadik",
      desc: "Siz qidirayotgan sahifa mavjud emas yoki boshqa joyga ko'chirilgan. Lekin xavotir olmang — sizni juda ko'p qiziqarli loyihalar kutmoqda.",
      back_home: "Bosh sahifaga",
      explore: "Loyihalarni ko'rish",
      contact: "Yordam xizmati",
      trending_title: "Buning o'rniga ushbu trenddagi loyihalarni ko'ring",
      view_all: "Barchasini ko'rish"
    },
    trends: {
      title: "Texnologiya",
      desc: "Ertangi kun me'morlarini qo'llab-quvvatlash. Yashil energiya yutuqlaridan innovatsion dasturiy ta'minotgacha — raqamli va jismoniy kelajagimizni shakllantiradigan loyihalarni o'rganing.",
      stats: {
        active: "faol loyiha",
        backers: "homiylar",
        funded: "jami to'plandi"
      },
      chips: ["AI & Robototexnika", "CleanTech", "SaaS", "Hardware"],
      filters: ["Barchasi", "Trenddagilar", "Yangi", "Deyarli to'plandi", "Yaqinda tugaydi"],
      sort_label: "Saralash:",
      sort_recent: "Eng so'nggi",
      featured: {
        editors_pick: "MUHARRIR TANLOVI",
        category: "SUN'IY INTELLEKT",
        title: "NeuralLink: Inson-mashina interfeysining yangi bosqichi",
        desc: "Insonlarga kelajakdagi AI yutuqlari bilan raqobatlashishga yordam beruvchi past kechikishli va yuqori o'tkazuvchanlikka ega miya-kompyuter interfeyslarini ishlab chiqish.",
        back_btn: "Loyihani qo'llab-quvvatlash"
      },
      upcoming_title: "Kelajak trendlari",
      explore_worlds: "Boshqa dunyolarni kashf eting",
      cta: {
        title: "Texnologiya sohasida g'oyangiz bormi?",
        desc: "Loyihangizni Funduz-da ishga tushiring va innovatsiyalar kuchiga ishonadigan hamjamiyatning bir qismiga aylaning.",
        btn: "Loyiha boshlash"
      }
    }
  },
  ru: {
    nav: {
      projects: "Просмотр проектов",
      about: "Как это работает?",
      cooperation: "Сообщество",
      trends: "Технологические тенденции",
      projects_short: "Проекты",
      about_short: "О нас",
      cooperation_short: "Сотрудничество",
      login: "Войти",
      view_projects: "Просмотр проектов",
      how_it_works: "Как это работает?",
      community: "Сообщество",
      search_placeholder: "Поиск проекта...",
      start_project: "Начать проект",
    },
    how_it_works: {
      badge: "ПУТЕВОДИТЕЛЬ ПО ПЛАТФОРМЕ",
      title_start: "Как работает",
      title_end: "Funduz?",
      subtitle: "Воплощайте идеи в реальность или поддерживайте проекты, которые вам небезразличны. Мы создали пространство для роста инноваций.",
      btn_authors: "Для авторов",
      btn_sponsors: "Для спонсоров",
      steps_prefix: "ШАГ",
      steps: [
        {
          title: "Создайте проект",
          desc: "Расскажите свою историю, покажите прототипы и установите финансовую цель для реализации."
        },
        {
          title: "Поделитесь",
          desc: "Распространите информацию среди друзей, семьи и вашего сообщества через соцсети."
        },
        {
          title: "Соберите средства",
          desc: "Получайте поддержку от спонсоров со всего мира, которые верят в вашу идею."
        },
        {
          title: "Воплотите идею",
          desc: "Реализуйте проект, держите спонсоров в курсе и отправьте им заслуженные вознаграждения."
        }
      ],
      steps_sponsors: [
        {
          title: "Выберите проект",
          desc: "Найдите инновационные идеи, которые вам откликаются и которые вы считаете полезными для общества."
        },
        {
          title: "Выберите награду",
          desc: "Поддержите проект просто так или выберите один из интересных подарков, подготовленных авторами."
        },
        {
          title: "Сделайте вклад",
          desc: "Безопасно и быстро переведите средства через современные платежные системы."
        },
        {
          title: "Следите за ростом",
          desc: "Наблюдайте за реализацией проекта, получайте новости и заберите свою заслуженную награду."
        }
      ],
      features: {
        transparency: {
          title: "Прозрачность на каждом этапе",
          desc: "Мы верим, что доверие — это фундамент краудфандинга. Funduz обеспечивает безопасность транзакций и прозрачность коммуникации."
        },
        security: {
          title: "Безопасность",
          desc: "Ваши средства и данные защищены банковскими протоколами шифрования."
        },
        community: {
          title: "Сильное сообщество",
          desc: "Доступ к тысячам активных спонсоров, готовых поддержать инновационные идеи."
        }
      },
      faq: {
        title: "Часто задаваемые вопросы",
        subtitle: "Все, что вам нужно знать, чтобы начать уверенно.",
        items: [
          {
            q: "Что если я не соберу нужную сумму?",
            a: "Мы используем модель 'Всё или ничего'. Если цель не достигнута в срок, средства в полном объеме возвращаются спонсорам автоматически."
          },
          {
            q: "Как я получу свои деньги?",
            a: "После успешного завершения кампании и прохождения финальной проверки, средства переводятся на ваш верифицированный банковский счет за вычетом комиссии платформы (5%)."
          },
          {
            q: "Безопасность ли это?",
            a: "Да, мы используем современные методы шифрования и проверенные платежные системы. Все аккаунты проходят процедуру KYC для предотвращения мошенничества."
          }
        ]
      },
      cta: {
        title: "Готовы начать свой путь?",
        btn_create: "Создать проект",
        btn_projects: "Смотреть проекты"
      }
    },
    search: {
      results_overline: "РЕЗУЛЬТАТЫ ПОИСКА",
      results_count: "результатов",
      for_query: "по запросу",
      featured_projects: "Рекомендуемые проекты",
      recent_searches: "Вы недавно искали",
      popular_tags: "Популярные теги",
      tabs: {
        all: "Все",
        projects: "Проекты",
        creators: "Авторы",
        categories: "Категории"
      },
      sort_by: "Сортировка:",
      sort: {
        relevant: "По релевантности",
        newest: "Сначала новые",
        popular: "Сначала популярные"
      },
      cat_all: "Все категории",
      cats: {
        tech: "Технологии",
        art: "Искусство",
        eco: "Экология",
        innovation: "Инновации",
        urbanism: "Урбанистика",
        education: "Образование"
      },
      matched_categories: "Подходящие категории",
      projects_found: "проектов найдено",
      influential_creators: "Влиятельные авторы",
      top_creator: "Топ автор",
      view_profile: "Смотреть профиль",
      stats: {
        projects: "ПРОЕКТЫ",
        raised: "СОБРАНО",
        backers: "СПОНСОРЫ"
      },
      empty_filter_title: "Нет результатов по вашему фильтру",
      empty_filter_desc: "Мы не смогли найти дополнительные проекты, соответствующие вашему запросу. Попробуйте расширить поиск или изучить популярные темы ниже.",
      empty_chips: {
        ai: "Искусственный интеллект",
        digital_art: "Цифровое искусство",
        micro_finance: "Микрофинансирование"
      }
    },
    explore: {
      title: "Все проекты",
      hero_title: "Откройте для себя лучшие проекты Узбекистана",
      search_placeholder: "Ищите проект, категорию или автора...",
      categories: {
        all: "Все",
        tech: "Технологии",
        art: "Искусство",
        social: "Общество",
        edu: "Образование",
        eco: "Экология"
      },
      sort: {
        newest: "Самые новые",
        popular: "Популярные",
        ending: "Скоро заканчиваются"
      },
      load_more: "Показать еще",
      empty_title: "Проектов пока нет",
      empty_desc: "Скоро здесь появится список самых интересных и полезных проектов Узбекистана.",
      projects_list: [
        {
          id: 1,
          title: "Зеленые сады Ташкента: Природа внутри города",
          author: "Анвар Касымов",
          category: "Экология",
          raised: "120,000,000",
          goal: "150,000,000",
          progress: 80,
          days: 12,
          donors: 845,
          img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          title: "Bilim-AI: Искусственный интеллект для узбекского языка",
          author: "Малика Каримова",
          category: "Образование",
          raised: "45,000,000",
          goal: "100,000,000",
          progress: 45,
          days: 24,
          donors: 312,
          img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          title: "Самаркандская керамика: Центр нового поколения",
          author: "Умар Али",
          category: "Искусство",
          raised: "82,800,000",
          goal: "90,000,000",
          progress: 92,
          days: 3,
          donors: 156,
          img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          title: "Агро-Дрон: Мониторинг хлопковых полей",
          author: "Жасур Олимов",
          category: "Технологии",
          raised: "30,000,000",
          goal: "60,000,000",
          progress: 50,
          days: 15,
          donors: 89,
          img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 5,
          title: "Книголюб: Современная библиотека для молодежи",
          author: "Азиза Каримова",
          category: "Общество",
          raised: "15,000,000",
          goal: "25,000,000",
          progress: 60,
          days: 8,
          donors: 124,
          img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 6,
          title: "Солнечные панели: Энергия для сельских школ",
          author: "Сардор Ахмедов",
          category: "Экология",
          raised: "95,000,000",
          goal: "120,000,000",
          progress: 79,
          days: 20,
          donors: 432,
          img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    hero: {
      badge: "Первая краудфандинговая платформа Узбекистана",
      title_1: "Финансируем",
      title_2: "добро",
      title_3: "вместе",
      description: "Поддерживайте социально значимые проекты через Funduz или собирайте инвестиции для реализации своей идеи.",
      btn_contribute: "Сделать вклад сейчас",
      btn_create: "Создать проект",
      success_title: "Проект «Oromgoh» собрал нужную сумму за 2 недели",
      success_donors: "Поддержано 345 донорами",
    },
    stats: {
      projects: "Успешных проектов",
      donors: "Активных доноров",
      collected: "Собрано средств",
    },
    about: {
      hero_title: "Мы строим будущее вместе",
      hero_desc: "Funduz — это платформа, где смелые идеи находят поддержку, а инновации становятся реальностью благодаря силе сообщества.",
      mission_label: "Наша миссия",
      mission_text: "Демократизировать доступ к капиталу для каждого мечтателя в Узбекистане. От шумных мастерских Самарканда до технопарков Ташкента — мы предоставляем платформу, инструменты и сообщество, необходимые для превращения местного видения в глобальную реальность.",
      mission_quote: "Каждый великий проект начинается с того, кто в него верит.",
      story_title: "Наша история",
      timeline: [
        {
          date: "Январь 2024",
          title: "Зарождение идеи",
          desc: "Funduz был основан в Ташкенте группой дизайнеров и предпринимателей, которые увидели пробел в местной креативной экономике."
        },
        {
          date: "Март 2025",
          title: "Национальное расширение",
          desc: "Открытие региональных офисов в Самарканде, Бухаре и Хиве для поддержки традиционных ремесленников и проектов местного наследия."
        },
        {
          date: "Vision 2026",
          title: "Центральноазиатский хаб",
          desc: "Стремление стать основным катализатором инноваций во всем центральноазиатском регионе."
        }
      ],
      stats: [
        { value: "250+", label: "Завершено проектов" },
        { value: "12,500+", label: "Бэкеров" },
        { value: "15B", label: "UZS собрано" },
        { value: "14", label: "Городов" }
      ],
      believes_title: "Во что мы верим",
      believes: [
        {
          title: "Доверие",
          desc: "Мы ставим прозрачность и подотчетность во главу угла как для авторов, так и для бэкеров.",
          icon: "🛡️"
        },
        {
          title: "Сообщество",
          desc: "Успех — это не только деньги; это люди, которые присоединяются к вашему пути.",
          icon: "👥"
        },
        {
          title: "Инновации",
          desc: "Поддержка идей, которые расширяют границы и решают местные проблемы.",
          icon: "💡"
        },
        {
          title: "Сначала местное",
          desc: "Празднование уникальной культурной самобытности и талантов Узбекистана.",
          icon: "📍"
        }
      ],
      cta_title: "Готовы воплотить свою идею в жизнь?",
      cta_btn_start: "Начать проект",
      cta_btn_explore: "Смотреть проекты",
      team_title: "Познакомьтесь с командой",
      team: [
        { name: "Бахтиёр Алиев", role: "Основатель и CEO" },
        { name: "Нигора Жураева", role: "Руководитель проектов" },
        { name: "Азизбек Кадиров", role: "CTO" },
        { name: "Зулайхо Саидова", role: "Community Lead" }
      ],
      partners_title: "Наши партнеры"
    },
    projects: {
      title: "Избранные проекты",
      subtitle: "Самые актуальные и интересные инициативы по всему Узбекистану",
      view_all: "Все проекты",
      more: "Подробнее",
      goal: "Цель",
      donors: "доноров",
      cat_education: "Образование",
      cat_ecology: "Экология",
      cat_tech: "Технологии",
      cat_art: "Искусство",
      cat_music: "Музыка",
      project_count: "{count} проектов",
      p1_title: "Современная библиотека для сельской школы",
      p2_title: "Зеленый город: акция по посадке 10,000 деревьев",
      p3_title: "Бесплатные IT-курсы для молодых специалистов",
    },
    cta: {
      title: "Превратите свою идею в реальность",
      subtitle: "Соберите необходимый капитал для вашего бизнеса, социального проекта или творчества вместе с сообществом Funduz.",
      btn_start: "Начать проект",
      btn_expert: "Связаться со специалистом",
      feature1: "Простое управление",
      feature1_desc: "Полностью прозрачный дашборд",
      feature2: "Большая аудитория",
      feature2_desc: "Тысячи потенциальных доноров",
    },
    footer: {
      description: "Строим будущее Узбекистана вместе. Каждое вложение важно.",
      projects_title: "Проекты",
      p_tech: "Технологии",
      p_art: "Искусство",
      p_social: "Социальная помощь",
      company_title: "Компания",
      c_about: "О нас",
      c_contact: "Контакты",
      c_faq: "Вопросы",
      legal_title: "Юридическая информация",
      l_terms: "Условия использования",
      l_privacy: "Политика конфиденциальности",
      copyright: "© 2024 Funduz. Все права защищены.",
      social_tg: "Telegram",
      social_inst: "Instagram",
      social_fb: "Facebook",
    },
    project_view: {
      title: "Eco-Paket: Производство первой биоразлагаемой упаковки в Узбекистане",
      author_label: "Автор",
      author_success: "2 успешных проекта",
      goal: "Цель",
      raised: "собрано",
      donors_count: "доноров",
      stat_donors: "Доноры",
      stat_days: "Дней осталось",
      stat_done: "Выполнено",
      btn_support: "Поддержать проект",
      tabs: ["О проекте", "Новости", "Отзывы"],
      reward_title: "Награды",
      reward_count: "доступно",
      reward_select: "Выбрать",
      reward_1_title: "Благодарность",
      reward_1_price: "100,000 UZS",
      reward_1_desc: "Электронное благодарственное письмо и ваше имя в списке спонсоров на сайте проекта.",
      reward_2_title: "Eco-Набор",
      reward_2_price: "500,000 UZS",
      reward_2_desc: "Набор из 100 био-пакетов и брендированная эко-сумка (tote bag). Бесплатная доставка по Узбекистану.",
      reward_3_title: "Спонсор-Партнер",
      reward_3_price: "2,000,000 UZS",
      reward_3_desc: "Ваш логотип будет размещен на первой партии упаковки в качестве официального партнера.",
      delivery_label: "Ожидаемая доставка:",
      reward_1_delivery: "Сентябрь, 2024",
      reward_2_delivery: "Октябрь, 2024",
      reward_3_delivery: "Октябрь, 2024",
      special_title: "Особая помощь?",
      special_desc: "Если вы крупный инвестор или хотите обсудить особые условия партнерства, свяжитесь с нами.",
      special_btn: "Связаться",
      detail_title: "Новая эра для экологии",
      detail_text_1: "В Узбекистане ежедневно образуются миллионы тонн пластиковых отходов. Основную их часть составляют одноразовые пакеты. Наш проект Eco-Paket направлен на популяризацию упаковки из кукурузного крахмала, которая полностью разлагается за 6-12 месяцев.",
      detail_text_2: "Собранные средства будут направлены на закупку высокотехнологичного оборудования из Китая и формирование первоначального запаса сырья. Наш проект начнет работу в Ташкенте и в дальнейшем расширится на всю республику.",
      image_caption: "Образцы биоразлагаемых пакетов нашего производства",
      benefits_title: "Почему вы должны нас поддержать?",
      benefits: [
        "Вы защищаете природу от пластикового загрязнения.",
        "Вы вносите вклад в развитие местного производства.",
        "Вы станете одним из первых обладателей высококачественной эко-продукции.",
      ],
    },
    community: {
      badge: "СООБЩЕСТВО FUNDUZ",
      title: "Сердце нашей платформы — это люди",
      subtitle: "Узнайте истории успеха и присоединяйтесь к нашему растущему сообществу новаторов. Вместе мы превращаем идеи в реальность.",
      stats: {
        collected_val: "12+ Млрд сум",
        collected_label: "СОБРАНО СРЕДСТВ",
        sponsors_val: "45,000+",
        sponsors_label: "АКТИВНЫХ СПОНСОРОВ",
        projects_val: "1,200+",
        projects_label: "УСПЕШНЫХ ПРОЕКТОВ"
      },
      stories: {
        title: "Истории Успеха",
        subtitle: "Реальные люди, меняющие мир прямо сейчас.",
        view_all: "Смотреть все",
        read_story: "Читать историю",
        badge: "100% УСПЕШНО",
        items: [
          {
            title: "Эко-ферма Будущего",
            desc: "Благодаря поддержке сообщества Funduz мы смогли запустить первую в стране вертикальную ферму."
          },
          {
            title: "IT-Образование для всех",
            desc: "Наша миссия — обучить 10,000 подростков программированию, и мы уже на полпути."
          },
          {
            title: "Центр Ремесел 'Талант'",
            desc: "Мы восстанавливаем забытые традиции и даем работу сотням мастеров по всей стране."
          }
        ]
      },
      sponsors_section: {
        title: "Наши Супер-Спонсоры",
        label: "СУПЕР-СПОНСОР",
        items: [
          "Азиз Каримов",
          "Мадина Алиева",
          "Рустам Саидов",
          "Елена Ким",
          "Сардор Умаров"
        ]
      },
      telegram: {
        title: "Присоединяйтесь к нашему Telegram-каналу",
        desc: "Будьте в курсе всех новых проектов, эксклюзивных интервью и новостей платформы.",
        btn: "Перейти в Telegram"
      }
    },
    login: {
      title: "Добро пожаловать!",
      subtitle: "Введите свои данные для входа на платформу",
      tab_login: "Вход",
      tab_register: "Регистрация",
      social_google: "Через Google",
      or: "ИЛИ",
      label_email: "ЭЛЕКТРОННАЯ ПОЧТА",
      label_password: "ПАРОЛЬ",
      forgot_password: "Забыли пароль?",
      btn_submit: "Войти в систему",
      label_name: "Ф.И.О. (ПОЛНОЕ ИМЯ)",
      placeholder_name: "Ваше имя",
      label_password_reg: "Создать пароль",
      btn_register: "Создать аккаунт",
      footer_text_start: "Входя или регистрируясь, вы соглашаетесь с ",
      footer_text_and: " и ",
      footer_text_end: " Funduz.",
      hero_title: "Финансируем добро вместе",
      hero_subtitle: "Маленький вклад — основа больших перемен. Поддерживайте проекты или воплощайте свои идеи в жизнь."
    },
    create: {
      header_title: "Запуск нового проекта",
      cancel: "Отмена",
      step_prefix: "ШАГ",
      step1_title: "Основная информация",
      name_label: "Название проекта",
      name_help: "Дайте своему проекту краткое и содержательное название, которое привлечет людей.",
      name_placeholder: "Например: Городское садоводство",
      category_label: "Категория",
      duration_label: "Продолжительность (в днях)",
      goal_label: "Необходимая сумма",
      tax_info: "Не забывайте о комиссии платформы и налогах.",
      media_title: "Медиа и История",
      back: "Назад",
      next: "Следующий шаг",
      tab_info: "Информация",
      tab_media: "Медиа",
      tab_rewards: "Награды",
      media_placeholder: "Перетащите сюда фото или видео или нажмите для выбора"
    },
    story: {
      back: "Назад",
      badge: "История успеха",
      title: "Эко-ферма Будущего: Как мы вырастили мечту",
      author: "Азиз Каримов",
      date: "Сентябрь 2024",
      history_title: "История проекта",
      history_p1: "Всё началось с заброшенного участка земли на окраине Ташкента. Моя идея заключалась в том, чтобы доказать: сельское хозяйство может быть технологичным, экологически чистым и экономически выгодным даже на небольших площадях.",
      history_p2: "Первые месяцы были самыми сложными. Мы столкнулись с проблемой засоленности почвы и отсутствием стабильного полива. Но благодаря поддержке 450 спонсоров на платформе Funduz, мы смогли внедрить систему капельного орошения и восстановить плодородие земли за рекордные сроки.",
      history_p3: "Сегодня наша ферма производит более 2 тонн органических овощей в месяц, обеспечивая свежими продуктами три района города. Это не просто бизнес — это живое доказательство силы сообщества.",
      funds_title: "На что пошли средства",
      funds_equip: "Оборудование",
      funds_equip_desc: "Умные датчики и автоматика",
      funds_seeds: "Семена",
      funds_seeds_desc: "Селекционные органические сорта",
      funds_water: "Полив",
      funds_water_desc: "Система капельного орошения",
      gallery: "Галерея реализации",
      stats_title: "Итоги сборов",
      stats_collected: "Собрано",
      stats_goal: "Цель",
      stats_percent: "Процент",
      stats_sponsors: "Спонсоров поддержали",
      quote: "\"Funduz дал нам не просто деньги, а веру в то, что наша идея важна для людей. Это начало новой эры осознанного потребления.\"",
      similar_title: "Похожие истории"
    },
    contact: {
      badge: "Центр поддержки",
      title: "Свяжитесь с нами",
      subtitle: "Есть вопрос или проект, которому нужен импульс? Наша команда здесь, чтобы помочь вам ориентироваться в мире кураторского краудфандинга.",
      search_placeholder: "Поиск по вопросам, ключевым словам или темам...",
      cats: {
        all: "Все",
        general: "Общие",
        creators: "Для авторов",
        backers: "Для спонсоров",
        payments: "Платежи и Возвраты",
        security: "Безопасность и Доверие"
      },
      faq: [
        {
          q: "Как я могу поддержать проект на Funduz?",
          a: "Чтобы поддержать проект, перейдите на страницу проекта, нажмите кнопку 'Внести вклад', выберите вознаграждение и произведите оплату удобным способом (Payme, Click или карта).",
          cat: "backers"
        },
        {
          q: "Доступны ли возвраты, если проект не наберет сумму?",
          a: "Да, Funduz работает по принципу 'Все или ничего'. Если проект не достигает цели к установленному дедлайну, все средства автоматически возвращаются спонсорам в полном объеме без комиссий.",
          cat: "payments"
        },
        {
          q: "Какие способы оплаты поддерживает Payme?",
          a: "Через Payme вы можете поддерживать проекты с помощью карт Uzcard, Humo, а также средствами с баланса вашего кошелька Payme.",
          cat: "payments"
        },
        {
          q: "Как защищены мои персональные данные и информация о карте?",
          a: "Безопасность — наш главный приоритет. Funduz использует шифрование AES-256 для хранения всех данных. Для платежей мы работаем с провайдерами мирового уровня, такими как Payme и Click, чтобы ваши финансовые данные никогда не попадали на наши серверы напрямую.",
          cat: "security"
        },
        {
          q: "Какова комиссия платформы для авторов?",
          a: "Комиссия для авторов взимается только в случае успешного завершения проекта и составляет 5% от собранной суммы. Если проект не собрал средства, никакие комиссии не взимаются.",
          cat: "creators"
        },
        {
          q: "Как я могу отслеживать свои вознаграждения?",
          a: "Вы можете следить за всеми поддержанными проектами и их статусом в личном кабинете в разделе 'Мои участия'. Также вы будете получать уведомления, когда автор проекта публикует обновления.",
          cat: "backers"
        },
        {
          q: "Могу ли я изменить свой взнос (pledge) после начала проекта?",
          a: "Да, пока срок сбора средств не истек, вы можете увеличить сумму своего взноса или выбрать другое доступное вознаграждение.",
          cat: "backers"
        },
        {
          q: "Как проверить личность автора?",
          a: "Все авторы на нашей платформе проходят обязательную процедуру KYC (проверка личности). У проверенных авторов на странице проекта отображается специальный знак верификации.",
          cat: "security"
        },
        {
          q: "Поддерживает ли Click международные кредитные карты?",
          a: "На данный момент через Click возможна оплата всеми местными картами Узбекистана (Uzcard, Humo). Мы работаем над расширением возможностей для международных карт (Visa, Mastercard).",
          cat: "payments"
        },
        {
          q: "Что происходит, если проект собирает больше запланированной суммы?",
          a: "Если проект собирает более 100%, все сверхплановые средства передаются автору для дальнейшего улучшения проекта или предоставления дополнительных бонусов спонсорам.",
          cat: "general"
        }
      ],
      form: {
        title: "Оставьте нам сообщение",
        subtitle: "Есть вопросы или хотите сотрудничать? Наша команда будет рада помочь вам.",
        name: "Ваше имя",
        email: "Ваш Email",
        subject: "Тема",
        message: "Ваше сообщение",
        send: "Отправить сообщение",
        success: "Спасибо! Ваше сообщение отправлено. Мы скоро свяжемся с вами.",
        subjects: {
          general: "Общие вопросы",
          support: "Техподдержка",
          partnership: "Сотрудничество",
          legal: "Юридические вопросы"
        }
      },
      info: {
        title: "Контактная информация",
        email_label: "Email",
        email_val: "support@funduz.uz",
        phone_label: "Телефон",
        phone_val: "+998 71 200-00-00",
        address_label: "Адрес",
        address_val: "г. Ташкент, Юнусабадский район, ул. Амира Темура, 19",
        hours_label: "Часы работы",
        hours_val: "Пн - Пт: 09:00 - 18:00"
      }
    },
    terms: {
      badge: "Юридическая информация",
      title: "Условия использования",
      last_updated: "Последнее обновление",
      footer_title: "Остались вопросы?",
      footer_desc: "Если у вас возникли вопросы по поводу данных условий, пожалуйста, свяжитесь с нашей службой поддержки.",
      footer_link: "Связаться с нами",
      toc: "Содержание",
      download_pdf: "Скачать PDF",
      important_note: "Важно: Нажимая кнопку «Регистрация» или используя платформу, вы подтверждаете, что прочитали, поняли и согласны соблюдать данные условия.",
      sections: [
        {
          title: "Введение",
          summary: "Эти условия являются соглашением между вами и Funduz.",
          content: [
            "Добро пожаловать в Funduz. Используя наш веб-сайт и услуги, вы вступаете в юридически обязывающее соглашение с Funduz. Данные Условия использования регулируют ваш доступ к нашей экосистеме краудфандинга.",
            "Важно: Регистрируясь или используя платформу, вы подтверждаете, что прочитали, поняли и согласны соблюдать данные условия."
          ]
        },
        {
          title: "Определения",
          summary: "Объяснение ключевых понятий и терминов.",
          content: [
            "В этом документе 'Funduz', 'Мы' и 'Наши' относятся к компании-платформе. 'Пользователь' — любой посетитель или участник. 'Автор проекта' — пользователь, инициирующий кампанию по сбору средств. 'Спонсоры' — пользователи, оказывающие финансовую поддержку."
          ]
        },
        {
          title: "Требования к пользователям",
          summary: "Возрастные ограничения для использования платформы.",
          content: [
            "Для использования Funduz вам должно быть не менее 18 лет. Если вы используете платформу от имени компании, вы подтверждаете, что у вас есть полномочия связывать эту организацию данными Условиями."
          ]
        },
        {
          title: "Учетные записи пользователей",
          summary: "Безопасность вашего аккаунта — это ваша ответственность.",
          content: [
            "Вы несете ответственность за сохранение конфиденциальности ваших данных для входа. Вся деятельность под вашей учетной записью является вашей ответственностью. Мы оставляем за собой право приостановить или закрыть учетные записи, нарушающие стандарты нашего сообщества."
          ]
        },
        {
          title: "Создание проекта",
          summary: "Основные правила для авторов проектов.",
          content: [
            "Авторы проектов обязаны предоставлять честную, ясную и полную информацию о своих целях. Вводящие в заблуждение кампании строго запрещены. Вы сохраняете право собственности на свою интеллектуальную собственность, но предоставляете Funduz лицензию на показ вашего проекта в рекламных целях."
          ]
        },
        {
          title: "Поддержка проекта",
          summary: "О спонсорстве и вознаграждениях.",
          content: [
            "Поддержка проекта — это выражение поддержки, а не покупка доли или обычная розничная транзакция. Хотя Авторы обязаны приложить все усилия для предоставления вознаграждений, Funduz не гарантирует результаты проекта."
          ]
        },
        {
          title: "Сборы и платежи",
          summary: "Размер комиссий платформы и банков.",
          content: [
            "Создание учетной записи бесплатно. Funduz взимает комиссию платформы в размере 5% только с успешно профинансированных проектов. Платежные партнеры (Payme, Click) могут взимать дополнительные комиссии за транзакции."
          ]
        },
        {
          title: "Модель 'Все или ничего'",
          summary: "Если проект не собран, средства не списываются.",
          content: [
            "Funduz работает по модели 'все или ничего'. Со спонсоров списываются средства только в том случае, если проект достигает 100% своей финансовой цели в указанные сроки. Если цель не достигнута, средства не списываются."
          ]
        },
        {
          title: "Возвраты",
          summary: "Условия возврата денежных средств.",
          content: [
            "Funduz не производит возврат средств после того, как проект был успешно профинансирован и деньги были переведены Автору. Все запросы на возврат должны направляться непосредственно Автору проекта."
          ]
        },
        {
          title: "Запрещенное поведение",
          summary: "Что категорически запрещено делать на сайте.",
          content: [
            "Пользователи не могут использовать Funduz для незаконной деятельности, домогательств, спама или нарушения чужой интеллектуальной собственности. Нарушение этих правил приведет к немедленной блокировке учетной записи."
          ]
        },
        {
          title: "Интеллектуальная собственность",
          summary: "Защита авторских прав и брендинга.",
          content: [
            "Название, логотип и элементы дизайна Funduz защищены законами об авторском праве и товарных знаках. Вы не можете использовать наш брендинг без предварительного письменного разрешения."
          ]
        },
        {
          title: "Споры",
          summary: "Порядок разрешения проблемных ситуаций.",
          content: [
            "Любые юридические споры будут разрешаться в соответствии с законодательством Республики Узбекистан. Мы рекомендуем решать споры путем переговоров перед обращением в суд."
          ]
        },
        {
          title: "Ограничение ответственности",
          summary: "Границы ответственности Funduz.",
          content: [
            "Funduz не несет ответственности за любые убытки, возникшие в результате использования платформы. Мы предоставляем услугу по принципу 'как есть' (as is), без каких-либо гарантий."
          ]
        },
        {
          title: "Изменения условий",
          summary: "Об обновлении данных правил.",
          content: [
            "Мы можем периодически обновлять данные условия. Мы будем уведомлять пользователей о существенных изменениях. Продолжение использования платформы после изменений означает их принятие."
          ]
        },
        {
          title: "Контакты",
          summary: "Способы связи с юридической службой.",
          content: [
            "Если у вас есть вопросы по поводу данных Условий, пожалуйста, свяжитесь с нашей юридической службой по адресу legal@funduz.com."
          ]
        }
      ]
    },
    privacy: {
      badge: "Безопасность и Конфиденциальность",
      title: "Политика конфиденциальности",
      desc: "В Funduz мы верим, что прозрачность является основой доверия. Эта политика определяет то, как мы защищаем ваш цифровой след.",
      last_updated: "Последнее обновление",
      last_updated_date: "14 Апреля, 2024",
      toc: "Содержание",
      footer_title: "Вопросы по вашей конфиденциальности?",
      footer_desc: "Наша специальная команда по вопросам приватности готова помочь вам понять ваши права и защитить ваши данные.",
      footer_link: "Отправить запрос",
      download_pdf: "Скачать PDF",
      cards: [
        { title: "Не продаем данные", icon: "shield" },
        { title: "Защищенные платежи", icon: "lock" },
        { title: "Контроль аккаунта", icon: "user" },
        { title: "Соблюдение законов", icon: "globe" }
      ],
      sections: [
        {
          title: "Информация, которую мы собираем",
          summary: "Личные данные, собираемые при создании профиля.",
          content: [
            "Когда вы создаете профиль на платформе Funduz, мы собираем личную идентификационную информацию, включая ваше имя, адрес электронной почты и почтовый адрес для доставки вознаграждений.",
            "Для авторов проектов мы также собираем идентификационные документы и финансовые реквизиты для содействия выплатам в соответствии с глобальными правилами KYC (Know Your Customer)."
          ]
        },
        {
          title: "Как мы это используем",
          summary: "Ваши данные — это топливо для нашей экосистемы.",
          content: [
            "Мы используем информацию для:",
            "• Обработки ваших вкладов и обеспечения вознаграждений.",
            "• Персонализации ленты на основе проектов, которые вы поддержали.",
            "• Отправки обновлений кампаний и оповещений о безопасности."
          ]
        },
        {
          title: "Передача данных",
          summary: "Правила сотрудничества с третьими лицами.",
          content: [
            "Мы передаем ваше имя и email авторам проектов, которые вы поддерживаете, чтобы они могли доставить вознаграждения. Мы никогда не продаем ваши личные данные сторонним рекламодателям."
          ]
        },
        {
          title: "Файлы Cookies",
          summary: "Технологии улучшения опыта в браузере.",
          content: [
            "Мы используем технические куки, чтобы вы оставались в системе, и функциональные куки, чтобы помнить ваши предпочтения. Аналитические куки активируются только с вашего согласия."
          ]
        },
        {
          title: "Хранение данных",
          summary: "Сроки хранения информации.",
          content: [
            "Мы храним ваши данные до тех пор, пока ваш аккаунт активен. Если вы решите удалить аккаунт, мы можем сохранить некоторую информацию, необходимую для юридических или финансовых отчетных обязательств."
          ]
        },
        {
          title: "Безопасность",
          summary: "Меры защиты промышленного стандарта.",
          content: [
            "Все данные о транзакциях шифруются с использованием отраслевого стандарта TLS. Мы храним личные данные на защищенных серверах с ограниченным доступом."
          ]
        },
        {
          title: "Ваши права",
          summary: "Полный контроль над своими данными.",
          content: [
            "Вы владеете своими данными. В соответствии с глобальными правилами (GDPR и CCPA) у вас есть следующие права:",
            "• Право на доступ и переносимость данных.",
            "• Право быть забытым (удаление).",
            "• Право на исправление ошибок.",
            "• Право на возражение против обработки."
          ]
        },
        {
          title: "Конфиденциальность детей",
          summary: "Защита данных несовершеннолетних.",
          content: [
            "Наши услуги не предназначены для лиц младше 18 лет. Мы намеренно не собираем информацию о несовершеннолетних."
          ]
        },
        {
          title: "Международные переводы",
          summary: "Трансграничная защита информации.",
          content: [
            "Используя платформу, вы соглашаетесь на передачу ваших данных между странами, в которых мы работаем, при этом уровень защиты остается неизменным."
          ]
        },
        {
          title: "Изменения",
          summary: "Оповещения об обновлении политики.",
          content: [
            "Мы периодически обновляем эту политику. О существенных изменениях зарегистрированные пользователи будут уведомлены по электронной почте."
          ]
        },
        {
          title: "Контактная информация",
          summary: "Способы связи с нами.",
          content: [
            "По любым вопросам конфиденциальности пишите нам на privacy@funduz.com."
          ]
        }
      ]
    },
    error404: {
      badge: "Ошибка 404",
      title: "Мы не нашли эту страницу",
      desc: "Страница, которую вы ищете, не существует или была перемещена. Но не волнуйтесь — вас ждет множество потрясающих проектов.",
      back_home: "На главную",
      explore: "Смотреть проекты",
      contact: "Служба поддержки",
      trending_title: "Вместо этого посмотрите эти трендовые проекты",
      view_all: "Смотреть все"
    },
    trends: {
      title: "Технологии",
      desc: "Поддержка архитекторов завтрашнего дня. От прорывов в чистой энергетике до революционного софта — изучайте проекты, формирующие наше цифровое и физическое будущее.",
      stats: {
        active: "активных проектов",
        backers: "спонсоров",
        funded: "всего собрано"
      },
      chips: ["AI & Robotics", "CleanTech", "SaaS", "Hardware"],
      filters: ["Все", "В тренде", "Новые", "Почти собрано", "Скоро закончатся"],
      sort_label: "Сортировка:",
      sort_recent: "Самые свежие",
      featured: {
        editors_pick: "ВЫБОР РЕДАКЦИИ",
        category: "ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ",
        title: "NeuralLink: Следующий этап интерфейса человек-машина",
        desc: "Разработка интерфейсов мозг-компьютер с низкой задержкой и высокой пропускной способностью, помогающих людям конкурировать с будущими достижениями ИИ.",
        back_btn: "Поддержать проект"
      },
      upcoming_title: "Грядущие тенденции",
      explore_worlds: "Исследуйте другие миры",
      cta: {
        title: "Есть идея в сфере технологий?",
        desc: "Запустите свой проект на Funduz и станьте частью сообщества, которое верит в силу инноваций.",
        btn: "Начать проект"
      }
    }
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "uz",
  fallbackLocale: "ru",
  messages,
});
