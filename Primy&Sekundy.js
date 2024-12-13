
document.addEventListener('DOMContentLoaded', function() {
   
    // Pravděpodobnost sudého výsledku

    const sudy = 0.52;


    // O kolik se sníží potenciální výhra 

    const fee = 2/3; 


    // Pravděpodobnost týmu vlevo na výhru setu

    const pravdepodobnost1 = 0.50;  // O1.A VS O1.B 
    const pravdepodobnost2 = 0.20;  // O1.A VS O2.A
    const pravdepodobnost3 = 0.28;  // O1.A VS O2.B
    const pravdepodobnost4 = 0.20;  // O1.B VS O2.A
    const pravdepodobnost5 = 0.28;  // O1.B VS O2.B
    const pravdepodobnost6 = 0.65;  // O2.A VS O2.B
    

    // Pravděpodobnost týmu na celkovou výrhu bez jediné prohry (tým 1)

    let product1 = pravdepodobnost1*pravdepodobnost2*pravdepodobnost3
   

    // Pravděpodobnost týmu na celkovou výhru bez jediné prohry (tým 2)

    let product2 = (1-pravdepodobnost1)*pravdepodobnost4*pravdepodobnost5

    
    // Pravděpodobnost týmu na celkovou výhru bez jediné prohry (tým 3)

    let product3 = (1-pravdepodobnost2)*(1-pravdepodobnost4)*pravdepodobnost6


    // Pravděpodobnost týmu na celkovou výhru bez jediné prohry (tým 4)

    let product4 = (1-pravdepodobnost3)*(1-pravdepodobnost5)*(1-pravdepodobnost6)


    // Pravděpodobnost na rozhodnutí výsledku až pomocí setů

    let rozhodnousety = 1-product1-product2-product3-product4



    //Vypočítá kurz na výhru zápasu (tým vlevo)
    function KurzVitezZapasu(pravdepodobnost) {
        return ((((1/(pravdepodobnost*pravdepodobnost+2*pravdepodobnost*pravdepodobnost*(1-pravdepodobnost)))-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na výhru zápasu (tým vpravo)
    function KurzVitezZapasu02(pravdepodobnost){
        return ((((1/((1-pravdepodobnost)*(1-pravdepodobnost)+2*(1-pravdepodobnost)*(1-pravdepodobnost)*pravdepodobnost))-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na výhru setu (tým vlevo)
    function KurzVitezSetu(pravdepodobnost){
        return ((((1/pravdepodobnost)-1)*fee)+1).toFixed(2);
    }
    
    //Vypočítá kurz na výhru setu (tým vpravo)
    function KurzVitezSetu02(pravdepodobnost){
        return ((((1/(1-pravdepodobnost))-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na sudý výsledek
    function KurzSudy(sudy){
        return ((((1/sudy)-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na lichý výsledek
    function KurzLichy(sudy){
        return ((((1/(1-sudy))-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na počet setů (méně než 2,5)
    function KurzMeneNez(pravdepodobnost){
        return ((((1/((pravdepodobnost*pravdepodobnost)+((1-pravdepodobnost)*(1-pravdepodobnost))))-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na počet setů (více než 2,5)
    function KurzViceNez(pravdepodobnost){
        return ((((1/(1-((pravdepodobnost*pravdepodobnost)+((1-pravdepodobnost)*(1-pravdepodobnost)))))-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na přesný výsledek (2:0)
    function KurzVysledek20(pravdepodobnost){
        return (((1/(pravdepodobnost*pravdepodobnost)-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na přesný výsledek (0:2)
    function KurzVysledek02(pravdepodobnost){
        return (((1/((1-pravdepodobnost)*(1-pravdepodobnost))-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na přesný výsledek (2:1)
    function KurzVysledek21(pravdepodobnost){
        return((((1/(2*(pravdepodobnost*pravdepodobnost*(1-pravdepodobnost))))-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na přesný výsledek (1:2)
    function KurzVysledek12(pravdepodobnost){
        return((((1/(2*((1-pravdepodobnost)*(1-pravdepodobnost)*pravdepodobnost)))-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na celkovou výhru (tým 1)
    function KurzCelkem1(product){
        return(((1/(product1)-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na celkovou výhru (tým 2)
    function KurzCelkem2(product){
        return(((1/(product2)-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na celkovou výhru (tým 3)
    function KurzCelkem3(product){
        return(((1/(product3)-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na celkovou výhru (tým 4)
    function KurzCelkem4(product){
        return(((1/(product4)-1)*fee)+1).toFixed(2);
    }

    //Vypočítá kurz na rozhodnutí výsledku až pomocí setů
    function KurzCelkemSety(rozhodnousety){
        return((((1/rozhodnousety)-1)*fee)+1).toFixed(2)
    }


    document.getElementById('kurz1').innerText = KurzVitezZapasu(pravdepodobnost1);
    document.getElementById('kurz2').innerText = KurzVitezZapasu02(pravdepodobnost1);
    document.getElementById('kurz3').innerText = KurzVitezSetu(pravdepodobnost1);
    document.getElementById('kurz4').innerText = KurzVitezSetu02(pravdepodobnost1);
    document.getElementById('kurz5').innerText = KurzSudy(sudy);
    document.getElementById('kurz6').innerText = KurzLichy(sudy);
    document.getElementById('kurz7').innerText = KurzMeneNez(pravdepodobnost1);
    document.getElementById('kurz8').innerText = KurzViceNez(pravdepodobnost1);
    document.getElementById('kurz9').innerText = KurzVysledek20(pravdepodobnost1);
    document.getElementById('kurz10').innerText = KurzVysledek02(pravdepodobnost1);
    document.getElementById('kurz11').innerText = KurzVysledek21(pravdepodobnost1);
    document.getElementById('kurz12').innerText = KurzVysledek12(pravdepodobnost1);



    document.getElementById('kurz13').innerText = KurzVitezZapasu(pravdepodobnost2);
    document.getElementById('kurz14').innerText = KurzVitezZapasu02(pravdepodobnost2);
    document.getElementById('kurz15').innerText = KurzVitezSetu(pravdepodobnost2);
    document.getElementById('kurz16').innerText = KurzVitezSetu02(pravdepodobnost2);
    document.getElementById('kurz17').innerText = KurzSudy(sudy);
    document.getElementById('kurz18').innerText = KurzLichy(sudy);
    document.getElementById('kurz19').innerText = KurzMeneNez(pravdepodobnost2);
    document.getElementById('kurz20').innerText = KurzViceNez(pravdepodobnost2);
    document.getElementById('kurz21').innerText = KurzVysledek20(pravdepodobnost2);
    document.getElementById('kurz22').innerText = KurzVysledek02(pravdepodobnost2);
    document.getElementById('kurz23').innerText = KurzVysledek21(pravdepodobnost2);
    document.getElementById('kurz24').innerText = KurzVysledek12(pravdepodobnost2);



    document.getElementById('kurz25').innerText = KurzVitezZapasu(pravdepodobnost3);
    document.getElementById('kurz26').innerText = KurzVitezZapasu02(pravdepodobnost3);
    document.getElementById('kurz27').innerText = KurzVitezSetu(pravdepodobnost3);
    document.getElementById('kurz28').innerText = KurzVitezSetu02(pravdepodobnost3);
    document.getElementById('kurz29').innerText = KurzSudy(sudy);
    document.getElementById('kurz30').innerText = KurzLichy(sudy);
    document.getElementById('kurz31').innerText = KurzMeneNez(pravdepodobnost3);
    document.getElementById('kurz32').innerText = KurzViceNez(pravdepodobnost3);
    document.getElementById('kurz33').innerText = KurzVysledek20(pravdepodobnost3);
    document.getElementById('kurz34').innerText = KurzVysledek02(pravdepodobnost3);
    document.getElementById('kurz35').innerText = KurzVysledek21(pravdepodobnost3);
    document.getElementById('kurz36').innerText = KurzVysledek12(pravdepodobnost3);



    document.getElementById('kurz37').innerText = KurzVitezZapasu(pravdepodobnost4);
    document.getElementById('kurz38').innerText = KurzVitezZapasu02(pravdepodobnost4);
    document.getElementById('kurz39').innerText = KurzVitezSetu(pravdepodobnost4);
    document.getElementById('kurz40').innerText = KurzVitezSetu02(pravdepodobnost4);
    document.getElementById('kurz41').innerText = KurzSudy(sudy);
    document.getElementById('kurz42').innerText = KurzLichy(sudy);
    document.getElementById('kurz43').innerText = KurzMeneNez(pravdepodobnost4);
    document.getElementById('kurz44').innerText = KurzViceNez(pravdepodobnost4);
    document.getElementById('kurz45').innerText = KurzVysledek20(pravdepodobnost4);
    document.getElementById('kurz46').innerText = KurzVysledek02(pravdepodobnost4);
    document.getElementById('kurz47').innerText = KurzVysledek21(pravdepodobnost4);
    document.getElementById('kurz48').innerText = KurzVysledek12(pravdepodobnost4);



    document.getElementById('kurz49').innerText = KurzVitezZapasu(pravdepodobnost5);
    document.getElementById('kurz50').innerText = KurzVitezZapasu02(pravdepodobnost5);
    document.getElementById('kurz51').innerText = KurzVitezSetu(pravdepodobnost5);
    document.getElementById('kurz52').innerText = KurzVitezSetu02(pravdepodobnost5);
    document.getElementById('kurz53').innerText = KurzSudy(sudy);
    document.getElementById('kurz54').innerText = KurzLichy(sudy);
    document.getElementById('kurz55').innerText = KurzMeneNez(pravdepodobnost5);
    document.getElementById('kurz56').innerText = KurzViceNez(pravdepodobnost5);
    document.getElementById('kurz57').innerText = KurzVysledek20(pravdepodobnost5);
    document.getElementById('kurz58').innerText = KurzVysledek02(pravdepodobnost5);
    document.getElementById('kurz59').innerText = KurzVysledek21(pravdepodobnost5);
    document.getElementById('kurz60').innerText = KurzVysledek12(pravdepodobnost5);



    document.getElementById('kurz61').innerText = KurzVitezZapasu(pravdepodobnost6);
    document.getElementById('kurz62').innerText = KurzVitezZapasu02(pravdepodobnost6);
    document.getElementById('kurz63').innerText = KurzVitezSetu(pravdepodobnost6);
    document.getElementById('kurz64').innerText = KurzVitezSetu02(pravdepodobnost6);
    document.getElementById('kurz65').innerText = KurzSudy(sudy);
    document.getElementById('kurz66').innerText = KurzLichy(sudy);
    document.getElementById('kurz67').innerText = KurzMeneNez(pravdepodobnost6);
    document.getElementById('kurz68').innerText = KurzViceNez(pravdepodobnost6);
    document.getElementById('kurz69').innerText = KurzVysledek20(pravdepodobnost6);
    document.getElementById('kurz70').innerText = KurzVysledek02(pravdepodobnost6);
    document.getElementById('kurz71').innerText = KurzVysledek21(pravdepodobnost6);
    document.getElementById('kurz72').innerText = KurzVysledek12(pravdepodobnost6);



    document.getElementById('kurz73').innerText = KurzCelkem1(product1);

    document.getElementById('kurz74').innerText = KurzCelkem2(product2);

    document.getElementById('kurz75').innerText = KurzCelkem3(product3);

    document.getElementById('kurz76').innerText = KurzCelkem4(product4);

    document.getElementById('kurz77').innerText = KurzCelkemSety(rozhodnousety);



});







