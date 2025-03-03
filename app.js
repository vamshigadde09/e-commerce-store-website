// app.js
var app = angular.module("ecommerceApp", []);

app.controller("StoreController", function ($scope) {
  $scope.products = [
    {
      name: "bucket and mug",
      price: 150,
      image:
        "https://5.imimg.com/data5/JK/II/GK/SELLER-26724215/plain-bucket-mug-set.jpg",
    },
    {
      name: "dustbin",
      price: 100,
      image:
        "https://market99store.in/storage/2022/12/40180012_6-princeware-plastic-dustbin-garbage-bin-without-lid-blue-colour.jpg.webp",
    },
    {
      name: "Single Cotton Bed Mattress",
      price: 3000,
      image:
        "https://5.imimg.com/data5/SZ/BF/RH/SELLER-61580150/single-cotton-fold-bed-mattress.jpg",
    },
    {
      name: "spinewell Comfort Bed Foam Mattress",
      price: 4500,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/2/OF/HF/XY/7895635/foam-single-mattress.jpg",
    },
    {
      name: "Foam Bed Mattress",
      price: 7500,
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2022/12/QC/UL/FC/110891503/product-jpeg.jpg",
    },
    {
      name: "Soft Cotton Bed Mattress",
      price: 3500,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kws5hu80/bed-mattress/r/p/s/normal-top-single-4-30-72-super-comfy-d-red-single-size-mattress-original-imag9dxug8uygfvr.jpeg?q=20&crop=false",
    },
    {
      name: "classmate books",
      price: 250,
      image:
        "https://images.meesho.com/images/products/240840958/6da2q_512.webp",
    },
    {
      name: "Perpetual Laundry Basket",
      price: 150,
      image:
        "https://m.media-amazon.com/images/I/717uiyV1EoL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "clouth lanundary bag",
      price: 350,
      image:
        "https://www.jiomart.com/images/product/original/rvcvaozwja/ganpati-bags-hand-stiched-crafted-laundry-bag-for-dirty-clothes-foldable-laundry-bags-with-handles-waterproff-and-dustproof-product-images-orvcvaozwja-p599851647-0-202303260614.jpg?im=Resize=(1000,1000)",
    },
  ];

  $scope.cart = [];

  // Add product to the cart, increment quantity if already in cart
  $scope.addToCart = function (product) {
    let found = false;
    $scope.cart.forEach(function (item) {
      if (item.product.name === product.name) {
        item.quantity++;
        found = true;
      }
    });
    if (!found) {
      $scope.cart.push({ product: product, quantity: 1 });
    }
  };

  // Remove one instance of the product from the cart or remove it completely
  $scope.removeFromCart = function (item) {
    const index = $scope.cart.indexOf(item);
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      $scope.cart.splice(index, 1);
    }
  };

  // Calculate total price
  $scope.getTotalPrice = function () {
    let total = 0;
    $scope.cart.forEach(function (item) {
      total += item.product.price * item.quantity;
    });
    return total;
  };

  // Clear the entire cart
  $scope.clearCart = function () {
    $scope.cart = [];
  };
});
