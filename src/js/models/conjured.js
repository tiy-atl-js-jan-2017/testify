import { Item } from "./item";

class Conjured extends Item {

  tick () {
    this.sellIn -= 1;
    this.quality -= 2;
    if (this.sellIn <= 0) { this.quality -= 2; }
    if (this.quality < 0) { this.quality = 0; }
  }
}

export { Conjured };
