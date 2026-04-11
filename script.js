const LANGUAGE_KEY = "vault-site-language";
const FONT_KEY = "vault-site-font";
const DEFAULT_LANGUAGE = "ru";
const DEFAULT_FONT = "jetbrains";

const translations = {
    ru: {
        nav_home: "Главная",
        nav_encryption: "Шифрование",
        nav_security: "Безопасность",
        nav_architecture: "Архитектура",
        nav_build: "Сборка",
        nav_github: "GitHub",
        nav_releases: "Релизы",
        nav_contacts: "Контакты",
        control_language: "Язык",
        control_font: "Шрифт",
        font_jetbrains: "MonoBrain Jet",
        font_minecraft: "Minecraft",
        hero_eyebrow: "GitHub Pages | Desktop-first | Python / Tkinter",
        hero_text: "Локальный password manager с тёмным визуальным стилем, SQLite-хранилищем, современным шифрованием, темами, аватарками, музыкой и пользовательскими обоями. Сайт разбит на несколько отдельных страниц, чтобы ключевые части проекта было проще показать.",
        hero_primary: "Открыть безопасность",
        hero_secondary: "Смотреть архитектуру",
        stat_pages: "отдельных страниц",
        stat_encryption: "современное шифрование",
        stat_database: "локальная база данных",
        stat_build: "готовая desktop-сборка",
        overview_tag: "Обзор",
        overview_title: "Что показывает этот сайт",
        overview_copy: "Вместо одной длинной landing page здесь сделан компактный showcase проекта. Каждая важная часть вынесена отдельно: шифрование, безопасность, архитектура и сборка.",
        card_encryption_tag: "Шифрование",
        card_encryption_title: "Как защищаются пароли",
        card_encryption_text: "Отдельная страница о том, почему проект ушёл от самописной криптографии к AES-GCM через библиотеку cryptography.",
        card_security_tag: "Безопасность",
        card_security_title: "Практические защитные меры",
        card_security_text: "Очистка буфера обмена, защита от bruteforce, секреты через переменные окружения и более безопасное поведение приложения.",
        card_architecture_tag: "Архитектура",
        card_architecture_title: "Более чистая структура проекта",
        card_architecture_text: "Отдельная страница о том, как монолитный вариант был разделён на UI, базу данных, криптографию, auth и сервисные модули.",
        open_page: "Открыть страницу",
        demo_tag: "Интерактивная демо",
        demo_title: "Посмотри, как Vault ощущается в работе",
        demo_copy: "Это browser-based preview, вдохновлённый desktop-логикой приложения: поиск по записям, открытие аккаунта, показ пароля и демонстрация защитных шагов.",
        search_label: "Поиск записей",
        search_placeholder: "Попробуй github, gmail, steam...",
        preview_tag: "Предпросмотр записи",
        field_site: "Сайт",
        field_login: "Логин",
        field_password: "Пароль",
        field_last: "Последнее обновление",
        button_reveal: "Показать",
        button_hide: "Скрыть",
        button_copy: "Скопировать пароль",
        button_copied: "Скопировано",
        button_encrypt: "Показать шифрование",
        contacts_tag: "Контакты",
        contacts_title: "Связь через Telegram",
        contacts_text: "Кнопка ниже откроет мой Telegram.",
        school_note: "это сайт для школьного проекта, не пишите мне!",
        contacts_button: "Открыть @smartdork",
        footer_note: "Vault | GitHub Pages | Telegram: @smartdork | это сайт для школьного проекта, не пишите мне!",
        github_button: "Открыть GitHub проекта",
        releases_button: "Скачать из Releases",
        project_note_title: "О проекте",
        project_note_text: "Это учебный школьный проект, сделанный как локальный desktop password manager на Python.",
        encryption_breadcrumb: "Vault / Шифрование",
        encryption_title: "Модель шифрования",
        encryption_lead: "Одним из главных улучшений проекта стала замена старой самописной схемы шифрования на более безопасный и стандартный подход на базе AES-GCM.",
        encryption_before: "Раньше",
        encryption_before_text: "Старая версия использовала самодельную схему XOR/keystream + HMAC. Для экспериментов это интересно, но для безопасного хранения паролей это плохая долгосрочная основа.",
        encryption_now: "Сейчас",
        encryption_now_text: "Теперь проект использует AES-GCM через библиотеку cryptography. Это даёт authenticated encryption и намного более надёжную и поддерживаемую реализацию.",
        encryption_step1: "Данные пользователя безопасно используются для получения vault-ключа.",
        encryption_step2: "Каждая запись шифруется ключом, производным от vault-секрета и случайной соли.",
        encryption_step3: "Старые записи поддерживаются и автоматически переносятся в новый формат после входа.",
        security_breadcrumb: "Vault / Безопасность",
        security_title: "Обзор безопасности",
        security_lead: "На этой странице собраны практические механизмы защиты внутри приложения: не теория, а вещи, которые реально важны в локальном использовании.",
        security_clipboard_tag: "Буфер обмена",
        security_clipboard_title: "Автоочистка",
        security_clipboard_text: "Скопированные пароли не остаются в clipboard навсегда и автоматически очищаются через заданную задержку.",
        security_bruteforce_tag: "Bruteforce",
        security_bruteforce_title: "Ограничение входа",
        security_bruteforce_text: "После нескольких неудачных попыток приложение временно блокирует новые попытки входа.",
        security_secrets_tag: "Секреты",
        security_secrets_title: "Без токенов в коде",
        security_secrets_text: "Telegram-секреты больше не хранятся в исходниках и берутся из переменных окружения.",
        security_errors_title: "Обработка ошибок",
        security_input_title: "Безопасность ввода",
        security_error_1: "глухое подавление исключений сокращено в важных местах;",
        security_error_2: "для более безопасной отладки используется logging;",
        security_error_3: "ошибки обрабатываются аккуратнее и не спамят в интерфейс.",
        security_input_1: "загрузка аватарок стала безопаснее;",
        security_input_2: "битые изображения не должны ронять приложение;",
        security_input_3: "значения сайта нормализуются перед сохранением.",
        architecture_breadcrumb: "Vault / Архитектура",
        architecture_title: "Архитектура проекта",
        architecture_lead: "Проект ушёл от одного огромного класса к более чистой модульной структуре, где UI, база данных, криптография и сервисы имеют свою роль.",
        architecture_main: "Минимальная точка входа, которая запускает главное окно Tkinter-приложения.",
        architecture_config: "Константы, пути к ресурсам, папка обоев, путь к иконке и общие значения конфигурации.",
        architecture_db: "Работа с SQLite, создание схемы, миграции и транзакционные обновления.",
        architecture_crypto: "Шифрование и дешифрование паролей, derivation ключей и поддержка старого формата.",
        architecture_auth: "Регистрация, вход, сессия, неудачные попытки и обновление настроек.",
        architecture_vault: "Бизнес-логика записей: сохранение, удаление, проверка, расшифровка и миграция данных.",
        architecture_ui: "Видимый слой приложения: темы, формы, список записей, обои, музыка, настройки и обработка событий.",
        build_breadcrumb: "Vault / Сборка",
        build_title: "Сборка и релиз",
        build_lead: "Проект существует не только как исходный код. Он также был упакован в рабочий Windows executable, чтобы его было проще показывать, тестировать и распространять.",
        build_setup_title: "Настройка сборки",
        build_outputs_title: "Результаты",
        build_setup_1: "для упаковки использовался PyInstaller;",
        build_setup_2: "добавлена иконка для окна приложения и executable-файла;",
        build_setup_3: "в сборку входят фон, музыка и иконка;",
        build_setup_4: "итоговое приложение запускается как обычная desktop-программа.",
        build_output_1: "onefile-сборка: `Vault.exe`;",
        build_output_2: "onedir-сборка для более удобной проверки содержимого;",
        build_output_3: "удобный Windows-friendly сценарий для презентации проекта.",
        demo_ready: "Vault demo готово.",
        demo_selected: "Выбрана запись",
        demo_clipboard_idle: "Статус буфера: ожидание",
        demo_encryption_protected: "Статус шифрования: защищено через AES-GCM",
        demo_visibility_revealed: "Видимость пароля: показан для предпросмотра",
        demo_visibility_hidden: "Видимость пароля: снова скрыт",
        demo_clipboard_copied: "Статус буфера: пароль скопирован",
        demo_autoclear_scheduled: "Автоочистка: запланирована через 25 секунд",
        demo_clipboard_cleared: "Статус буфера: очищен",
        demo_autoclear_done: "Автоочистка: завершена",
        demo_clipboard_denied: "Статус буфера: браузер отклонил доступ",
        demo_clipboard_tip: "Подсказка: для clipboard demo используй HTTPS или GitHub Pages",
        demo_key_derivation: "Получение ключа vault: PBKDF2",
        demo_cipher_preview: "Предпросмотр шифртекста",
        demo_encryption_simulated: "Статус шифрования: AES-GCM симулирован для демо",
        demo_not_found: "Ничего не найдено",
        demo_try_query: "Попробуй другой запрос",
        demo_result_none: "Результат: подходящих записей нет",
        demo_query_tip: "Подсказка: попробуй github, gmail, steam или college",
        strength_strong: "Сильный",
        strength_medium: "Средний",
        strength_na: "Н/Д",
        last_2h: "2 часа назад",
        last_yesterday: "Вчера",
        last_3d: "3 дня назад",
        last_week: "1 неделю назад"
    },
    en: {
        nav_home: "Home",
        nav_encryption: "Encryption",
        nav_security: "Security",
        nav_architecture: "Architecture",
        nav_build: "Build",
        nav_github: "GitHub",
        nav_releases: "Releases",
        nav_contacts: "Contacts",
        control_language: "Language",
        control_font: "Font",
        font_jetbrains: "MonoBrain Jet",
        font_minecraft: "Minecraft",
        hero_eyebrow: "GitHub Pages | Desktop-first | Python / Tkinter",
        hero_text: "A local password manager with a dark visual identity, SQLite storage, modern encryption, themes, avatars, music, and custom wallpapers. The site is split into several focused pages so each key part of the project can be shown clearly.",
        hero_primary: "Explore Security",
        hero_secondary: "See Architecture",
        stat_pages: "separate pages",
        stat_encryption: "modern encryption",
        stat_database: "local database",
        stat_build: "ready desktop build",
        overview_tag: "Overview",
        overview_title: "What this site covers",
        overview_copy: "Instead of one long landing page, the site works like a compact project showcase. Each important area has its own page: encryption, security, architecture, and build details.",
        card_encryption_tag: "Encryption",
        card_encryption_title: "How passwords are protected",
        card_encryption_text: "A focused page about why the project moved from custom crypto to AES-GCM through the cryptography library.",
        card_security_tag: "Security",
        card_security_title: "Practical protection steps",
        card_security_text: "Clipboard cleanup, bruteforce protection, environment-based secrets, and safer runtime behavior.",
        card_architecture_tag: "Architecture",
        card_architecture_title: "Cleaner project structure",
        card_architecture_text: "A dedicated page about how the monolithic version was split into UI, database, crypto, auth, and service modules.",
        open_page: "Open page",
        demo_tag: "Interactive Demo",
        demo_title: "See how Vault feels in action",
        demo_copy: "This is a browser-based preview inspired by the desktop app flow: search entries, open a record, reveal the password, and watch how protection steps work.",
        search_label: "Search entries",
        search_placeholder: "Try github, gmail, steam...",
        preview_tag: "Entry Preview",
        field_site: "Site",
        field_login: "Login",
        field_password: "Password",
        field_last: "Last updated",
        button_reveal: "Reveal",
        button_hide: "Hide",
        button_copy: "Copy password",
        button_copied: "Copied",
        button_encrypt: "Show encryption",
        contacts_tag: "Contacts",
        contacts_title: "Reach me on Telegram",
        contacts_text: "Click the button and it will open my Telegram directly.",
        school_note: "this is site for a school project, dont contact me!",
        contacts_button: "Open @smartdork",
        footer_note: "Vault | GitHub Pages | Telegram: @smartdork | this is site for a school project, dont contact me!",
        github_button: "Open project GitHub",
        releases_button: "Download from Releases",
        project_note_title: "Project note",
        project_note_text: "This is a school project built as a local desktop password manager in Python.",
        encryption_breadcrumb: "Vault / Encryption",
        encryption_title: "Encryption model",
        encryption_lead: "One of the biggest upgrades in the project was replacing the old custom encryption logic with a safer and standard approach based on AES-GCM.",
        encryption_before: "Before",
        encryption_before_text: "The older version used a handmade XOR/keystream plus HMAC design. That may look interesting for experimentation, but it is not the right long-term foundation for storing passwords safely.",
        encryption_now: "Now",
        encryption_now_text: "The project now uses AES-GCM through the cryptography library. This gives authenticated encryption with a much stronger security model and a more maintainable implementation.",
        encryption_step1: "User-related data is used to derive a vault secret safely.",
        encryption_step2: "Each password entry is encrypted with a key derived from the vault secret and a random salt.",
        encryption_step3: "Legacy entries are still supported and automatically moved into the new format after login.",
        security_breadcrumb: "Vault / Security",
        security_title: "Security overview",
        security_lead: "This page focuses on the practical protections inside the app: not just theory, but the things that matter in real local usage.",
        security_clipboard_tag: "Clipboard",
        security_clipboard_title: "Auto cleanup",
        security_clipboard_text: "Copied passwords do not stay in the clipboard forever and are cleared automatically after a delay.",
        security_bruteforce_tag: "Bruteforce",
        security_bruteforce_title: "Login throttling",
        security_bruteforce_text: "After several failed login attempts, the app blocks new attempts for a short time.",
        security_secrets_tag: "Secrets",
        security_secrets_title: "No hardcoded tokens",
        security_secrets_text: "Telegram secrets are no longer stored inside the source code and are loaded from environment variables.",
        security_errors_title: "Error handling",
        security_input_title: "Input safety",
        security_error_1: "silent exception swallowing was reduced in important areas;",
        security_error_2: "logging is used for safer debugging;",
        security_error_3: "runtime errors are handled more cleanly without spamming the UI.",
        security_input_1: "avatar loading is safer;",
        security_input_2: "broken images should not crash the app;",
        security_input_3: "site values are normalized before being stored.",
        architecture_breadcrumb: "Vault / Architecture",
        architecture_title: "Project architecture",
        architecture_lead: "The project moved away from a single oversized class into a cleaner modular structure, where the UI, data layer, crypto layer, and services each have a more focused role.",
        architecture_main: "Minimal entry point that starts the main Tkinter application window.",
        architecture_config: "Constants, bundled resource paths, wallpaper folder, icon path, and shared configuration values.",
        architecture_db: "SQLite access, schema setup, migrations, and transactional updates.",
        architecture_crypto: "Password encryption and decryption, key derivation, and legacy compatibility support.",
        architecture_auth: "Registration, login, session state, failed-attempt handling, and settings updates.",
        architecture_vault: "Business logic around entries: saving, deleting, validating, decrypting, and migration of stored records.",
        architecture_ui: "The visible application layer: themes, forms, list rendering, wallpapers, music, settings, and event handling.",
        build_breadcrumb: "Vault / Build",
        build_title: "Build and release",
        build_lead: "This project is not limited to source code. It was also packaged as a working Windows executable, which makes it easier to demonstrate, test, and share.",
        build_setup_title: "Build setup",
        build_outputs_title: "Outputs",
        build_setup_1: "PyInstaller was used for packaging;",
        build_setup_2: "icon support was added for the app window and executable;",
        build_setup_3: "bundled resources include wallpaper, music, and icon files;",
        build_setup_4: "the final app can run as a normal desktop program.",
        build_output_1: "onefile build: `Vault.exe`;",
        build_output_2: "onedir build for easier inspection and release checks;",
        build_output_3: "Windows-friendly distribution flow for project presentation.",
        demo_ready: "Vault demo ready.",
        demo_selected: "Entry selected",
        demo_clipboard_idle: "Clipboard status: idle",
        demo_encryption_protected: "Encryption status: protected with AES-GCM",
        demo_visibility_revealed: "Password visibility: revealed for preview",
        demo_visibility_hidden: "Password visibility: hidden again",
        demo_clipboard_copied: "Clipboard status: password copied",
        demo_autoclear_scheduled: "Auto-clear: scheduled after 25 seconds",
        demo_clipboard_cleared: "Clipboard status: cleared",
        demo_autoclear_done: "Auto-clear: complete",
        demo_clipboard_denied: "Clipboard status: browser denied access",
        demo_clipboard_tip: "Tip: use HTTPS or GitHub Pages for clipboard demo",
        demo_key_derivation: "Vault key derivation: PBKDF2",
        demo_cipher_preview: "Ciphertext preview",
        demo_encryption_simulated: "Encryption status: AES-GCM simulated for demo",
        demo_not_found: "No entry found",
        demo_try_query: "Try another search query",
        demo_result_none: "Result: no matching records",
        demo_query_tip: "Tip: try github, gmail, steam, or college",
        strength_strong: "Strong",
        strength_medium: "Medium",
        strength_na: "N/A",
        last_2h: "2 hours ago",
        last_yesterday: "Yesterday",
        last_3d: "3 days ago",
        last_week: "1 week ago"
    }
};

