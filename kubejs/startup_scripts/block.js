StartupEvents.registry('block', event => {
  event.create('invertnite_block') 
    .displayName('invertnite block') 
    .soundType('basalt') 
    .hardness(5.0) 
    .resistance(5.0) 
    .requiresTool(true) 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_diamond_tool'); 

    event.create('realinite_block') 
    .displayName('realinite block')
    .soundType('gilded_blackstone') 
    .hardness(8.0)
    .resistance(8.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool');

    event.create('dimensionite_block')
    .displayName('dimensionite block')
    .soundType('basalt')
    .hardness(10.0)
    .resistance(10.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool');
});

StartupEvents.registry('block', event => [
event.create('machine_block').soundType('netherite_block').blockEntity (entityInfo => { 
entityInfo.inventory (9, 6) 
entityInfo.rightClickOpensInventory() 
entityInfo.clientTick(20, 0, entity => { 
entity.level.addParticle('minecraft:campfire_cosy_smoke', true, entity.x + 0.5, entity.y + 1.05, entity.z + 0.5, 0, 0.3, 0) 
})
entityInfo.serverTick (20, 0, entity => {
entity.inventory.insertItem('minecraft:apple', false)  
  })
  })
]); 

StartupEvents.registry('block', event => {
  event.create('test').blockEntity (entityInfo => {
    entityInfo.inventory (9, 6)
    entityInfo.rightClickOpensInventory()
  })
});

StartupEvents.registry('block', event => {
  event.create('tt').blockEntity (entityInfo => {
    entityInfo.inventory (9, 6)
    entityInfo.rightClickOpensInventory()
  })
});

StartupEvents.registry('block', event => {
  event.create('ttt').blockEntity (entityInfo => {
    entityInfo.inventory (9, 6)
    entityInfo.rightClickOpensInventory()
    entityInfo.clientTick(20, 0, entity => {
      entity.level.addParticle('minecraft:campfire_cosy_smoke', true, entity.x + 0.5, entity.y + 1.05, entity.z + 0.5, 0, 0.3, 0)
    })
    entityInfo.serverTick (20, 0, entity => {
      entity.inventory.insertItem('minecraft:apple', false)
    })
    entityInfo.blockEntityType('minecraft:chest')
  })
});

