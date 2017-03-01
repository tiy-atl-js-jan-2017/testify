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

GildedRose.prototype.tick = function () {
  if (this.name === 'normal') {
    this.normalTick();
    return;
  }
  if (this.name === 'Aged Brie') {
    this.agedBrieTick();
    return;
  }
  if (this.name === 'Sulfuras, Hand of Ragnaros') {
    this.sulfurasTick();
    return;
  }
  if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
    this.backstageTick();
    return;
  }
  if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
    if (this.quality > 0) {
      if (this.name != 'Sulfuras, Hand of Ragnaros') {
        this.quality = this.quality - 1;
      }
      if (this.name === 'Conjured Mana Cake') {
        this.quality = this.quality - 1;
      }
    }
  } else {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
      if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.sellIn < 11) {
          if (this.quality < 50) {
            this.quality = this.quality + 1;
          }
        }
        if (this.sellIn < 6) {
          if (this.quality < 50) {
            this.quality = this.quality + 1;
          }
        }
      }
    }
  }
  if (this.name != 'Sulfuras, Hand of Ragnaros') {
    this.sellIn = this.sellIn - 1;
  }
  if (this.sellIn < 0) {
    if (this.name != 'Aged Brie') {
      if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.quality > 0) {
          if (this.name === 'Conjured Mana Cake') {
            this.quality = this.quality - 2;
          } else if (this.name != 'Sulfuras, Hand of Ragnaros') {
            this.quality = this.quality - 1;
          }
        }
      } else {
        this.quality = this.quality - this.quality;
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
  }
}

export { GildedRose };
