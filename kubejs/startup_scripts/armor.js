 ItemEvents.toolTierRegistry((event) => {
   event.add("realinite", tier => {
    tier.uses = 12000; // durabilidade muito alta, permitindo que as ferramentas sejam usadas por um longo período antes de se desgastarem.
    tier.speed = 15; // velocidade de mineração rápida, permitindo que os jogadores minerem blocos mais rapidamente do que com materiais comuns.
    tier.attackDamageBonus = 15; // bônus de dano de ataque significativo, tornando as ferramentas eficazes para combate além de mineração.
    tier.level = 4; // nível de mineração avançado, permitindo que as ferramentas minerem blocos que exigem níveis mais altos, como obsidiana.
    tier.enchantmentValue = 18; // valor de encantamento decente, permitindo que as ferramentas sejam encantadas com uma variedade de encantamentos úteis, mas não tão alto quanto os materiais mais poderosos, mantendo um equilíbrio.
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
          tier.durabilityMultiplier = 5000; // durabilidade extremamente alta, tornando a armadura muito resistente ao desgaste.
          tier.slotProtections = [999, 999, 999, 999]; // proteção extremamente alta para cada peça de armadura, tornando-a quase indestrutível.
          tier.enchantmentValue = 40; // valor de encantamento muito alto, permitindo encantamentos poderosos.
          tier.equipSound = 'minecraft:item.armor.equip_netherite'; //  som de equipar a armadura, usando o som do Netherite para dar uma sensação de poder.
          tier.repairIngredient = 'kubejs:dimensionite'; // item usado para reparar a armadura.
          tier.toughness = 999.0; // resistência a danos muito alta, quase imune a ataques.
          tier.knockbackResistance = 99; // resistência a knockback muito alta, quase imune a empurrões.
        });
      });

    ItemEvents.armorTierRegistry((event) => {
      event.add("invertnite", tier => {  
        tier.durabilityMultiplier = 300;
        tier.slotProtections = [10, 20, 25, 10]; 
        tier.enchantmentValue = 15;
        tier.equipSound = 'minecraft:item.armor.equip_diamond';
        tier.repairIngredient = 'kubejs:invertnite';
        tier.toughness = 20.0;
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
        tier.toughness = 10.0;
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