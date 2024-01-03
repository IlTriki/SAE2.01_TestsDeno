export class ImmatError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ImmatError";
  }
}