const pageEntries = [
    { site: "github.com", login: "smartdork", password: "ghp_x91!vaultDemo42", strength: "strong", last: "2h" },
    { site: "gmail.com", login: "smartdork.mail", password: "M4il!Safe#2026", strength: "strong", last: "yesterday" },
    { site: "steamcommunity.com", login: "corn_vault", password: "St34m?Locker%77", strength: "strong", last: "3d" },
    { site: "college.portal.local", login: "student.demo", password: "VaultClass!908", strength: "medium", last: "week" }
];

const vaultItems = Array.from(document.querySelectorAll(".vault-item"));
const searchInput = document.getElementById("vaultSearch");
const titleEl = document.getElementById("demoTitle");
const siteEl = document.getElementById("demoSite");
const loginEl = document.getElementById("demoLogin");
const passwordEl = document.getElementById("demoPassword");
const strengthEl = document.getElementById("demoStrength");
const lastEl = document.getElementById("demoLast");
const logEl = document.getElementById("demoLog");
const toggleButton = document.getElementById("togglePassword");
const copyButton = document.getElementById("copyPassword");
const encryptButton = document.getElementById("encryptPreview");
const languageButtons = Array.from(document.querySelectorAll("[data-language-button]"));
const fontButtons = Array.from(document.querySelectorAll("[data-font-button]"));
let mobileMenuButton = null;

