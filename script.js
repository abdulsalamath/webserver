function changeGreeting() {
    document.getElementById('greeting').innerText = 'You clicked the button!';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
