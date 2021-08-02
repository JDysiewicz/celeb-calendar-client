export class ApiError {
  constructor(
    private code: number,
    private message: string,
    private rawError: any
  ) {}

  get getCode() {
    return this.code;
  }

  get getMessage() {
    return this.message;
  }

  processError() {
    switch (this.code) {
      case 400:
        return console.log(
          `Bad Request Error: ${JSON.stringify(this.rawError, null, 2)}`
        );
      case 401:
        return console.log(
          `Forbidden Error: ${JSON.stringify(this.rawError, null, 2)}`
        );
      case 403:
        return alert(this.message);
      case 500:
        return console.log(
          `Internal Server Error: ${JSON.stringify(this.rawError, null, 2)}`
        );
      default:
        return console.log(
          `Unknown error: ${JSON.stringify(this.rawError, null, 2)}`
        );
    }
  }
}
