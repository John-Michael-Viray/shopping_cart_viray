<template>
  <div class="cart-container">
    <h2 class="cart-heading">Shopping Cart</h2>
    <ul class="cart-items">
      <li v-for="item in cart" :key="item.id" class="cart-item">
        <div class="item-details">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-price">₱{{ item.price }}</span>
          <div class="quantity-control">
            <button @click="decrementQuantity(item)" class="quantity-button">-</button>
            <span class="item-quantity">{{ item.quantity }}</span>
            <button @click="incrementQuantity(item)" class="quantity-button">+</button>
          </div>
          <button @click="removeFromCart(item.id)" class="remove-button">Remove</button>
        </div>
      </li>
    </ul>
    <h3 class="total-price">Total: ₱{{ totalPrice.toFixed(2) }}</h3>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    removeFromCart(productId) {
      this.$emit('remove-from-cart', productId);
    },
    updateQuantity(productId, quantity) {
      // Prevent negative quantity
      quantity = Math.max(0, quantity);
      this.$emit('update-quantity', { productId, quantity });
    },
    incrementQuantity(item) {
      item.quantity++;
      this.updateQuantity(item.id, item.quantity);
    },
    decrementQuantity(item) {
      if (item.quantity > 0) {
        item.quantity--;
        this.updateQuantity(item.id, item.quantity);
      }
    }
  }
};
</script>

<style scoped>
.cart-container {
  background: #f8f9fa;
  padding: 20px;
  color: #212529;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cart-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

.cart-items {
  list-style: none;
  padding: 0;
}

.cart-item {
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item-details {
  display: flex;
  align-items: center;
}

.item-name {
  flex-grow: 1;
  font-weight: bold;
}

.item-price {
  margin-right: 10px;
  color: #007bff;
}

.quantity-control {
  display: flex;
  align-items: center;
}

.quantity-button {
  padding: 5px 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-right: 5px;
}

.quantity-button:hover {
  background-color: #218838;
}

.item-quantity {
  margin: 0 5px;
  font-weight: bold;
}

.remove-button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.remove-button:hover {
  background-color: #c82333;
}

.total-price {
  font-weight: bold;
  margin-top: 20px;
  color: #212529;
  text-align: right;
}
</style>