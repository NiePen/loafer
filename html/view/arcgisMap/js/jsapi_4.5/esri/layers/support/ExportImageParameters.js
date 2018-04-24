// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators dojo/_base/lang ../../core/Accessor ./sublayerUtils".split(" "),function(m,n,f,d,c,g,h,k){var l={visible:"visibleSublayers",definitionExpression:"layerDefs",labelsVisible:"hasDynamicLayers",labelingInfo:"hasDynamicLayers",opacity:"hasDynamicLayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};return function(e){function b(){var a=null!==e&&e.apply(this,
arguments)||this;a.scale=0;return a}f(b,e);Object.defineProperty(b.prototype,"dynamicLayers",{get:function(){if(!this.hasDynamicLayers)return null;var a=this.visibleSublayers.map(function(a){return a.toExportImageJSON()});return a.length?JSON.stringify(a):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasDynamicLayers",{get:function(){return k.isExportDynamic(this.visibleSublayers,this.layer.serviceSublayers,this.layer)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"layer",{set:function(a){var b=this;this._get("layer")!==a&&(this._set("layer",a),this._layerHandles&&(this._layerHandles.forEach(function(a){return a.remove()}),this._layerHandles.length=0),a&&(this._layerHandles=[a.allSublayers.on("change",function(){return b.notifyChange("visibleSublayers")}),a.on("sublayer-update",function(a){return b.notifyChange(l[a.propertyName])})]))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layers",{get:function(){var a=this.visibleSublayers;return a?
a.length?"show:"+a.map(function(a){return a.id}).join(","):"show:-1":null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layerDefs",{get:function(){var a=this.visibleSublayers.filter(function(a){return null!=a.definitionExpression});return a.length?JSON.stringify(a.reduce(function(a,b){a[b.id]=b.definitionExpression;return a},{})):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"version",{get:function(){return(this._get("version")||0)+1},set:function(a){this._set("version",
a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visibleSublayers",{get:function(){var a=this,b=this.layer.sublayers,c=[],d=function(b){var e=a.scale,f=0===b.minScale||e<=b.minScale,g=0===b.maxScale||e>=b.maxScale;b.visible&&(0===e||f&&g)&&(b.sublayers?b.sublayers.forEach(d):c.unshift(b))};b&&b.forEach(d);return c},enumerable:!0,configurable:!0});b.prototype.toJSON=function(){var a=this.layer,a={dpi:a.dpi,format:a.imageFormat,transparent:a.imageTransparency,gdbVersion:a.gdbVersion||
null};this.hasDynamicLayers&&this.dynamicLayers?a.dynamicLayers=this.dynamicLayers:g.mixin(a,{layers:this.layers,layerDefs:this.layerDefs});return a};d([c.property({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],b.prototype,"dynamicLayers",null);d([c.property({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],b.prototype,"hasDynamicLayers",null);d([c.property()],b.prototype,"layer",null);d([c.property({readOnly:!0,dependsOn:["visibleSublayers"]})],
b.prototype,"layers",null);d([c.property({readOnly:!0,dependsOn:["visibleSublayers"]})],b.prototype,"layerDefs",null);d([c.property({type:Number})],b.prototype,"scale",void 0);d([c.property({dependsOn:"layers layerDefs dynamicLayers layer.dpi layer.imageFormat layer.imageTransparency layer.gdbVersion".split(" ")})],b.prototype,"version",null);d([c.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],b.prototype,"visibleSublayers",null);return b=d([c.subclass("esri.layers.mixins.ExportImageParameters")],
b)}(c.declared(h))});