

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

  if (this.quality < 50) {
    this.quality += 1;
  }
  if (this.sellIn < 11 && this.quality < 50) {
    this.quality += 1;
  }
  if (this.sellIn < 6 && this.quality < 50) {
    this.quality += 1;
  }
  this.sellIn -= 1;
  if (this.sellIn < 0)  {
    this.quality = 0;
  }
};

GildedRose.prototype.tick = function () {

  if (this.name === 'Conjured Mana Cake') {
    this.conjuredCake();
  } else {
    if (this.name === 'normal') {
      this.normal();
    } else {
      if (this.name === 'Backstage passes to a TAFKAL80ETC concert')  {
        this.backstagePass();
      } else {
        if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.quality > 0) {
            if (this.name != 'Sulfuras, Hand of Ragnaros') {
            }
          }
        } else {
          if (this.quality < 50) {
            this.quality = this.quality + 1;
          }
        }
        if (this.name != 'Sulfuras, Hand of Ragnaros') {
          this.sellIn = this.sellIn - 1;
        }
        if (this.sellIn < 0) {
          if (this.name != 'Aged Brie') {
            if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.quality > 0) {
                if (this.name != 'Sulfuras, Hand of Ragnaros') {
                }
              }
            }
          } else {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
        }
      }
    }
  }
};

export { GildedRose };
