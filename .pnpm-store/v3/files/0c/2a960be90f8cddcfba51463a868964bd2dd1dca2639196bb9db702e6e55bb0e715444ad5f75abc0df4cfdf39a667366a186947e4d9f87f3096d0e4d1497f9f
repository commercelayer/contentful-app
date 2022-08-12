export interface Deferred<T> {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    isFulfilled: boolean;
}
export declare function createDeferred<T = unknown>(): Deferred<T>;
