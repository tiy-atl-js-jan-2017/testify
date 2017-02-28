import {Item} from './item';

class Backstage extends Item {}

Backstage.prototype.tick = function() {
  this.sellIn -= 1;
  if (this.quality < 50) {
    this.quality += 1;
  }
  if (this.sellIn < 10 && this.quality < 50) {
    this.quality += 1;
  }
  if (this.sellIn < 5 && this.quality < 50) {
    this.quality += 1;
  }
  if (this.sellIn < 0)  {
    this.quality = 0;
  }
};

export {Backstage};
