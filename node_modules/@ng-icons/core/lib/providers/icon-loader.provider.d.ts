import { InjectionToken, Provider } from '@angular/core';
import type { Observable } from 'rxjs';
export type NgIconLoader = (name: string) => Promise<string> | Observable<string> | string;
export declare const NgIconLoaderToken: InjectionToken<NgIconLoader>;
/**
 * The list of features as an enum to uniquely type each feature.
 */
declare const enum NgIconLoaderFeatureKind {
    CachingFeature = 0
}
interface NgIconLoaderFeature<FeatureKind extends NgIconLoaderFeatureKind> {
    kind: FeatureKind;
    providers: Provider[];
}
type CachingFeature = NgIconLoaderFeature<NgIconLoaderFeatureKind.CachingFeature>;
type NgIconLoaderFeatures = CachingFeature;
export type NgIconLoaderCache = Map<string, string | Promise<string>>;
export declare const NgIconCacheToken: InjectionToken<NgIconLoaderCache>;
/**
 * Add caching to the loader. This will prevent the loader from being called multiple times for the same icon name.
 */
export declare function withCaching(): CachingFeature;
/**
 * Provide a function that will return the SVG content for a given icon name.
 * @param loader The function that will return the SVG content for a given icon name.
 * @param features The list of features to apply to the loader.
 * @returns The SVG content for a given icon name.
 */
export declare function provideNgIconLoader(loader: NgIconLoader, ...features: NgIconLoaderFeatures[]): (Provider[][] | {
    provide: InjectionToken<NgIconLoader>;
    useValue: NgIconLoader;
})[];
/**
 * Inject the function that will return the SVG content for a given icon name.
 */
export declare function injectNgIconLoader(): NgIconLoader | null;
/**
 * Inject the cache that will store the SVG content for a given icon name.
 */
export declare function injectNgIconLoaderCache(): NgIconLoaderCache | null;
export {};
