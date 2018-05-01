export interface IProduct {
  id: number;
  name: string;
  price: string;
  manufacturer: string;
  imageUrl: string;

  setImageUrl(url: string): void;
};

class Product implements IProduct {
  id: number;
  name: string;
  price: string;
  manufacturer: string;
  imageUrl: string;

  constructor(id: number, name: string, price: string, manufacturer: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.manufacturer = manufacturer;
    this.imageUrl = '';
  }

  setImageUrl(url: string) {
    this.imageUrl = url;
  }
};

export class ProductsDataProvider {
  products: IProduct[];
  lastId: number;

  constructor() {
    this.products = [
      new Product(0, 'Dummy Data #0', '300', 'NASA'),
      new Product(1, 'Dummy Data #1', '500', 'NASA'),
      new Product(2, 'Dummy Data #2', '800', 'NASA'),
      new Product(3, 'Dummy Data #3', '500', 'NASA'),
    ];
    this.lastId = 3;
  }

  addProducts(product: IProduct) {
    product.id = ++this.lastId;
    this.products.push(product)
  }
};

const products = new ProductsDataProvider();

export default products;
