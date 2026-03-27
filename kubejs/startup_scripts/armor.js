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
    



  StartupEvents.registry('item' , event => {

event.create("invertnite_capecete", 'helmet').displayName('Ivertnite Helmet').rarity('rare').tier('invertnite');
event.create("invertnite_peitoral", 'chestplate').displayName('Ivertnite Chestplate').rarity('rare').tier('invertnite');
event.create("invertnite_leggings", 'leggings').displayName('Ivertnite Leggings').rarity('rare').tier('invertnite');
event.create("invertnite_botas", 'boots').displayName('Ivertnite Boots').rarity('rare').tier('invertnite');


event.create("dimensionite_capecete", 'helmet').displayName('Dimensionite Helmet').rarity('epic').tier('dimensionite');
event.create("dimensionite_peitoral", 'chestplate').displayName('Dimensionite Chestplate').rarity('epic').tier('dimensionite');
event.create("dimensionite_leggings", 'leggings').displayName('Dimensionite Leggings').rarity('epic').tier('dimensionite');
event.create("dimensionite_botas", 'boots').displayName('Dimensionite Boots').rarity('epic').tier('dimensionite');
});


StartupEvents.registry('item', event => {


 event.create('realinite_sword', 'sword').tier('realinite').attackDamageBaseline(14);
 event.create('realinite_pickaxe', 'pickaxe').tier('realinite').attackDamageBaseline(5);
 event.create('realinite_axe', 'axe').tier('realinite').attackDamageBaseline(9);
 event.create('realinite_shovel', 'shovel').tier('realinite').attackDamageBaseline(3);
 event.create('realinite_hoe', 'hoe').tier('realinite').attackDamageBaseline(1);


 event.create("invertnite_sword" , 'sword').tier('invertnite').attackDamageBaseline(10)

 
 event.create("dimensionite_sword" , 'sword').tier('dimensionite').attackDamageBaseline(43)

});