

// Prototype of a Customer.
// how does a customer look like.

// Encapsulation => Class uses Encapsulaiton to put allthe arrtibutes and methods of an entity together.
class Customer{

    // Properties/Attributes of a Customer
    name="";
    id;
    address;
    mobilePhone;
    email;

    // constructor=> initlaizes values to the object properties.
    // constrcutors are similar to functions.
    // constrcutors don't have any name.
    // they don't return any values.
    // called automatically when objects are created.
    constructor(_name, _id, _address, _phone, _email){
        // we need to find out for which object this constructor is executing ?
        // this keyword. => allows you access object who is currently executing the code.
        this.name=_name;
        this.id=_id;
        this.address=_address;
        this.mobilePhone=_phone;
        this.email=_email;
    }

    // Methods.=> Operations / Functions.
    addItemToCart(item){
        console.log("Added item to cart");
    }

    placeOrder(){
        console.log("Order Places")
    }

    payForOrder(){
        // accepting debit/credit cards.
        // verifying card.
        // connecting to bank
        // deducting payments.
        console.log("Payment done");
    }

    seeProducts(){
        console.log("Browsing through products");
    }
}

// creating objects from a class.
// creating instances of class.
// instantiating a class.

var customer1 = new Customer("John Doe",1, "NYC", 9988776655, "john.doe@gmail.com");
// It doesnt match a real world scenario.
// customer1.email="";
// customer1.name=""
// console.log(email);
console.log(customer1.email);

var customer2 = new Customer("Customer 2", 2, "Mumbai", 8877665544, "customer@gmail.com");
console.log(customer2.email);

// Naming Conventions.

// 1. Class => First later Capital. General case.
// 2. functions => camelcase => starts from small char and capital when word change.
// 3. variables => camelcase.

// ASSIGNMENT
// Seller, Product


// Thousands of objects.


// extends is keyword which implements inheritance. by extending parent's [attributes and methods].


class GoldCustomer extends Customer{
    
    goldService;

    // Purpose of constructor is to accept values for properties and initialize them.
    constructor(_goldService, _name, _id, _address, _phone, _email)
    {
        // super keyword calls parent class constructor
        super(_name, _id, _address, _phone, _email);
        this.goldService=_goldService;
    }

    //Overriding method.
    payForOrder(){
        console.log("Paying 20% less on total value.");
        super.payForOrder();
    }
}

class PlatinumCustomer extends Customer{

    platniumService;
    constructor(_pService, _name, _id, _address, _phone, _email)
    {
        // super keyword calls parent class constructor
        super(_name, _id, _address, _phone, _email);
        this.platniumService=_pService;
    }
}

var goldCustomer1 = new GoldCustomer("20% Discount","Gold Customer", 3, "Mumbai", 8877665544, "customer.gold@gmail.com");
console.log(goldCustomer1.name); // is from parent.
console.log(goldCustomer1.goldService); // is its own property.
goldCustomer1.payForOrder();


console.log(customer1.goldService); // undefined.

var pCustomer = new PlatinumCustomer("30% Discount","Gold Customer", 3, "Mumbai", 8877665544, "customer.gold@gmail.com");

pCustomer.payForOrder();