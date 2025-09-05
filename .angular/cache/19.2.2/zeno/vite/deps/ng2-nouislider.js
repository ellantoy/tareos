import {
  initialize
} from "./chunk-MA7KDIP2.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-6XD3BU2F.js";
import "./chunk-52WRURPL.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement
} from "./chunk-RZYZOGDC.js";
import "./chunk-XS73CW5H.js";
import "./chunk-SGMLAKGD.js";
import "./chunk-XT6ZCHFH.js";
import "./chunk-ZYKX7RMX.js";
import "./chunk-AJH3MT3R.js";

// node_modules/ng2-nouislider/fesm2020/ng2-nouislider.mjs
var DefaultFormatter = class {
  to(value) {
    return String(parseFloat(parseFloat(String(value)).toFixed(2)));
  }
  from(value) {
    return parseFloat(value);
  }
};
var NouisliderComponent = class {
  constructor(ngZone, el, renderer) {
    this.ngZone = ngZone;
    this.el = el;
    this.renderer = renderer;
    this.handles = [];
    this.config = {};
    this.change = new EventEmitter(true);
    this.update = new EventEmitter(true);
    this.slide = new EventEmitter(true);
    this.set = new EventEmitter(true);
    this.start = new EventEmitter(true);
    this.end = new EventEmitter(true);
    this.onChange = Function.prototype;
    this.cleanups = [];
    this.eventHandler = (emitter, values, handle, unencoded) => {
      let v = this.toValues(values);
      let emitEvents = false;
      if (this.value === void 0) {
        this.value = v;
        return;
      }
      if (Array.isArray(v) && this.value[handle] != v[handle]) {
        emitEvents = true;
      }
      if (!Array.isArray(v) && this.value != v) {
        emitEvents = true;
      }
      if (emitEvents) {
        this.ngZone.run(() => {
          if (emitter.observers.length > 0) {
            emitter.emit(v);
          }
          this.onChange(v);
        });
      }
      if (Array.isArray(v)) {
        this.value[handle] = v[handle];
      } else {
        this.value = v;
      }
    };
    this.defaultKeyHandler = (e) => {
      let stepSize = this.slider.steps();
      let index = parseInt(e.target.getAttribute("data-handle"));
      let sign = 1;
      let multiplier = 1;
      let step = 0;
      let delta = 0;
      switch (e.which) {
        case 34:
          multiplier = this.config.pageSteps;
          break;
        case 40:
        // ArrowDown
        case 37:
          sign = -1;
          step = stepSize[index][0];
          e.preventDefault();
          break;
        case 33:
          multiplier = this.config.pageSteps;
          break;
        case 38:
        // ArrowUp
        case 39:
          step = stepSize[index][1];
          e.preventDefault();
          break;
        default:
          break;
      }
      delta = sign * multiplier * step;
      let newValue;
      if (Array.isArray(this.value)) {
        newValue = [...this.value];
        newValue[index] = newValue[index] + delta;
      } else {
        newValue = this.value + delta;
      }
      this.slider.set(newValue);
    };
  }
  ngOnChanges(changes) {
    if (this.slider && (changes.min || changes.max || changes.step || changes.range)) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.slider.updateOptions({
            range: Object.assign({}, {
              min: this.min,
              max: this.max
            }, this.range || {}),
            step: this.step
          });
        });
      });
    }
  }
  ngOnDestroy() {
    this.slider.destroy();
    while (this.cleanups.length) {
      this.cleanups.pop()?.();
    }
  }
  toValues(values) {
    let v = values.map(this.config.format.from);
    return v.length == 1 ? v[0] : v;
  }
  writeValue(value) {
    if (this.slider) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.slider.set(value);
        });
      });
    } else if (value !== null) {
      this.value = value;
      this.createSlider(value);
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
  }
  setDisabledState(isDisabled) {
    isDisabled ? this.renderer.setAttribute(this.el.nativeElement.childNodes[0], "disabled", "true") : this.renderer.removeAttribute(this.el.nativeElement.childNodes[0], "disabled");
  }
  createSlider(initialValue) {
    let inputsConfig = JSON.parse(JSON.stringify({
      behaviour: this.behaviour,
      connect: this.connect,
      limit: this.limit,
      start: initialValue,
      step: this.step,
      pageSteps: this.pageSteps,
      keyboard: this.keyboard,
      onKeydown: this.onKeydown,
      range: this.range || this.config.range || {
        min: this.min,
        max: this.max
      },
      tooltips: this.tooltips,
      snap: this.snap,
      animate: this.animate
    }));
    inputsConfig.tooltips = this.tooltips || this.config.tooltips;
    inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
    this.ngZone.runOutsideAngular(() => {
      this.slider = initialize(this.el.nativeElement.querySelector("div"), Object.assign(this.config, inputsConfig));
    });
    this.handles = [].slice.call(this.el.nativeElement.querySelectorAll(".noUi-handle"));
    if (this.config.keyboard) {
      if (this.config.pageSteps === void 0) {
        this.config.pageSteps = 10;
      }
      for (const handle of this.handles) {
        handle.setAttribute("tabindex", 0);
        const onKeydown = this.config.onKeydown || this.defaultKeyHandler;
        this.ngZone.runOutsideAngular(() => {
          this.cleanups.push(this.renderer.listen(handle, "keydown", onKeydown), this.renderer.listen(handle, "click", () => {
            handle.focus();
          }));
        });
      }
    }
    this.slider.on("set", (values, handle, unencoded) => {
      this.eventHandler(this.set, values, handle, unencoded);
    });
    this.slider.on("update", (values, handle, unencoded) => {
      if (this.update.observers.length > 0) {
        this.ngZone.run(() => {
          this.update.emit(this.toValues(values));
        });
      }
    });
    this.slider.on("change", (values, handle, unencoded) => {
      if (this.change.observers.length > 0) {
        this.ngZone.run(() => {
          this.change.emit(this.toValues(values));
        });
      }
    });
    this.slider.on("slide", (values, handle, unencoded) => {
      this.eventHandler(this.slide, values, handle, unencoded);
    });
    this.slider.on("start", (values, handle, unencoded) => {
      if (this.start.observers.length > 0) {
        this.ngZone.run(() => {
          this.start.emit(this.toValues(values));
        });
      }
    });
    this.slider.on("end", (values, handle, unencoded) => {
      if (this.end.observers.length > 0) {
        this.ngZone.run(() => {
          this.end.emit(this.toValues(values));
        });
      }
    });
  }
};
NouisliderComponent.ɵfac = function NouisliderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NouisliderComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
NouisliderComponent.ɵcmp = ɵɵdefineComponent({
  type: NouisliderComponent,
  selectors: [["nouislider"]],
  hostVars: 2,
  hostBindings: function NouisliderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ng2-nouislider", true);
    }
  },
  inputs: {
    disabled: "disabled",
    behaviour: "behaviour",
    connect: "connect",
    limit: "limit",
    min: "min",
    max: "max",
    snap: "snap",
    animate: "animate",
    range: "range",
    step: "step",
    format: "format",
    pageSteps: "pageSteps",
    config: "config",
    keyboard: "keyboard",
    onKeydown: "onKeydown",
    tooltips: "tooltips"
  },
  outputs: {
    change: "change",
    update: "update",
    slide: "slide",
    set: "set",
    start: "start",
    end: "end"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NouisliderComponent),
    multi: true
  }]), ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  template: function NouisliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div");
    }
    if (rf & 2) {
      ɵɵattribute("disabled", ctx.disabled ? true : void 0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block;margin-top:1rem;margin-bottom:1rem}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NouisliderComponent, [{
    type: Component,
    args: [{
      selector: "nouislider",
      host: {
        "[class.ng2-nouislider]": "true"
      },
      template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NouisliderComponent),
        multi: true
      }],
      standalone: true,
      styles: [":host{display:block;margin-top:1rem;margin-bottom:1rem}\n"]
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    disabled: [{
      type: Input
    }],
    behaviour: [{
      type: Input
    }],
    connect: [{
      type: Input
    }],
    limit: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    snap: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    range: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    pageSteps: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    onKeydown: [{
      type: Input
    }],
    tooltips: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    update: [{
      type: Output
    }],
    slide: [{
      type: Output
    }],
    set: [{
      type: Output
    }],
    start: [{
      type: Output
    }],
    end: [{
      type: Output
    }]
  });
})();
var NouisliderModule = class {
};
NouisliderModule.ɵfac = function NouisliderModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NouisliderModule)();
};
NouisliderModule.ɵmod = ɵɵdefineNgModule({
  type: NouisliderModule,
  imports: [NouisliderComponent],
  exports: [NouisliderComponent]
});
NouisliderModule.ɵinj = ɵɵdefineInjector({
  imports: [NouisliderComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NouisliderModule, [{
    type: NgModule,
    args: [{
      exports: [NouisliderComponent],
      imports: [NouisliderComponent]
    }]
  }], null, null);
})();
export {
  DefaultFormatter,
  NouisliderComponent,
  NouisliderModule
};
//# sourceMappingURL=ng2-nouislider.js.map
