 ItemEvents.toolTierRegistry((event) => {
   event.add("realinite", tier => {
    tier.uses = 12000;
    tier.speed = 15;
    tier.attackDamageBonus = 15;
    tier.level = 4;
    tier.enchantmentValue = 18;
    }); 
  }); 

   ItemEvents.toolTierRegistry((event) => {
     event.add("invertnite", tier => {
      tier.uses = 6000;
      tier.speed = 12;
      tier.attackDamageBonus = 12;
      tier.level = 3;
      tier.enchantmentValue = 16;
      }); 
    });

    ItemEvents.toolTierRegistry((event) => {
      event.add("dimensionite", tier => {
        tier.uses = 25000;
        tier.speed = 30;
        tier.attackDamageBonus = 45;
        tier.level = 6;
        tier.enchantmentValue = 35;
        }); 
      });

      ItemEvents.armorTierRegistry((event) => {
        event.add("dimensionite", tier => {  
          tier.durabilityMultiplier = 5000;
          tier.slotProtections = [50, 60, 75, 40]; 
          tier.enchantmentValue = 40;
          tier.equipSound = 'minecraft:item.armor.equip_netherite';
          tier.repairIngredient = 'kubejs:dimensionite';
          tier.toughness = 10.0;
          tier.knockbackResistance = 8;
        });
      });

    ItemEvents.armorTierRegistry((event) => {
      event.add("invertnite", tier => {  
        tier.durabilityMultiplier = 300;
        tier.slotProtections = [10, 20, 25, 10]; 
        tier.enchantmentValue = 15;
        tier.equipSound = 'minecraft:item.armor.equip_diamond';
        tier.repairIngredient = 'kubejs:invertnite';
        tier.toughness = 3.0;
        tier.knockbackResistance = 1.0;
      });
    });
    

  ItemEvents.armorTierRegistry((event) => { 
    event.add("realinite", tier => {
        tier.durabilityMultiplier = 600;
        tier.slotProtections = [15, 25, 30, 15]; 
        tier.enchantmentValue = 22;
        tier.equipSound = 'minecraft:item.armor.equip_netherite';
        tier.repairIngredient = 'kubejs:realinite';
        tier.toughness = 5.0;
        tier.knockbackResistance = 2.0;
      });
    });

 // amor
StartupEvents.registry('item', event => {
event.create('realinite_capecete', 'helmet').displayName('Realinite Helmet').rarity('epic').tier('realinite');
event.create('realinite_peitoral', 'chestplate').displayName('Realinite Chestplate').rarity('epic').tier('realinite');
event.create('realinite_leggings', 'leggings').displayName('Realinite Leggings').rarity('epic').tier('realinite');
event.create('realinite_botas', 'boots').displayName('Realinite Boots').rarity('epic').tier('realinite');


event.create("invertnite_capecete", 'helmet').displayName('Ivertnite Helmet').rarity('rare').tier('invertnite');
event.create("invertnite_peitoral", 'chestplate').displayName('Ivertnite Chestplate').rarity('rare').tier('invertnite');
event.create("invertnite_leggings", 'leggings').displayName('Ivertnite Leggings').rarity('rare').tier('invertnite');
event.create("invertnite_botas", 'boots').displayName('Ivertnite Boots').rarity('rare').tier('invertnite');


event.create("dimensionite_capecete", 'helmet').displayName('Dimensionite Helmet').rarity('epic').tier('dimensionite');
event.create("dimensionite_peitoral", 'chestplate').displayName('Dimensionite Chestplate').rarity('epic').tier('dimensionite');
event.create("dimensionite_leggings", 'leggings').displayName('Dimensionite Leggings').rarity('epic').tier('dimensionite');
event.create("dimensionite_botas", 'boots').displayName('Dimensionite Boots').rarity('epic').tier('dimensionite');
});

// items
StartupEvents.registry('item', event => {

 // realinite sitens
 event.create('realinite_sword', 'sword').tier('realinite').attackDamageBaseline(14);

 //  invertnite itens
 event.create("invertnite_sword" , 'sword').tier('invertnite').attackDamageBaseline(10)

 // dimensionite itens
 event.create("dimensionite_sword" , 'sword').tier('dimensionite').attackDamageBaseline(43)

});