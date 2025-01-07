document.getElementById('calculate').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('weight').value);
    if (weight > 0) {
        const payment = weight * 25; // BDT 25 per kg
        document.getElementById('payment-amount').textContent = `BDT ${payment.toFixed(2)}`;
    } else {
        alert('Please enter a valid weight.');
    }
});

document.getElementById('withdraw').addEventListener('click', () => {
    alert('Your payment is successfull ! Thank you.');
});

document.getElementById('pay-now').addEventListener('click', () => {
    alert('Pay Now feature under development!');
});
