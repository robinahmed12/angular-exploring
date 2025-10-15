export class Recipe {
  public name: string;
  public description: string;
  public recipeImg: string;

  constructor(name: string, description: string, recipeImg: string) {
    this.name = name;
    this.description = description;
    this.recipeImg = recipeImg;
  }
}
