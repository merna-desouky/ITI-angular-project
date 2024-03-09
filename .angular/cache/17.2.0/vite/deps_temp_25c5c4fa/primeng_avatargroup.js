import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-S4H6IXFQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-QUFMMK2N.js";
import "./chunk-SAVXX6OM.js";
import "./chunk-SG3BCSKH.js";
import "./chunk-PQ7O3X3G.js";
import "./chunk-J4B6MK7R.js";

// node_modules/primeng/fesm2022/primeng-avatargroup.mjs
var _c0 = ["*"];
var AvatarGroup = class _AvatarGroup {
  /**
   * Style class of the component
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  static ɵfac = function AvatarGroup_Factory(t) {
    return new (t || _AvatarGroup)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AvatarGroup,
    selectors: [["p-avatarGroup"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      styleClass: "styleClass",
      style: "style"
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 4,
    consts: [[3, "ngClass", "ngStyle"]],
    template: function AvatarGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", "p-avatar-group p-component")("ngStyle", ctx.style);
      }
    },
    dependencies: [NgClass, NgStyle],
    styles: ["@layer primeng{.p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{display:flex;align-items:center}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroup, [{
    type: Component,
    args: [{
      selector: "p-avatarGroup",
      template: `
        <div [ngClass]="'p-avatar-group p-component'" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{display:flex;align-items:center}}\n"]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }]
  });
})();
var AvatarGroupModule = class _AvatarGroupModule {
  static ɵfac = function AvatarGroupModule_Factory(t) {
    return new (t || _AvatarGroupModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AvatarGroupModule,
    declarations: [AvatarGroup],
    imports: [CommonModule],
    exports: [AvatarGroup]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [AvatarGroup],
      declarations: [AvatarGroup]
    }]
  }], null, null);
})();
export {
  AvatarGroup,
  AvatarGroupModule
};
//# sourceMappingURL=primeng_avatargroup.js.map
