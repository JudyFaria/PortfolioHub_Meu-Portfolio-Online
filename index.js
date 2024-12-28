document.querySelector("button").addEventListener("click", function () {
    window.location.href = "mailto:judyfaria@example.com";
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
})



// Adicionar evento de envio no formulário de contato
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Mensagem enviada por ${name}!`);
    // Aqui você pode integrar com um serviço de email (como EmailJS)
});

// Adicionar evento para o botão de comentários
document.querySelectorAll(".comment-btn").forEach(button => {
    button.addEventListener("click", function () {
        const comment = this.previousElementSibling.value;
        if (comment.trim() === "") {
            alert("Por favor, escreva um comentário antes de enviar!");
        } else {
            alert("Comentário enviado com sucesso!");
        }
    });
});