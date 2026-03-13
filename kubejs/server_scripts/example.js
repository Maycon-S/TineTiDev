// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

// priority: 0

//console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {/**onEvent: Conecta eventos a elementos, permitindo respostas automáticas a interações do usuário */
    event.shaped('1x minecraft:crying_obsidian', [ /*shaped Cria receitas de crafting em mods de Minecraft. event: Interações no navegador ou script.* */
      'BCB',
      'ABA', /** uma sequência dada para crafting table */
      'BCB'
    ], {
      A: 'minecraft:obsidian',
      B: 'minecraft:bedrock', /** ordens do item com relação a craft Table  */
      C: 'minecraft:warped_hyphae'
    }); /** um jeito de abrir e fechar uma ação */

    event.shaped('1x minecraft:bedrock', [
      'AAA',
      'BBB',
      'CAC'
    ], {
      A: 'extendedcrafting:crystaltine_block',
      B: 'extendedcrafting:the_ultimate_block',
      C: 'extendedcrafting:nether_star_block'
    });
  
    event.shapeless(
      Item.of('minecraft:dandelion', 3),
      [
        'minecraft:bone_meal',
        'minecraft:yellow_dye',
        '3x minecraft:ender_pearl'
  ]
)

      event.smoking('64x minecraft:diorite', 'minecraft:stripped_jungle_log').xp(0.35)
      event.blasting('64x minecraft:diorite', 'minecraft:stripped_jungle_log')
      event.campfireCooking('64x minecraft:diorite', 'minecraft:stripped_jungle_log', 0.35, 600)
      event.remove({ id: 'minecraft:oak_planks' })

      event.custom( /**"custom" geralmente se refere a eventos personalizados.significa que você pode criar e manipular seus próprios eventos além dos eventos padrão */
      {
      "type": "extendedcrafting:shaped_table",/** o type refere-se ao tipo de evento que está sendo manipulado. */
        "pattern": [ /** pattern é geralmente utilizado em expressões regulares (regex) ou em validação de dados para descrever um formato específico que uma string deve seguir. */
          'AAABAAA',
          'AAACAAA',
          'AAA AAA',
          'AA   AA' ,
          'A     A'
        ],
          "key": { /** key é usado em diferentes contextos, mas geralmente refere-se à identificação de algo único dentro de um objeto ou array, especialmente em coleções. */
               "A": {
              "item": "minecraft:phantom_membrane"
            },
              "B": {
                "item": "minecraft:end_crystal"
              },
              "C": {
                "item": "minecraft:dragon_head"
              }
            },
            "result": {
              "item": "minecraft:elytra",
              "count": 64
            }
      })
          /** : (dois pontos): Usado para definir pares chave-valor em objetos. Exemplo: {name: 'João'}.
          ; (ponto e vírgula): Usado para terminar declarações de código. Exemplo: let x = 5;.  
          () Funções: Usados para chamar funções e passar argumentos.

          function sayHello(name) {
         console.log("Hello, " + name);
           }
           sayHello("Alice");

          
          {} Objetos: Usados para definir objetos.

           let pessoa = {
           name: "Alice",
           age: 25
            };


          
          [] Arrays: Usados para definir arrays. 

          let fruits = ["Apple", "Banana", "Cherry"];
          
          
          Ponto .: Usado para acessar propriedades e métodos de objetos.

          Vírgula ,: Usada para separar elementos em arrays, argumentos de funções e declarações múltiplas. */



          event.custom(
          {
            "type": "botania:mana_infusion",
            "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
            },

            "group": "botania:shrub_cycle",
            "input": {
               "item": "minecraft:reinforced_deepslate"

            }, "mana": 99999,
            "output": {
            "item": "extendedcrafting:the_ultimate_nugget"
            }
          })

          event.custom(
            {
            "type": "create:mechanical_crafting",
            "acceptMirrored": false, /** acceptMirrored: Permite que receitas de crafting aceitem ingredientes em posições espelhadas horizontalmente */
            "pattern": [
              " A ",
              " A ",
              "BBB",
              "ABA"
            ],

            "key": {
              "A": {
                "item": "minecraft:oak_planks"
              },
              "B": {
              "item": "minecraft:command_block"
              }
            },
            "result": {
              "item": "minecraft:end_portal_frame"
            }
          }
        )




        
        event.custom(
        {
          "type": "botania:terra_plate",
          "ingredients": [ /** ingredients geralmente se refere aos itens necessários para completar uma receita de crafting. */
            {
              "item": "minecraft:white_bed"
            },
            {
              "item": "minecraft:yellow_carpet"
            },
            {
              "item": "extendedcrafting:ultimate_singularity"
            }
          ],

          "mana": 7000,
          "result": {
            "item": "minecraft:command_block"
          }
        }


      )
        event.custom(
         {
          "type": "botania:petal_apothecary",
          "ingredients": [
         {
           "item": "minecraft:gold_ingot"
         },
         {
           "item": "minecraft:iron_ingot"
         },
         {
          "item": "minecraft:copper_ingot"
         },
        {
          "item": "minecraft:netherite_ingot"
        }
          ],
         "output": {
          "item": "minecraft:string"
         },
         "reagent": {
          "tag": "minecraft:ancient_debris"
        }
         }
        )
 
      event.custom(

        {
        "type": "create:milling",
        "ingredients": [
        {
        "item": "minecraft:spawner"
        }
      ],
      "processingTime": 50,
      "results": [
        {
          "count": 2,
          "item": "cyclic:altar_destruction"
          },
        {
          "chance": 0.5,
          "item": "cyclic:spikes_fire"
        }
      ]
    }
  )

  event.custom(
    {
    "type": "create:deploying",
    "ingredients": [
      {
        "item": "minecraft:crying_obsidian"
      },
      {
        "item": "minecraft:crying_obsidian"
      }
    ],
    "keepHeldItem": true,
    "results": [
    {
      "item": "minecraft:crying_obsidian"
    }
  ]
    }
  )

