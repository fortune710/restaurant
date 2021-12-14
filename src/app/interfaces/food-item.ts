export interface FoodItem {
    name: string;
    description?: string;
    url?: string;
    price: number;
    calories?: number;
    category: string;
    addedToCart: boolean;
    clicked?: boolean;
    quantity?:number;
}
