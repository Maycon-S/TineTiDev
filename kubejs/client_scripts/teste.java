package com.seu_mod;

import net.minecraft.item.ItemStack;
import net.minecraft.item.Items;
import net.minecraft.item.crafting.Ingredient;
import net.minecraft.item.crafting.ShapedRecipe;
import net.minecraft.util.ResourceLocation;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.event.RegistryEvent;
import net.minecraftforge.fml.common.Mod;

@Mod.EventBusSubscriber(bus = Mod.EventBusSubscriber.Bus.MOD)
public class ModRecipes {

    @SubscribeEvent
    public static void registerRecipes(RegistryEvent.Register<net.minecraft.item.crafting.IRecipeSerializer<?>> event) {
        // Exemplo de receita customizada (um diamante feito de pedra e graveto)
        ShapedRecipe recipe = new ShapedRecipe(
                new ResourceLocation("seu_mod", "diamond_from_stone"),
                "",
                3, 3,
                net.minecraft.util.NonNullList.from(
                        Ingredient.EMPTY,
                        Ingredient.of(Items.STONE), Ingredient.of(Items.STONE), Ingredient.of(Items.STONE),
                        Ingredient.of(Items.STONE), Ingredient.of(Items.STICK), Ingredient.of(Items.STONE),
                        Ingredient.of(Items.STONE), Ingredient.of(Items.STONE), Ingredient.of(Items.STONE)
                ),
                new ItemStack(Items.DIAMOND)
        );

        // Aqui você registra a receita no sistema
        event.getRegistry().register(recipe.getSerializer().setRegistryName("seu_mod", "diamond_from_stone"));
    }
}
