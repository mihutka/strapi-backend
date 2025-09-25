export default [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      // ВАРИАНТ А: точные домены (без слэшей!)
      origin: [
        'http://localhost:3000',
        'https://strapi-frontend-eweb-git-main-misabajandinov-5741s-projects.vercel.app/',
        // можешь добавить стабильный превью-домен проекта, если есть
        // 'https://strapi-frontend-eweb.vercel.app',
      ],
      methods: ['GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS'],
      headers: ['Content-Type','Authorization','Origin','Accept'],
      keepHeaderOnError: true, // отдать CORS даже при 4xx/5xx, иначе браузер тоже ругается
      credentials: false,      // оставь false, если не используешь куки с фронта
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
