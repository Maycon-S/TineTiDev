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

    event.create('dimensionite_block')
    .displayName('dimensionite block')
    .soundType('basalt')
    .hardness(10.0)
    .resistance(10.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool');
});