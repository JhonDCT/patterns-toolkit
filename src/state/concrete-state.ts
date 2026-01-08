import { Context } from "./context";
import { State } from "./state";

export abstract class ConcreteState<T> implements State<T> {
    protected context!: Context<T>;

    public setContext(context: Context<T>): void {
        this.context = context;
    }

    abstract handle(): void;
}