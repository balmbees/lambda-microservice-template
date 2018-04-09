import * as Base from "../interfaces/base";

export default class HandlerWrapper {
  // tslint:disable-next-line
  static safelyWrap(handler: Function) {
    return (event: Base.Event, context: Base.Context<Base.Response>, callback: any) => {
      context.callbackWaitsForEmptyEventLoop = false;

      const result = handler(event, context);

      Promise.resolve(result)
        .then((response) => callback(null, response))
        .catch((error) => callback(error));
    };
  }
}
