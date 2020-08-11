const aerialdrill = extendContent(Drill, "aerial-drill", {
  load(){
    this.super$load();
    this.region = Core.atlas.find(this.name);
    this.rimRegion = Core.atlas.find(this.name + '-rim');
    this.propellorRegion = Core.atlas.find(this.name + "-propellor");
    this.rotateRegion = Core.atlas.find(this.name + "-rotator");
    this.topRegion = Core.atlas.find(this.name + "-top");
  },
  
  generateIcons(){
  return [
    Core.atlas.find(this.name),
    Core.atlas.find(this.name + "-propellor"),
    Core.atlas.find(this.name + "-rotator"),
    Core.atlas.find(this.name + "-top")
  ];},
   
  draw(tile){
    entity = tile.ent();
    
    Draw.rect(this.region, tile.drawx(), tile.drawy());
    Draw.rect(this.rimRegion, tile.drawx(), tile.drawy());
    Draw.blend();
    Draw.color();
    if (entity.power.status > 0.01 && entity.liquids.total() > 0.01) {
    Draw.rect(this.propellorRegion, tile.drawx(), tile.drawy(), Time.time() * 8 * entity.efficiency());    
    Draw.rect(this.rotateRegion, tile.drawx(), tile.drawy(), Time.time() * -6 * entity.efficiency());
    Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
    }
  }
});
