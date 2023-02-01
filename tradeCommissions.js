function tradeCommissions(input) {
    let city = input[0];
    let deals = Number(input[1]);

    switch (city) {
            case "Sofia":
                if(deals >= 0 && deals <= 500) 
                { console.log((deals * 0.05).toFixed(2)); } else if (deals >= 500 && deals <= 1000) 
            { console.log((deals * 0.07).toFixed(2)); } else if (deals >= 1000 && deals <= 10000) 
            { console.log((deals * 0.08).toFixed(2)); } else if (deals >= 10000) 
            { console.log((deals * 0.12).toFixed(2)); }else {
                console.log("error");
            }
            break;
        case "Varna":
             if(deals >= 0 && deals <= 500) 
                { console.log((deals * 0.045).toFixed(2)); } else if (deals >= 500 && deals <= 1000) 
            { console.log((deals * 0.075).toFixed(2)); } else if (deals >= 1000 && deals <= 10000) 
            { console.log((deals * 0.10).toFixed(2)); } else if (deals >= 10000) 
            { console.log((deals * 0.13).toFixed(2)); }else {
                console.log("error");
            }
            break;
    
        case "Plovdiv":
            if(deals >= 0 && deals <= 500) 
    { console.log((deals * 0.055).toFixed(2)); } else if (deals >= 500 && deals <= 1000) 
    { console.log((deals * 0.080).toFixed(2)); } else if (deals >= 1000 && deals <= 10000) 
    { console.log((deals * 0.12).toFixed(2)); } else if (deals >= 10000) 
    { console.log((deals * 0.145).toFixed(2)); }else {
        console.log("error");
    }
    break;
        default: console.log("error");
}
    
}

tradeCommissions(["Varna",
"3874.50"])





