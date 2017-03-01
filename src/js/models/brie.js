import { Item } from "./item";

class AgedBrie extends Item {
  tick () {
    this.sellIn -= 1;
    this.quality += 1;
    if (this.sellIn <= 0) { this.quality += 1; }
    if (this.quality > 50) { this.quality = 50; }
  }
}

export { AgedBrie };
