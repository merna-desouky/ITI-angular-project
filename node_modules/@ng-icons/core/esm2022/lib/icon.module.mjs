import { Inject, NgModule } from '@angular/core';
import { NgIcon } from './components/icon/icon.component';
import { NgIconsToken, provideIcons } from './providers/icon.provider';
import * as i0 from "@angular/core";
export class NgIconsModule {
    constructor(icons) {
        if (Object.keys(icons).length === 0) {
            throw new Error('No icons have been provided. Ensure to include some icons by importing them using NgIconsModule.withIcons({ ... }).');
        }
    }
    /**
     * Define the icons that will be included in the application. This allows unused icons to
     * be tree-shaken away to reduce bundle size
     * @param icons The object containing the required icons
     */
    static withIcons(icons) {
        return { ngModule: NgIconsModule, providers: provideIcons(icons) };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: NgIconsModule, deps: [{ token: NgIconsToken }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.3", ngImport: i0, type: NgIconsModule, imports: [NgIcon], exports: [NgIcon] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: NgIconsModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: NgIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NgIcon],
                    exports: [NgIcon],
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NgIconsToken]
                }] }] });
export const NG_ICON_DIRECTIVES = [NgIcon];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQU12RSxNQUFNLE9BQU8sYUFBYTtJQUN4QixZQUFrQyxLQUE2QjtRQUM3RCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQ2IscUhBQXFILENBQ3RILENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsU0FBUyxDQUNkLEtBQTZCO1FBRTdCLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUNyRSxDQUFDOzhHQWxCVSxhQUFhLGtCQUNKLFlBQVk7K0dBRHJCLGFBQWEsWUFIZCxNQUFNLGFBQ04sTUFBTTsrR0FFTCxhQUFhOzsyRkFBYixhQUFhO2tCQUp6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDakIsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO2lCQUNsQjs7MEJBRWMsTUFBTTsyQkFBQyxZQUFZOztBQW9CbEMsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxNQUFNLENBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nSWNvbiB9IGZyb20gJy4vY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nSWNvbnNUb2tlbiwgcHJvdmlkZUljb25zIH0gZnJvbSAnLi9wcm92aWRlcnMvaWNvbi5wcm92aWRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOZ0ljb25dLFxuICBleHBvcnRzOiBbTmdJY29uXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdJY29uc01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTmdJY29uc1Rva2VuKSBpY29uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIGlmIChPYmplY3Qua2V5cyhpY29ucykubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdObyBpY29ucyBoYXZlIGJlZW4gcHJvdmlkZWQuIEVuc3VyZSB0byBpbmNsdWRlIHNvbWUgaWNvbnMgYnkgaW1wb3J0aW5nIHRoZW0gdXNpbmcgTmdJY29uc01vZHVsZS53aXRoSWNvbnMoeyAuLi4gfSkuJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgaWNvbnMgdGhhdCB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBhcHBsaWNhdGlvbi4gVGhpcyBhbGxvd3MgdW51c2VkIGljb25zIHRvXG4gICAqIGJlIHRyZWUtc2hha2VuIGF3YXkgdG8gcmVkdWNlIGJ1bmRsZSBzaXplXG4gICAqIEBwYXJhbSBpY29ucyBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlcXVpcmVkIGljb25zXG4gICAqL1xuICBzdGF0aWMgd2l0aEljb25zKFxuICAgIGljb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5nSWNvbnNNb2R1bGU+IHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogTmdJY29uc01vZHVsZSwgcHJvdmlkZXJzOiBwcm92aWRlSWNvbnMoaWNvbnMpIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5HX0lDT05fRElSRUNUSVZFUyA9IFtOZ0ljb25dIGFzIGNvbnN0O1xuIl19