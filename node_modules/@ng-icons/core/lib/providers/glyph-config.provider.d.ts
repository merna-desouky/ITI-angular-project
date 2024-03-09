import { InjectionToken, Provider } from '@angular/core';
export interface NgGlyphConfig {
    /** Define the default size of glyph */
    size: string | number;
    /** Define the optical size of the glyph */
    opticalSize?: number;
    /** Define the default color of glyph */
    color?: string;
    /** Define the default weight of glyph */
    weight?: number;
    /** Define the default grade of glyph */
    grade?: number;
    /** Define the default fill of glyph */
    fill?: boolean;
}
export declare const NgGlyphConfigToken: InjectionToken<Required<NgGlyphConfig>>;
/**
 * Provide the configuration for the glyph
 * @param config The configuration to use
 */
export declare function provideNgGlyphsConfig(config: Partial<NgGlyphConfig>): Provider;
/**
 * Inject the configuration for the glyphs
 * @returns The configuration to use
 * @internal
 */
export declare function injectNgGlyphsConfig(): Required<NgGlyphConfig>;
