package com.tinetidev.starfallarmor;

import com.tinetidev.starfallarmor.item.StarfallArmorItem;
import net.minecraft.world.item.ArmorItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.Rarity;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

@Mod(StarfallArmorMod.MOD_ID)
public final class StarfallArmorMod {
    public static final String MOD_ID = "starfallarmor";
    public static final String KUBEJS_NAMESPACE = "kubejs";

    private static final DeferredRegister<Item> ITEMS =
            DeferredRegister.create(ForgeRegistries.ITEMS, KUBEJS_NAMESPACE);

    public static final RegistryObject<StarfallArmorItem> HELMET = registerArmor(
            "starfall_vanguard_capecete", ArmorItem.Type.HELMET);
    public static final RegistryObject<StarfallArmorItem> CHESTPLATE = registerArmor(
            "starfall_vanguard_peitoral", ArmorItem.Type.CHESTPLATE);
    public static final RegistryObject<StarfallArmorItem> LEGGINGS = registerArmor(
            "starfall_vanguard_leggings", ArmorItem.Type.LEGGINGS);
    public static final RegistryObject<StarfallArmorItem> BOOTS = registerArmor(
            "starfall_vanguard_botas", ArmorItem.Type.BOOTS);

    public StarfallArmorMod() {
        IEventBus modEventBus = FMLJavaModLoadingContext.get().getModEventBus();
        ITEMS.register(modEventBus);
    }

    private static RegistryObject<StarfallArmorItem> registerArmor(String id, ArmorItem.Type type) {
        return ITEMS.register(id, () -> new StarfallArmorItem(
                StarfallArmorMaterial.INSTANCE,
                type,
                new Item.Properties().rarity(Rarity.EPIC)
        ));
    }
}
