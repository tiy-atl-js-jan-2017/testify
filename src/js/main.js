import { AgedBrie } from "./models/brie";
import { NormalItem } from "./models/normal";
import { Backstage } from "./models/backstage";
import { Sulfuras } from "./models/sulfuras";
import { Conjured } from "./models/conjured";

function GildedRose (sellIn, quality, name) {
  if (name === 'normal') {
    return new NormalItem(sellIn, quality);
  }
  if (name === 'Aged Brie') {
    return new AgedBrie(sellIn, quality);
  }
  if (name === 'Sulfuras, Hand of Ragnaros') {
    return new Sulfuras(sellIn, quality);
  }
  if (name === 'Backstage passes to a TAFKAL80ETC concert') {
    return new Backstage(sellIn, quality);
  }
  if (name === 'Conjured Mana Cake') {
    return new Conjured(sellIn, quality);
  }
}

export { GildedRose };
