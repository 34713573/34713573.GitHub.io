// 语言包定义
const translations = {
    zh: {
        // 导航
        'nav.home': '首页',
        'nav.about': '学校概况',
        'nav.courses': '课程体系',
        'nav.faculty': '师资力量',
        'nav.life': '校园生活',
        'nav.news': '新闻动态',
        'nav.contact': '联系我们',
        'nav.switchLang': 'EN',

        // 轮播图
        'carousel.slide1.title': '培养国际化人才的摇篮',
        'carousel.slide1.desc': '中西融合，育人成才',
        'carousel.slide2.title': '优质的双语教学体系',
        'carousel.slide2.desc': '打造完整的国际化课程体系',
        'carousel.slide3.title': '丰富多彩的校园生活',
        'carousel.slide3.desc': '全方位培养学生综合素质',

        // 特色卡片
        'features.courses': '特色课程',
        'features.courses.desc': '国际化课程体系，中西教育完美融合',
        'features.apply': '在线报名',
        'features.apply.desc': '便捷的在线报名系统，开启学习之旅',
        'features.activities': '学生活动',
        'features.activities.desc': '丰富多彩的课外活动，培养全面发展',
        'features.exchange': '国际交流',
        'features.exchange.desc': '广泛的国际合作项目，开拓国际视野',
        'features.guidance': '升学指导',
        'features.guidance.desc': '专业的升学规划，助力学子未来发展',
        'features.teaching': '教学特色',
        'features.teaching.desc': '创新的教学模式，激发学习潜能'

        // 页脚
        'footer.contact': '联系方式',
        'footer.address': '地址：广东省揭阳市普宁市流沙',
        'footer.phone': '电话：0663-XXXXXXX',
        'footer.email': '邮箱：contact@example.com',
        'footer.copyright': '© 2024 普宁市流沙新世界中英文学校. 版权所有.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.courses': 'Courses',
        'nav.faculty': 'Faculty',
        'nav.life': 'Campus Life',
        'nav.news': 'News',
        'nav.contact': 'Contact',
        'nav.switchLang': '中文',

        // Carousel
        'carousel.slide1.title': 'Nurturing International Talents',
        'carousel.slide1.desc': 'Integrating Chinese and Western Education',
        'carousel.slide2.title': 'Quality Bilingual Education System',
        'carousel.slide2.desc': 'Building a Complete International Curriculum',
        'carousel.slide3.title': 'Vibrant Campus Life',
        'carousel.slide3.desc': 'Comprehensive Student Development',

        // Feature Cards
        'features.courses': 'Featured Courses',
        'features.courses.desc': 'International curriculum system, perfect integration of Chinese and Western education',
        'features.apply': 'Online Application',
        'features.apply.desc': 'Convenient online application system to start your learning journey',
        'features.activities': 'Student Activities',
        'features.activities.desc': 'Rich extracurricular activities for comprehensive development',
        'features.exchange': 'International Exchange',
        'features.exchange.desc': 'Extensive international cooperation programs to broaden horizons',
        'features.guidance': 'College Guidance',
        'features.guidance.desc': 'Professional college planning to support future development',
        'features.teaching': 'Teaching Features',
        'features.teaching.desc': 'Innovative teaching methods to inspire learning potential'

        // Footer
        'footer.contact': 'Contact Us',
        'footer.address': 'Address: Liusha, Puning City, Jieyang, Guangdong Province',
        'footer.phone': 'Tel: 0663-XXXXXXX',
        'footer.email': 'Email: contact@example.com',
        'footer.copyright': '© 2024 Puning Liusha New World Bilingual School. All rights reserved.'
    }
};

// 当前语言
let currentLang = 'zh';

// 切换语言函数
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updatePageLanguage();
    // 保存语言偏好到本地存储
    localStorage.setItem('preferredLanguage', currentLang);
}

// 更新页面语言
function updatePageLanguage() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', () => {
    // 检查本地存储中的语言偏好
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && ['zh', 'en'].includes(savedLang)) {
        currentLang = savedLang;
    }
    updatePageLanguage();
});