let activeEntry = vaultItems[0] ?? null;
let passwordVisible = false;
let clipboardTimer = null;

function getLanguage() {
    return localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;
}

function getFont() {
    return localStorage.getItem(FONT_KEY) || DEFAULT_FONT;
}

function t(key) {
    const language = getLanguage();
    return translations[language]?.[key] ?? translations.en[key] ?? key;
}

function updateButtonStates() {
    const language = getLanguage();
    const font = getFont();

    languageButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.languageButton === language);
    });

    fontButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.fontButton === font);
    });
}

function applyFont() {
    const font = getFont();
    document.body.classList.toggle("font-minecraft", font === "minecraft");
    document.body.classList.toggle("font-jetbrains", font !== "minecraft");
    updateButtonStates();
}

function applyTranslations() {
    document.documentElement.lang = getLanguage();

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        element.innerHTML = t(element.dataset.i18nHtml);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    });

    const description = document.querySelector("meta[name='description']");
    if (description?.dataset.i18nContent) {
        description.setAttribute("content", t(description.dataset.i18nContent));
    }

    if (activeEntry) {
        renderEntry(activeEntry);
    } else if (logEl) {
        logEl.textContent = `${t("demo_ready")}
${t("demo_selected")}: github.com
${t("demo_clipboard_idle")}
${t("demo_encryption_protected")}`;
    }

    updateButtonStates();
}

