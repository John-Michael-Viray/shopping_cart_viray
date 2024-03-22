<template>
  <div id="app">
    <template v-if="authenticated">
      <h1 class="shopping-cart-title">Shopping Cart</h1>
      <ProductList @add-to-cart="addToCart" :products="products" />
      <CartList @remove-from-cart="removeFromCart" @update-quantity="updateQuantity" :cart="cart" />
    </template>
    <template v-else>
      <LoginPage @authenticated="authenticate" />
    </template>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import CartList from './components/CartList.vue';
import LoginPage from './components/LoginPage.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    CartList,
    LoginPage
  },
  data() {
  return {
    products: [
      { id: 1, name: 'CPU (Central Processing Unit)', price: 200 },
      { id: 2, name: 'GPU (Graphics Processing Unit)', price: 300 },
      { id: 3, name: 'RAM (Random Access Memory)', price: 100 },
      { id: 4, name: 'SSD (Solid State Drive)', price: 150 },
      { id: 5, name: 'HDD (Hard Disk Drive)', price: 80 }, 
      { id: 6, name: 'Motherboard', price: 150 },
      { id: 7, name: 'Power Supply Unit', price: 100 },
      { id: 8, name: 'Case (Computer Case)', price: 80 },
      { id: 9, name: 'Cooling System (CPU Cooler/Fans)', price: 50 }
    ],
    cart: [],
    authenticated: false
  };
},
  computed: {
    total() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  },
  methods: {
    addToCart(product) {
      const existingItemIndex = this.cart.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        this.cart[existingItemIndex].quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },
    updateQuantity(payload) {
      const { productId, quantity } = payload;
      const itemToUpdate = this.cart.find(item => item.id === productId);
      if (itemToUpdate) {
        itemToUpdate.quantity = Math.max(0, quantity);
      }
    },
    authenticate() {
      this.authenticated = true;
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

.shopping-cart-title {
  background: linear-gradient(to right, #020202, #535353, #ffffff);
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 24px;
}
</style>
