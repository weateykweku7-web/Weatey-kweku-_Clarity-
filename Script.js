// Handles interactive click behaviors and tracking readiness
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-btn');

    ctaButton.addEventListener('click', (e) => {
        // If you haven't linked a payment gateway yet, this alerts the user.
        // Once you add your live Paystack/Stripe URL to the href, remove this block if you want direct navigation.
        if(ctaButton.getAttribute('href') === '#checkout') {
            e.preventDefault();
            ('pk_test_c13e60fc4261e688e5bc34e44c415e506b8b854b'');
        }
    });
});