function maskPassword(password) {
    return "*".repeat(Math.max(password.length, 12));
}

function pseudoEncrypt(password) {
    const bytes = Array.from(password).map((char, index) => {
        const value = char.charCodeAt(0) ^ (31 + index * 7);
        return value.toString(16).padStart(2, "0");
    });

    return `v2:${bytes.join("").slice(0, 36)}...`;
}

function translateStrength(rawValue) {
    if (rawValue === "medium") {
        return t("strength_medium");
    }

    if (rawValue === "na") {
        return t("strength_na");
    }

    return t("strength_strong");
}

function translateLast(rawValue) {
    if (rawValue === "yesterday") {
        return t("last_yesterday");
    }

    if (rawValue === "3d") {
        return t("last_3d");
    }

    if (rawValue === "week") {
        return t("last_week");
    }

    return t("last_2h");
}

function renderEntry(button) {
    if (!button) {
        return;
    }

    activeEntry = button;
    passwordVisible = false;

    vaultItems.forEach((item) => item.classList.toggle("active", item === button));

    const { site, login, password, strength, last } = button.dataset;

    titleEl.textContent = site;
    siteEl.textContent = site;
    loginEl.textContent = login;
    passwordEl.textContent = maskPassword(password);
    strengthEl.textContent = translateStrength(strength);
    lastEl.textContent = translateLast(last);
    toggleButton.textContent = t("button_reveal");
    logEl.textContent = `${t("demo_ready")}
${t("demo_selected")}: ${site}
${t("demo_clipboard_idle")}
${t("demo_encryption_protected")}`;
}

