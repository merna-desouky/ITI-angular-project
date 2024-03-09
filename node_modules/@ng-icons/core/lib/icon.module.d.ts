import { ModuleWithProviders } from '@angular/core';
import { NgIcon } from './components/icon/icon.component';
import * as i0 from "@angular/core";
import * as i1 from "./components/icon/icon.component";
export declare class NgIconsModule {
    constructor(icons: Record<string, string>);
    /**
     * Define the icons that will be included in the application. This allows unused icons to
     * be tree-shaken away to reduce bundle size
     * @param icons The object containing the required icons
     */
    static withIcons(icons: Record<string, string>): ModuleWithProviders<NgIconsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgIconsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgIconsModule, never, [typeof i1.NgIcon], [typeof i1.NgIcon]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgIconsModule>;
}
export declare const NG_ICON_DIRECTIVES: readonly [typeof NgIcon];
