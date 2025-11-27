// Aplicar tipos que restringen los posibles valores:

type orderStatus = "pending" | "shipped" | "delivered";

let orderStatus: orderStatus = "delivered";
console.log(`Estado en: ${orderStatus}`);

orderStatus = "pending";
console.log(`Estado ahora en: ${orderStatus}`);

enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
  console.log(`[${level}]: ${message}`);
}

logMessage(LogLevel.Info, "Todo correcto");
logMessage(LogLevel.Error, "Algo esta fallando");
