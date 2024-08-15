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
        