<template>
  <div>
    <product-form @save-product="addProduct" :model="model"></product-form>
  </div>
</template>
<script>
import ProductForm from 'components/products/productsForm.vue';

export default {
  methods: {
    addProduct(model) {
      console.log(model);
    }
  },
  data() {
    return {
      model: {},
      isEditing: false
    }
  },
  components: {
    'product-form': ProductForm
  }
}
</script>

