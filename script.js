document.addEventListener('DOMContentLoaded', function() {
    
    // 页面滚动辅助函数
    // 允许通过 onclick="scrollToSection('id')" 进行平滑滚动
    window.scrollToSection = function(id) {
        const section = document.getElementById(id);
        if(section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

});