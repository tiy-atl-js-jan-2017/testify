function GildedRose (sellIn, quality, name) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

GildedRose.prototype.tick = function () {

  if (this.name === 'normal') {
      // do stuff
      this.sellIn -= 1;
      this.quality -= 1;
      if (this.sellIn <= 0){
          this.quality -= 1;
      }
      if (this.quality < 0){this.quality = 0};
      if (this.quality > 50){this.quality = 50};
  }

  if (this.name === 'Aged Brie') {
      if (this.sellIn <= 0 && this.quality <= 48) {
          this.quality += 2;
          this.sellIn -= 1;
      } else if (this.sellIn >= 0 && this.quality <= 49) {
          this.quality += 1;
          this.sellIn -= 1;
      } else if (this.quality == 50) {
        this.sellIn -= 1;
      }
  }

  if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.quality === 50) {
          this.sellIn -= 1;
      } else if (this.sellIn > 10 && this.quality <= 49) {
          this.quality += 1;
          this.sellIn -= 1;
      } else if (this.sellIn <= 10 && this.sellIn > 5 && this.quality <= 48) {
          this.quality += 2;
          this.sellIn -= 1;
      } else if (this.sellIn <= 5 && this.sellIn > 0 && this.quality <= 47) {
          this.quality += 3;
          this.sellIn -= 1;
      }  else if (this.sellIn <= 0) {
         this.quality = 0;
         this.sellIn -= 1;
      }
  }

     if (this.name == 'Conjured Mana Cake') {
         this.sellIn -= 1;
         this.quality -= 2;
       if (this.sellIn <= 0) {
         this.quality -= 2;
     }
     if (this.quality < 0){this.quality = 0};
     if (this.quality > 50){this.quality = 50};
   }

}

export { GildedRose };
