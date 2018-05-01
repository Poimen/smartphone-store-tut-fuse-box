import Vue from 'vue'
import products from '../productsDataProvider';

describe('- Service - ProductsDataProvider', () => {
  it('should initialise to 4 products', () => {
    const allProducts = products.allProducts;
    expect(allProducts.length).toBe(4);
  });
});
