//object literal - hardcoded - unlike instances by class
const stock = {
    sign: "COKE",
    price: 20.32,
    // display: ()=>{//arrow not working here
    //     console.log(`${this.sign}= ${this.price}`);
    // }
    display:function (){
        console.log(`${this.sign}= ${this.price}`);
    },
    //but you can omit function
    display2(){
        console.log(`${this.sign}= ${this.price}`);
    },
    addPrice(multi){
        this.price += multi;
    },

    changeName(newStock){
        stock.sign = newStock;// work
        // this.sign = newStock;
    }



};

const changeAndShow = () =>{
    stock.addPrice(20);
    let elements = document.querySelector("#stock2").children;

    elements[0].innerHTML = stock["sign"];
    elements[1].innerHTML = stock.price;


}
const updateView = ()=>{
    let elements = document.querySelector("#stock2").children;
    elements[0].innerHTML = stock["sign"];
    elements[1].innerHTML = stock.price;
    elements[2].innerHTML = stock["officialName"];
    elements[3].innerHTML = stock.max;
}

const addNewProps = () =>{
    stock.officialName = "Coke Cola Inc";

    stock["max"] = 200;

    let elements = document.querySelector("#stock2").children;

    elements[2].innerHTML = stock["officialName"];
    elements[3].innerHTML = stock.max;


}
let elements = document.querySelector("#stock1").children;

elements[0].innerHTML = stock.sign;
elements[1].innerHTML = stock.price;

// Notification.permission;
const myNotification = new Notification("Hello!");
// myNotificat

const changeName=(ev)=>{
    // console.log(ev.getElementsByName("button").innerHTML);
    console.log("hi")
    stock.changeName("AAPL");
}
