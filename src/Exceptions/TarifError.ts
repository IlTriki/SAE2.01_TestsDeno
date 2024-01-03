export class TarifError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TarifError";
  }
}
