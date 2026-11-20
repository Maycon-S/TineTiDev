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