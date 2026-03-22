// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('block', event => {
  event.create('invertnite_block') // Criação do bloco
    .displayName('invertnite block') // Nome do bloco
    .soundType('basalt') // Tipo de som
    .hardness(5.0) // Dureza do bloco
    .resistance(5.0) // Resistência do bloco
    .requiresTool(true) // Necessário ferramenta
    .tagBlock('minecraft:mineable/pickaxe') // Pode ser minerado com picareta
    .tagBlock('minecraft:needs_diamond_tool'); // Necessário ferramenta de ferro

    event.create('realinite_block') 
    .displayName('realinite block')
    .soundType('gilded_blackstone') 
    .hardness(8.0)
    .resistance(8.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool');

    event.create('roxortnite_block')
    .displayName('roxortnite block')
    .soundType('basalt')
    .hardness(10.0)
    .resistance(10.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool');
});

StartupEvents.registry('item', event => {
event.create('invertnite')
event.create('realinite')
event.create('roxortnite')
event.create('realinite_nugget')
event.create('invertinete_nugget')
event.create('roxortnite_nugget')
});


 ItemEvents.toolTierRegistry((event) => {
   event.add("realinite", tier => {
    tier.uses = 12000;
    tier.speed = 14;
    tier.attackDamageBonus = 15;
    tier.level = 4;
    tier.enchantmentValue = 18;
    }); 
  }); 

   ItemEvents.toolTierRegistry((event) => {
     event.add("invertnite", tier => {
      tier.uses = 6000;
      tier.speed = 11;
      tier.attackDamageBonus = 12;
      tier.level = 3;
      tier.enchantmentValue = 16;
      }); 
    });

    ItemEvents.toolTierRegistry((event) => {
      event.add("roxortnite", tier => {
        tier.uses = 25000;
        tier.speed = 27;
        tier.attackDamageBonus = 43;
        tier.level = 6;
        tier.enchantmentValue = 35;
        }); 
      });

      ItemEvents.armorTierRegistry((event) => {
        event.add("roxortnite", tier => {  
          tier.durabilityMultiplier = 5000;
          tier.slotProtections = [50, 60, 75, 40]; 
          tier.enchantmentValue = 40;
          tier.equipSound = 'minecraft:item.armor.equip_netherite';
          tier.repairIngredient = 'kubejs:roxortnite';
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


StartupEvents.registry('item', event => {
event.create('realinite_capecete', 'helmet').displayName('Realinite Helmet').rarity('epic').tier('realinite');
event.create('realinite_peitoral', 'chestplate').displayName('Realinite Chestplate').rarity('epic').tier('realinite');
event.create('realinite_leggings', 'leggings').displayName('Realinite Leggings').rarity('epic').tier('realinite');
event.create('realinite_botas', 'boots').displayName('Realinite Boots').rarity('epic').tier('realinite');
event.create('realinite_sword', 'sword').tier('realinite').attackDamageBaseline(14);

event.create("invertnite_capecete", 'helmet').displayName('Ivertnite Helmet').rarity('rare').tier('invertnite');
event.create("invertnite_peitoral", 'chestplate').displayName('Ivertnite Chestplate').rarity('rare').tier('invertnite');
event.create("invertnite_leggings", 'leggings').displayName('Ivertnite Leggings').rarity('rare').tier('invertnite');
event.create("invertnite_botas", 'boots').displayName('Ivertnite Boots').rarity('rare').tier('invertnite');
event.create("invertnite_sword" , 'sword').tier('invertnite').attackDamageBaseline(10)

event.create("roxortnite_capecete", 'helmet').displayName('Roxortnite Helmet').rarity('epic').tier('roxortnite');
event.create("roxortnite_peitoral", 'chestplate').displayName('Roxortnite Chestplate').rarity('epic').tier('roxortnite');
event.create("roxortnite_leggings", 'leggings').displayName('Roxortnite Leggings').rarity('epic').tier('roxortnite');
event.create("roxortnite_botas", 'boots').displayName('Roxortnite Boots').rarity('epic').tier('roxortnite');
event.create("roxortnite_sword" , 'sword').tier('roxortnite').attackDamageBaseline(43)

event.create('pomagico')
event.create('advanced_engine')
event.create('supreme_advanced_magic')
event.create('supreme_advanced_engine')
event.create('supreme_advanced_alchemy_of_machines')
event.create('star')
event.create('singularity')
event.create('divine_currency')
event.create('test_1_gift')
event.create('iuminati_test_2')

// event.create("magic_food")
//  .food(food => {
//     food.hunger(10)
//     food.saturation(1.0)
//     food.effect("minecraft:strength", 200, 1, 1.0)
//  })

Platform.mods.kubejs.name = 'tineti'
}
 );
 // ivertnite => realinite => roxortnite
 