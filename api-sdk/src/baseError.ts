class BaseError {
  constructor() {
    Error.apply(this, arguments as any);
  }
}

BaseError.prototype = new Error();

export default BaseError;
