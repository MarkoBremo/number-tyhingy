class Spele {
    constructor(spelesDivElementaId) {
    //Apraksta, kas jādara inicializējot spēli
    //Veido sarakstu ar visiem objeta atribūtiem

    //Spēles inicializēšana
    //Dabū vietu kur likt pogas un laukus
    let spelesVieta = document.getElementById(spelesDivElementId)
    console.log
    
    //izveido pogu jaunai spēlei
    let pogaJaunaSpele = document.createElement("Button");
    this.pogaJaunaSpele.innetHTML - "Jauna spēle!"
    this.pogaJaunaSpele.addEventListener("click", this.izveletiesSkaitli);

    //Ieliek ievades elementu

    //izveido pārbaudes pogi

    //Izveido atbildeas vietu
    

    //Atribūti spēlei
    this.minamaisSkaitlis;
    this.izveletiesSkaitli();
    };

    izveletiesSkaitli () {
    //Šī metode nomaina datora minamo skaitli
    this.minamaisSkaitlis = Math.round(Math.random()*100)
    console.log(this.minamaisSkaitlis);
    };

    nolasitIevadito() {
    // Si metode nolasa cilvēka ievadīto skaitli
    };

    parbauditIevadito() {
    //Ši metode pārbauda, vai skaitlis > < vai =
    };

    uzrakstitAtbildi() {

    };
};


//Dators iedomājas skaitli no 0-100
//Cilvēks min skaitli
//Dators atbild >, < vai =