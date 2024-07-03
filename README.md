# rn-assignment6-11116940

# Open Fashion App

This React Native app showcases a fashion store with functionality to browse products, add items to the cart, and view/remove items from the cart. The app is designed to be visually appealing and easy to use.

## Design Choices

1. **Typography and Styling:**
   - **Font:** The `TenorSans` font is used throughout the app for a clean and modern look.
   - **Color Scheme:** A minimalistic color palette with a primary accent color (`#ed7014`) is used to highlight important information like prices.
   - **Layout:** Flexbox is used to ensure responsive layouts, and spacing/margins are adjusted for a neat presentation.

2. **UI Components:**
   - **Header:** Includes the logo, menu, search, and cart icons for easy navigation.
   - **Product List:** Displays products in a grid layout on the HomeScreen with an image, name, description, and price. Products can be added to the cart with a button overlay on the product image.
   - **Cart Screen:** Lists items added to the cart with options to remove them. Displays the total price and includes a checkout button for proceeding with the purchase.

3. **Data Storage:**
   - **AsyncStorage:** Used for persisting cart data. When items are added or removed from the cart, the state is updated and saved to AsyncStorage. On app load, the stored cart data is retrieved and loaded into the state.

## Implementation Details

### HomeScreen

The HomeScreen displays a list of products that users can add to their cart. The `addToCart` function updates the state and saves the cart data to AsyncStorage.

```javascript
const addToCart = async (product) => {
  const newCart = [...cart, product];
  setCart(newCart);
  await AsyncStorage.setItem('cart', JSON.stringify(newCart));
};

useEffect(() => {
  const loadCart = async () => {
    const storedCart = await AsyncStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  };
  loadCart();
}, []);
```

### CartScreen

The CartScreen displays items added to the cart. Users can remove items, and the cart total is dynamically updated. The `removeFromCart` function updates the state and AsyncStorage.

```javascript
const removeFromCart = async (product) => {
  const newCart = cart.filter((item) => item.id !== product.id);
  setCart(newCart);
  await AsyncStorage.setItem('cart', JSON.stringify(newCart));
};

useEffect(() => {
  const loadCart = async () => {
    const storedCart = await AsyncStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  };
  loadCart();
}, []);
```

## Screenshots

### Home Screen
![IMG_7514](https://github.com/kwesiahenkorahg/rn-assignment6-11116940/assets/170183906/4d7340ee-159f-4f69-b4b7-7cbf7e612f5a)
![IMG_7513](https://github.com/kwesiahenkorahg/rn-assignment6-11116940/assets/170183906/2fa43dc1-d636-4a8d-b13d-de726edfd4c2)


### Cart Screen or Checkout Page
![IMG_5617](https://github.com/kwesiahenkorahg/rn-assignment6-11116940/assets/170183906/151b7559-f950-487a-86e3-cefc2fa481aa)


## Conclusion

This app provides a simple and clean interface for browsing and managing a shopping cart. It leverages React Native components and AsyncStorage for state management and data persistence, ensuring a smooth user experience.
