/**
 * @pattern Chain of Responsibility
 * @description Handler interface defining the contract for handling requests and setting the next handler in the chain.
 * @example
 * ```typescript
 * import { Handler } from "./handler";
 * 
 * class ConcreteHandlerA implements Handler<string, string> {
 *     private next: Handler<string, string> | null = null;
 * 
 *     public setNext(handler: Handler<string, string>): Handler<string, string> {
 *         this.next = handler;
 *         return handler;
 *     }
 * 
 *     public handle(request: string): string | null {
 *         if (request === 'A') {
 *             return `ConcreteHandlerA handled request: ${request}`;
 *         } else if (this.next) {
 *             return this.next.handle(request);
 *         }
 *         return null;
 *     }
 * }
 * ```
 */
export interface Handler<Request, Result> {
    setNext(handler: Handler<Request, Result>): Handler<Request, Result>;
    handle(request: Request): Result | null;
}