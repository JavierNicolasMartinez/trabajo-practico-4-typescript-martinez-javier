//Primer punto
//Los tipos fundamentales
let productName: string = "Perfume de Messi";
let productPrice: number = 103010;

console.log(`Producto: ${productName}, Precio: ${productPrice}`);

// Tipo Union
let productId: string | number;

productId = "El mejor del mundo - 10";
console.log(`ID (string): ${productId}`);

productId = 10;
console.log(`ID (number): ${productId}`);

interface Product {
  name: string;
  price: number;
}

const myProduct: Product = {
  name: "Perfume de El Dibu",
  price: 23,
};

console.log("Objeto myProduct:", myProduct);
