let alunos = [];

function cadastrarAluno() {
    while (true) {
        let nome = prompt("Digite o nome do aluno:");
        let idade = prompt("Digite a idade do aluno:");
        if (nome.length < 4 || isNaN(Number(idade)) || Number(idade) <= 0) {
            alert("Dados inválidos. Tente novamente.")
        }
        else {
            let maiorIdade = idade >= 18;

            let aluno = {
                nome: nome,
                idade: idade,
                maiorIdade: maiorIdade
            };

            alunos.push(aluno);
            console.log("Aluno cadastrado com sucesso!");
            break
        }

    }
}

function listarAlunos() {
    console.log("Lista de Alunos:");
    alunos.forEach(aluno => { console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Maior de Idade: ${aluno.maiorIdade ? 'Sim' : 'Não'}`); });
}

cadastrarAluno();
listarAlunos();

console.log(alunos);
