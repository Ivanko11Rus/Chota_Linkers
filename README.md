(Russian; English follows below)

# Chota_Linkers

## 🧹 Три столба внутренней красоты кода
Линтеры, форматтеры, валидаторы — инструменты, которые делают ваш код чище, а сайт быстрее.

Этот проект — небольшой, но очень ёмкий статический сайт, созданный в рамках изучения современных инструментов качества фронтенд-разработки. Здесь в лёгкой, ироничной форме рассказывается о трёх китах веб-разработки: линтерах (ESLint, Stylelint), форматтерах (Prettier) и валидаторах (Lighthouse, axe). А на странице «Практика» вы можете увидеть реальные результаты аудита и честный разбор ошибок.

Сайт полностью адаптивен, поддерживает тёмную тему, а шапка и подвал загружаются динамически через JavaScript — почти никакой копипасты.

## 🚀 Живой пример
👉 [Посмотреть сайт на GitHub Pages](https://ivanko11rus.github.io/Chota_Linkers/)

## 🛠️ Использованные технологии
**HTML5** — семантическая вёрстка, доступность.

**CSS3** — кастомные стили + лёгкий фреймворк [Chota](https://jenil.github.io/chota/) для сетки и базовых компонентов.

**JavaScript** — динамическая подгрузка шапки/подвала, переключение тёмной/светлой темы с сохранением в localStorage, определение текущего года в футере.

**GitHub Pages** — хостинг и автоматическая публикация.

## 🧪 Особенности и «фишки»
**Динамические компоненты** — шапка и подвал лежат в `/components` и подгружаются через `fetch()`. Благодаря переменной `window.rootPath` они корректно работают и в корне, и во вложенных страницах.

**Тёмная тема** — переключается по клику на блок «Сменить режим» в футере. Выбор пользователя сохраняется.

**Адаптивная сетка** — Chota сам перестраивает колонки на мобильных устройствах.

Актуальный год в футере **обновляется автоматически через JS**.

**Скриншоты реальных тестов** — на странице «Практика» вы увидите, как Lighthouse оценивал сайт до и после исправлений, включая тесты в тёмной теме.

## 📊 Результаты Lighthouse (после всех доработок)
**Desktop:** 99–100 | **Mobile:** 85–86.

Оценки на мобильных устройствах чуть ниже из‑за неадаптированных изображений и расширений браузера при тестировании. При реальном использовании на телефоне показатели выше.
Все недочёты довольно быстро исправляются при желании, домашнему же проекту этого достаточно. (разработчик устал, не бейте.)

## 🤝 Вклад и обратная связь
Проект создан в учебных целях, но если вы заметили ошибку или хотите что‑то улучшить — создавайте Issue или Pull Request. Буду рад любой конструктивной критике.

## 📜 Лицензия
Проект распространяется под лицензией MIT — используйте, меняйте, делитесь.

## 🙏 Благодарности
[Chota](https://jenil.github.io/chota/) — за лёгкий и приятный CSS-фреймворк.

[Lighthouse](https://github.com/GoogleChrome/lighthouse) — за честные отчёты.

## Сделано с ☕, иронией и любовью к чистому коду (верим на слово).
— Ivanko11Rus



<br><br><br>


# Chota_Linkers

## 🧹 The Three Pillars of Internal Code Beauty
Linters, formatters, validators — tools that make your code cleaner and your website faster.

This project is a small but comprehensive static site created as part of learning modern front-end code quality tools. In a light, ironic tone, it covers the three pillars of web development: linters (ESLint, Stylelint), formatters (Prettier), and validators (Lighthouse, axe). On the "Practice" page, you can see real audit results and an honest breakdown of the issues found.

The site is fully responsive, supports dark mode, and the header/footer are loaded dynamically via JavaScript — almost no copy-paste.

## 🚀 Live Demo
👉 [View the site on GitHub Pages](https://ivanko11rus.github.io/Chota_Linkers/)

## 🛠️ Technologies Used
**HTML5** — semantic markup, accessibility.

**CSS3** — custom styles + the lightweight [Chota](https://jenil.github.io/chota/) framework for grid and basic components.

**JavaScript** — dynamic header/footer loading, dark/light theme switching with localStorage, automatic year update in the footer.

**GitHub Pages** — hosting and automatic deployment.

## 🧪 Features & "Nice touches"
**Dynamic components** — header and footer live in `/components` and are loaded via `fetch()`. Thanks to the `window.rootPath` variable, they work correctly both in the root and in nested pages.

**Dark mode** — toggled by clicking the "Switch theme" block in the footer. The user’s choice is saved.

**Responsive grid** — Chota automatically rearranges columns on mobile devices.

**Auto‑updated year** in the footer via JavaScript.

**Real test screenshots** — on the "Practice" page, you’ll see how Lighthouse evaluated the site before and after fixes, including tests in dark mode.

## 📊 Lighthouse Results (after all improvements)
**Desktop:** 99–100 | **Mobile:** 85–86.

Mobile scores are slightly lower due to non‑responsive images and browser extensions during testing. In real usage on a phone, the scores are higher.
All issues can be fixed fairly quickly if desired, but for a hobby project this is enough (the developer is tired, don’t hit him).

## 🤝 Contributions & Feedback
This project was created for educational purposes, but if you spot an error or want to improve something — feel free to open an Issue or Pull Request. Any constructive feedback is welcome.

## 📜 License
This project is distributed under the MIT license — use, modify, share.

## 🙏 Acknowledgments
[Chota](https://jenil.github.io/chota/) — for a lightweight and pleasant CSS framework.

[Lighthouse](https://github.com/GoogleChrome/lighthouse) — for honest reports.

## Made with ☕, irony, and love for clean code (take our word for it).
— Ivanko11Rus