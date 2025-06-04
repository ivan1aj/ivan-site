// ملف JavaScript الرئيسي للموقع

document.addEventListener('DOMContentLoaded', function() {
    // تفعيل زر طلب الخدمة والنافذة المنبثقة
    const serviceRequestBtn = document.getElementById('serviceRequestBtn');
    const serviceRequestModal = document.getElementById('serviceRequestModal');
    const closeModal = document.querySelector('.close-modal');
    
    if (serviceRequestBtn && serviceRequestModal) {
        // فتح النافذة المنبثقة عند النقر على زر طلب الخدمة
        serviceRequestBtn.addEventListener('click', function() {
            serviceRequestModal.style.display = 'flex';
        });
        
        // إغلاق النافذة المنبثقة عند النقر على زر الإغلاق
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                serviceRequestModal.style.display = 'none';
            });
        }
        
        // إغلاق النافذة المنبثقة عند النقر خارجها
        window.addEventListener('click', function(event) {
            if (event.target === serviceRequestModal) {
                serviceRequestModal.style.display = 'none';
            }
        });
    }
    
    // تفعيل التمرير السلس للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // تعديل للهامش العلوي
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // تفعيل معرض المشاريع
    loadGalleryProjects();
    
    // تفعيل نماذج الاتصال
    const contactForm = document.getElementById('contactForm');
    const serviceRequestForm = document.getElementById('serviceRequestForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // هنا يمكن إضافة كود لإرسال النموذج عبر AJAX
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
            contactForm.reset();
        });
    }
    
    if (serviceRequestForm) {
        serviceRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // هنا يمكن إضافة كود لإرسال النموذج عبر AJAX
            alert('تم إرسال طلب الخدمة بنجاح! سنتواصل معك قريباً.');
            serviceRequestForm.reset();
            serviceRequestModal.style.display = 'none';
        });
    }
    
    // تفعيل التنقل المتجاوب للهاتف المحمول
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('.main-nav');
    if (nav) {
        const navParent = nav.parentElement;
        navParent.insertBefore(mobileMenuToggle, nav);
        
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    
    // تحديد اللغة الافتراضية حسب لغة المتصفح
    setDefaultLanguage();
});

// تحميل مشاريع المعرض
function loadGalleryProjects() {
    const galleryContainer = document.getElementById('projects-gallery');
    if (!galleryContainer || typeof galleryData === 'undefined') return;
    
    // إنشاء عناصر المشاريع من ملف gallery-data.js
    let projectsHTML = '';
    
    galleryData.forEach(project => {
        projectsHTML += `
            <div class="project-card" data-category="${project.category}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title.ar}">
                </div>
                <div class="project-info">
                    <h3 data-project-title-id="${project.id}">${project.title.ar}</h3>
                    <p data-project-desc-id="${project.id}">${project.description.ar}</p>
                    <a href="#" class="btn secondary-btn" data-lang-key="project_view">عرض المشروع</a>
                </div>
            </div>
        `;
    });
    
    galleryContainer.innerHTML = projectsHTML;
    
    // تحديث عناوين ووصف المشاريع عند تغيير اللغة
    document.addEventListener('languageChanged', function(e) {
        const lang = e.detail.language;
        
        galleryData.forEach(project => {
            const titleElement = document.querySelector(`[data-project-title-id="${project.id}"]`);
            const descElement = document.querySelector(`[data-project-desc-id="${project.id}"]`);
            
            if (titleElement && project.title[lang]) {
                titleElement.textContent = project.title[lang];
            }
            
            if (descElement && project.description[lang]) {
                descElement.textContent = project.description[lang];
            }
        });
    });
}

// تحديد اللغة الافتراضية حسب لغة المتصفح
function setDefaultLanguage() {
    // الحصول على لغة المتصفح
    let browserLang = navigator.language || navigator.userLanguage;
    browserLang = browserLang.substring(0, 2).toLowerCase();
    
    // التحقق من دعم اللغة
    let defaultLang = 'ar'; // اللغة الافتراضية هي العربية
    
    if (browserLang === 'en') {
        defaultLang = 'en';
    } else if (browserLang === 'nl') {
        defaultLang = 'nl';
    }
    
    // تطبيق اللغة الافتراضية
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === defaultLang) {
            btn.click();
        }
    });
}
