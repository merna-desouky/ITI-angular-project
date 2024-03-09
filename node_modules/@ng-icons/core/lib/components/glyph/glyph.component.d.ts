import * as i0 from "@angular/core";
export declare class NgGlyph {
    /**
     * Access the available glyphsets
     */
    private readonly glyphsets;
    /**
     * Access the default configuration
     */
    private readonly config;
    /**
     * Define the name of the glyph to display
     */
    name: string;
    /**
     * Define the glyphset to use
     */
    glyphset: string;
    /**
     * Define the optical size of the glyph
     */
    opticalSize: number;
    /**
     * Define the weight of the glyph
     */
    weight: number;
    /**
     * Define the grade of the glyph
     */
    grade: number;
    /**
     * Define the fill of the glyph
     */
    fill: boolean;
    /**
     * Define the size of the glyph
     */
    size?: string | number;
    /**
     * Define the color of the glyph
     */
    color?: string;
    /**
     * Derive the glyphset class from the glyphset name
     */
    get glyphsetClass(): string;
    /**
     * Define the font variation settings of the glyph
     */
    get fontVariationSettings(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgGlyph, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgGlyph, "ng-glyph", never, { "name": { "alias": "name"; "required": true; }; "glyphset": { "alias": "glyphset"; "required": false; }; "opticalSize": { "alias": "opticalSize"; "required": false; }; "weight": { "alias": "weight"; "required": false; }; "grade": { "alias": "grade"; "required": false; }; "fill": { "alias": "fill"; "required": false; }; "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_opticalSize: unknown;
    static ngAcceptInputType_weight: unknown;
    static ngAcceptInputType_grade: unknown;
    static ngAcceptInputType_fill: unknown;
    static ngAcceptInputType_size: string;
}
