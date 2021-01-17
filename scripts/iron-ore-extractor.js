const ioe = extendContent(GenericCrafter, "iron-ore-extractor", {
  load(){
    this.region = Core.atlas.find(this.name);
    this.rotateRegion = Core.atlas.find(this.name + "-rotator");
    this.topRegion = Core.atlas.find(this.name + "-top");
  },
  
  icons(){
    return [
      this.region,
      this.rotateRegion,
      this.topRegion
    ];
  }
});
vanadium.buildType = () => extend(GenericCrafter.GenericCrafterBuild, ioe, {
  draw(){
    Draw.rect(vanadium.region, this.x, this.y);
    Draw.rect(vanadium.rotateRegion, this.x, this.y, this.totalProgress * 3.91);
    Draw.rect(vanadium.topRegion, this.x, this.y);
  }
});
