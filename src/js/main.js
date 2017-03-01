function GildedRose (sellIn, quality, name) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

GildedRose.prototype.tick = function () {
  if (this.name === 'normal') {
    this.quality--;
    this.sellIn--;
    if (this.sellIn <= 0) {
      this.quality-= 1;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }

  // // only one thing ever happens: a, b, c, or d
  // if (foo) {
  //   // thing a
  // } else if (bar) {
  //   // thing b
  // } else if (baz) {
  //   // thing c
  // } else {
  //   // thing d
  // }
  //
  // // any number of things may happen
  // if (foo) {
  //   // thing a
  // }
  // if (bar) {
  //   // thing b
  // }
  // if (baz) {
  //   // thing c
  // }


  if (this.name === 'Aged Brie') {
      if (this.sellIn > 0) {
        this.quality = this.quality + 1
        this.sellIn = this.sellIn - 1;
      }
      if (this.sellIn > 0 && this.quality > 50) {
        this.quality = 50;
      }
      // if (this.sellIn > 0 && this.quality === 50) {
      //   this.quality = 50;
      // }
  }

        // if (this.sellIn < 0 && this.quality < 50) {
        // this.quality = this.quality + 1;}
        //   if (this.sellIn < 0 && this.quality === 49) {
        //   this.quality = 50;
        //   }



};
//   } === 'normal' && )  && this.quality = 50
//
//   if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
//     if (this.quality > 0) {
//       if (this.name != 'Sulfuras, Hand of Ragnaros') {
//         this.quality = this.quality - 1;
//       if (this.name === 'Conjured Mana Cake') {
//         this.quality = this.quality - 1;
//       }
//       }
//     }
//   }  else {
//     if (this.quality < 50) {
//       this.quality = this.quality + 1;
//       if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.sellIn < 11) {
//           if (this.quality < 50) {
//             this.quality = this.quality + 1;
//           }
//         }
//         if (this.sellIn < 6) {
//           if (this.quality < 50) {
//             this.quality = this.quality + 1;
//           }
//         }
//       }
//     }
//   }
//   if (this.name != 'Sulfuras, Hand of Ragnaros') {
//     this.sellIn = this.sellIn - 1;
//   }
//   if (this.sellIn < 0) {
//     if (this.name != 'Aged Brie') {
//       if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.quality > 0) {
//           if (this.name != 'Sulfuras, Hand of Ragnaros') {
//             this.quality = this.quality - 1;
//           if (this.name === 'Conjured Mana Cake') {
//             this.quality = this.quality - 1;
//           }
//           }
//         }
//       } else {
//         this.quality = this.quality - this.quality;
//       }
//     } else {
//       if (this.quality < 50) {
//         this.quality = this.quality + 1;
//       }
//     }
//   }
// }
//
// export { GildedRose };
//
// /////////////////
// // function GildedRose (sellIn, quality, name) {
// //   this.name = name;
// //   this.sellIn = sellIn;
// //   this.quality = quality;
// // }
// //
// // GildedRose.prototype.tick = function () {
// //
// //   if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
// //     if (this.quality > 0) {
// //       if (this.name != 'Sulfuras, Hand of Ragnaros') {
// //         this.quality = this.quality - 1;
// //       if (this.name === 'Conjured Mana Cake') {
// //         this.quality = this.quality - 1;
// //       }
// //       }
// //     }
// //   }  else {
// //     if (this.quality < 50) {
// //       this.quality = this.quality + 1;
// //       if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
// //         if (this.sellIn < 11) {
// //           if (this.quality < 50) {
// //             this.quality = this.quality + 1;
// //           }
// //         }
// //         if (this.sellIn < 6) {
// //           if (this.quality < 50) {
// //             this.quality = this.quality + 1;
// //           }
// //         }
// //       }
// //     }
// //   }
// //   if (this.name != 'Sulfuras, Hand of Ragnaros') {
// //     this.sellIn = this.sellIn - 1;
// //   }
// //   if (this.sellIn < 0) {
// //     if (this.name != 'Aged Brie') {
// //       if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
// //         if (this.quality > 0) {
// //           if (this.name != 'Sulfuras, Hand of Ragnaros') {
// //             this.quality = this.quality - 1;
// //           if (this.name === 'Conjured Mana Cake') {
// //             this.quality = this.quality - 1;
// //           }
// //           }
// //         }
// //       } else {
// //         this.quality = this.quality - this.quality;
// //       }
// //     } else {
// //       if (this.quality < 50) {
// //         this.quality = this.quality + 1;
// //       }
// //     }
// //   }
// // }
// //
export { GildedRose };
// //
