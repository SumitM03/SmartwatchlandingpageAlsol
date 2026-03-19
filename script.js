document.addEventListener('DOMContentLoaded', () => {
    // Quantity Selector
    const decreaseBtn = document.getElementById('decrease-btn');
    const increaseBtn = document.getElementById('increase-btn');
    const quantityDisplay = document.getElementById('quantity-display');

    let currentQuantity = 1;

    decreaseBtn.addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityDisplay.textContent = currentQuantity;
        }
    });

    increaseBtn.addEventListener('click', () => {
        if (currentQuantity < 10) {
            currentQuantity++;
            quantityDisplay.textContent = currentQuantity;
        }
    });
   
    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    //  Hamburger Menu
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    const addToCartBtn = document.querySelector('.add-to-cart-btn');

    addToCartBtn.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        cart.push({
            product: "Watch X",
            price: 4999,
            quantity: currentQuantity
        });

        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`Added ${currentQuantity} item(s) to cart`);
    });
    const fadeElements = document.querySelectorAll('.fade-in');

    const showOnScroll = () => {
        fadeElements.forEach(el => {
            const position = el.getBoundingClientRect().top;

            if (position < window.innerHeight - 50) {
                el.classList.add('show');
            }
        });
    };
    window.addEventListener('scroll', showOnScroll);
    // Trigger once on load
    showOnScroll();

});