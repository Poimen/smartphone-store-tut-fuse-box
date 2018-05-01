<template>
  <div>
    <div class="title">
      <h1><i class="fa fa-braille"></i> In Stock</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ProductList from 'components/products/ProductList.vue'

@Component({
  components: {
    'product-list': ProductList
  }
})
export default class Home extends Vue {
  get name(): string {
    return 'home';
  }
}
</script>

