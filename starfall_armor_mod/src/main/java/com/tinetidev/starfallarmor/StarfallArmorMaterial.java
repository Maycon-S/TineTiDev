package com.tinetidev.starfallarmor;

import net.minecraft.sounds.SoundEvent;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.world.item.ArmorItem;
import net.minecraft.world.item.ArmorMaterial;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.crafting.Ingredient;

public final class StarfallArmorMaterial implements ArmorMaterial {
    public static final StarfallArmorMaterial INSTANCE = new StarfallArmorMaterial();

    private StarfallArmorMaterial() {
    }

    @Override
    public int getDurabilityForType(ArmorItem.Type type) {
        return switch (type) {
            case HELMET -> 11 * 50;
            case CHESTPLATE -> 16 * 50;
            case LEGGINGS -> 15 * 50;
            case BOOTS -> 13 * 50;
        };
    }

    @Override
    public int getDefenseForType(ArmorItem.Type type) {
        return switch (type) {
            case HELMET, BOOTS, LEGGINGS -> 9;
            case CHESTPLATE -> 99;
        };
    }

    @Override
    public int getEnchantmentValue() {
        return 40;
    }

    @Override
    public SoundEvent getEquipSound() {
        return SoundEvents.ARMOR_EQUIP_NETHERITE;
    }

    @Override
    public Ingredient getRepairIngredient() {
        return Ingredient.of(Items.NETHERITE_INGOT);
    }

    @Override
    public String getName() {
        return "kubejs:starfall_vanguard";
    }

    @Override
    public float getToughness() {
        return 9.0F;
    }

    @Override
    public float getKnockbackResistance() {
        return 9.0F;
    }
}
