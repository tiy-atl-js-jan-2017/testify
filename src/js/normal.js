import {Item} from './item';

class Normal extends Item {}

Normal.prototype.tick = function()  {
  this.sellIn -= 1;
  if (this.quality > 0) {
    this.quality -= 1;
  }
  if (this.sellIn < 0 && this.quality > 0)  {
    this.quality -= 1;
  }
};

export {Normal};
