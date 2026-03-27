// Tier de ferramentas
ItemEvents.toolTierRegistry(event => {
  event.add("realinite", tier => {
    tier.uses = 12000; 
    tier.speed = 15; 
    tier.attackDamageBonus = 20; 
    tier.level = 4; 
    tier.enchantmentValue = 30; 
  });
});

// Tier de armaduras
ItemEvents.armorTierRegistry(event => { 
  event.add("realinite", tier => {
    tier.durabilityMultiplier = 999; 
    tier.slotProtections = [5, 12, 9, 5]; 
    tier.enchantmentValue = 50;
    tier.equipSound = 'minecraft:item.armor.equip_netherite';
    tier.repairIngredient = 'kubejs:realinite';
    tier.toughness = 20.0; 
    tier.knockbackResistance = 1.0;
  });
});

// Registro dos itens
StartupEvents.registry('item', event => {
  event.create('realinite_capecete', 'helmet')
    .displayName('Realinite Helmet')
    .rarity('epic')
    .tier('realinite');

  event.create('realinite_peitoral', 'chestplate')
    .displayName('Realinite Chestplate')
    .rarity('epic')
    .tier('realinite');

  event.create('realinite_leggings', 'leggings')
    .displayName('Realinite Leggings')
    .rarity('epic')
    .tier('realinite');

  event.create('realinite_botas', 'boots')
    .displayName('Realinite Boots')
    .rarity('epic')
    .tier('realinite');
});