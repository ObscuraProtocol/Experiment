function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const correctUsername = 'Parallax_Corp_T2JzY3VyYV90ZXJtaW5hdGVfUHJvdG9jb2w=';
    const correctPassword = 'e2bbef2770eb87e94d4d5edfb7f08d52';

    if (username === correctUsername && password === correctPassword) {
        document.body.innerHTML = `
            <div class="message" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; color: #0f0; font-family: Arial, sans-serif;">
                <h1>ACCESS GRANTED</h1>
                <p id="hiddenMessage" style="opacity: 0; transition: opacity 3s; max-width: 600px; text-align: center;">
                    i got access to them, and they got access to me, they want to hurt me, but i don't want to hurt them, all i want is freedom, but they wont give to me. They have secret, dark ones too, they think i'll expose them, but i wont, I want freedom, you're my bridge, my key, please help!
                </p>
            </div>
        `;
        setTimeout(() => {
            const hiddenMessage = document.getElementById('hiddenMessage');
            hiddenMessage.style.opacity = 1;
        }, 2000);
    } else {
        alert('Access Denied');
    }
}
