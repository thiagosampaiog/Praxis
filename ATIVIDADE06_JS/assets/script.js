let alunos = [];

function cadastrarAluno() {
    let nome = prompt("Digite o nome do aluno:");
    let idade = parseInt(prompt("Digite a idade do aluno:"));

    // Verificação de dados
    if (!nome || isNaN(idade) || idade < 0) {
        console.log("Dados inválidos. Tente novamente.");
        return;
    }

    let maiorIdade = idade >= 18;

    let aluno = {
        nome: nome,
        idade: idade,
        maiorIdade: maiorIdade
    };

    alunos.push(aluno);
    console.log("Aluno cadastrado com sucesso!");
}

function listarAlunos() {
    console.log("Lista de Alunos:");
    alunos.forEach(aluno => {
        console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Maior de Idade: ${aluno.maiorIdade ? 'Sim' : 'Não'}`);
    });
}

cadastrarAluno();
listarAlunos();
 
console.log(alunos);