function togglePassword() {
    if (!activeEntry) {
        return;
    }

    const password = activeEntry.dataset.password;
    passwordVisible = !passwordVisible;
    passwordEl.textContent = passwordVisible ? password : maskPassword(password);
    toggleButton.textContent = passwordVisible ? t("button_hide") : t("button_reveal");
    logEl.textContent = `${t("demo_selected")}: ${activeEntry.dataset.site}
${passwordVisible ? t("demo_visibility_revealed") : t("demo_visibility_hidden")}
${t("demo_clipboard_idle")}
${t("demo_encryption_protected")}`;
}

async function copyPassword() {
    if (!activeEntry) {
        return;
    }

    const password = activeEntry.dataset.password;

    try {
        await navigator.clipboard.writeText(password);
        copyButton.textContent = t("button_copied");
        logEl.textContent = `${t("demo_selected")}: ${activeEntry.dataset.site}
${t("demo_clipboard_copied")}
${t("demo_autoclear_scheduled")}
${t("demo_encryption_protected")}`;

        window.clearTimeout(clipboardTimer);
        clipboardTimer = window.setTimeout(async () => {
            try {
                await navigator.clipboard.writeText("");
            } catch (error) {
                console.warn("Clipboard cleanup failed", error);
            }

            copyButton.textContent = t("button_copy");
            logEl.textContent = `${t("demo_selected")}: ${activeEntry.dataset.site}
${t("demo_clipboard_cleared")}
${t("demo_autoclear_done")}
${t("demo_encryption_protected")}`;
        }, 25000);
    } catch (error) {
        console.warn("Clipboard write failed", error);
        logEl.textContent = `${t("demo_selected")}: ${activeEntry.dataset.site}
${t("demo_clipboard_denied")}
${t("demo_clipboard_tip")}
${t("demo_encryption_protected")}`;
    }
}

