export class CreateNewSubscriberError extends Error {
  constructor(message: string, stack?: string) {
    super(message);
    this.name = "CreateNewSubscriberError";
    this.stack = stack;
  }
}
