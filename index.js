class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    trabalhar() {
        console.log(`${this.nome} recebe ${this.salario}. Funcionário está trabalhando.`);
    }
}


class Professor extends Funcionario {
    constructor(nome, salario, disciplina) {
        super(nome, salario);
        this.disciplina = disciplina;
    }

    darAula() {
        console.log(`${this.nome} está dando aula de ${this.disciplina}.`);
    }
}


const professor1 = new Professor(
    "Elaine",
    "R$ 2.500",
    "Matemática"
);


console.log(professor1.nome);
console.log(professor1.salario);
console.log(professor1.disciplina);

professor1.trabalhar();
professor1.darAula();