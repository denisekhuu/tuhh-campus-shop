export class Product{
    product_id: number;
    product_name: string;
    product_stock: number;
    product_description: string;
    picture_path: string;
    product_price: number;
    product_reviews: number[];

    constructor(product_id: number, product_name: string, product_stock: number, product_description: string, picture_path: string, product_price: number, product_reviews: number[]){
      this.product_id = product_id;
      this.product_name = product_name;
      this.product_stock = product_stock;
      this.product_description = product_description;
      this.picture_path = picture_path;
      this.product_price = product_price;
      this.product_reviews = product_reviews;
    }
}
