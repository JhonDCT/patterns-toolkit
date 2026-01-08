import { State } from "./state";

export abstract class Context<T> {
    private state: State<T>;
    public data!: T;

    constructor(initialState: State<T>) {
        this.state = initialState;
        this.state.setContext(this);
    }

    public changeState(state: State<T>): void {
        this.state = state;
        this.state.setContext(this);
    }

    public handle(): void {
        this.state.handle();
    }
}