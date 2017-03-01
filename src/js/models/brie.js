function AgedBrie (sellIn, quality) {
  this.sellIn = sellIn;
  this.quality = quality;
}

AgedBrie.prototype.tick = function () {
  this.sellIn -= 1;
  this.quality += 1;
  if (this.sellIn <= 0) { this.quality += 1; }
  if (this.quality > 50) { this.quality = 50; }
};

export { AgedBrie };
