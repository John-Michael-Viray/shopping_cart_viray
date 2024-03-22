<template>
  <div class="product-list-container">
    <h2 class="product-list-title">Products</h2>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <div class="product-details">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">₱{{ product.price }}</p>
          <button @click="addToCart(product)" class="add-to-cart-button">Add to Cart</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  }
};
</script>

<style scoped>
.product-list-container {
  background: #f8f9fa;
  padding: 20px;
}

.product-list-title {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.product-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-item {
  width: 300px;
  margin: 0 10px 20px 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  background-color: #fff;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-item:hover {
  transform: translateY(-5px);
}

.product-details {
  padding: 20px;
  text-align: center;
}

.product-name {
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
}

.product-price {
  margin: 10px 0;
  font-size: 1.3em;
  font-weight: bold;
  color: #333;
}

.add-to-cart-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.add-to-cart-button:hover {
  background-color: #0056b3;
}
</style>