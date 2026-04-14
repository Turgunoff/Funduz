import { createI18n } from "vue-i18n";

const messages = {
  uz: {
    nav: {
      projects: "Loyihalarni ko'rish",
      about: "Qanday ishlaydi?",
      cooperation: "Jamiyat",
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
        eco: "Eko"
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
    projects: {
      title: "Tanlangan loyihalar",
      subtitle: "O'zbekiston bo'ylab eng dolzarb va qiziqarli tashabbuslar",
      view_all: "Barcha loyihalar",
      more: "Batafsil ma'lumot",
      goal: "Maqsad",
      donors: "donor",
      cat_education: "Ta'lim",
      cat_ecology: "Ekologiya",
      cat_tech: "Texnologiya",
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
      footer_text_start: "Kirish yoki ro'yxatdan o'tish orqali siz Funduz'ning ",
      footer_text_and: " va ",
      footer_text_end: "ga rozilik bildirasiz.",
      hero_title: "Yaxshilikni birgalikda moliyalashtiramiz",
      hero_subtitle: "Kichik hissa — katta o'zgarishlar asosi. Loyihalarni qo'llab-quvvatlang yoki o'z g'oyangizni hayotga tadbiq eting."
    }
  },
  ru: {
    nav: {
      projects: "Просмотр проектов",
      about: "Как это работает?",
      cooperation: "Сообщество",
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
            q: "Безопасно ли это?",
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
        eco: "Эко"
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
      footer_text_start: "Входя или регистрируясь, вы соглашаетесь с ",
      footer_text_and: " и ",
      footer_text_end: " Funduz.",
      hero_title: "Финансируем добро вместе",
      hero_subtitle: "Маленький вклад — основа больших перемен. Поддерживайте проекты или воплощайте свои идеи в жизнь."
    }
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "uz",
  fallbackLocale: "ru",
  messages,
});
