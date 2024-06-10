let users = [];

function cadastrar() {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const email = document.getElementById('email').value;

    if (nome && senha && email) {
        const user = {
            nome: nome,
            senha: senha,
            email: email
        };

        users.push(user);
        console.log(users);

        document.getElementById('nome').value = '';
        document.getElementById('senha').value = '';
        document.getElementById('email').value = '';

        alert('Usuário cadastrado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
