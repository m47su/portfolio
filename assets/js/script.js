let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
    
(function() {
    emailjs.init("zhgreb4n0uEQKuc1d"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        Swal.fire({
            title: "Erro!",
            text: "Por favor, complete o reCAPTCHA.",
            icon: "error",
            width: '450px',
            padding: '3em',
            customClass: {
                popup: 'swal2-popup-custom'
            }
        });
        return;
    }

    const form = event.target;
    if (!form.checkValidity()) {
        Swal.fire({
            title: "Erro!",
            text: "Por favor, preencha todos os campos obrigatórios.",
            icon: "error",
            width: '450px',
            padding: '3em',
            customClass: {
                popup: 'swal2-popup-custom'
            }
        });
        return;
    }

    const serviceID = 'service_0m8007g'; 
    const templateID = 'template_qw71pr7'; 

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            Swal.fire({
                title: "Tudo certo!",
                text: "Sua mensagem foi enviada com sucesso!",
                icon: "success",
                width: '450px',
                padding: '3em',
                customClass: {
                    popup: 'swal2-popup-custom'
                }
            });
            form.reset();
            grecaptcha.reset();
        }, (err) => {
            Swal.fire({
                title: "Erro!",
                text: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
                icon: "error",
                width: '450px',
                padding: '3em',
                customClass: {
                    popup: 'swal2-popup-custom'
                }
            });
        });
});

