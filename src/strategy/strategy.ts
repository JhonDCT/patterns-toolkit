export interface Strategy<Request, Result> {
    execute(data: Request): Result;
}