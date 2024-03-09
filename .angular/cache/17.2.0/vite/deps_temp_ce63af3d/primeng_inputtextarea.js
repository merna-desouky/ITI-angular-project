import {
  NgControl,
  NgModel
} from "./chunk-HSXK3M4F.js";
import {
  CommonModule
} from "./chunk-QN7HKN3L.js";
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgModule,
  Optional,
  Output,
  setClassMetadata,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-5FWQL4YX.js";
import "./chunk-SAVXX6OM.js";
import "./chunk-SG3BCSKH.js";
import "./chunk-PQ7O3X3G.js";
import "./chunk-X6JV76XL.js";

// node_modules/primeng/fesm2022/primeng-inputtextarea.mjs
var InputTextarea = class _InputTextarea {
  el;
  ngModel;
  control;
  cd;
  /**
   * When present, textarea size changes as being typed.
   * @group Props
   */
  autoResize;
  /**
   * Callback to invoke on textarea resize.
   * @param {(Event | {})} event - Custom resize event.
   * @group Emits
   */
  onResize = new EventEmitter();
  filled;
  cachedScrollHeight;
  ngModelSubscription;
  ngControlSubscription;
  constructor(el, ngModel, control, cd) {
    this.el = el;
    this.ngModel = ngModel;
    this.control = control;
    this.cd = cd;
  }
  ngOnInit() {
    if (this.ngModel) {
      this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
    if (this.control) {
      this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  ngAfterViewInit() {
    if (this.autoResize)
      this.resize();
    this.updateFilledState();
    this.cd.detectChanges();
  }
  onInput(e) {
    this.updateState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  resize(event) {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = "scroll";
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = "hidden";
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    this.updateFilledState();
    if (this.autoResize) {
      this.resize();
    }
  }
  ngOnDestroy() {
    if (this.ngModelSubscription) {
      this.ngModelSubscription.unsubscribe();
    }
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
  }
  static ɵfac = function InputTextarea_Factory(t) {
    return new (t || _InputTextarea)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgModel, 8), ɵɵdirectiveInject(NgControl, 8), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _InputTextarea,
    selectors: [["", "pInputTextarea", ""]],
    hostAttrs: [1, "p-inputtextarea", "p-inputtext", "p-component", "p-element"],
    hostVars: 4,
    hostBindings: function InputTextarea_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("input", function InputTextarea_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        ɵɵclassProp("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize);
      }
    },
    inputs: {
      autoResize: "autoResize"
    },
    outputs: {
      onResize: "onResize"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextarea, [{
    type: Directive,
    args: [{
      selector: "[pInputTextarea]",
      host: {
        class: "p-inputtextarea p-inputtext p-component p-element",
        "[class.p-filled]": "filled",
        "[class.p-inputtextarea-resizable]": "autoResize"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgModel,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgControl,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    autoResize: [{
      type: Input
    }],
    onResize: [{
      type: Output
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var InputTextareaModule = class _InputTextareaModule {
  static ɵfac = function InputTextareaModule_Factory(t) {
    return new (t || _InputTextareaModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputTextareaModule,
    declarations: [InputTextarea],
    imports: [CommonModule],
    exports: [InputTextarea]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextareaModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputTextarea],
      declarations: [InputTextarea]
    }]
  }], null, null);
})();
export {
  InputTextarea,
  InputTextareaModule
};
//# sourceMappingURL=primeng_inputtextarea.js.map
