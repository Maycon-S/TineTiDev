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


package com.seu_mod;

import net.minecraft.world.item.Items;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Ingredient;
import net.minecraft.world.item.crafting.ShapedRecipe;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.event.RegistryEvent;
import net.minecraftforge.fml.common.Mod;

@Mod.EventBusSubscriber(bus = Mod.EventBusSubscriber.Bus.MOD)
public class ModRecipeEvents {

    @SubscribeEvent
    public static void onRegisterRecipes(RegistryEvent.Register<net.minecraft.world.item.crafting.RecipeSerializer<?>> event) {
        // Receita: transformar gravetos em carvão
        ShapedRecipe recipe = new ShapedRecipe(
                new ResourceLocation("seu_mod", "charcoal_from_sticks"),
                "",
                2, 2,
                net.minecraft.core.NonNullList.of(
                        Ingredient.EMPTY,
                        Ingredient.of(Items.STICK), Ingredient.of(Items.STICK),
                        Ingredient.of(Items.STICK), Ingredient.of(Items.STICK)
                ),
                new ItemStack(Items.CHARCOAL)
        );

        event.getRegistry().register(recipe.getSerializer().setRegistryName("seu_mod", "charcoal_from_sticks"));
    }
}

package com.seu_mod;

import net.minecraft.world.item.Items;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Ingredient;
import net.minecraft.world.item.crafting.ShapelessRecipe;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.event.RegistryEvent;
import net.minecraftforge.fml.common.Mod;

@Mod.EventBusSubscriber(bus = Mod.EventBusSubscriber.Bus.MOD)
public class ModShapelessRecipe {

    @SubscribeEvent
    public static void onRegisterRecipes(RegistryEvent.Register<net.minecraft.world.item.crafting.RecipeSerializer<?>> event) {
        // Receita shapeless: 1 graveto + 1 carvão = 4 tochas
        ShapelessRecipe recipe = new ShapelessRecipe(
                new ResourceLocation("seu_mod", "torch_from_stick_charcoal"),
                "",
                new ItemStack(Items.TORCH, 4),
                net.minecraft.core.NonNullList.of(
                        Ingredient.EMPTY,
                        Ingredient.of(Items.STICK),
                        Ingredient.of(Items.CHARCOAL)
                )
        );

        event.getRegistry().register(recipe.getSerializer().setRegistryName("seu_mod", "torch_from_stick_char