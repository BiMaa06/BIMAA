 // Navigation functionality
        const navBtns = document.querySelectorAll('.nav-btn');
        const pages = document.querySelectorAll('.page');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        const navbar = document.getElementById('navbar');

        function navigateTo(pageId) {
            pages.forEach(page => page.classList.remove('active'));
            navBtns.forEach(btn => btn.classList.remove('active'));
            
            const targetPage = document.getElementById(pageId);
            const targetBtn = document.querySelector(`[data-page="${pageId}"]`);
            
            if (targetPage) targetPage.classList.add('active');
            if (targetBtn) targetBtn.classList.add('active');
            
            navMenu.classList.remove('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const pageId = btn.getAttribute('data-page');
                navigateTo(pageId);
            });
        });

        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Scroll effect for navbar
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Contact form submission
        function handleSubmit() {
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;

            if (name && email && subject && message) {
                alert('පණිවිඩය යවන ලදී! Thank you for contacting me.');
                document.getElementById('contactName').value = '';
                document.getElementById('contactEmail').value = '';
                document.getElementById('contactSubject').value = '';
                document.getElementById('contactMessage').value = '';
            } else {
                alert('කරුණාකර සියලු fields පුරවන්න!');
            }
        }

        // Play YouTube video
        function playVideo(button) {
            const thumbnail = button.closest('.video-thumbnail');
            const videoId = thumbnail.getAttribute('data-video-id');
            
            // Create iframe
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${video-id}?autoplay=1&rel=0`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            
            // Replace thumbnail with iframe
            thumbnail.innerHTML = '';
            thumbnail.appendChild(iframe);
            thumbnail.classList.add('playing');
        }
		
		 var posts = [
            {
                image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
                date: '📅 2025-09-20',
                author: '👤 Your Name',
                title: 'YouTube චැනලය වර්ධනය කරගන්නේ කොහොමද?',
                content: '<h3>YouTube චැනලයක් වර්ධනය කරගන්න පාඩම්</h3><p>YouTube එකේ සාර්ථක වෙන්න නම් සරල උපක්‍රම කිහිපයක් තියෙනවා.</p><h3>1. Quality Content නිර්මාණය කරන්න</h3><p>ඔයාගේ චැනලයේ තියෙන ප්‍රධානම දෙය තමයි content එක.</p><ul><li>හොඳ camera එකක් හෝ smartphone එකක්</li><li>Clear audio සඳහා microphone එකක්</li><li>Natural lighting හෝ ring light එකක්</li></ul><h3>2. SEO Optimization</h3><p>YouTube SEO ගැන හොඳට දැනගෙන ඉන්න. Title, Description, සහ Tags නිවැරදිව use කරන්න.</p><h3>3. Consistency තියාගන්න</h3><p>Regular upload schedule එකක් තියාගෙන ඉන්න.</p>'
            },
            {
                image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
                date: '📅 2025-09-15',
                author: '👤 Your Name',
                title: 'Content Creation Tips',
                content: '<h3>Quality Content හදන්න මූලික පාඩම්</h3><p>Content creation කියන්නේ කලාවක්.</p><h3>Planning වැදගත්</h3><p>Content හදන්න කලින් හොඳට plan කරන්න ඕන.</p><ul><li>Target audience එක හඳුනාගන්න</li><li>Content calendar එකක් හදාගන්න</li><li>Trending topics research කරන්න</li></ul><h3>Storytelling Techniques</h3><p>හොඳ story එකක් කියන්න ඉගෙන ගන්න.</p>'
            },
            {
                image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800',
                date: '📅 2025-09-10',
                author: '👤 Your Name',
                title: 'Video Editing Basics',
                content: '<h3>Video Editing පටන් ගන්න ගයිඩ්</h3><p>Professional video editing කියන්නේ ඉගෙනගන්න පුළුවන් skill එකක්.</p><h3>Software තෝරාගන්න</h3><ul><li>Beginners: iMovie, Filmora, CapCut</li><li>Intermediate: DaVinci Resolve</li><li>Professional: Adobe Premiere Pro</li></ul><h3>Basic Editing Techniques</h3><p>මූලික editing techniques ගැන දැනගන්න.</p>'
            }
        ];

        var cards = document.querySelectorAll('.post-card');
        var modal = document.getElementById('postModal');
        var closeBtn = document.getElementById('closeBtn');

        cards.forEach(function(card) {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                var index = parseInt(this.getAttribute('data-index'));
                openModal(index);
            });
        });

        function openModal(index) {
            var post = posts[index];
            document.getElementById('modalImage').src = post.image;
            document.getElementById('modalTitle').textContent = post.title;
            document.getElementById('modalDate').textContent = post.date;
            document.getElementById('modalAuthor').textContent = post.author;
            document.getElementById('modalContent').innerHTML = post.content;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });