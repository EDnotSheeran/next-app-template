export class UnauthorizedError extends Error {
  status = 401;

  constructor(public message: string = "Unauthorized") {
    super(message);
  }

  toResponse() {
    return Response.json(
      {
        status: this.status,
        message: this.message,
      },
      {
        status: this.status,
      },
    );
  }
}
