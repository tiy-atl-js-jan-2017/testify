import { ConjuredCake } from './conjuredCake';
import { Sulfuras } from './sulfuras';
import { Normal } from './normal';
import { Backstage } from './backstage';
import { AgedBrie } from './agedBrie';

var ITEM_TYPES = {
  'Conjured Mana Cake': ConjuredCake,
  'Sulfuras, Hand of Ragnaros': Sulfuras,
  'normal': Normal,
  'Backstage passes to a TAFKAL80ETC concert': Backstage,
  'Aged Brie': AgedBrie
};

function GildedRose (sellIn, quality, name) {
  var itemConstructor = ITEM_TYPES[name];
  return new itemConstructor(sellIn, quality);
}

export { GildedRose };
