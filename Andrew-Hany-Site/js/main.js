// دالة للتمرير السلس للأقسام
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// دالة الاتصال عبر الواتساب
function contactViaWhatsApp() {
    window.open('https://wa.me/201220061233', '_blank');
}

// دالة الاتصال عبر الإيميل
function contactViaEmail() {
    window.location.href = 'mailto:engandrewhany@gmail.com';
}

// تأثيرات التمرير والحركات
document.addEventListener('DOMContentLoaded', function() {
    
    // تأثير شريط التنقل عند التمرير
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // تأثير ظهور العناصر عند التمرير
    const revealElements = document.querySelectorAll('.service-card, .project-card, .contact-item');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function(element) {
        element.classList.add('reveal');
        observer.observe(element);
    });

    // Smooth scroll للروابط
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // تأثيرات الأزرار
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // تأثير المكعب التفاعلي
    const cube = document.querySelector('.cube');
    if (cube) {
        document.addEventListener('mousemove', function(e) {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            cube.style.transform = 'rotateY(' + x + 'deg) rotateX(' + y + 'deg)';
        });
    }

    // تأثيرات البطاقات التفاعلية
    document.querySelectorAll('.service-card, .project-card').forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // تأثيرات أيقونات التواصل الاجتماعي
    document.querySelectorAll('.social-icons i').forEach(function(icon) {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(10deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    });

    // تأثير الكتابة للنص
    function typeWriter(element, text, speed) {
        if (speed === void 0) { speed = 100; }
        var i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // تهيئة تأثير الكتابة عند التحميل
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(function() {
            typeWriter(heroTitle, originalText, 80);
        }, 1000);
    }

    // إضافة تأثير النقر على عناصر الاتصال
    document.querySelectorAll('.contact-item').forEach(function(item) {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(function() {
                item.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // console.log رسالة ترحيب
    console.log('🎉 Welcome to The Professional - Eng Andrew Hany');
    console.log('🚀 Website loaded successfully!');
    console.log('📞 Contact: +201220061233');
    console.log('📧 Email: engandrewhany@gmail.com');
});

// دالة لإضافة تأثير الاهتزاز
function shakeElement(element) {
    element.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(function() {
        element.style.animation = '';
    }, 500);
}

// إضافة style للاهتزاز ديناميكياً
const shakeStyle = document.createElement('style');
shakeStyle.textContent = '@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }';
document.head.appendChild(shakeStyle);