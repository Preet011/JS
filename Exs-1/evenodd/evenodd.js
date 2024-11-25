/*for (let i = 1; i <= 12; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
       
    } else {
        console.log(count + " est impair");
    }
}
let number = parseInt(prompt("write a number?"));

	for (let count = number ; count <= 20 ; count++) {
        if (count % 2 === 0 ) {
            console.log(count + " est pair");
            
	} else {
        console.log(count + " est impair");
    }
};*/

/*
let number = parseInt(prompt("write a number?"));
let count = number;
while ( count <= 20) {
    if (count % 2 === 0) {
        console.log(count + " est pair");
        
}
        else {
        console.log(count + " est impair");
    }}
        */
       // correction

       for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
        console.log(i + " est pair");
        } else {
        console.log(i + " est impair");
        }
        }
        
        let nb = parseInt(prompt("donne moi un nombre"));
        let nbMax = nb + 9;
        for (let list = nb; list <= nbMax; list++) {
        if (list % 2 === 0) {
        document.write(
        "<p style='color:blue'> c'est un nombre pair " + list + "</p>",
        );
        } else {
        document.write(
        "<p style='color:blue'> c'est un nombre impair " + list + "</p>",
        );
        }
        }
        
        // let number = parseInt(prompt("donne moi un nombre"));
        // let numberMax = number + 9;
        // while (number <= numberMax) {
        // if (number % 2 === 0) {
        // document.write(
        // "<p style='color:red'> c'est un nombre pair " + number + "</p>",
        // );
        // } else {
        // document.write(
        // "<p style='color:red'> c'est un nombre impair " + number + "</p>",
        // );
        // }
        // number++;
        // }