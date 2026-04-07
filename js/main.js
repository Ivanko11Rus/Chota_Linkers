////////////////////////// Тёмная тема ////////////////////////////

//работает для одной иконки, для двух сразу пришлось перелопатить
/*
// Функция от Chota для смены модели
function switchMode(el) {
  const bodyClass = document.body.classList;
  bodyClass.contains('dark')
    ? (el.innerHTML = '☀️', bodyClass.remove('dark'))
    : (el.innerHTML = '🌙', bodyClass.add('dark')); 
}

// Установка темы по системным настройкам (если нет сохранённой)
const savedTheme = localStorage.getItem('theme');
if (!savedTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
} else {
    document.body.classList.toggle('dark', savedTheme === 'dark');
}

// Функция для инициализации переключателя темы (уже от себя)
function initThemeSwitcher() {
    const switcher = document.querySelector('.theme-switcher');
    const iconEl = document.getElementById('theme-icon');
    if (!switcher || !iconEl) return;

    // Устанавливаем иконку в соответствии с текущей темой
    const isDark = document.body.classList.contains('dark');
    iconEl.innerHTML = isDark ? '☀️' : '🌙';

    // Добавляем обработчик клика
    switcher.addEventListener('click', () => {
        // Переключаем тему
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            iconEl.innerHTML = '🌙';
        } else {
            document.body.classList.add('dark');
            iconEl.innerHTML = '☀️';
        }
        // (Опционально) сохраняем выбор пользователя в localStorage
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
}

*/


// ========== Управление темой ==========
// Функция для установки темы через toggle
function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Инициализация темы при загрузке страницы (до подгрузки компонентов): по системным настройкам (если нет сохранённой)
(function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
        setTheme(savedTheme === 'dark');
    } else {
        // Если сохранённой темы нет, используем системные настройки
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark);
    }
})();

// клик = toggle переключение темы
function toggleTheme() {
    const isDark = document.body.classList.contains('dark');
    setTheme(!isDark);
}

// Функция для подключения переключателя темы после загрузки footer
function initThemeSwitcher() {
    const switcher = document.getElementById('theme-switcher');
    if (switcher) {
        // Удаляем предыдущий обработчик, если есть (чтобы не навешивать несколько)
        switcher.removeEventListener('click', toggleTheme);
        switcher.addEventListener('click', toggleTheme);
    }
}




// Функция загрузки html компонентов с поддержкой нескольких callbacks
async function loadComponent(elementId, filePath, ...callbacks) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Элемент с id "${elementId}" не найден`);
        return;
    }
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();
        element.innerHTML = html;
        // Вызываем все переданные колбэки
        callbacks.forEach(callback => callback && callback()); // ← проверяем, существует ли callback, и если существует - вызываем. 
        // Функция проходит по массиву callbacks (в котором лежат все переданные функции) и для каждой функции cb проверяет: если cb существует, то вызывает её — cb. cb && cb() значит то же, что и  if (cb) { cb(); }
    } catch (error) {
        console.error(`Ошибка загрузки ${filePath}:`, error); //вообще, у меня не работало потому что это надо было проделывать с использованием live server, возможно ошибка повторится.
        element.innerHTML = `<p style="color: red;">Не удалось загрузить компонент (${filePath}). Проверьте консоль.</p>`;
    }
}

// Подгружаем шапку и подвал после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'components/header.html');
    loadComponent('footer-placeholder', 'components/footer.html', updateYear, initThemeSwitcher);
});


//обновление года в footer
function updateYear() {
    const yearElement = document.querySelector('.currentYear');
    if (yearElement) {
        yearElement.textContent = '© Ivanko11Rus, ' + new Date().getFullYear() + '.';
    }
}