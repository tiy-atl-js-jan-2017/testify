import { Item } from './item';

class ConjuredCake extends Item {
  tick () {
    this.sellIn -= 1;
    if (this.quality > 0) {
      this.quality -= 2;
    }
    if (this.sellIn < 0 && this.quality > 0)  {
      this.quality -= 2;
    }
  }
}

export {ConjuredCake};
