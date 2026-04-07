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

let activeEntry = vaultItems[0] ?? null;
let passwordVisible = false;
let clipboardTimer = null;

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
    strengthEl.textContent = strength;
    lastEl.textContent = last;
    toggleButton.textContent = "Reveal";
    logEl.textContent = `Vault demo ready.
Entry selected: ${site}
Clipboard status: idle
Encryption status: protected with AES-GCM`;
}

function togglePassword() {
    if (!activeEntry) {
        return;
    }

    const password = activeEntry.dataset.password;
    passwordVisible = !passwordVisible;
    passwordEl.textContent = passwordVisible ? password : maskPassword(password);
    toggleButton.textContent = passwordVisible ? "Hide" : "Reveal";
    logEl.textContent = `Entry selected: ${activeEntry.dataset.site}
Password visibility: ${passwordVisible ? "revealed for preview" : "hidden again"}
Clipboard status: idle
Encryption status: protected with AES-GCM`;
}

async function copyPassword() {
    if (!activeEntry) {
        return;
    }

    const password = activeEntry.dataset.password;

    try {
        await navigator.clipboard.writeText(password);
        copyButton.textContent = "Copied";
        logEl.textContent = `Entry selected: ${activeEntry.dataset.site}
Clipboard status: password copied
Auto-clear: scheduled after 25 seconds
Encryption status: protected with AES-GCM`;

        window.clearTimeout(clipboardTimer);
        clipboardTimer = window.setTimeout(async () => {
            try {
                await navigator.clipboard.writeText("");
            } catch (error) {
                console.warn("Clipboard cleanup failed", error);
            }

            copyButton.textContent = "Copy password";
            logEl.textContent = `Entry selected: ${activeEntry.dataset.site}
Clipboard status: cleared
Auto-clear: complete
Encryption status: protected with AES-GCM`;
        }, 25000);
    } catch (error) {
        console.warn("Clipboard write failed", error);
        logEl.textContent = `Entry selected: ${activeEntry.dataset.site}
Clipboard status: browser denied access
Tip: use HTTPS or GitHub Pages for clipboard demo
Encryption status: protected with AES-GCM`;
    }
}

function showEncryption() {
    if (!activeEntry) {
        return;
    }

    const password = activeEntry.dataset.password;
    const encrypted = pseudoEncrypt(password);

    logEl.textContent = `Entry selected: ${activeEntry.dataset.site}
Vault key derivation: PBKDF2
Ciphertext preview: ${encrypted}
Encryption status: AES-GCM simulated for demo`;
}

function filterEntries() {
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

    if (!firstVisible) {
        titleEl.textContent = "No entry found";
        siteEl.textContent = "Try another search query";
        loginEl.textContent = "-";
        passwordEl.textContent = "************";
        strengthEl.textContent = "N/A";
        lastEl.textContent = "-";
        toggleButton.textContent = "Reveal";
        logEl.textContent = `Vault demo ready.
Search query: ${query || "(empty)"}
Result: no matching records
Tip: try github, gmail, steam, or college`;
    }
}

function animateReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
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
