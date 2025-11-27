//Crear una función que gestione el inventario:
function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

//prueba para verificar funcion
const firstStock = 10;
const newStock = updateStock(firstStock, 23);
const buyStock = updateStock(newStock, -3);

console.log(`Primer Stock: ${firstStock}`);
console.log(`Nuevo Stock: ${newStock}`);
console.log(`Stock luego de vender: ${buyStock}`);
