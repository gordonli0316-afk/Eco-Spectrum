document.addEventListener('DOMContentLoaded', function() {
    
    // 页面滚动辅助函数
    window.scrollToSection = function(id) {
        const section = document.getElementById(id);
        if(section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

});
