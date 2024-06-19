import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      quantity: 1,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images:
        "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/950/950/detailed/2449/full_body_housing_for_apple_iphone_9_white_maxbhi.com_41205.jpg?t=1700812354",
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44, //---------
      stock: 34,
      quantity: 1,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWv52o50GY65npqjqNsNeu3cbvjeoTHN6qw&s",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      quantity: 1,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images:
        "https://blogs-images.forbes.com/gordonkelly/files/2018/03/for-renders.7107-Small.jpg",
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      quantity: 1,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images:
        "https://www.oppo.com/content/dam/oppo/product-asset-library/f19/f19-overview-v1/v1/assets/chunk6-img1-1920.jpg",
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      quantity: 1,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images:
        "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/147530-phones-review-review-huawei-p30-pro-review-image1-towuafzpte.jpg",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart", //name of the slice
  initialState,
  reducers: {
    //reducer to increase the quantity of the product
    increaseQuantity: (state, action) => {
      //find the product with the help of it's id
      const product = state.products.find((p) => p.id === action.payload);
      if (product && product.quantity < product.stock) {
        product.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product && product.quantity > 0) {
        product.quantity--;
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
