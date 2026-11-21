package com.tinetidev.starfallarmor.client.renderer;

import com.tinetidev.starfallarmor.client.model.StarfallArmorModel;
import com.tinetidev.starfallarmor.item.StarfallArmorItem;
import software.bernie.geckolib.renderer.GeoArmorRenderer;

public final class StarfallArmorRenderer extends GeoArmorRenderer<StarfallArmorItem> {
    public StarfallArmorRenderer() {
        super(new StarfallArmorModel());
    }
}
