// بيانات معرض المشاريع

const galleryData = [
  {
    id: 1,
    title: {
      ar: "تصميم موقع متجاوب",
      en: "Responsive Website Design",
      nl: "Responsief Websiteontwerp"
    },
    description: {
      ar: "تصميم موقع متجاوب يعمل على جميع الأجهزة بكفاءة عالية",
      en: "Responsive website design that works efficiently on all devices",
      nl: "Responsief websiteontwerp dat efficiënt werkt op alle apparaten"
    },
    image: "assets/images/projects/responsive-design.jpg",
    category: "web",
    source: "Pixabay - kreatikar"
  },
  {
    id: 2,
    title: {
      ar: "واجهة مستخدم احترافية",
      en: "Professional User Interface",
      nl: "Professionele Gebruikersinterface"
    },
    description: {
      ar: "تصميم واجهات مستخدم سهلة الاستخدام وجذابة بصرياً",
      en: "Design of user-friendly and visually appealing interfaces",
      nl: "Ontwerp van gebruiksvriendelijke en visueel aantrekkelijke interfaces"
    },
    image: "assets/images/projects/web-design-interface.jpg",
    category: "ui",
    source: "Pixabay - kreatikar"
  },
  {
    id: 3,
    title: {
      ar: "تطوير تطبيقات",
      en: "App Development",
      nl: "App Ontwikkeling"
    },
    description: {
      ar: "تطوير تطبيقات بسيطة وفعالة تلبي احتياجات العملاء",
      en: "Development of simple and effective applications that meet customer needs",
      nl: "Ontwikkeling van eenvoudige en effectieve applicaties die aan de behoeften van klanten voldoen"
    },
    image: "assets/images/projects/app-development.jpg",
    category: "app",
    source: "Pixabay - Peggy_Marco"
  },
  {
    id: 4,
    title: {
      ar: "مساحة عمل احترافية",
      en: "Professional Workspace",
      nl: "Professionele Werkruimte"
    },
    description: {
      ar: "بيئة عمل احترافية لتطوير مشاريع عالية الجودة",
      en: "Professional work environment for developing high-quality projects",
      nl: "Professionele werkomgeving voor het ontwikkelen van hoogwaardige projecten"
    },
    image: "assets/images/projects/workspace-laptop.jpg",
    category: "workspace",
    source: "Pixabay"
  },
  {
    id: 5,
    title: {
      ar: "تطبيق مشوارك علينا",
      en: "Meshwarak App",
      nl: "Meshwarak Applicatie"
    },
    description: {
      ar: "تطبيق يجمع أفضل عروض الرحلات من مختلف شركات توصيل الركاب ووسائل النقل العام في مكان واحد",
      en: "An app that collects the best travel offers from various passenger transport companies and public transportation in one place",
      nl: "Een app die de beste reisaanbiedingen van verschillende passagiersvervoersbedrijven en openbaar vervoer op één plek verzamelt"
    },
    image: "assets/images/projects/meshwarak-app-logo.webp",
    category: "app",
    source: "Google Play - Meshwarak"
  },
  {
    id: 6,
    title: {
      ar: "واجهة تطبيق مشوارك",
      en: "Meshwarak App Interface",
      nl: "Meshwarak App Interface"
    },
    description: {
      ar: "تصميم واجهة مستخدم سهلة الاستخدام لتطبيق مشوارك للتوصيل والتنقل",
      en: "User-friendly interface design for Meshwarak transportation and delivery app",
      nl: "Gebruiksvriendelijk interface-ontwerp voor Meshwarak transport- en bezorgapp"
    },
    image: "assets/images/projects/meshwarak-app-screenshot1.webp",
    category: "ui",
    source: "Google Play - Meshwarak"
  }
];

// تصدير البيانات لاستخدامها في الملفات الأخرى
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { galleryData };
}
