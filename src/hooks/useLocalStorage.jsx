function useLocalStorage() {
  function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart || [];
  }

  function removeFromCart(id) {
    const currentCart = getCart();
    const newCart = currentCart
      .map((c) => {
        if (c.id === id) {
          c.count = c.count - 1;
          return c;
        } else {
          return c;
        }
      })
      .filter((c) => c.count > 0);
    setLocalStorage("cart", newCart);
  }

  function addToCart(item) {
    const currentCart = getCart();
    let itemExists = false;

    const newCart = currentCart.map((c) => {
      if (c.id === item.id) {
        c.count = c.count + 1;
        itemExists = true;
        return c;
      } else {
        return c;
      }
    });

    if (!itemExists) {
      newCart.push({ ...item, count: 1 });
    }

    setLocalStorage("cart", newCart);
  }

  const calculateFoodPrice = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    let total = 0;
    cart.map((item) => {
      total += item.price * item.count;
    });
    return total;
  };

  return {
    setLocalStorage,
    getCart,
    removeFromCart,
    addToCart,
    calculateFoodPrice,
  };
}

export default useLocalStorage;
