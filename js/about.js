document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const onScroll = () => {
        const windowHeight = window.innerHeight;

        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < windowHeight && rect.bottom > 0;

            if (isVisible) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger the function on page load to animate already visible items
});
