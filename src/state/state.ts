import { Context } from "./context";

export interface State<T> {
    handle(): void;
    setContext(context: Context<T>): void;
}