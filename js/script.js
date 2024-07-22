document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const plusIcon = question.querySelector('.plus');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            plusIcon.textContent = '+';
        } else {
            answer.style.display = 'block';
            plusIcon.textContent = '−'; // Minus sign
        }
    });
});
