

function GildedRose (sellIn, quality, name) {
  if (name === 'Conjured Mana Cake') {
    return new ConjuredCake(sellIn, quality);
  }
  if (name === 'Sulfuras, Hand of Ragnaros')  {
    return new Sulfuras(sellIn, quality);
  }
  if (name === 'normal') {
    return new Normal(sellIn, quality);
  }
  if (name === 'Backstage passes to a TAFKAL80ETC concert')  {
    return new Backstage(sellIn, quality);
  }
  if (name === 'Aged Brie')  {
    return new AgedBrie(sellIn, quality);
  }
}

function ConjuredCake (sellIn, quality)  {
  this.sellIn = sellIn;
  this.quality = quality;
}

ConjuredCake.prototype.tick = function()  {
  this.sellIn -= 1;
  if (this.quality > 0) {
    this.quality -= 2;
  }
  if (this.sellIn < 0 && this.quality > 0)  {
    this.quality -= 2;
  }
};


function Normal(sellIn, quality)  {
  this.sellIn = sellIn;
  this.quality = quality;
}

Normal.prototype.tick = function()  {
  this.sellIn -= 1;
  if (this.quality > 0) {
    this.quality -= 1;
  }
  if (this.sellIn < 0 && this.quality > 0)  {
    this.quality -= 1;
  }
};


function Backstage(sellIn, quality) {
  this.sellIn = sellIn;
  this.quality = quality;
}

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

function AgedBrie(sellIn, quality)  {
  this.sellIn = sellIn;
  this.quality = quality;
}

AgedBrie.prototype.tick = function()  {
  this.sellIn -= 1;
  if (this.quality < 50) {
    this.quality += 1;
  }
  if (this.sellIn <= 0 && this.quality < 50)  {
    this.quality += 1;
  }
};

function Sulfuras(sellIn, quality)  {
  this.sellIn = sellIn;
  this.quality = quality;
}

Sulfuras.prototype.tick = function()  {
  return;
};

export { GildedRose };
