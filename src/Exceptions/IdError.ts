export class IdError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "IdError";
  }
}
