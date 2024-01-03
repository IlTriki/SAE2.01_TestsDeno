export class NomPrenomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NomPrenomError";
  }
}
