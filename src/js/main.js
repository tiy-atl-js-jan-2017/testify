function GildedRose (sellIn, quality, name) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

GildedRose.prototype.normalTick = function () {
  this.sellIn -= 1;
  this.quality -= 1;
  if (this.sellIn <= 0) { this.quality -= 1; }
  if (this.quality <= 0) { this.quality = 0; }
};

GildedRose.prototype.agedBrieTick = function () {
  this.sellIn -= 1;
  if (this.sellIn <= 5) { this.quality += 1; }
  if (this.sellIn <= 0) { this.quality += 1; }
  if (this.quality > 50) { this.quality = 50; }
};

GildedRose.prototype.sulfurasTick = function () {};

GildedRose.prototype.backstageTick = function () {
  this.sellIn -= 1;
  this.quality += 1;
  if (this.sellIn < 10) { this.quality += 1; }
  if (this.sellIn < 5) { this.quality += 1; }
  if (this.sellIn < 0) { this.quality = 0; }
  if (this.quality > 50) { this.quality = 50; }
};

GildedRose.prototype.conjuredTick = function () {
  this.sellIn -= 1;
  this.quality -= 2;
  if (this.sellIn <= 0) { this.quality -= 2; }
  if (this.quality < 0) { this.quality = 0; }
};

GildedRose.prototype.tick = function () {
  if (this.name === 'normal') { this.normalTick(); }
  if (this.name === 'Aged Brie') { this.agedBrieTick(); }
  if (this.name === 'Sulfuras, Hand of Ragnaros') { this.sulfurasTick(); }
  if (this.name === 'Backstage passes to a TAFKAL80ETC concert') { this.backstageTick(); }
  if (this.name === 'Conjured Mana Cake') { this.conjuredTick(); }
};

export { GildedRose };
