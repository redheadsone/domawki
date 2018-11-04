function getImage(path) {
  let imgElement = document.createElement("img");
  imgElement.src = "images/" + path;
  return imgElement;
}

const IMAGES = {
  DEBUG: getImage("debug.png"),
  //env
  OAK: getImage("environment/deciduous-tree_1f333.png"),
  PINE: getImage("environment/evergreen-tree_1f332.png"),
  MUSHROOM: getImage("environment/mushroom_1f344.png"),
  FLOWER: getImage("environment/sunflower_1f33b.png"),
  //monsters
  FAIRY: getImage("monsters/fairy_1f9da.png"),
  DRAGON: getImage("monsters/dragon_1f409.png"),
  GHOST: getImage("monsters/ghost_1f47b.png"),
  IMP: getImage("monsters/imp_1f47f.png"),
  SNAIL: getImage("monsters/snail_1f40c.png"),
  SPIDER: getImage("monsters/spider_1f577.png"),
  SNAKE: getImage("monsters/snake_1f40d.png"),
  ELF: getImage(
    "monsters/elf_emoji-modifier-fitzpatrick-type-4_1f9dd-1f3fd_1f3fd.png"
  ),
  VAMPIRE: getImage("monsters/vampire_1f9db.png"),
  JINNY: getImage("monsters/woman-genie_1f9de-200d-2640-fe0f.png"),
  SKIN: getImage("environment/emoji-modifier-fitzpatrick-type-3_1f3fc.png")
};

export default IMAGES;
