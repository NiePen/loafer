// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/HandleRegistry ./LayerView2D ./support/ExportStrategy ../engine/BitmapSource ../engine/Canvas2DContainer".split(" "),function(n,p,e,f,c,g,h,k,l,m){return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a._handles=new g;a.container=new m;return a}e(a,b);a.prototype.hitTest=function(a,b){return null};a.prototype.update=function(a){this._strategy.update(a);
this.notifyChange("updating")};a.prototype.attach=function(){this._strategy=new k({container:this.container,fetchImage:this.fetchBitmapSource.bind(this),requestUpdate:this.requestUpdate.bind(this)})};a.prototype.detach=function(){this.container.removeAllChildren();this._strategy.destroy();this._handles.removeAll();this._strategy=null};a.prototype.moveStart=function(){};a.prototype.viewChange=function(){};a.prototype.moveEnd=function(){this.requestUpdate()};a.prototype.fetchBitmapSource=function(a,
b,c){var d=this;return this.layer.fetchImage(a,b,c).then(function(a){d.notifyChange("updating");return new l(a)}).otherwise(function(a){"cancel"!==a.dojoType&&console.error(a);d.notifyChange("updating");return a})};a.prototype.isUpdating=function(){return this.attached&&(this._strategy.updating||this.updateRequested)};return a=f([c.subclass("esri.views.2d.layers.BaseDynamicLayerView2D")],a)}(c.declared(h))});