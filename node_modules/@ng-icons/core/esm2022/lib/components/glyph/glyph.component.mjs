import { ChangeDetectionStrategy, Component, HostBinding, Input, booleanAttribute, numberAttribute, } from '@angular/core';
import { injectNgGlyphsConfig } from '../../providers/glyph-config.provider';
import { injectNgGlyphs } from '../../providers/glyph.provider';
import { coerceCssPixelValue } from '../../utils/coercion';
import * as i0 from "@angular/core";
export class NgGlyph {
    constructor() {
        /**
         * Access the available glyphsets
         */
        this.glyphsets = injectNgGlyphs();
        /**
         * Access the default configuration
         */
        this.config = injectNgGlyphsConfig();
        /**
         * Define the glyphset to use
         */
        this.glyphset = this.glyphsets.defaultGlyphset;
        /**
         * Define the optical size of the glyph
         */
        this.opticalSize = this.config.opticalSize;
        /**
         * Define the weight of the glyph
         */
        this.weight = this.config.weight;
        /**
         * Define the grade of the glyph
         */
        this.grade = this.config.grade;
        /**
         * Define the fill of the glyph
         */
        this.fill = this.config.fill;
        /**
         * Define the size of the glyph
         */
        this.size = this.config.size;
        /**
         * Define the color of the glyph
         */
        this.color = this.config.color;
    }
    /**
     * Derive the glyphset class from the glyphset name
     */
    get glyphsetClass() {
        const glyphset = this.glyphsets.glyphsets.find(glyphset => glyphset.name === this.glyphset);
        if (!glyphset) {
            throw new Error(`The glyphset "${this.glyphset}" does not exist. Please provide a valid glyphset.`);
        }
        return glyphset.baseClass;
    }
    /**
     * Define the font variation settings of the glyph
     */
    get fontVariationSettings() {
        return `'FILL' ${this.fill ? 1 : 0}, 'wght' ${this.weight}, 'GRAD' ${this.grade}, 'opsz' ${this.opticalSize}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: NgGlyph, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "17.1.3", type: NgGlyph, isStandalone: true, selector: "ng-glyph", inputs: { name: "name", glyphset: "glyphset", opticalSize: ["opticalSize", "opticalSize", numberAttribute], weight: ["weight", "weight", numberAttribute], grade: ["grade", "grade", numberAttribute], fill: ["fill", "fill", booleanAttribute], size: ["size", "size", coerceCssPixelValue], color: "color" }, host: { properties: { "textContent": "this.name", "style.--ng-glyph__size": "this.size", "style.color": "this.color", "class": "this.glyphsetClass", "style.font-variation-settings": "this.fontVariationSettings" } }, ngImport: i0, template: ``, isInline: true, styles: [":host{display:inline-block;width:var(--ng-glyph__size);height:var(--ng-glyph__size);font-size:var(--ng-glyph__size);overflow:hidden}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: NgGlyph, decorators: [{
            type: Component,
            args: [{ selector: 'ng-glyph', standalone: true, template: ``, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:inline-block;width:var(--ng-glyph__size);height:var(--ng-glyph__size);font-size:var(--ng-glyph__size);overflow:hidden}\n"] }]
        }], propDecorators: { name: [{
                type: HostBinding,
                args: ['textContent']
            }, {
                type: Input,
                args: [{ required: true }]
            }], glyphset: [{
                type: Input
            }], opticalSize: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], weight: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], grade: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], fill: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], size: [{
                type: HostBinding,
                args: ['style.--ng-glyph__size']
            }, {
                type: Input,
                args: [{ transform: coerceCssPixelValue }]
            }], color: [{
                type: HostBinding,
                args: ['style.color']
            }, {
                type: Input
            }], glyphsetClass: [{
                type: HostBinding,
                args: ['class']
            }], fontVariationSettings: [{
                type: HostBinding,
                args: ['style.font-variation-settings']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x5cGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZ2x5cGgvZ2x5cGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQVMzRCxNQUFNLE9BQU8sT0FBTztJQVBwQjtRQVFFOztXQUVHO1FBQ2MsY0FBUyxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBRTlDOztXQUVHO1FBQ2MsV0FBTSxHQUFHLG9CQUFvQixFQUFFLENBQUM7UUFTakQ7O1dBRUc7UUFFSCxhQUFRLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7UUFFbEQ7O1dBRUc7UUFDb0MsZ0JBQVcsR0FDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFMUI7O1dBRUc7UUFDb0MsV0FBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTNFOztXQUVHO1FBQ29DLFVBQUssR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUV6RTs7V0FFRztRQUNxQyxTQUFJLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFekU7O1dBRUc7UUFHSCxTQUFJLEdBQXFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBRTFDOztXQUVHO1FBR0gsVUFBSyxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBNkJwQztJQTNCQzs7T0FFRztJQUNILElBQ0ksYUFBYTtRQUNmLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDNUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQzVDLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDZCxNQUFNLElBQUksS0FBSyxDQUNiLGlCQUFpQixJQUFJLENBQUMsUUFBUSxvREFBb0QsQ0FDbkYsQ0FBQztRQUNKLENBQUM7UUFFRCxPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFDSSxxQkFBcUI7UUFDdkIsT0FBTyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxNQUFNLFlBQ3ZELElBQUksQ0FBQyxLQUNQLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7OEdBckZVLE9BQU87a0dBQVAsT0FBTyxzSUEyQkUsZUFBZSxnQ0FNZixlQUFlLDZCQUtmLGVBQWUsMEJBS2YsZ0JBQWdCLDBCQU1oQixtQkFBbUIscVFBckQ3QixFQUFFOzsyRkFJRCxPQUFPO2tCQVBuQixTQUFTOytCQUNFLFVBQVUsY0FDUixJQUFJLFlBQ04sRUFBRSxtQkFFSyx1QkFBdUIsQ0FBQyxNQUFNOzhCQWtCL0MsSUFBSTtzQkFGSCxXQUFXO3VCQUFDLGFBQWE7O3NCQUN6QixLQUFLO3VCQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFPekIsUUFBUTtzQkFEUCxLQUFLO2dCQU1pQyxXQUFXO3NCQUFqRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFNRSxNQUFNO3NCQUE1QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFLRSxLQUFLO3NCQUEzQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFLRyxJQUFJO3NCQUEzQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQU90QyxJQUFJO3NCQUZILFdBQVc7dUJBQUMsd0JBQXdCOztzQkFDcEMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRTtnQkFRekMsS0FBSztzQkFGSixXQUFXO3VCQUFDLGFBQWE7O3NCQUN6QixLQUFLO2dCQU9GLGFBQWE7c0JBRGhCLFdBQVc7dUJBQUMsT0FBTztnQkFtQmhCLHFCQUFxQjtzQkFEeEIsV0FBVzt1QkFBQywrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIG51bWJlckF0dHJpYnV0ZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpbmplY3ROZ0dseXBoc0NvbmZpZyB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9nbHlwaC1jb25maWcucHJvdmlkZXInO1xuaW1wb3J0IHsgaW5qZWN0TmdHbHlwaHMgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvZ2x5cGgucHJvdmlkZXInO1xuaW1wb3J0IHsgY29lcmNlQ3NzUGl4ZWxWYWx1ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvZXJjaW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZ2x5cGgnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0eWxlVXJsOiAnLi9nbHlwaC5jb21wb25lbnQuc2NzcycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ0dseXBoIHtcbiAgLyoqXG4gICAqIEFjY2VzcyB0aGUgYXZhaWxhYmxlIGdseXBoc2V0c1xuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBnbHlwaHNldHMgPSBpbmplY3ROZ0dseXBocygpO1xuXG4gIC8qKlxuICAgKiBBY2Nlc3MgdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBjb25maWcgPSBpbmplY3ROZ0dseXBoc0NvbmZpZygpO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGdseXBoIHRvIGRpc3BsYXlcbiAgICovXG4gIEBIb3N0QmluZGluZygndGV4dENvbnRlbnQnKVxuICBASW5wdXQoeyByZXF1aXJlZDogdHJ1ZSB9KVxuICBuYW1lITogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGdseXBoc2V0IHRvIHVzZVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2x5cGhzZXQ6IHN0cmluZyA9IHRoaXMuZ2x5cGhzZXRzLmRlZmF1bHRHbHlwaHNldDtcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBvcHRpY2FsIHNpemUgb2YgdGhlIGdseXBoXG4gICAqL1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBvcHRpY2FsU2l6ZTogbnVtYmVyID1cbiAgICB0aGlzLmNvbmZpZy5vcHRpY2FsU2l6ZTtcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSB3ZWlnaHQgb2YgdGhlIGdseXBoXG4gICAqL1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSB3ZWlnaHQ6IG51bWJlciA9IHRoaXMuY29uZmlnLndlaWdodDtcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBncmFkZSBvZiB0aGUgZ2x5cGhcbiAgICovXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIGdyYWRlOiBudW1iZXIgPSB0aGlzLmNvbmZpZy5ncmFkZTtcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBmaWxsIG9mIHRoZSBnbHlwaFxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGZpbGw6IGJvb2xlYW4gPSB0aGlzLmNvbmZpZy5maWxsO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIHNpemUgb2YgdGhlIGdseXBoXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi0tbmctZ2x5cGhfX3NpemUnKVxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGNvZXJjZUNzc1BpeGVsVmFsdWUgfSlcbiAgc2l6ZT86IHN0cmluZyB8IG51bWJlciA9IHRoaXMuY29uZmlnLnNpemU7XG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgY29sb3Igb2YgdGhlIGdseXBoXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmNvbG9yJylcbiAgQElucHV0KClcbiAgY29sb3I/OiBzdHJpbmcgPSB0aGlzLmNvbmZpZy5jb2xvcjtcblxuICAvKipcbiAgICogRGVyaXZlIHRoZSBnbHlwaHNldCBjbGFzcyBmcm9tIHRoZSBnbHlwaHNldCBuYW1lXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGdseXBoc2V0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICBjb25zdCBnbHlwaHNldCA9IHRoaXMuZ2x5cGhzZXRzLmdseXBoc2V0cy5maW5kKFxuICAgICAgZ2x5cGhzZXQgPT4gZ2x5cGhzZXQubmFtZSA9PT0gdGhpcy5nbHlwaHNldCxcbiAgICApO1xuXG4gICAgaWYgKCFnbHlwaHNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlIGdseXBoc2V0IFwiJHt0aGlzLmdseXBoc2V0fVwiIGRvZXMgbm90IGV4aXN0LiBQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGdseXBoc2V0LmAsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBnbHlwaHNldC5iYXNlQ2xhc3M7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBmb250IHZhcmlhdGlvbiBzZXR0aW5ncyBvZiB0aGUgZ2x5cGhcbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZm9udC12YXJpYXRpb24tc2V0dGluZ3MnKVxuICBnZXQgZm9udFZhcmlhdGlvblNldHRpbmdzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAnRklMTCcgJHt0aGlzLmZpbGwgPyAxIDogMH0sICd3Z2h0JyAke3RoaXMud2VpZ2h0fSwgJ0dSQUQnICR7XG4gICAgICB0aGlzLmdyYWRlXG4gICAgfSwgJ29wc3onICR7dGhpcy5vcHRpY2FsU2l6ZX1gO1xuICB9XG59XG4iXX0=