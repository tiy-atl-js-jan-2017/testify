import { Item } from "./item";

class NormalItem extends Item {
  tick () {
    this.sellIn -= 1;
    this.quality -= 1;
    if (this.sellIn <= 0) { this.quality -= 1; }
    if (this.quality < 0) { this.quality = 0; }
  }
}

// Mammal.prototype = new Animal;
// Mammal.prototype.run = function () {};
// Dog.prototype = new Mammal;
// Dog.prototype.bark = function () {};

export { NormalItem };
