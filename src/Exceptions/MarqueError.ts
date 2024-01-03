export class MarqueError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MarqueError";
  }
}
