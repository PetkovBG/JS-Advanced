function solve(name, population, treasury){


    let city = {
        name, population, treasury
    };
    city.taxRate = 10;
   
    let methods = {
        collectTaxes() { treasury += population * taxRate },
        applyGrowth(percent) { population += population * percent },
        applyRecession(percent) { treasury -= treasury * percent }
    };
        
    }
    solve('Tortuga',
    7000,
    15000);