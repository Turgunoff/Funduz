import { createI18n } from 'vue-i18n'

const messages = {
  uz: {
    nav: {
      view_projects: "Loyihalarni ko'rish",
      how_it_works: "Qanday ishlaydi?",
      community: "Jamiyat",
      search_placeholder: "Loyiha qidirish...",
      login: "Kirish",
      start_project: "Loyiha boshlash"
    },
    hero: {
      badge: "O'zbekistonning birinchi kraudfanding platformasi",
      title_1: "Yaxshilikni",
      title_2: "birgalikda",
      title_3: "moliyalashtiramiz",
      description: "Funduz orqali ijtimoiy muhim loyihalarni qo'llab-quvvatlang yoki o'z g'oyangizni amalga oshirish uchun sarmoya to'plang.",
      btn_contribute: "Hozir hissa qo'shish",
      btn_create: "Loyiha yaratish",
      success_title: "\"Oromgoh\" loyihasi 2 haftada kerakli summani to'pladi",
      success_donors: "345 ta donor tomonidan qo'llab-quvvatlandi"
    },
    stats: {
      projects: "Muvaffaqiyatli loyihalar",
      donors: "Faol donorlar",
      collected: "Yig'ilgan mablag'"
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
      p3_title: "Yosh IT mutaxassislar uchun bepul kurslar"
    },
    cta: {
      title: "O'z g'oyangizni haqiqatga aylantiring",
      subtitle: "Biznesingiz, ijtimoiy loyihangiz yoki ijodingiz uchun kerakli sarmoyani Funduz hamjamiyati bilan birga to'plang.",
      btn_start: "Loyiha boshlash",
      btn_expert: "Mutaxassis bilan bog'lanish",
      feature1: "Oson boshqaruv",
      feature1_desc: "To'liq shaffof dashboard",
      feature2: "Katta auditoriya",
      feature2_desc: "Minglab potensial donorlar"
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
      social_fb: "Facebook"
    }
  },
  ru: {
    nav: {
      view_projects: "Просмотр проектов",
      how_it_works: "Как это работает?",
      community: "Сообщество",
      search_placeholder: "Поиск проекта...",
      login: "Войти",
      start_project: "Начать проект"
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
      success_donors: "Поддержано 345 донорами"
    },
    stats: {
      projects: "Успешных проектов",
      donors: "Активных доноров",
      collected: "Собрано средств"
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
      p3_title: "Бесплатные IT-курсы для молодых специалистов"
    },
    cta: {
      title: "Превратите свою идею в реальность",
      subtitle: "Соберите необходимый капитал для вашего бизнеса, социального проекта или творчества вместе с сообществом Funduz.",
      btn_start: "Начать проект",
      btn_expert: "Связаться со специалистом",
      feature1: "Простое управление",
      feature1_desc: "Полностью прозрачный дашборд",
      feature2: "Большая аудитория",
      feature2_desc: "Тысячи потенциальных доноров"
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
      social_fb: "Facebook"
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'uz',
  fallbackLocale: 'ru',
  messages,
})
