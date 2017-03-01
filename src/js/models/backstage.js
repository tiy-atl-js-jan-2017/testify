class Backstage {
  constructor (sellIn, quality) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
    this.sellIn -= 1;
    this.quality += 1;
    if (this.sellIn < 10) { this.quality += 1; }
    if (this.sellIn < 5) { this.quality += 1; }
    if (this.sellIn < 0) { this.quality = 0; }
    if (this.quality > 50) { this.quality = 50; }
  }
}

export { Backstage };
