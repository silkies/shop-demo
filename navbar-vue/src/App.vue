<template>
  <div id="app">
    <div class="navbar">
      <div>
        <router-link to="/home" class="nav-link" active-class="active-nav-link">Home</router-link>
        <router-link to="/products" class="nav-link" active-class="active-nav-link">Products</router-link>
      </div>
      <div>
        <router-link to="/cart" class="nav-link" active-class="active-nav-link">
          <button class="btn-cart">
            <font-awesome-icon icon="shopping-cart" />
            <span class="badge">{{getQuantity}}</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      getProducts: "getProductsInCart",
      getQuantity: "getQuantityInCart"
    })
  },
  methods: {
    ...mapActions(["computeProductsInCart"]),
    updateQuantity() {
      console.log("event heard");
      this.computeProductsInCart();
    }
  },
  mounted() {
    this.computeProductsInCart();
    window.addEventListener("PRODUCT_ADDED", () => {
      this.computeProductsInCart();
    });
  }
};
</script>

<style>
body {
  margin: 0;
}
.navbar {
  color: white;
  background-color: #333;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  min-width: 20px;
  height: 20px;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.btn-cart {
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
  position: static;
  cursor: pointer;
}
.nav-link {
  padding: 1.5rem;
  color: inherit;
  text-decoration: inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
