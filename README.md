# **Glosario de Conceptos TypeScript**
#### Este documento resume los conceptos clave aprendidos durante la actividad de investigación y práctica con TypeScript.

###  1. Tipos Básicos (Basic Types)
Definición explícita del tipo de dato que va a contener una variable (como texto o números) para evitar errores de asignación.

**TypeScript**
    
        Declaración explícita de tipos string y number
        let productName: string = "Perfume de Messi";
        let productPrice: number = 103010;
    
    console.log(`Producto: ${productName}, Precio: ${productPrice}`);
	
### 2. Tipos de Unión (Union Types)
Permite que una variable acepte más de un tipo de dato. Se utiliza el operador | (pipe). Es útil cuando un valor puede ser, por ejemplo, texto o número indistintamente.

**TypeScript**

    let productId: string | number;
    
    // Puede ser un string
    productId = "El mejor del mundo - 10";
    console.log(`ID (string): ${productId}`);
    
    // O puede ser un número
    productId = 10;
    console.log(`ID (number): ${productId}`);
### 3. Interfaces
Definen la "forma" o contrato que debe tener un objeto. Asegura que el objeto tenga exactamente las propiedades y tipos esperados.

**TypeScript**

    interface Product {
      name: string;
      price: number;
    }
    
    const myProduct: Product = {
      name: "Perfume de El Dibu",
      price: 23,
    };
    
    console.log("Objeto myProduct:", myProduct);
### 4. Tipos Literales y Alias (Literal Types & Type Aliases)
Se crea un tipo personalizado que restringe el valor de una variable a una lista específica de opciones exactas.

**TypeScript**

    // Definición del tipo personalizado
    type OrderStatus = "pending" | "shipped" | "delivered";
    
    let status: OrderStatus = "delivered";
    console.log(`Estado en: ${status}`);
    
    // Cambio de estado válido
    status = "pending";
    console.log(`Estado ahora en: ${status}`);
### 5. Enumeraciones (Enums)
Un conjunto de constantes con nombre. Sirven para representar una colección de casos relacionados (como niveles de log, días de la semana, etc.) de manera más legible.

**TypeScript**

    enum LogLevel {
      Info = "Info",
      Warning = "Warning",
      Error = "Error",
    }
    
    function logMessage(level: LogLevel, message: string): void {
      console.log(`[${level}]: ${message}`);
    }
    
    logMessage(LogLevel.Info, "Todo correcto");
    logMessage(LogLevel.Error, "Algo está fallando");
### 6. Funciones Tipadas (Typed Functions)
Especifican explícitamente el tipo de dato de los parámetros de entrada y el tipo de valor que la función debe retornar.

**TypeScript**

    // Función que recibe números y retorna un número
    function updateStock(currentStock: number, quantityChange: number): number {
      return currentStock + quantityChange;
    }
    
    const firstStock = 10;
    // TypeScript valida que los argumentos sean números
    const newStock = updateStock(firstStock, 23);
    const buyStock = updateStock(newStock, -3);
    
    console.log(`Primer Stock: ${firstStock}`);     // 10
    console.log(`Nuevo Stock: ${newStock}`);        // 33
    console.log(`Stock luego de vender: ${buyStock}`); // 30