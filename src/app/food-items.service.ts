import { Injectable } from '@angular/core';
import { FoodItem } from './interfaces/food-item';

@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {

  buyNowItem: any = {};
  cartNumber: number = 0;
  
  foodItems:FoodItem[] = [
    {
        name: 'Classic BBQ Steak with Fries',
        description: `Using the finest beef, girlled and seasoned  to perfection, Steak can’t get any better. With fries by the side, it’s the perfect dish to have after a long day.
        Available for Eat-in and Delivery`,
        url:'../../../../assets/images/steak-fries.jpg',
        addedToCart: false,
        quantity: 1,
        price: 5500,
        calories: 1.527,
        category: 'lunch',
    },
    {
      name: 'Full Burger with quarter ounce fries',
      description:`Some see it as just beef with bread, but we see it as a means of communicating love
      to your taste buds, because they deserve it.`,
      url:'../assets/images/burger.jpg',
      price: 3000,
      calories: 954,
      category: 'lunch',
      addedToCart: false,
      clicked: false,
    },
    { 
      name: 'Chicken and Chips',
      description:`Chicken and Chips is a classic dish that is a perfect way to refuel you for the day.
      It's tasty and very satisfying.`,
      url:'../../assets/images/chicken-chips.jpg',
      price: 2700,
      calories: 730,
      category: 'lunch',
      addedToCart: false,
      clicked: false,
    },
    { 
      name: "'The English Breakfast'",
      description:`The English Breakfast is a traditional breakfast dish from the United Kingdom. It is made of eggs, bacon, and toast. 
      It is often served with a drink of tea or coffee.`,
      url:'../../assets/images/english.jpg',
      price: 6000,
      calories: 0.830,
      addedToCart: false,
      category: 'breakfast',
    }, 
    {
      name: 'Pancakes with Maple Syrup',
      description:`Don't you just love pancakes? We do too.
      They're the best breakfast food in the world. That's why we're making them specially for you ( with love :))`,
      url:'../../assets/images/pancakes.jpg',
      price: 4500,
      calories: 1.890,
      addedToCart: false,
      category: 'breakfast',
    },
    {
      name: 'Glazed Waffles with Fruit toppings',
      description:`The waffles are made with a thick batter, which is then topped with a layer of glazed fruit,
      and just like our pancakes, they're made specially for you. Why not try it today?`,
      url:'../../assets/images/waffles.jpg',
      price: 4500,
      calories: 1.529,
      addedToCart: false,
      category: 'breakfast',
    },
    {
      name: 'Pepperoni Pizza',
      description:`Made with pepperoni, mozzarella cheese, and tomato sauce.
      It's the perfect pizza for a party or a date, or maybe you just want to have a pizza for yourself :)`,
      url:'../../assets/images/pizza.jpg',
      price: 5000,
      calories: 0.625,
      addedToCart: false,
      category: 'lunch',
    },
    {
      name: 'Cupcakes!',
      description:`Oh my lovely cupcakes! So tender, so moist and extremely tasty.
      You can't go wrong with these cupcakes. It's also perfect for that special someone too.
      Just don't forget to add some sprinkles!`,
      url:'../../assets/images/cupcake.jpg',
      price: 500,
      calories: 0.360,
      addedToCart: false,
      category: 'breakfast',
    }
];


  constructor() { }
}
