import { Observable } from 'rxjs';
/**
 * A loader may return a promise, an observable or a string. This function will coerce the result into a promise.
 * @returns
 */
export declare function coerceLoaderResult(result: Promise<string> | Observable<string> | string): Promise<string>;
