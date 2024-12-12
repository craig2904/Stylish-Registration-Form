document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const place = document.getElementById('place').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;

    const output = `
        <h3>Details Saved:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Place:</strong> ${place}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = output;
    outputDiv.style.display = 'block';
});

