<template>
  <div class="product-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details__image">
          <img
            class="img-responsive" :src="product.image" alt="">
        </div>
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info">
          <div class="product-details__description">
            <small>{{product.manufacturer && product.manufacturer.name}}</small>
            <h3>{{product.name}}</h3>
            <p>
              {{product.description}}
            </p>
          </div>
          <div class="product-details__price-cart">
            <p>${{product.price}}</p>
            <product-button :product="product" ></product-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import ProductButton from 'components/products/ProductButton.vue';
import { Vue, Component, Prop } from 'vue-property-decorator';
// import ProductDetails from 'components/products/ProductDetailsComponent';

@Component
export default class productDetails extends Vue {
  @Prop() product: object;

  get components(): object {
    return {
      'product-button': ProductButton,
    };
  }
}

</script>
