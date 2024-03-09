import { EnvironmentProviders, InjectionToken } from '@angular/core';
export declare const NgGlyphsToken: InjectionToken<NgGlyphs>;
export declare function provideNgGlyphs(...glyphsets: NgGlyphset[]): EnvironmentProviders;
export declare function injectNgGlyphs(): NgGlyphs;
export interface NgGlyphset {
    name: string;
    baseClass: string;
}
export interface NgGlyphs {
    defaultGlyphset: string;
    glyphsets: NgGlyphset[];
}
