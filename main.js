const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const body = document.body;

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    body.classList.toggle('menu-open', navLinks.classList.contains('open'));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      body.classList.remove('menu-open');
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

const translations = {
  ru: {
    page_title: 'OPT CHINA — Бизнес с Китаем под ключ | Закупка, проверка, документы, доставка',
    meta_description: 'OPT CHINA — поставки товаров из Китая под ключ: поиск производителей, переговоры, проверка качества, полный пакет документов, логистика и сопровождение. Руководитель более 10 лет работает в этом направлении и живёт в Китае.',
    og_title: 'OPT CHINA — Бизнес с Китаем под ключ',
    og_description: 'Поиск поставщиков, проверка качества, полный пакет документов и доставка из Китая под ключ.',
    brand_subtitle: 'Business with China',
    nav_services: 'Услуги', nav_process: 'Как работаем', nav_documents: 'Документы', nav_gallery: 'Встречи в Китае', nav_leader: 'Руководитель', nav_contact: 'Оставить заявку',
    hero_eyebrow: 'Надёжный партнёр по товарному бизнесу с Китаем',
    hero_title: 'Поставки товаров из Китая <span>под ключ</span> с полным контролем каждого этапа',
    hero_text: 'Мы подбираем производителей, проводим переговоры, контролируем качество, подготавливаем полный пакет документов и организуем доставку. Руководитель направления более 10 лет работает в этой сфере и сейчас живёт в Китае, поэтому большинство вопросов решаются максимально оперативно.',
    hero_btn_1: 'Оставить заявку', hero_btn_2: 'Смотреть реальные встречи',
    hero_point_1: 'Поиск и проверка поставщиков', hero_point_2: 'Полный пакет документов', hero_point_3: 'Контроль производства и качества', hero_point_4: 'Доставка и сопровождение',
    hero_badge_title: 'Рабочие встречи в Китае', hero_badge_text: 'Переговоры напрямую с производителями и оперативное решение вопросов на месте',
    stat_1: 'лет опыта в направлении', stat_2: 'постоянная работа на месте', stat_3: 'сопровождение сделки под ключ', stat_4: 'оперативная коммуникация',
    services_eyebrow: 'Что мы делаем', services_title: 'Услуги для тех, кто хочет закупать в Китае безопасно и системно', services_text: 'Мы не просто передаём контакты фабрик. Мы сопровождаем клиента на каждом этапе, чтобы снизить риски, сохранить деньги и привести товар в нужный срок.',
    service_1_title: 'Поиск производителей', service_1_text: 'Подбор фабрик и поставщиков под ваш товар, бюджет, требования по качеству, упаковке и срокам производства.',
    service_2_title: 'Переговоры и проверка', service_2_text: 'Коммуникация с производителем, согласование условий, проверка поставщика, контроль образцов и базовая инспекция.',
    service_3_title: 'Логистика и сопровождение', service_3_text: 'Организация выкупа, документов, логистики и полного сопровождения до момента поставки клиенту.',
    process_eyebrow: 'Алгоритм работы', process_title: 'От заказа до поставки: понятный и прозрачный процесс',
    step_1_label: 'Шаг 1', step_1_title: 'Запрос и консультация', step_1_text: 'Вы оставляете заявку, мы уточняем товар, объём, бюджет, требования к качеству, упаковке и срокам.',
    step_2_label: 'Шаг 2', step_2_title: 'Поиск фабрик и расчёт', step_2_text: 'Подбираем производителей, делаем предварительный расчёт, сравниваем варианты и согласовываем оптимальное решение.',
    step_3_label: 'Шаг 3', step_3_title: 'Переговоры и подтверждение заказа', step_3_text: 'Проводим переговоры с поставщиком, согласовываем спецификацию, стоимость, сроки изготовления и условия оплаты.',
    step_4_label: 'Шаг 4', step_4_title: 'Контроль и документы', step_4_text: 'Контролируем производство и подготовку заказа, собираем и проверяем необходимый пакет документов на поставку.',
    step_5_label: 'Шаг 5', step_5_title: 'Логистика', step_5_text: 'Организуем отправку, информируем по статусу груза и сопровождаем движение товара по маршруту.',
    step_6_label: 'Шаг 6', step_6_title: 'Поставка клиенту', step_6_text: 'Клиент получает товар и полный комплект согласованных материалов, а мы остаёмся на связи по следующим поставкам.',
    docs_eyebrow: 'Документальное сопровождение', docs_title: 'Подготавливаем полный пакет документов по поставке', docs_text: 'Для клиента важно не только найти товар, но и пройти процесс правильно. Поэтому мы сопровождаем сделку документально и системно.',
    docs_list_title: 'Что входит в сопровождение', docs_item_1: 'Документы по заказу и согласованной спецификации', docs_item_2: 'Инвойсы, упаковочные данные и сопроводительные материалы', docs_item_3: 'Коммуникация с поставщиком по документам и отгрузке', docs_item_4: 'Проверка корректности данных перед отправкой', docs_item_5: 'Сопровождение клиента по этапам поставки и получения',
    docs_why_title: 'Почему это важно', docs_why_1_head: 'Точность', docs_why_1_text: 'меньше ошибок на этапе отгрузки', docs_why_2_head: 'Контроль', docs_why_2_text: 'понятно, что и когда происходит', docs_why_3_head: 'Надёжность', docs_why_3_text: 'сделка ведётся системно, а не хаотично', docs_why_4_head: 'Экономия', docs_why_4_text: 'снижение риска лишних расходов и задержек',
    gallery_eyebrow: 'Реальные фото', gallery_title: 'Рабочие встречи с производителями в Китае', gallery_text: 'Это не стоковые изображения. На сайте размещены реальные фото с переговоров, визитов и рабочих встреч непосредственно в Китае.',
    gallery_cap_1: 'Переговоры и презентации', gallery_cap_2: 'Официальные деловые встречи', gallery_cap_3: 'Визиты к производителям', gallery_cap_4: 'Обсуждение деталей заказа', gallery_cap_5: 'Контроль и согласование на месте',
    gallery_grid_1: 'Презентации и обсуждение продукции', gallery_grid_2: 'Встречи с руководством и партнёрами', gallery_grid_3: 'Личные визиты к поставщикам', gallery_grid_4: 'Проверка образцов и согласование', gallery_grid_5: 'Решение вопросов напрямую на месте',
    leader_eyebrow: 'Руководитель направления', leader_title: 'Более 10 лет в направлении закупок и товарного бизнеса с Китаем',
    leader_text_1: 'Руководитель компании уже больше 10 лет занимается этим направлением и сейчас непосредственно проживает в Китае. Это даёт возможность быстро решать вопросы с производителями, оперативно выезжать на встречи и держать под контролем ключевые этапы сделки.',
    leader_text_2: 'Для клиента это означает более быстрые ответы, прямую коммуникацию, меньше посреднических искажений и больше уверенности в реальности процессов, которые происходят по заказу.',
    leader_point_1: 'Личное присутствие в Китае', leader_point_2: 'Оперативные переговоры с фабриками', leader_point_3: 'Практический опыт более 10 лет', leader_point_4: 'Контроль ключевых этапов сделки',
    faq_title: 'Вопросы, которые помогают принять решение',
    faq_1_q: 'Можно ли доверять оплату и организацию поставки?', faq_1_a: 'Именно поэтому на сайте сделан акцент на реальных фото, прозрачном процессе, документальном сопровождении и личном присутствии руководителя в Китае.',
    faq_2_q: 'Вы работаете только с крупным оптом?', faq_2_a: 'Формат работы зависит от товара, бюджета, фабрики и задачи клиента. Условия согласовываются индивидуально после консультации.',
    faq_3_q: 'Можно ли получить помощь с документами и логистикой?', faq_3_a: 'Да, мы сопровождаем сделку не только по поиску товара, но и по документам, согласованию, отгрузке и дальнейшей поставке.',
    contact_eyebrow: 'Контакты', contact_title: 'Оставьте заявку или свяжитесь удобным способом', contact_text: 'Instagram подключён сразу. Кнопки Telegram, WhatsApp и WeChat оставлены в коде как отдельные каналы связи — достаточно заменить ссылки на ваши реальные контакты, если они отличаются.',
    telegram_btn: 'Telegram', whatsapp_btn: 'WhatsApp', wechat_btn: 'WeChat',
    form_name: 'Ваше имя', form_name_ph: 'Например, Андрей', form_contact: 'Телефон / Telegram / WhatsApp', form_contact_ph: 'Ваш контакт', form_text: 'Что хотите привезти', form_text_ph: 'Опишите товар, объём и задачу', form_submit: 'Оставить заявку', form_note: 'Для полноценной отправки заявок нужно подключить реальные ссылки или обработчик формы. Instagram уже подключён.',
    footer_text: 'Бизнес с Китаем под ключ: поиск, переговоры, документы, контроль и поставка.'
  },
  uk: {
    page_title: 'OPT CHINA — Бізнес з Китаєм під ключ | Закупівля, перевірка, документи, доставка',
    meta_description: 'OPT CHINA — поставки товарів з Китаю під ключ: пошук виробників, переговори, перевірка якості, повний пакет документів, логістика та супровід. Керівник понад 10 років працює в цьому напрямку та живе в Китаї.',
    og_title: 'OPT CHINA — Бізнес з Китаєм під ключ',
    og_description: 'Пошук постачальників, перевірка якості, повний пакет документів і доставка з Китаю під ключ.',
    brand_subtitle: 'Business with China',
    nav_services: 'Послуги', nav_process: 'Як працюємо', nav_documents: 'Документи', nav_gallery: 'Зустрічі в Китаї', nav_leader: 'Керівник', nav_contact: 'Залишити заявку',
    hero_eyebrow: 'Надійний партнер у товарному бізнесі з Китаєм',
    hero_title: 'Поставки товарів з Китаю <span>під ключ</span> з повним контролем кожного етапу',
    hero_text: 'Ми підбираємо виробників, проводимо переговори, контролюємо якість, готуємо повний пакет документів та організовуємо доставку. Керівник напряму понад 10 років працює у цій сфері й зараз живе в Китаї, тому більшість питань вирішуються максимально оперативно.',
    hero_btn_1: 'Залишити заявку', hero_btn_2: 'Дивитися реальні зустрічі',
    hero_point_1: 'Пошук і перевірка постачальників', hero_point_2: 'Повний пакет документів', hero_point_3: 'Контроль виробництва та якості', hero_point_4: 'Доставка та супровід',
    hero_badge_title: 'Робочі зустрічі в Китаї', hero_badge_text: 'Переговори безпосередньо з виробниками та оперативне вирішення питань на місці',
    stat_1: 'років досвіду в напрямку', stat_2: 'постійна робота на місці', stat_3: 'супровід угоди під ключ', stat_4: 'оперативна комунікація',
    services_eyebrow: 'Що ми робимо', services_title: 'Послуги для тих, хто хоче закуповувати в Китаї безпечно та системно', services_text: 'Ми не просто передаємо контакти фабрик. Ми супроводжуємо клієнта на кожному етапі, щоб знизити ризики, зберегти кошти й привести товар у потрібний строк.',
    service_1_title: 'Пошук виробників', service_1_text: 'Підбір фабрик і постачальників під ваш товар, бюджет, вимоги до якості, пакування та строків виробництва.',
    service_2_title: 'Переговори та перевірка', service_2_text: 'Комунікація з виробником, узгодження умов, перевірка постачальника, контроль зразків і базова інспекція.',
    service_3_title: 'Логістика та супровід', service_3_text: 'Організація викупу, документів, логістики та повного супроводу до моменту поставки клієнту.',
    process_eyebrow: 'Алгоритм роботи', process_title: 'Від замовлення до поставки: зрозумілий і прозорий процес',
    step_1_label: 'Крок 1', step_1_title: 'Запит і консультація', step_1_text: 'Ви залишаєте заявку, ми уточнюємо товар, обсяг, бюджет, вимоги до якості, пакування та строків.',
    step_2_label: 'Крок 2', step_2_title: 'Пошук фабрик і розрахунок', step_2_text: 'Підбираємо виробників, робимо попередній розрахунок, порівнюємо варіанти та погоджуємо оптимальне рішення.',
    step_3_label: 'Крок 3', step_3_title: 'Переговори та підтвердження замовлення', step_3_text: 'Проводимо переговори з постачальником, погоджуємо специфікацію, вартість, строки виготовлення та умови оплати.',
    step_4_label: 'Крок 4', step_4_title: 'Контроль і документи', step_4_text: 'Контролюємо виробництво та підготовку замовлення, збираємо й перевіряємо необхідний пакет документів на поставку.',
    step_5_label: 'Крок 5', step_5_title: 'Логістика', step_5_text: 'Організовуємо відправлення, інформуємо про статус вантажу та супроводжуємо рух товару маршрутом.',
    step_6_label: 'Крок 6', step_6_title: 'Поставка клієнту', step_6_text: 'Клієнт отримує товар і повний комплект погоджених матеріалів, а ми залишаємося на зв’язку для наступних поставок.',
    docs_eyebrow: 'Документальний супровід', docs_title: 'Готуємо повний пакет документів по поставці', docs_text: 'Для клієнта важливо не лише знайти товар, а й пройти процес правильно. Тому ми супроводжуємо угоду документально та системно.',
    docs_list_title: 'Що входить у супровід', docs_item_1: 'Документи по замовленню та погодженій специфікації', docs_item_2: 'Інвойси, пакувальні дані та супровідні матеріали', docs_item_3: 'Комунікація з постачальником щодо документів і відвантаження', docs_item_4: 'Перевірка коректності даних перед відправленням', docs_item_5: 'Супровід клієнта по етапах поставки та отримання',
    docs_why_title: 'Чому це важливо', docs_why_1_head: 'Точність', docs_why_1_text: 'менше помилок на етапі відвантаження', docs_why_2_head: 'Контроль', docs_why_2_text: 'зрозуміло, що і коли відбувається', docs_why_3_head: 'Надійність', docs_why_3_text: 'угода ведеться системно, а не хаотично', docs_why_4_head: 'Економія', docs_why_4_text: 'зниження ризику зайвих витрат і затримок',
    gallery_eyebrow: 'Реальні фото', gallery_title: 'Робочі зустрічі з виробниками в Китаї', gallery_text: 'Це не стокові зображення. На сайті розміщені реальні фото з переговорів, візитів і робочих зустрічей безпосередньо в Китаї.',
    gallery_cap_1: 'Переговори та презентації', gallery_cap_2: 'Офіційні ділові зустрічі', gallery_cap_3: 'Візити до виробників', gallery_cap_4: 'Обговорення деталей замовлення', gallery_cap_5: 'Контроль та погодження на місці',
    gallery_grid_1: 'Презентації та обговорення продукції', gallery_grid_2: 'Зустрічі з керівництвом і партнерами', gallery_grid_3: 'Особисті візити до постачальників', gallery_grid_4: 'Перевірка зразків і погодження', gallery_grid_5: 'Вирішення питань безпосередньо на місці',
    leader_eyebrow: 'Керівник напрямку', leader_title: 'Понад 10 років у напрямку закупівель і товарного бізнесу з Китаєм',
    leader_text_1: 'Керівник компанії вже понад 10 років займається цим напрямком і зараз безпосередньо проживає в Китаї. Це дає можливість швидко вирішувати питання з виробниками, оперативно виїжджати на зустрічі та тримати під контролем ключові етапи угоди.',
    leader_text_2: 'Для клієнта це означає швидші відповіді, пряму комунікацію, менше посередницьких викривлень і більше впевненості в реальності процесів, що відбуваються за замовленням.',
    leader_point_1: 'Особиста присутність у Китаї', leader_point_2: 'Оперативні переговори з фабриками', leader_point_3: 'Практичний досвід понад 10 років', leader_point_4: 'Контроль ключових етапів угоди',
    faq_title: 'Питання, які допомагають прийняти рішення',
    faq_1_q: 'Чи можна довіряти оплату та організацію поставки?', faq_1_a: 'Саме тому на сайті зроблено акцент на реальних фото, прозорому процесі, документальному супроводі та особистій присутності керівника в Китаї.',
    faq_2_q: 'Ви працюєте лише з великим оптом?', faq_2_a: 'Формат роботи залежить від товару, бюджету, фабрики та задачі клієнта. Умови погоджуються індивідуально після консультації.',
    faq_3_q: 'Чи можна отримати допомогу з документами та логістикою?', faq_3_a: 'Так, ми супроводжуємо угоду не лише щодо пошуку товару, а й по документах, погодженню, відвантаженню та подальшій поставці.',
    contact_eyebrow: 'Контакти', contact_title: 'Залиште заявку або зв’яжіться зручним способом', contact_text: 'Instagram підключено одразу. Кнопки Telegram, WhatsApp і WeChat залишені в коді як окремі канали зв’язку — достатньо замінити посилання на ваші реальні контакти, якщо вони відрізняються.',
    telegram_btn: 'Telegram', whatsapp_btn: 'WhatsApp', wechat_btn: 'WeChat',
    form_name: 'Ваше ім’я', form_name_ph: 'Наприклад, Андрій', form_contact: 'Телефон / Telegram / WhatsApp', form_contact_ph: 'Ваш контакт', form_text: 'Що хочете привезти', form_text_ph: 'Опишіть товар, обсяг і задачу', form_submit: 'Залишити заявку', form_note: 'Для повноцінної відправки заявок потрібно підключити реальні посилання або обробник форми. Instagram уже підключено.',
    footer_text: 'Бізнес з Китаєм під ключ: пошук, переговори, документи, контроль і поставка.'
  },
  en: {
    page_title: 'OPT CHINA — China sourcing turnkey service | Sourcing, QC, documents, delivery',
    meta_description: 'OPT CHINA provides turnkey sourcing from China: manufacturer search, negotiations, quality control, full document package, logistics and deal support. The head of the company has over 10 years of experience and currently lives in China.',
    og_title: 'OPT CHINA — China sourcing turnkey service',
    og_description: 'Manufacturer search, quality control, full document package and delivery from China.',
    brand_subtitle: 'Business with China',
    nav_services: 'Services', nav_process: 'Process', nav_documents: 'Documents', nav_gallery: 'Meetings in China', nav_leader: 'Founder', nav_contact: 'Leave a request',
    hero_eyebrow: 'Reliable partner for sourcing and product business in China',
    hero_title: 'Turnkey product sourcing from China <span>with full control</span> at every stage',
    hero_text: 'We find manufacturers, run negotiations, control quality, prepare the full set of documents and organize delivery. The head of the company has worked in this field for more than 10 years and now lives in China, so most issues are solved quickly and directly on site.',
    hero_btn_1: 'Leave a request', hero_btn_2: 'View real meetings',
    hero_point_1: 'Supplier search and verification', hero_point_2: 'Full document package', hero_point_3: 'Production and quality control', hero_point_4: 'Delivery and support',
    hero_badge_title: 'Business meetings in China', hero_badge_text: 'Direct negotiations with manufacturers and fast on-site problem solving',
    stat_1: 'years of experience', stat_2: 'working directly in China', stat_3: 'turnkey deal support', stat_4: 'fast communication',
    services_eyebrow: 'What we do', services_title: 'Services for clients who want to source from China safely and systematically', services_text: 'We do not just send factory contacts. We support the client at every stage to reduce risks, protect funds and deliver the product on time.',
    service_1_title: 'Manufacturer search', service_1_text: 'Selection of factories and suppliers according to your product, budget, quality requirements, packaging and production timeline.',
    service_2_title: 'Negotiation and verification', service_2_text: 'Communication with the manufacturer, approval of terms, supplier verification, sample control and basic inspection.',
    service_3_title: 'Logistics and support', service_3_text: 'Organization of purchasing, documentation, logistics and full support until the final delivery to the client.',
    process_eyebrow: 'Process', process_title: 'From order to delivery: a clear and transparent workflow',
    step_1_label: 'Step 1', step_1_title: 'Request and consultation', step_1_text: 'You leave a request, and we clarify the product, volume, budget, quality requirements, packaging and deadlines.',
    step_2_label: 'Step 2', step_2_title: 'Factory search and estimate', step_2_text: 'We find manufacturers, prepare a preliminary estimate, compare options and approve the best solution.',
    step_3_label: 'Step 3', step_3_title: 'Negotiation and order confirmation', step_3_text: 'We negotiate with the supplier and agree on the specification, price, production timeline and payment terms.',
    step_4_label: 'Step 4', step_4_title: 'Control and documents', step_4_text: 'We monitor production and order preparation, and collect and verify all required shipping documents.',
    step_5_label: 'Step 5', step_5_title: 'Logistics', step_5_text: 'We organize shipment, update you on cargo status and support the movement of goods along the route.',
    step_6_label: 'Step 6', step_6_title: 'Delivery to client', step_6_text: 'The client receives the goods and the agreed package of materials, and we stay in touch for the next shipments.',
    docs_eyebrow: 'Document support', docs_title: 'We prepare the full set of shipment documents', docs_text: 'It is important not only to find the right product, but also to manage the deal correctly. That is why we support the transaction with documentation and structure.',
    docs_list_title: 'What the support includes', docs_item_1: 'Documents related to the order and approved specification', docs_item_2: 'Invoices, packing data and supporting materials', docs_item_3: 'Communication with the supplier on documents and shipment', docs_item_4: 'Verification of all details before dispatch', docs_item_5: 'Client support at every delivery and receiving stage',
    docs_why_title: 'Why it matters', docs_why_1_head: 'Accuracy', docs_why_1_text: 'fewer mistakes at shipment stage', docs_why_2_head: 'Control', docs_why_2_text: 'clear understanding of what happens and when', docs_why_3_head: 'Reliability', docs_why_3_text: 'the deal is handled systematically, not chaotically', docs_why_4_head: 'Savings', docs_why_4_text: 'lower risk of extra costs and delays',
    gallery_eyebrow: 'Real photos', gallery_title: 'Business meetings with manufacturers in China', gallery_text: 'These are not stock images. The website includes real photos from negotiations, visits and working meetings directly in China.',
    gallery_cap_1: 'Negotiations and presentations', gallery_cap_2: 'Official business meetings', gallery_cap_3: 'Visits to manufacturers', gallery_cap_4: 'Discussing order details', gallery_cap_5: 'On-site control and approvals',
    gallery_grid_1: 'Presentations and product discussions', gallery_grid_2: 'Meetings with executives and partners', gallery_grid_3: 'Personal visits to suppliers', gallery_grid_4: 'Sample review and approval', gallery_grid_5: 'Issues solved directly on site',
    leader_eyebrow: 'Founder / Head of direction', leader_title: 'More than 10 years in sourcing and product business with China',
    leader_text_1: 'The head of the company has been working in this field for more than 10 years and currently lives in China. This makes it possible to solve issues with manufacturers faster, attend meetings оперативно and keep key parts of the deal under control.',
    leader_text_2: 'For the client, this means faster feedback, direct communication, fewer distortions caused by intermediaries and more confidence in the real processes behind the order.',
    leader_point_1: 'Personal presence in China', leader_point_2: 'Fast negotiations with factories', leader_point_3: 'More than 10 years of practical experience', leader_point_4: 'Control of key deal stages',
    faq_title: 'Questions that help clients decide',
    faq_1_q: 'Can I trust the payment and shipment arrangement?', faq_1_a: 'That is why the website focuses on real photos, a transparent process, document support and the founder’s personal presence in China.',
    faq_2_q: 'Do you work only with large wholesale orders?', faq_2_a: 'The format depends on the product, budget, factory and client task. Conditions are discussed individually after the first consultation.',
    faq_3_q: 'Can you help with documents and logistics?', faq_3_a: 'Yes. We support the deal not only in sourcing, but also in documentation, approvals, shipping and further delivery.',
    contact_eyebrow: 'Contacts', contact_title: 'Leave a request or contact us in the most convenient way', contact_text: 'Instagram is connected immediately. Telegram, WhatsApp and WeChat buttons are kept in the code as separate contact channels — you only need to replace the links with your real contacts if they are different.',
    telegram_btn: 'Telegram', whatsapp_btn: 'WhatsApp', wechat_btn: 'WeChat',
    form_name: 'Your name', form_name_ph: 'For example, Andrew', form_contact: 'Phone / Telegram / WhatsApp', form_contact_ph: 'Your contact', form_text: 'What product do you need', form_text_ph: 'Describe the product, quantity and task', form_submit: 'Leave a request', form_note: 'To receive real leads, connect real links or a form handler. Instagram is already connected.',
    footer_text: 'Turnkey business with China: sourcing, negotiation, documents, control and delivery.'
  }
};

const translatable = document.querySelectorAll('[data-i18n]');
const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
const langButtons = document.querySelectorAll('.lang-btn');

function applyLanguage(lang) {
  const dict = translations[lang] || translations.ru;
  document.documentElement.lang = lang === 'uk' ? 'uk' : lang;

  translatable.forEach(node => {
    const key = node.dataset.i18n;
    if (dict[key]) node.innerHTML = dict[key];
  });

  placeholders.forEach(node => {
    const key = node.dataset.i18nPlaceholder;
    if (dict[key]) node.setAttribute('placeholder', dict[key]);
  });

  document.title = dict.page_title;
  document.querySelector('meta[name="description"]').setAttribute('content', dict.meta_description);
  document.querySelector('meta[property="og:title"]').setAttribute('content', dict.og_title);
  document.querySelector('meta[property="og:description"]').setAttribute('content', dict.og_description);
  document.querySelector('meta[name="twitter:title"]').setAttribute('content', dict.og_title);
  document.querySelector('meta[name="twitter:description"]').setAttribute('content', dict.og_description);

  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('optchina-lang', lang);
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

applyLanguage(localStorage.getItem('optchina-lang') || 'ru');
