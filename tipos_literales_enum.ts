// Aplicar tipos que restringen los posibles valores:
// ● a. Tipos Literales:
// ○ Crea una variable orderStatus que solo pueda tener uno de los siguientes
// valores exactos: "pending", "shipped", o "delivered".
// ○ Asigna uno de estos valores a "orderStatus”.
// ● b. Enum:
// ○ Declara un enum llamado LogLevel con los valores: "Info", "Warning", y
// "Error".
// ○ Crea una función llamada logMessage que tome un argumento level de tipo
// LogLevel y un argumento message de tipo string. La función debe imprimir un
// mensaje que incluya el nivel y el mensaje.

type orderStatus = "pending" | "shipped" | "delivered";

let orderStatus: orderStatus = "delivered";
console.log(`Estado en: ${orderStatus}`);

orderStatus = "pending";
console.log(`Estado ahora en: ${orderStatus}`);

enum LogLevel {
    Info = "Info",
    Warning = "Warning",
    Error = "Error"
}

function logMessage(level: LogLevel, message: string): void {
    console.log(`[${level}]: ${message}`);
}

logMessage(LogLevel.Info, "Todo correcto");
logMessage(LogLevel.Error, "Algo esta fallando");