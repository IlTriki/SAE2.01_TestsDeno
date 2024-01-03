export class NumPermisError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NumPermisError";
  }
}
