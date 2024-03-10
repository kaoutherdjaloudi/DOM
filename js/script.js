document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.article');
    let total = document.getElementById('prix-total');

    items.forEach(function (item) {
        const prix = item.querySelector('.prix h4');
        const quantite = item.querySelector('.quantite');
        const plusBtn = item.querySelector('.plus');
        const minusBtn = item.querySelector('.moins');
        const rmvBtn = item.querySelector('.sup');

        let sum = parseInt(prix.textContent);

        plusBtn.addEventListener('click', () => {
            quantite.textContent = parseInt(quantite.textContent) + 1;
            total.textContent = parseInt(total.textContent) + sum;
        });

        minusBtn.addEventListener('click', () => {
            if (parseInt(quantite.textContent) > 0) {
                quantite.textContent = parseInt(quantite.textContent) - 1;
                total.textContent = parseInt(total.textContent) - sum;
            }
        });

        rmvBtn.addEventListener('click', function () {
            item.remove();
        });
    });
});
