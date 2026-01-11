const puppeteer = require('puppeteer');

(async () => {
  // Запускаем браузер
  // headless: true - браузер невидимый (для Jenkins)
  // headless: false - браузер покажется на экране (для отладки)
  const browser = await puppeteer.launch({ headless: true }); 
  const page = await browser.newPage();

  console.log('--- ЗАПУСК ТЕСТА ---');
  
  // 1. Открываем сайт
  await page.goto('https://intern.demoshopping.ru/');
  
  // 2. Получаем заголовок
  const title = await page.title();
  console.log('Заголовок страницы: ' + title);

  // 3. Проверяем
  if (title.includes('Интернет-магазин')) {
      console.log('✅ ТЕСТ ПРОЙДЕН!');
  } else {
      console.log('❌ ТЕСТ ПРОВАЛЕН!');
      process.exit(1); 
  }

// Делаем скриншот перед выходом
  await page.screenshot({ path: 'evidence.png' });
  console.log('📸 Скриншот сохранен!');

// Делаем скриншот перед выходом
  await page.screenshot({ path: 'evidence.png' });
  console.log('📸 Скриншот сохранен!');

  await browser.close();
})();