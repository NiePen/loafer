// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/MultiOriginJSONSupport ../support/arcgisLayerUrl".split(" "),function(h,k,e,c,b,f,g){return function(d){function a(){return null!==d&&d.apply(this,arguments)||this}e(a,d);Object.defineProperty(a.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var a=g.parse(this.url);
if(a&&a.title)return a.title}return this._get("title")||""},set:function(a){this._set("title",a)},enumerable:!0,configurable:!0});c([b.property({dependsOn:["url"]})],a.prototype,"title",null);c([b.property()],a.prototype,"url",void 0);return a=c([b.subclass("esri.layers.mixins.ArcGISService")],a)}(b.declared(f))});