
const dudeGenerate = document.getElementById("dude-generate");
dudeGenerate.addEventListener("click", function () {

    //! variabili standard
    const ticketPrice = 0.26;
    console.log(`prezzo giornaliero: ${ticketPrice} al km`);
    //! input km
    const dudeKm = parseInt(document.getElementById("dude-km").value);
    if (isNaN(dudeKm)) {
        alert("digita un numero di km valido!");
    }
    console.log(`km da percorrere: ${dudeKm}`);
    //! input age
    const dudeAge = document.getElementById("dude-age").value;
    if (isNaN(dudeAge)) {
        alert("digita un età valida!");
    }
    console.log(`età: ${dudeAge}`);
    //! output ticketFullPrice
    const ticketFullPrice = ticketPrice * dudeKm;
    console.log(`prezzo totale: ${ticketFullPrice.toFixed(2)}€`);
    //! output sale
    if (dudeAge < 18) {
        const dudeSale = (ticketFullPrice * 15) / 100;
        console.log(`minorenne: sconto del 15% (${dudeSale.toFixed(2)}€)`);
        const ticketFinalPrice = ticketFullPrice - dudeSale;
        console.log(`prezzo scontato: ${ticketFinalPrice.toFixed(2)}€`);
    } else if (dudeAge > 65) {
        const dudeSale = parseInt((ticketFullPrice * 35) / 100);
        console.log(`over 65: sconto del 35% (${dudeSale.toFixed(2)}€)`);
        const ticketFinalPrice = ticketFullPrice - dudeSale;
        console.log(`prezzo scotato: ${ticketFinalPrice.toFixed(2)}€! 🤯`);
    } else {
        console.log(`prezzo NON scontabile: ${ticketFullPrice.toFixed(2)}€`);
    }
    
});

// document.getElementById("ticket-full-price").innerHTML = (`il prezzo totale è di ${ticketFullPrice.toFixed(2)}€ 💸`);



// }

