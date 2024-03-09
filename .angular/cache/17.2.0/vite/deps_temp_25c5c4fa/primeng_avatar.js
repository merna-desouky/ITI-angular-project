import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle
} from "./chunk-S4H6IXFQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QUFMMK2N.js";
import "./chunk-SAVXX6OM.js";
import "./chunk-SG3BCSKH.js";
import "./chunk-PQ7O3X3G.js";
import "./chunk-J4B6MK7R.js";

// node_modules/primeng/fesm2022/primeng-avatar.mjs
function Avatar_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.label);
  }
}
function Avatar_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r5.icon);
    ɵɵproperty("ngClass", "p-avatar-icon");
  }
}
function Avatar_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Avatar_ng_template_3_span_0_Template, 1, 3, "span", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r4 = ɵɵreference(6);
    ɵɵproperty("ngIf", ctx_r1.icon)("ngIfElse", _r4);
  }
}
function Avatar_ng_template_5_img_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 8);
    ɵɵlistener("error", function Avatar_ng_template_5_img_0_Template_img_error_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r7.imageError($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r6.image, ɵɵsanitizeUrl);
    ɵɵattribute("aria-label", ctx_r6.ariaLabel);
  }
}
function Avatar_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Avatar_ng_template_5_img_0_Template, 1, 2, "img", 7);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r3.image);
  }
}
var _c0 = ["*"];
var Avatar = class _Avatar {
  /**
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Size of the element.
   * @group Props
   */
  size = "normal";
  /**
   * Shape of the element.
   * @group Props
   */
  shape = "square";
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Establishes a string value that labels the component.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  containerClass() {
    return {
      "p-avatar p-component": true,
      "p-avatar-image": this.image != null,
      "p-avatar-circle": this.shape === "circle",
      "p-avatar-lg": this.size === "large",
      "p-avatar-xl": this.size === "xlarge"
    };
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  static ɵfac = function Avatar_Factory(t) {
    return new (t || _Avatar)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Avatar,
    selectors: [["p-avatar"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      size: "size",
      shape: "shape",
      style: "style",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onImageError: "onImageError"
    },
    ngContentSelectors: _c0,
    decls: 7,
    vars: 9,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-avatar-text", 4, "ngIf", "ngIfElse"], ["iconTemplate", ""], ["imageTemplate", ""], [1, "p-avatar-text"], [3, "class", "ngClass", 4, "ngIf", "ngIfElse"], [3, "ngClass"], [3, "src", "error", 4, "ngIf"], [3, "src", "error"]],
    template: function Avatar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵtemplate(2, Avatar_span_2_Template, 2, 1, "span", 1)(3, Avatar_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, Avatar_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const _r2 = ɵɵreference(4);
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵɵattribute("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("data-pc-name", "avatar");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.label)("ngIfElse", _r2);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle],
    styles: ["@layer primeng{.p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Avatar, [{
    type: Component,
    args: [{
      selector: "p-avatar",
      template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-label]="ariaLabel" [attr.data-pc-name]="'avatar'">
            <ng-content></ng-content>
            <span class="p-avatar-text" *ngIf="label; else iconTemplate">{{ label }}</span>
            <ng-template #iconTemplate><span [class]="icon" [ngClass]="'p-avatar-icon'" *ngIf="icon; else imageTemplate"></span></ng-template>
            <ng-template #imageTemplate><img [src]="image" *ngIf="image" (error)="imageError($event)" [attr.aria-label]="ariaLabel" /></ng-template>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}}\n"]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onImageError: [{
      type: Output
    }]
  });
})();
var AvatarModule = class _AvatarModule {
  static ɵfac = function AvatarModule_Factory(t) {
    return new (t || _AvatarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AvatarModule,
    declarations: [Avatar],
    imports: [CommonModule],
    exports: [Avatar]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Avatar],
      declarations: [Avatar]
    }]
  }], null, null);
})();
export {
  Avatar,
  AvatarModule
};
//# sourceMappingURL=primeng_avatar.js.map
