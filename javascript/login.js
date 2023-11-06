function login() {
    // Coletar os valores inseridos pelo usuário
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Enviar as informações para o servidor (simulação)
    // Neste exemplo, estamos apenas verificando se o e-mail e a senha são "user" e "password"
    if (email === "user" && password === "password") {
        alert("Login bem-sucedido! Redirecionando para a página de perfil...");
        // Aqui, você pode redirecionar o usuário para a página de perfil
        // window.location.href = "perfil.html";
    } else {
        alert("Login falhou. Verifique suas credenciais.");
    }
}