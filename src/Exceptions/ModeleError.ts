export class ModeleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ModeleError";
  }
}
