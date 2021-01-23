class Dish{
    constructor(name, ingredients, description, price){
        this.name = name
        this.ingredients = ingredients
        this.description = description
        this.price = price
    }
}

class Table{
    constructor(id, numberOfPeople, maxNumberOfPeople, active, check){
        this.id = id
        this.numberOfPeople = numberOfPeople
        this.maxNumberOfPeople = maxNumberOfPeople
        this.orderedDishes
        this.active = active
        this.check = check

        this.OrderFood()
    }

    OrderFood(){

    }
}

class Restaurant{
    constructor(numberOfTablesAtRestaurant){
        this.numberOfTablesAtRestaurant = numberOfTablesAtRestaurant
        this.tableState = []
        this.allTables = []
        this.menu

        this.orderTable()
        this.numberOfTablesInADay()
        this.averagePrice()
        this.profitOfTheDay()
        this.mostOrdered()
        this.leastOrdered()
        this.customDishes()
        this.report()
    }

    orderTable(){
        let number = prompt("Za koliko osoba želite rezervirati stol?")
        let freeTables = []
        for(let i = 0; i < this.numberOfTablesAtRestaurant; i++){
            if(number <= this.tableState[i].maxNumberOfPeople){
                let a = true
                for(let j = 0; j <= freeTables.length; j++){
                    if(this.tableState[i].maxNumberOfPeople === freeTables[j]){
                        a = false
                    }
                }
                if(a = true){
                    freeTables.push(this.tableState[i].maxNumberOfPeople)
                }
            }
        }
        let tableReservation = prompt("Nudimo vam stolove sa sljedećim brojem mjesta: " + freeTables +"\nUpišite broj slobodnih mjesta stola kojeg želite rezervirati.")
        for(let i = 0; i < this.numberOfTablesAtRestaurant; i++){
            if(tableReservation === this.tableState[i].maxNumberOfPeople){
                this.tableState[i].numberOfPeople = tableReservation
                this.tableState[i].active = true
                console.log("Id vašeg stola je" + this.tableState[i].id)
                showMenu(this.tableState[i])
            }
        }
    }

    numberOfTablesInADay(){
        console.log("Ukupan broj rezervacija u danu je" + this.allTables.length)
    }

    averagePrice(){

    }

    profitOfTheDay(){

    }

    mostOrdered(){

    }

    leastOrdered(){

    }

    customDishes(){

    }

    report(){
        this.numberOfTablesInADay()
        this.profitOfTheDay()
        this.averagePrice()
        this.mostOrdered()
        this.leastOrdered()
        this.customDishes()
    }
}

this.orderedDishes = {
    readyMeales : [],
    customMeales : []
}

this.menu = {
    readyMeals : [new Dish("čevapi", ["meso", "lepinja", "kajmak", "kapula"], "Meso sa grilla, topla lepinja, rastopljeni kajmak pomiješan s mirisima kapule", 25), new Dish("juha", ["voda", "tjestenina", "začini"], "Meso i povrće kuhano u vodi s dodanim začinima", 15), new Dish("lazanje", ["mljeveno meso", "tjestenina", "mlijeko"], "Sprema se meso za toć i stavlja u kalup između redova tjestenine te preljeveno bešamelom. Pečenje u pećnici.", 30), new Dish("muffin", ["jaja", "brašno", "šećer", "mlijeko", "maslo", "čokolada"], "Umiješani svi sastojci i pomiješani sa sitno narezanom čokoladom. Uljeveno u sitni kalup za muffin i pečeno u pećnici.", 10)],
    customMeals : [],
    showMenu(tableId){
        let choice = prompt("Meni:" + this.readyMeals + "\nUnesite ime jela koje želite naručiti ili unesite 'custom' ako želite izraditi novo jelo po narudžbi.")
        if(choice.toLowerCase === "custom"){
            this.addCustomDish(tableId)
        } else {
            for(let i = 0; i < this.readyMeals.length; i++){
                if(choice.toLowerCase === this.readyMeals[i].name){
                    this.allTables[tableId].readyMeales.push(this.readyMeals[i])
                    this.allTables[tableId].check += this.readyMeals[i].price
                }
            }
        }
    },
    addCustomDish(tableId){
        let nameNew = prompt("Unesi ime novog jela.")
        let ingredientNew1 = prompt("Unesi prvi sastojak novog jela.")
        let ingredientsNew = []
        ingredientsNew.push(ingredientNew1)
        let a = true
        while(a = true){
            let ingredientNew2 = prompt("Unesite još jedan sastojak.\nAko ne želite više satojaka unesite 'dalje'.")
            if(ingredientNew2.toLowerCase === "dalje"){
                a = false
            } else {
                ingredientsNew.push(ingredientNew2)
            }
        }
        let descriptionNew = prompt("Opišite novo jelo(način pripreme, napomene...)")
        let priceNew = (ingredientsNew.length)*5
        this.customMeals.push(new Dish(nameNew, ingredientsNew, descriptionNew, priceNew))
        this.allTables[tableId].customMeales.push(new Dish(nameNew, ingredientsNew, descriptionNew, priceNew))
        this.allTables[tableId].check += priceNew
    }
}



this.numberOfTablesAtRestaurant = prompt("Unesite broj slobodnih stolova u restoranu.")
for(let i = 1; i <= this.numberOfTablesAtRestaurant; i++){
    this.tableState.push(new Table(i, 0, prompt("Unesite maksimalan broj osoba za stolom " + i), false, 0))
}
orderTable();