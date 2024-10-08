document.addEventListener('DOMContentLoaded', function () {
    
    function toggleContent(buttonId, contentId) {
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);

        button.addEventListener('click', function () {
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                button.textContent = "Read Less";
            } else {
                content.style.display = "none";
                button.textContent = "Read More";
            }
        });
    }

    
    toggleContent('readMore1', 'moreContent1');
    toggleContent('readMore2', 'moreContent2');
    toggleContent('readMore3', 'moreContent3');
    toggleContent('readMore4', 'moreContent4');
});

        
        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }

        
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        
        window.onscroll = function () {
            var scrollBtn = document.getElementById("scrollTopBtn");
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        };
// Check for saved theme in localStorage and apply it
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme');
        const themeIcon = document.getElementById('themeIcon');
        if (savedTheme) {
            document.body.classList.add(savedTheme);
            themeIcon.className = savedTheme === 'dark-mode' ? 'fas fa-moon' : 'fas fa-sun';
        } else {
            document.body.classList.add('light-mode'); // Default theme
        }
    });

    function toggleTheme() {
        const body = document.body;
        const themeIcon = document.getElementById('themeIcon');
        themeIcon.classList.add('rotate'); // Add rotation animation class

        setTimeout(() => {
            themeIcon.classList.remove('rotate'); // Remove class after animation
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                themeIcon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'dark-mode');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                themeIcon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'light-mode');
            }
        }, 250); // Delay theme change to allow for smoother icon transition
    };
        
