
// وظائف الوصول (Accessibility)
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

// وظائف تسجيل الدخول (Modal)
function openLogin() { 
    const modal = document.getElementById("loginModal");
    modal.style.display = "block"; 
    // إضافة تأخير بسيط لتفعيل حركة الـ Fade In الخاصة بالـ CSS
    setTimeout(() => modal.style.opacity = "1", 10);
}

function closeLogin() { 
    const modal = document.getElementById("loginModal");
    modal.style.opacity = "0";
    // الانتظار حتى تنتهي الحركة قبل إخفاء العنصر تماماً
    setTimeout(() => modal.style.display = "none", 400);
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) { closeLogin(); }
}

// فلترة الخدمات بالبحث
function filterServices() {
    let input = document.getElementById('serviceSearch').value.toLowerCase();
    let services = document.getElementsByClassName('service-item');
    for (let service of services) {
        let text = service.innerText.toLowerCase();
        service.style.display = text.includes(input) ? "block" : "none";
    }
}

// معالجة النماذج (Forms)
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    alert("تم تسجيل الدخول بنجاح!");
    closeLogin();
}

document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    alert("شكراً لتواصلك معنا، سنرد عليك قريباً.");
    this.reset();
}

// --- إضافة حركة الظهور عند التمرير (Scroll Animation) ---

// تحديد العناصر التي نريد تحريكها
const scrollElements = document.querySelectorAll('.card, .grid, header');

// دالة للتحقق مما إذا كان العنصر في مجال الرؤية
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

// دالة لإضافة فئة الحركة
const displayScrollElement = (element) => {
  element.classList.add('animate-in');
};

// الدالة الرئيسية للتحكم بالحركة
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  })
}

// إضافة فئة CSS المبدئية للعناصر قبل التمرير
scrollElements.forEach(el => el.classList.add('animate-on-scroll'));

// تشغيل الدالة عند التمرير
window.addEventListener('scroll', () => { 
  handleScrollAnimation();
});

// تشغيل الدالة مرة واحدة عند تحميل الصفحة لإظهار العناصر المرئية بالفعل
handleScrollAnimation();
// --- الجزء الجديد: تشغيل كروت الخدمات وتطوير تسجيل الدخول ---
// تشغيل كروت الخدمات وفتح الصفحات فوراً
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', function() {
        const serviceName = this.querySelector('h3').innerText;
        
        // دي أهم خطوة: بتشوف اسم الخدمة وتفتح الصفحة بتاعتها
        if (serviceName === "أدوات مساعدة") {
            window.location.href = "tools.html";
        } else if (serviceName === "استشارات") {
            window.location.href = "consult.html";
        } else if (serviceName === "دعم نفسي") {
            window.location.href = "support.html";
        }
    });
}); // قفلة الـ scrollElements.forEach
}); // قفلة الـ window.addEventListener('scroll')

// 1. معالجة نموذج تسجيل الدخول
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.onsubmit = function(e) {
        e.preventDefault();
        const email = document.querySelector('input[type="email"]').value;
        alert("مرحباً بك في منصة سند! تم تسجيل الدخول بـ " + email);
        closeLogin();

        // تغيير شكل زرار الدخول ليكون خروج
        const loginBtn = document.querySelector('.login-trigger');
        if (loginBtn) {
            loginBtn.innerHTML = 'تسجيل خروج <i class="fas fa-sign-out-alt"></i>';
            loginBtn.style.background = "#dc3545"; // لون أحمر
            loginBtn.style.animation = "none";
            loginBtn.onclick = function() {
                if(confirm("هل تريد تسجيل الخروج؟")) {
                    location.reload();
                }
            };
        }
    };
}

// 2. كود إظهار نافذة تسجيل الدخول تلقائياً عند فتح الموقع
window.addEventListener('load', function() {
    setTimeout(function() {
        const modal = document.getElementById("loginModal");
        if (modal) {
            modal.style.display = "block";
            modal.style.opacity = "1";
            modal.style.zIndex = "9999";
            console.log("النافذة ظهرت بنجاح!");
        }
    }, 1000);
});
