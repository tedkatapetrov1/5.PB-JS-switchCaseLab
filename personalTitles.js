function personalTitles(input) {
    let years = Number(input[0]);
    let sex = input[1];

    if (years < 16) {
        if (sex === "f") { console.log("Miss"); }
        else if (sex === "m") {
            console.log("Master");
        }
    }
    if (years >= 16) {
        if (sex === "f") {
            console.log("Ms.");
        }
        else if (sex === "m") {
            console.log("Mr.");
        }
    }


}

personalTitles(["25", "f"])


