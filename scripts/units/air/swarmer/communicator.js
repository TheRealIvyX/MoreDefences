const SwarmerT5 = extendContent(UnitType, "communicator-ship", {});
SwarmerT5.constructor = () => extend(UnitEntity, {});

var upgrade = new Seq([Vars.content.getByName(ContentType.unit, "more-defences-ivyx-messenger-ship"), Vars.content.getByName(ContentType.unit, "more-defences-ivyx-communicator-ship")]);
Blocks.tetrativeReconstructor.upgrades.add(upgrade.toArray(UnitType));
SwarmerT5.abilities.add(new UnitSpawnAbility(Vars.content.getByName(ContentType.unit, "more-defences-ivyx-hornet-ship"), 60 * 100, 0, 13));
SwarmerT5.abilities.add(new UnitSpawnAbility(Vars.content.getByName(ContentType.unit, "more-defences-ivyx-bee-ship"), 60 * 100, 11, -12));
SwarmerT5.abilities.add(new UnitSpawnAbility(Vars.content.getByName(ContentType.unit, "more-defences-ivyx-bee-ship"), 60 * 100, -11, -12));
