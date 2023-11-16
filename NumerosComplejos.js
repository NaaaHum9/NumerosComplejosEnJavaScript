class Complejo{
    constructor(){
        this.ParteReal;
        this.ParteImaginaria;
    }

    SumarComplejos(Complejo, Complejo){
        let SumaReal;
        let SumaIma;
    }

    RestarComplejos(){

    }

    MultiplicarComplejos(){

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