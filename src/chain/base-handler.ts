import { Handler } from "./handler";

export abstract class BaseHandler<Request, Result> implements Handler<Request, Result> {
    protected next: BaseHandler<Request, Result> | undefined = undefined;

    public setNext(handler: BaseHandler<Request, Result>): BaseHandler<Request, Result> {
        this.next = handler;

        return handler;
    }

    public handle(request: Request): Result | undefined {
        if (this.next) {
            return this.next.handle(request);
        }

        return;
    }
}