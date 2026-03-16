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
event.create('invertinete_nugget')
event.create('realinite')
event.create('roxortnite')
event.create('roxortnite_nugget')
event.create('realinite_nugget')
event.create('ingot_pulsante').displayName('Ingot pulsante');
event.create('olho_de_deus')
});


ItemEvents.toolTierRegistry((event) => {
  event.add("realinite", tier => {
    tier.uses = 8000;
    tier.speed = 11;
    tier.attackDamageBonus = 10;
    tier.level = 4;
    tier.enchantmentValue = 18;
    }); 
  }); 

  ItemEvents.armorTierRegistry((event) => { 
    event.add("realinite", tier => {
        tier.durabilityMultiplier = 400;
        tier.slotProtections = [15, 25, 30, 15]; 
        tier.enchantmentValue = 22;
        tier.equipSound = 'minecraft:item.armor.equip_netherite';
        tier.repairIngredient = 'kubejs:realinite';
        tier.toughness = 5.0;
        tier.knockbackResistance = 2.0;
        
      });
    });

ItemEvents.modification(event => { 
event.modify('custom_sword', item => {
  item.enchantmentValue = 30
})
})

 StartupEvents.registry('item', event => {
event.create('realinite_capecete', 'helmet').displayName('Realinite Helmet').rarity('epic').tier('realinite');
event.create('realinite_peitoral', 'chestplate').displayName('Realinite Chestplate').rarity('epic').tier('realinite');
event.create('realinite_leggings', 'leggings').displayName('Realinite Leggings').rarity('epic').tier('realinite');
event.create('realinite_botas', 'boots').displayName('Realinite Boots').rarity('epic').tier('realinite');
event.create('terra')
event.create('custom_sword', 'sword').tier('realinite').attackDamageBaseline(14)
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
event.create('advanced_bin')
event.create('wrought_axe_in_hand') // teste 3d
});

Platform.mods.kubejs.name = 'tineti'
 // ivertnite => realinite => roxortnite
 