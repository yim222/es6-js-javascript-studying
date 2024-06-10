//object literal - hardcoded - unlike instances by class
const stock = {
    sign: "COKE",
    price: 20.32,
    // display: ()=>{//arrow not working here
    //     console.log(`${this.sign}= ${this.price}`);
    // }
    display: function () {
        console.log(`${this.sign}= ${this.price}`);
    },
    //but you can omit function
    display2() {
        console.log(`${this.sign}= ${this.price}`);
    },
    addPrice(multi) {
        this.price += multi;
    },

    changeName(newStock) {
        stock.sign = newStock;// work
        // this.sign = newStock;
    }


};

function stockFactory(sign, price) {
    const object = {
        sign: sign,
        price: price,
        // display: ()=>{//arrow not working here
        //     console.log(`${this.sign}= ${this.price}`);
        // }
        display: function () {
            console.log(`${this.sign}= ${this.price}`);
        },
        //but you can omit function
        display2() {
            console.log(`${this.sign}= ${this.price}`);
        },
        addPrice(multi) {
            this.price += multi;
        },

        changeName(newStock) {
            stock.sign = newStock;// work
            // this.sign = newStock;
        }
    }
    return object;
}

const changeAndShow = () => {
    stock.addPrice(20);
    let elements = document.querySelector("#stock2").children;

    elements[0].innerHTML = stock["sign"];
    elements[1].innerHTML = stock.price;


}
const updateView = () => {
    let elements = document.querySelector("#stock2").children;
    elements[0].innerHTML = stock["sign"];
    elements[1].innerHTML = stock.price;
    elements[2].innerHTML = stock["officialName"];
    elements[3].innerHTML = stock.max;
}

const addNewProps = () => {
    stock.officialName = "Coke Cola Inc";

    stock["max"] = 200;

    let elements = document.querySelector("#stock2").children;

    elements[2].innerHTML = stock["officialName"];
    elements[3].innerHTML = stock.max;


}


// Notification.permission;
const myNotification = new Notification("Hello!");
// myNotificat

const changeName = () => {
    // console.log(ev.getElementsByName("button").innerHTML);
    console.log("hi")
    stock.changeName("AAPL");
}


//some sort of constructor for use with new
function Owner(name, stock) {
    this.name = name;
    this.amount = 0;
    this.setAmount = (amount)=>{
        this.amount = amount;
    }

    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    this.stock = stock
}


//init
let elements = document.querySelector("#stock1").children;

elements[0].innerHTML = stock.sign;
elements[1].innerHTML = stock.price;

let bmea = stockFactory("BMEA", 4.14);
let elements4 = document.querySelector("#stock4").children;

elements4[0].innerHTML = bmea.sign;
elements4[1].innerHTML = bmea.price;

let owner1 = new Owner("lingar", bmea)
owner1.setAmount(25);

let elements5 = document.querySelector("#stock5").children;

elements5[0].innerHTML = owner1.name;
elements5[1].innerHTML = owner1.amount;

elements5[2].innerHTML = owner1.stock.sign;
