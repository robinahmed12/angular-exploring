import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss'],
})
export class AllRecipeComponent implements OnInit {
  recipes = [
    {
      id: 1,
      recipeName: 'Polaw',
      description:
        'A fragrant rice dish cooked with ghee, aromatic spices, and garnished with fried onions — a classic South Asian favorite.',
      price: 250,
      ingredients: ['Basmati rice', 'ghee', 'onion', 'garam masala', 'salt'],
      recipeImg: 'https://www.themealdb.com/images/media/meals/1529444113.jpg',
    },
    {
      id: 2,
      recipeName: 'Teheri',
      description:
        'A spiced yellow rice dish popular in Bangladesh, made with potatoes, turmeric, and flavorful whole spices.',
      price: 180,
      ingredients: ['Rice', 'potato', 'onion', 'turmeric', 'cardamom', 'salt'],
      recipeImg:
        'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
    },
    {
      id: 3,
      recipeName: 'Baji',
      description:
        'Crispy deep-fried fritters made from gram flour, onion, and chili — the perfect snack for tea time.',
      price: 120,
      ingredients: ['Gram flour', 'onion', 'chili', 'salt', 'oil'],
      recipeImg:
        'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
    },
    {
      id: 4,
      recipeName: 'Kacchi Biryani',
      description:
        'A rich Bangladeshi biryani made with marinated mutton and basmati rice, layered and cooked to perfection.',
      price: 350,
      ingredients: [
        'Mutton',
        'rice',
        'yogurt',
        'onion',
        'garam masala',
        'ghee',
      ],
      recipeImg:
        'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
    },
    {
      id: 5,
      recipeName: 'Beef Curry',
      description:
        'Tender beef cooked in a thick, spicy gravy with onions, garlic, and ginger — hearty and flavorful.',
      price: 300,
      ingredients: [
        'Beef',
        'onion',
        'garlic',
        'ginger',
        'curry powder',
        'salt',
      ],
      recipeImg:
        'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
    },
    {
      id: 6,
      recipeName: 'Fish Fry',
      description:
        'Crispy fried fish seasoned with chili and turmeric, a simple yet delicious seafood favorite.',
      price: 200,
      ingredients: ['Fish', 'chili powder', 'turmeric', 'salt', 'oil'],
      recipeImg:
        'https://www.themealdb.com/images/media/meals/uttuxy1511382180.jpg',
    },
  ];

  filteredRecipes = this.recipes;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const maxPrice = +params['maxPrice'];

      if (!isNaN(maxPrice) && maxPrice > 0) {
        this.filteredRecipes = this.recipes.filter((r) => r.price <= maxPrice);
      } else {
        this.filteredRecipes = this.recipes;
      }
    });
  }

  onViewDetails(id: number, name: string) {
    this.router.navigate(['/recipe-details', id, name]);
  }
}