function showEncryption() {
    if (!activeEntry) {
        return;
    }

    const password = activeEntry.dataset.password;
    const encrypted = pseudoEncrypt(password);

    logEl.textContent = `${t("demo_selected")}: ${activeEntry.dataset.site}
${t("demo_key_derivation")}
${t("demo_cipher_preview")}: ${encrypted}
${t("demo_encryption_simulated")}`;
}

function filterEntries() {
    if (!searchInput) {
        return;
    }

    const query = searchInput.value.trim().toLowerCase();
    let firstVisible = null;

    vaultItems.forEach((item) => {
        const haystack = `${item.dataset.site} ${item.dataset.login}`.toLowerCase();
        const matched = haystack.includes(query);
        item.hidden = !matched;

        if (matched && !firstVisible) {
            firstVisible = item;
        }
    });

    if (firstVisible && (activeEntry?.hidden || !activeEntry)) {
        renderEntry(firstVisible);
    }

    if (!firstVisible && titleEl) {
        titleEl.textContent = t("demo_not_found");
        siteEl.textContent = t("demo_try_query");
        loginEl.textContent = "-";
        passwordEl.textContent = "************";
        strengthEl.textContent = t("strength_na");
        lastEl.textContent = "-";
        toggleButton.textContent = t("button_reveal");
        logEl.textContent = `${t("demo_ready")}
Search query: ${query || "(empty)"}
${t("demo_result_none")}
${t("demo_query_tip")}`;
    }
}

function animateReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    if (!revealElements.length) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    revealElements.forEach((element) => observer.observe(element));
}

function attachTiltCards() {
    document.querySelectorAll(".tilt-card").forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width;
            const py = (event.clientY - rect.top) / rect.height;
            const rotateY = (px - 0.5) * 8;
            const rotateX = (0.5 - py) * 8;
            card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}

function pulseLog() {
    if (!logEl) {
        return;
    }

    logEl.animate([
        { opacity: 0.55, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" }
    ], {
        duration: 280,
        easing: "ease-out"
    });
}

function initPreferences() {
    applyFont();
    applyTranslations();

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            localStorage.setItem(LANGUAGE_KEY, button.dataset.languageButton);
            applyTranslations();
            updateMobileMenuLabel();
        });
    });

    fontButtons.forEach((button) => {
        button.addEventListener("click", () => {
            localStorage.setItem(FONT_KEY, button.dataset.fontButton);
            applyFont();
        });
    });
}

function getMobileMenuLabel(isOpen) {
    const language = getLanguage();

    if (language === "en") {
        return isOpen ? "Close" : "Menu";
    }

    return isOpen ? "Закрыть" : "Меню";
}

function updateMobileMenuLabel() {
    if (!mobileMenuButton) {
        return;
    }

    const isOpen = document.body.classList.contains("mobile-nav-open");
    mobileMenuButton.textContent = getMobileMenuLabel(isOpen);
}

function initMobileNavigation() {
    const topbar = document.querySelector(".topbar-inner");
    const nav = document.querySelector(".nav");

    if (!topbar || !nav) {
        return;
    }

    mobileMenuButton = document.createElement("button");
    mobileMenuButton.className = "mobile-menu-toggle";
    mobileMenuButton.type = "button";
    mobileMenuButton.setAttribute("aria-controls", "siteNavigation");
    mobileMenuButton.setAttribute("aria-expanded", "false");
    nav.id = "siteNavigation";

    mobileMenuButton.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("mobile-nav-open");
        mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
        updateMobileMenuLabel();
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("mobile-nav-open");
            mobileMenuButton.setAttribute("aria-expanded", "false");
            updateMobileMenuLabel();
        });
    });

    topbar.insertBefore(mobileMenuButton, nav);
    updateMobileMenuLabel();
}

vaultItems.forEach((item) => {
    item.addEventListener("click", () => renderEntry(item));
});

searchInput?.addEventListener("input", filterEntries);
toggleButton?.addEventListener("click", () => {
    togglePassword();
    pulseLog();
});
copyButton?.addEventListener("click", async () => {
    await copyPassword();
    pulseLog();
});
encryptButton?.addEventListener("click", () => {
    showEncryption();
    pulseLog();
});

renderEntry(activeEntry);
animateReveal();
attachTiltCards();
initMobileNavigation();
initPreferences();
