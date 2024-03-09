import { InjectionToken, Provider } from '@angular/core';
/**
 * Define the icons to use
 * @param icons The icons to provide
 */
export declare function provideIcons(icons: Record<string, string>): Provider[];
export declare const NgIconsToken: InjectionToken<Record<string, string>[]>;
/**
 * Inject the icons to use
 * @returns The icons to use
 * @internal
 */
export declare function injectNgIcons(): Record<string, string>[];
