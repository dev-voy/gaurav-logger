export class Log {
  static info(message: string): void {
    console.log(`\x1b[34mINFO: ${message}\x1b[0m`); // Blue text
  }

  static warn(message: string): void {
    console.log(`\x1b[33mWARN: ${message}\x1b[0m`); // Yellow text
  }

  static error(message: string): void {
    console.error(`\x1b[31mERROR: ${message}\x1b[0m`); // Red text
  }

  static success(message: string): void {
    console.log(`\x1b[32mSUCCESS: ${message}\x1b[0m`); // Green text
  }
}
