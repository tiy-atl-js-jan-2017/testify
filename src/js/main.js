

function GildedRose (sellIn, quality, name) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

GildedRose.prototype.conjuredCake = function() {
  this.sellIn -= 1;
  if (this.quality > 0) {
    this.quality -= 2;
  }
  if (this.sellIn < 0 && this.quality > 0)  {
    this.quality -= 2;
  }
};

GildedRose.prototype.normal = function()  {
  this.sellIn -= 1;
  if (this.quality > 0) {
    this.quality -= 1;
  }
  if (this.sellIn < 0 && this.quality > 0)  {
    this.quality -= 1;
  }
};

GildedRose.prototype.backstagePass = function () {
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

GildedRose.prototype.agedBrie = function()  {
  this.sellIn -= 1;
  if (this.quality < 50) {
    this.quality += 1;
  }
  if (this.sellIn <= 0 && this.quality < 50)  {
    this.quality += 1;
  }
};

GildedRose.prototype.tick = function () {

  if (this.name === 'Conjured Mana Cake') {
    this.conjuredCake();
  }
  if (this.name === 'normal') {
    this.normal();
  }
  if (this.name === 'Backstage passes to a TAFKAL80ETC concert')  {
    this.backstagePass();
  }
  if (this.name === 'Aged Brie')  {
    this.agedBrie();
  }
};

export { GildedRose };
