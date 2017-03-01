function NormalItem (sellIn, quality) {
  this.sellIn = sellIn;
  this.quality = quality;
}

NormalItem.prototype.tick = function () {
  this.sellIn -= 1;
  this.quality -= 1;
  if (this.sellIn <= 0) { this.quality -= 1; }
  if (this.quality < 0) { this.quality = 0; }
};

export { NormalItem };
