import { InjectionToken, Provider } from '@angular/core';
import { NgIconFeatures } from './features/features';
export interface NgIconConfig {
    /** Define the default size of icons */
    size: string;
    /** Define the default color of icons */
    color?: string;
}
export declare const NgIconConfigToken: InjectionToken<NgIconConfig>;
/**
 * Provide the configuration for the icons
 * @param config The configuration to use
 */
export declare function provideNgIconsConfig(config: Partial<NgIconConfig>, ...features: NgIconFeatures[]): Provider[];
/**
 * Inject the configuration for the icons
 * @returns The configuration to use
 * @internal
 */
export declare function injectNgIconConfig(): NgIconConfig;
