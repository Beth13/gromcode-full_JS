export class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.id = "1";
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (["Buy", "Sell"].includes(this.type)) {
      return true;
    }
    return false;
  }
}

const order1 = new Order(2000, "Lviv", "Buy");

console.log(order1);

console.log(order1.checkPrice());
order1.confirmOrder();

console.log(order1);

console.log(order1.isValidType());
