// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化Bootstrap轮播图
    const carousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
        interval: 5000, // 5秒切换一次
        pause: 'hover', // 鼠标悬停时暂停
        wrap: true, // 循环播放
        keyboard: true // 支持键盘控制
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        }
    });

    // 导航链接点击效果
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 特色卡片hover效果增强
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'scale(1.2) rotate(5deg)';
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'scale(1) rotate(0deg)';
        });
    });
});