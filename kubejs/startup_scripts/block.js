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

StartupEvents.registry('block', event => [
event.create('machine_block').soundType('netherite_block').blockEntity (entityInfo => { // entityInfo é o objeto que representa a entidade do bloco, permitindo definir seu comportamento e características.
entityInfo.inventory (9, 6) // Define um inventário com 9 slots e 4 linhas para a entidade do bloco, permitindo armazenar itens dentro do bloco.
entityInfo.rightClickOpensInventory() // Permite que os jogadores abram o inventário do bloco ao clicar com o botão direito do mouse, facilitando a interação com o bloco.
entityInfo.clientTick(20, 0, entity => { // Define um comportamento que ocorre a cada 20 ticks (1 segundo) no lado do cliente, permitindo criar efeitos visuais ou interações específicas.
entity.level.addParticle('minecraft:campfire_cosy_smoke', true, entity.x + 0.5, entity.y + 1.05, entity.z + 0.5, 0, 0.3, 0) // Adiciona partículas de fumaça aconchegante de fogueira ao redor do bloco, criando um efeito visual interessante.
})
entityInfo.serverTick (20, 0, entity => { // Define um comportamento que ocorre a cada 20 ticks (1 segundo) no lado do servidor, permitindo criar lógicas de jogo ou interações específicas.
entity.inventory.insertItem('minecraft:apple', false)  // Insere uma maçã no inventário do bloco, permitindo que o bloco armazene itens e interaja com eles de maneira dinâmica.
})
  })
]); 

StartupEvents.registry('block', event => {
  event.create('teste').blockEntity (entityInfo => {
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