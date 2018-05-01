<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in allProducts">
          <product-item :product="product" ></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ProductItem from 'components/products/ProductItem.vue'

@Component({
  components: {
    'product-item': ProductItem
  }
})
export default class ProductList extends Vue {
  products: object[];

  constructor() {
    super();

    this.products = [];
  }

  get name(): string {
    return 'product-list';
  }

  created() {
    if (this.products.length === 0) {
      console.log('Product list component created');
      this.$store.dispatch('allProducts')
    }
  }

  get allProducts(): object {
    console.log('getting all products from vue');
    return this.$store.getters.allProducts;
  }
}
</script>
