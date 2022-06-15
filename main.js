
//! variabili globali
const ticketPrice = 0.26;
// document.getElementById("ticket-price").innerHTML = (`oggi il prezzo è di soli ${ticketPrice} a km! 😃 `);

//! numero di km che vuole percorrere
const dudeKm = document.getElementById("dude-km").value;
//! ticketFullPrice
const ticketFullPrice = ticketPrice * dudeKm;


// if (isNaN(dudeKm)){
//     alert("digita un numero valido!");
// }

//! età utente
const dudeAge = document.getElementById("dude-age").value;
// if (isNaN(dudeAge)){
//     alert("digita un numero valido!");
// }



const dudeGenerate = document.getElementById("dude-generate");
dudeGenerate.addEventListener("click", function() {

    console.log(`il prezzo totale è di ${ticketFullPrice.toFixed(2)}€`);

    //! se età minore di 18
    if (dudeAge < 18){
        const dudeSale = (ticketFullPrice * 20) / 100;
        console.log(`per i minorenni abbiamo uno sconto del 20% nel suo caso di ${dudeSale}€`);
        const ticketFinalPrice = ticketFullPrice - dudeSale;
        console.log(`il suo prezzo scende a ${ticketFinalPrice.toFixed(2)}€`);
    }else if (dudeAge > 65){
        const dudeSale = parseInt((ticketFullPrice * 40) / 100);
        console.log(`per gli over 65 abbiamo uno sconto del 40% nel suo caso di ${dudeSale}€`);
        const ticketFinalPrice = ticketFullPrice - dudeSale;
        console.log(`il suo prezzo scende a ${ticketFinalPrice.toFixed(2)}€! 🤯`);
    }else{
        console.log(`non abbiamo sconti per lei 😢`);
        console.log(`come detto in precedenza il prezzo è di ${ticketFullPrice.toFixed(2)}€`);}
});

// document.getElementById("ticket-full-price").innerHTML = (`il prezzo totale è di ${ticketFullPrice.toFixed(2)}€ 💸`);



// }

