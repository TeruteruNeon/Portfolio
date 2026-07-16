// ==========================================
// スクロールでカードを表示
// ==========================================

const targets = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    targets.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
});

// ==========================================
// ページトップボタン
// ==========================================

const pageTop = document.getElementById("pageTop");

window.addEventListener("scroll", () => {

    if (!pageTop) return;

    if (window.scrollY > 300) {

        pageTop.classList.add("show");

    }

    else {

        pageTop.classList.remove("show");

    }

});

if (pageTop) {

    pageTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



// ==========================================
// ナビゲーション スムーススクロール
// ==========================================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        const headerHeight = document.querySelector("header").offsetHeight;

        const y =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            20;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        });

    });

});



// ==========================================
// ナビゲーション現在位置表示
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// ==========================================
// ボタンのリップルエフェクト
// ==========================================

document.querySelectorAll(".button").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";

        circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


// ==========================================
// スクロール時ヘッダー影追加
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(255,105,180,.25)";

    }

    else {

        header.style.boxShadow = "none";

    }

});


// ==========================================
// 開閉ボタン
// ==========================================
document.querySelectorAll(".category-title.toggle").forEach(title => {

    title.addEventListener("click", () => {

        const category = title.parentElement;

        category.classList.toggle("close");

    });

});

// ==========================================
// メールアドレスコピー
// ==========================================
function copyEmail() {
    const email = "teruteruneon66@gmail.com";

    navigator.clipboard.writeText(email);

    const btn = document.querySelector(".copy-btn");

    const originalText = btn.textContent;
    btn.textContent = "コピーしました！";

    setTimeout(() => {
        btn.textContent = originalText;
    }, 1500);
}


// ==========================================
// ハンバーガー
// ==========================================

const btn = document.getElementById("hamburger");
const menu = document.querySelector("nav ul");
const overlay = document.getElementById("overlay");

btn.addEventListener("click", () => {

    menu.classList.toggle("open");
    overlay.classList.toggle("show");

});


overlay.addEventListener("click", () => {

    menu.classList.remove("open");
    overlay.classList.remove("show");

});

//メニュー押したら閉じる
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("open");
        overlay.classList.remove("show");

    });

});