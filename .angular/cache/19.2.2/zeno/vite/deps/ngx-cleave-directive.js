import {
  cleave_esm_default
} from "./chunk-M5OQZ2AW.js";
import {
  NgControl
} from "./chunk-6XD3BU2F.js";
import "./chunk-52WRURPL.js";
import {
  Directive,
  ElementRef,
  Input,
  NgModule,
  Optional,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-RZYZOGDC.js";
import "./chunk-XS73CW5H.js";
import "./chunk-SGMLAKGD.js";
import "./chunk-XT6ZCHFH.js";
import "./chunk-ZYKX7RMX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// node_modules/ngx-cleave-directive/fesm2020/ngx-cleave-directive.mjs
var NgxCleaveDirective = class {
  constructor(elementRef, ngControl) {
    this.elementRef = elementRef;
    this.ngControl = ngControl;
    this.rawValue = false;
    this.viewToModelUpdate = this.ngControl?.viewToModelUpdate;
    if (!this.ngControl) {
      throw new Error("NgxCleaveDirective: should be used with one of the following form directives — ngModel, formControl or formControlName.");
    }
  }
  set cleave(cleave) {
    this._cleave = cleave;
    this.setCleave();
  }
  get cleave() {
    return this._cleave;
  }
  ngOnInit() {
    if (this.ngControl) {
      this.ngControl.viewToModelUpdate = (_) => {
        this.viewToModelUpdate?.call(
          this.ngControl,
          // update model with the value got from the Cleave instance
          this.rawValue ? this.cleaveInstance?.getRawValue() : this.cleaveInstance?.getFormattedValue()
        );
      };
    }
  }
  ngOnDestroy() {
    if (this.ngControl) {
      this.ngControl.viewToModelUpdate = this.viewToModelUpdate;
    }
    this.cleaveInstance?.destroy();
  }
  setCleave() {
    this.cleaveInstance?.destroy();
    this.cleaveInstance = new cleave_esm_default(this.elementRef.nativeElement, __spreadProps(__spreadValues({}, this.cleave), {
      onValueChanged: ({
        target
      }) => {
        this.ngControl.viewToModelUpdate("");
        if (this.cleave.onValueChanged && typeof this.cleave.onValueChanged === "function") {
          this.cleave.onValueChanged({
            target
          });
        }
      }
    }));
    if (!this.rawValue) {
      setTimeout(() => this.cleaveInstance?.setRawValue(this.ngControl.value), 0);
    }
  }
};
NgxCleaveDirective.ɵfac = function NgxCleaveDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxCleaveDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgControl, 8));
};
NgxCleaveDirective.ɵdir = ɵɵdefineDirective({
  type: NgxCleaveDirective,
  selectors: [["input", "cleave", ""], ["textarea", "cleave", ""]],
  inputs: {
    rawValue: "rawValue",
    cleave: "cleave"
  },
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxCleaveDirective, [{
    type: Directive,
    args: [{
      selector: "input[cleave],textarea[cleave]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgControl,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    rawValue: [{
      type: Input,
      args: ["rawValue"]
    }],
    cleave: [{
      type: Input,
      args: ["cleave"]
    }]
  });
})();
var NgxCleaveDirectiveModule = class {
};
NgxCleaveDirectiveModule.ɵfac = function NgxCleaveDirectiveModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxCleaveDirectiveModule)();
};
NgxCleaveDirectiveModule.ɵmod = ɵɵdefineNgModule({
  type: NgxCleaveDirectiveModule,
  declarations: [NgxCleaveDirective],
  exports: [NgxCleaveDirective]
});
NgxCleaveDirectiveModule.ɵinj = ɵɵdefineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxCleaveDirectiveModule, [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [NgxCleaveDirective],
      exports: [NgxCleaveDirective]
    }]
  }], null, null);
})();
export {
  NgxCleaveDirective,
  NgxCleaveDirectiveModule
};
//# sourceMappingURL=ngx-cleave-directive.js.map
