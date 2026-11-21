package com.tinetidev.starfallarmor.client.model;

import com.tinetidev.starfallarmor.StarfallArmorMod;
import com.tinetidev.starfallarmor.item.StarfallArmorItem;
import net.minecraft.resources.ResourceLocation;
import software.bernie.geckolib.model.GeoModel;

public final class StarfallArmorModel extends GeoModel<StarfallArmorItem> {
    private static final ResourceLocation MODEL = new ResourceLocation(
            "kubejs", "geo/armor/starfall_vanguard.geo.json");
    private static final ResourceLocation TEXTURE = new ResourceLocation(
            "kubejs", "textures/models/armor/starfall_vanguard_layer_1.png");
    private static final ResourceLocation ANIMATION = new ResourceLocation(
            StarfallArmorMod.MOD_ID, "animations/starfall_vanguard.animation.json");

    @Override
    public ResourceLocation getModelResource(StarfallArmorItem item) {
        return MODEL;
    }

    @Override
    public ResourceLocation getTextureResource(StarfallArmorItem item) {
        return TEXTURE;
    }

    @Override
    public ResourceLocation getAnimationResource(StarfallArmorItem item) {
        return ANIMATION;
    }
}
