class Conjured {
  constructor (sellIn, quality) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
    this.sellIn -= 1;
    this.quality -= 2;
    if (this.sellIn <= 0) { this.quality -= 2; }
    if (this.quality < 0) { this.quality = 0; }
  }
}

export { Conjured };
