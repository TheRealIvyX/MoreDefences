const CannonT1 = extendContent(UnitType, "cannoneer-mech", {});

CannonT1.constructor = () => extend(UnitEntity, {});

Blocks.groundFactory.plans.add(new UnitFactory.UnitPlan(CannonT1, 60 * 25, ItemStack.with(Items.silicon, 30, Items.graphite, 15)));