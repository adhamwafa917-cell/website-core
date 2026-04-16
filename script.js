// 1. وظائف الوصول (Accessibility)
function toggleDark() { document.body.classList.toggle("dark"); }
function toggleContrast() { document.body.classList.toggle("high-contrast"); }
function increaseText() { document.body.classList.toggle("large-text"); }

function speak() {
    window.speechSynthesis.cancel();
    const text = document.querySelector('main').innerText;
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ar-SA';
    window.speechSynthesis.speak(msg);
}

// 2. وظائف نافذة تسجيل الدخول (Modal)
function openLogin() {
    const modal = document.getElementById("loginModal");
    if (modal) {
        modal.style.display = "block";
        setTimeout(() => modal.style.opacity = "1", 10);
    }
}

function closeLogin() {
    const modal = document.getElementById("loginModal");
    if (modal) {
        modal.style.opacity = "0";
        setTimeout(() => modal.style.display = "none", 400);
    }
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) { closeLogin(); }
};

// 3. فلترة الخدمات بالبحث
function filterServices() {
    let input = document.getElementById('serviceSearch').value.toLowerCase();
    let services = document.getElementsByClassName('service-item');
    for (let service of services) {
        let text = service.innerText.toLowerCase();
        service.style.display = text.includes(input) ? "block" : "none";
    }
}

// 4. تشغيل كروت الخدمات وفتح الصفحات
document.querySelectorAll('.service-item').forEach(item => {
    item.style.cursor = "pointer";
    item.addEventListener('click', function() {
        const serviceName = this.querySelector('h3').innerText;
        if (serviceName.includes("أدوات مساعدة")) {
            window.location.href = "tools.html";
        } else if (serviceName.includes("استشارات")) {
            window.location.href = "consult.html";
        } else if (serviceName.includes("دعم نفسي")) {
            window.location.href = "support.html";
        }
    });
});

// 5. معالجة نموذج تسجيل الدخول
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.onsubmit = function(e) {
        e.preventDefault();
        const emailInput = document.querySelector('input[type="email"]');
        const email = emailInput ? emailInput.value : "";
        alert("مرحباً بك في منصة سند! تم تسجيل الدخول بـ " + email);
        closeLogin();
        
        const loginBtn = document.querySelector('.login-trigger');
        if (loginBtn) {
            loginBtn.innerHTML = 'تسجيل خروج <i class="fas fa-sign-out-alt"></i>';
            loginBtn.style.background = "#dc3545";
            loginBtn.onclick = () => location.reload();
        }
    };
}

// 6. إظهار نافذة تسجيل الدخول تلقائياً عند فتح الموقع
window.addEventListener('load', function() {
    setTimeout(function() {
        const modal = document.getElementById("loginModal");
        if (modal) {
            modal.style.display = "block";
            modal.style.opacity = "1";
            modal.style.zIndex = "9999";
        }
    }, 1000);
});
// 1. الرسائل التحفيزية لصفحة الدعم النفسي
const quotes = [
    "أنت أقوى مما تعتقد، وشجاعتك تلهمنا.",
    "كل يوم جديد هو فرصة جديدة لبداية أجمل.",
    "لا تقاس القوة بالجسد، بل بالإرادة التي لا تقهر.",
    "وجودك في هذا العالم يصنع فرقاً كبيراً."
];

if (document.getElementById('motivational-quote')) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('motivational-quote').innerText = randomQuote;
}

// 2. دالة القراءة المخصصة لصفحة الأدوات
function readCustomText() {
    const text = document.getElementById('textToRead').value;
    if (text) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'ar-SA';
        window.speechSynthesis.speak(msg);
    } else {
        alert("من فضلك اكتب نصاً أولاً");
    }
}

// 3. معالجة نموذج الاستشارات
const consultForm = document.getElementById('consultForm');
if (consultForm) {
    consultForm.onsubmit = function(e) {
        e.preventDefault();
        alert("تم استلام طلبك بنجاح. سيتواصل معك أحد خبرائنا قريباً.");
        this.reset();
    };
}
