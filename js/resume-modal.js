// Resume Modal Functionality
// Simplified version using native PDF viewer (less laggy)

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('resumeModal');
    const viewResumeBtn = document.getElementById('viewResumeBtn');
    const closeResumeBtn = document.getElementById('closeResumeBtn');

    // Open modal
    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event listeners
    if (viewResumeBtn) {
        viewResumeBtn.addEventListener('click', openModal);
    }

    if (closeResumeBtn) {
        closeResumeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside the content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Prevent closing when clicking inside modal content
    const modalContent = document.querySelector('.resume-modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});
