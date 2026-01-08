import { Strategy } from "./strategy";

export class Context<Request, Result> {
    private strategy!: Strategy<Request, Result>;

    public setStrategy(strategy: Strategy<Request, Result>): void {
        this.strategy = strategy;
    }

    public execute(request: Request): Result {
        return this.strategy.execute(request);
    }
}