event.custom(
  {
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "cyclic:spikes_fire"
      },
      {
        "item": "minecraft:obsidian"
      },
      {
        "item": "cyclic:spikes_fire"
      },
      {
        "item": "minecraft:obsidian"
      }
    ],
    "mana": 12000,
    "output": {
      "item": "minecraft:crying_obsidian"
    }
  }    
    )

    event.custom(
    {
      "type": "create:mechanical_crafting",
      "accetMirrored": false,
      "pattern": [
        "AAAAAAAAA",
        "ABACADAEA",
        "AFAFAFAFA",
        "AAAAAAAAA",
        "AGAGAGAGA",
        "AAAAAAAAA",
        "AHAIAJAKA",
        "AFAFAFAFA",
        "AAAAAAAAA"
      ],
      "key": {
        "A": {
          "item": "minecraft:netherite_block"
        },
        "B": {
          "item": "minecraft:rabbit_spawn_egg"
        },
        "C": {
          "item": "minecraft:pig_spawn_egg"
        },
        "D": {
          "item": "minecraft:pillager_spawn_egg"
        },
        "E": {
          "item": "minecraft:pufferfish_spawn_egg"
        },
        "F": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "G": {
          "item": "extendedcrafting:the_ultimate_block"
        },
        "H": {
          "item": "minecraft:polar_bear_spawn_egg"
        },
        "I": {
          "item": "minecraft:piglin_spawn_egg"
        },
        "J": {
          "item": "minecraft:bee_spawn_egg"
        },
        "K": {
          "item": "minecraft:cave_spider_spawn_egg"
        }
      },
      "result": {
        "item": "minecraft:spawner",
        "cout": 1
      }
    }
  )

  event.remove({ output: 'avaritialiteextended:infinity_mace' })

  event.custom(
    {
        "type": "extendedcrafting:shaped_table",
        "accetMirrored": false,
         "pattern": [
            "   AAAAAB",
            " C AAAAAA",
            "   AAAAAA",
            "    AAAAA",
            "    DAAAA",
            "   D  AAA",
            "EED      ",
            "EAE    F ",
            "AEE      "
          ],
          "key": {
            "A": {
              "item": "minecraft:nether_star"
            },
            "B": {
              "item": "minecraft:soul_lantern"
            },
            "C": {
              "item": "minecraft:ender_eye"
            },
            "D": {
              "item": "minecraft:coal_block"
            },
            "E": {
              "item": "minecraft:diamond_block"
            },
            "F": {
              "item": "minecraft:ender_pearl"
            }
          },
          "result": {
            "item": "avaritialiteextended:infinity_mace"
        }
    }
  )
    //console.log('Hello! The recipe event has fired!');
  });

  let bannedItems = [ // bannedItem; especificamente Ban itens
    'minecraft:oak_log'
  ];
  
  PlayerEvents.inventoryChanged(event => {
    let player = event.player;
    let itemId = event.item.id;
  
    bannedItems.forEach((bannedItem) => {
      if (itemId === bannedItem) {
        player.tell([
          "Item ",
          Text.yellow(itemId),
          " foi ",
          Text.red("removido"),
          ".\nMotivo: ",
          Text.red("Banido"),
        ]);
  
        player.inventory.items.forEach((item) => {
          if (item.id === itemId) {
            item.count = 0; // ou utilize player.inventory.remove(item) se disponível
          }
        });
      }
    });
  });
  

