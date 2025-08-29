let emsg = document.getElementById("msg");

class Heroi{
    constructor(nome, idade, tipo, acao){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.acao = acao;
    }
    atacar(){
        let msg = "<p>O " + this.tipo + " " + this.nome + " atacou usando " + this.acao;
        return msg;
    }
}

const mago = new Heroi("Gandalf", 3505, "Mago", "magia");
const paladino = new Heroi("Strider", 218, "Paladino", "espada");
const elfo = new Heroi("Legolas", 1425, "Elfo", "arco e flecha");
const anao = new Heroi("Gimli", 474, "Anão", "machado");

emsg.innerHTML += mago.atacar();
emsg.innerHTML += paladino.atacar();
emsg.innerHTML += elfo.atacar();
emsg.innerHTML += anao.atacar();