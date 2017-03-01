import { Item } from "./models/item";
import { AgedBrie } from "./models/brie";
import { NormalItem } from "./models/normal";
import { Backstage } from "./models/backstage";
import { Conjured } from "./models/conjured";

var ITEM_TYPES = {
  'normal': NormalItem,
  'Aged Brie': AgedBrie,
  'Sulfuras, Hand of Ragnaros': Item,
  'Backstage passes to a TAFKAL80ETC concert': Backstage,
  'Conjured Mana Cake': Conjured
 };

class GildedRose {
  constructor (sellIn, quality, name) {
    var itemConstructor = ITEM_TYPES[name];
    return new itemConstructor(sellIn, quality);
  }
}

export { GildedRose };
