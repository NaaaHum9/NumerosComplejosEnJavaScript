class Complejo{
    constructor(){
        this.ParteReal = 0;
        this.ParteImaginaria = 0;
    }

    SumarComplejos(Complejo1, Complejo2){
        let SumaReal = Complejo1.ParteReal + Complejo2.ParteReal;
        let SumaIma = Complejo1.ParteImaginaria + Complejo2.ParteImaginaria;
        return {ParteReal: SumaReal, ParteImaginaria: SumaIma}
    }

    RestarComplejos(Complejo1, Complejo2){
        let RestaReal = Complejo1.ParteReal - Complejo2.ParteReal;
        let RestaIma =  Complejo1.ParteImaginaria - Complejo2.ParteImaginaria;
        return {ParteReal: RestaReal, ParteImaginaria: RestaIma}
    }

    MultiplicarComplejos(Complejo1, Complejo2){
        let 
    }
    
}

function Main() {
    let NumeroComplejo1 = new Complejo;
    let NumeroComplejo2 = new Complejo;

    NumeroComplejo1.ParteReal =  parseFloat(prompt("Parte real del primer numero: "));
    NumeroComplejo1.ParteImaginaria = parseFloat(prompt("Parte imaginaria del primer numero: "));
    NumeroComplejo2.ParteReal =  parseFloat(prompt("Parte real del segundo numero: "));
    NumeroComplejo2.ParteImaginaria = parseFloat(prompt("Parte imaginaria del segundo numero: "));

    
}

Main();