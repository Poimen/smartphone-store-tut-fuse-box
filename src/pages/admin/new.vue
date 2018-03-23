<template>
  <div>
    <form @submit.prevent="saveProduct">
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <div class="form-group">
          <label>Name</label>
            <input type="text" placeholder="Name" v-model="model.name" v-validate="'required'" name="name" :class="{'form-control': true, 'error': errors.has('name')}" />
            <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
        </div>
        <div class="form-group new-button">
          <button class="button">
            <i class="fas fa-pencil-alt"></i>
            <span v-if="isEditing">Update Product</span>
            <span v-else>Add Product</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    saveProduct() {
      console.log(this.errors);
    }
  },
  data() {
    return {
      model: {},
      isEditing: false
    }
  }
}
</script>

