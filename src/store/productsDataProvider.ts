export interface IProduct {
  setId(id: number): void;
  setImageUrl(url: string): void;
};

class Product implements IProduct {
  private id: number;
  private name: string;
  private price: string;
  private manufacturer: string;
  private imageUrl: string;

  constructor(id: number, name: string, price: string, manufacturer: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.manufacturer = manufacturer;
    this.imageUrl = '';
  }

  setId(id: number) {
    this.id = id;
  }

  setImageUrl(url: string) {
    this.imageUrl = url;
  }
};

export class ProductsDataProvider {
  private products: IProduct[];
  private lastId: number;

  constructor() {
    this.products = [
      new Product(0, 'Dummy Data #0', '300', 'NASA'),
      new Product(1, 'Dummy Data #1', '500', 'NASA'),
      new Product(2, 'Dummy Data #2', '800', 'NASA'),
      new Product(3, 'Dummy Data #3', '500', 'NASA'),
    ];
    this.lastId = 3;
  }

  addProduct(product: IProduct) {
    product.setId(++this.lastId);
    this.products.push(product)
  }

  removeProduct(id: number) {

  }

  get allProducts(): IProduct[] {
    return this.products;
  }
};

const products = new ProductsDataProvider();

export default products;
