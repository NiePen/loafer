// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/ObjectPool ../../../../core/libs/gl-matrix/vec2 ../../../../core/libs/gl-matrix/mat4 ../../tiling/TileKey ../DisplayObject ./WGLDisplayRecord ./WGLGeometry ./enums ./Utils ./WGLDisplayList".split(" "),function(A,B,v,w,x,y,p,z,q,l,f,m,k){return function(u){function c(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];b=u.call(this)||this;b.displayList=null;b.hlDisplayList=null;b.displayObjectRegistry=new Map;
b.iconDisplayRecords=null;b.textDisplayRecords=null;b.lineDisplayRecords=null;b.fillDisplayRecords=null;b.iconGeometry=null;b.textGeometry=null;b.lineGeometry=null;b.fillGeometry=null;b.coords=[0,0];b.bounds=[0,0,0,0];b.tileTransform={transform:Float32Array[16],displayCoord:Float32Array[2]};b._hasVisualVariables=!1;0<a.length&&(e=b.acquire).call.apply(e,[b].concat(a));b.tileTransform.transform=y.create();b.tileTransform.displayCoord=x.create();return b;var e}v(c,u);c.prototype.acquire=function(a,
b,e,c,g){this.key=p.pool.acquire(a);this.coords[0]=b[0];this.coords[1]=b[3];this.bounds=b;this.coordRange=e;this.width=c;this.height=g};c.prototype.release=function(){this.clear();p.pool.release(this.key);this.key=null};Object.defineProperty(c.prototype,"canDisplay",{get:function(){return!!this.attached&&!!this.displayList},enumerable:!0,configurable:!0});c.prototype.setData=function(a,b,e){a&&(this._hasVisualVariables=b,this.displayList&&a.tileDisplayData.displayList!==this.displayList&&k.pool.release(this.displayList),
this.displayList=a.tileDisplayData.displayList,this.fillDisplayRecords=a.tileDisplayData.fillDisplayRecords,this.lineDisplayRecords=a.tileDisplayData.lineDisplayRecords,this.iconDisplayRecords=a.tileDisplayData.iconDisplayRecords,this.textDisplayRecords=a.tileDisplayData.textDisplayRecords,this.displayObjectRegistry=a.tileDisplayData.displayObjectRegistry,this.fillDisplayRecords&&0<this.fillDisplayRecords.length&&(this.fillGeometry=new l,this.fillGeometry.initializeWithBuffers(this._hasVisualVariables?
m.C_FILL_VERTEX_DEF_VV:m.C_FILL_VERTEX_DEF,a.tileBufferData.geometries[f.WGLGeometryType.FILL],35044)),this.lineDisplayRecords&&0<this.lineDisplayRecords.length&&(this.lineGeometry=new l,this.lineGeometry.initializeWithBuffers(this._hasVisualVariables?m.C_LINE_VERTEX_DEF_VV:m.C_LINE_VERTEX_DEF,a.tileBufferData.geometries[f.WGLGeometryType.LINE],35044)),this.iconDisplayRecords&&0<this.iconDisplayRecords.length&&(this.iconGeometry=new l,this.iconGeometry.initializeWithBuffers(this._hasVisualVariables?
m.C_ICON_VERTEX_DEF_VV:m.C_ICON_VERTEX_DEF,a.tileBufferData.geometries[f.WGLGeometryType.MARKER],35044)),this.textDisplayRecords&&0<this.textDisplayRecords.length&&(this.textGeometry=new l,this.textGeometry.initializeWithBuffers(void 0,a.tileBufferData.geometries[f.WGLGeometryType.TEXT],35044)))};c.prototype.appendData=function(a){};c.prototype.updateObjects=function(a){var b=(a.remove||[]).slice();a=a.update||[];for(var e=[],c=[],g=[],n=[],p=[],d=0;d<a.length;d++){var h=a[d];this.displayObjectRegistry.get(h.id)&&
b.push(h.id)}for(var r=0;r<b.length;r++){var q=b[r];if(h=this.displayObjectRegistry.get(q)){for(var t=0,h=h.displayRecords;t<h.length;t++)switch(d=h[t],e.push(d),d.geometryType){case f.WGLGeometryType.FILL:c.push(d);break;case f.WGLGeometryType.LINE:g.push(d);break;case f.WGLGeometryType.MARKER:n.push(d);break;case f.WGLGeometryType.TEXT:p.push(d)}this.displayObjectRegistry.delete(q)}}this.displayList||(this.displayList=k.pool.acquire());(h=this.displayList)&&h.removeFromList(e);this._removeRecords(this.fillGeometry,
this.fillDisplayRecords,c);this._removeRecords(this.lineGeometry,this.lineDisplayRecords,g);this._removeRecords(this.iconGeometry,this.iconDisplayRecords,n);this._removeRecords(this.textGeometry,this.textDisplayRecords,p);b=[];for(e=0;e<a.length;e++){h=a[e];c=0;for(g=h.displayRecords;c<g.length;c++)switch(d=g[c],b.push(d),d.geometryType){case f.WGLGeometryType.FILL:this.fillDisplayRecords=this.fillDisplayRecords||[];this.fillDisplayRecords.push(d);break;case f.WGLGeometryType.LINE:this.lineDisplayRecords=
this.lineDisplayRecords||[];this.lineDisplayRecords.push(d);break;case f.WGLGeometryType.MARKER:this.iconDisplayRecords=this.iconDisplayRecords||[];this.iconDisplayRecords.push(d);break;case f.WGLGeometryType.TEXT:this.textDisplayRecords=this.textDisplayRecords||[],this.textDisplayRecords.push(d)}this.displayObjectRegistry.set(h.id,h)}a=!1;this.fillGeometry||(this.fillGeometry=new l);this.lineGeometry||(this.lineGeometry=new l);this.iconGeometry||(this.iconGeometry=new l);a=a||this._updateRecords(this.iconGeometry,
this.iconDisplayRecords,this._hasVisualVariables?m.C_ICON_VERTEX_DEF_VV:m.C_ICON_VERTEX_DEF);this.textGeometry||(this.textGeometry=new l);a?(this.displayList&&k.pool.release(this.displayList),a=k.pool.acquire(),a.addToList(this.fillDisplayRecords),a.addToList(this.lineDisplayRecords),a.addToList(this.iconDisplayRecords),a.addToList(this.textDisplayRecords),this.displayList=a):(a=this.displayList)?a.addToList(b):(a=k.pool.acquire(),a.addToList(b),this.displayList=a)};c.prototype._updateRecords=function(a,
b,c){if(a.update(b)===f.WGLGeometryTransactionStatus.FAILED_OUT_OF_MEMORY)return a.initializeWithRecords(c,b,35044),this.attached=!1,!0;a.invalidateIndexBuffer();a.invalidateVertexBuffers();return!1};c.prototype._removeRecords=function(a,b,c){if(a){this.iconGeometry.remove(c);for(var e=a=b.length,g=0;g<a;++g){for(var n=void 0,n=0;n<e&&b[g]!==c[n];++n);n<c.length&&(b.splice(g,1),g--)}}};c.prototype.clear=function(){this.iconGeometry&&(this.iconGeometry.clear(),this.iconGeometry=null);this.textGeometry&&
(this.textGeometry.clear(),this.textGeometry=null);this.lineGeometry&&(this.lineGeometry.clear(),this.lineGeometry=null);this.fillGeometry&&(this.fillGeometry.clear(),this.fillGeometry=null);this.displayObjectRegistry.clear();this.displayList&&(k.pool.release(this.displayList),this.displayList=null);this.hlDisplayList&&(k.pool.release(this.hlDisplayList),this.hlDisplayList=null);this.iconDisplayRecords&&(this.iconDisplayRecords.length=0);this.textDisplayRecords&&(this.textDisplayRecords.length=0);
this.lineDisplayRecords&&(this.lineDisplayRecords.length=0);this.fillDisplayRecords&&(this.fillDisplayRecords.length=0)};c.prototype.dispose=function(){this.release()};c.prototype.attach=function(a){var b=!0;this.fillGeometry&&(this.fillGeometry.attached||(b=b&&this.fillGeometry.attach(a)));this.lineGeometry&&(this.lineGeometry.attached||(b=b&&this.lineGeometry.attach(a)));this.iconGeometry&&(this.iconGeometry.attached||(b=b&&this.iconGeometry.attach(a)));this.textGeometry&&(this.textGeometry.attached||
(b=b&&this.textGeometry.attach(a)));return b};c.prototype.detach=function(a){};c.prototype.doRender=function(a){};c.prototype.buildHLList=function(a){var b=this;this.hlDisplayList&&k.pool.release(this.hlDisplayList);this.hlDisplayList=k.pool.acquire();a.forEach(function(a){if(a=b.displayObjectRegistry.get(a)){a=a.displayRecords.map(function(a){var b=q.pool.acquire();b.id=a.id;b.geometryType=a.geometryType;b.vertexFrom=a.vertexFrom;b.vertexCount=a.vertexCount;b.indexFrom=a.indexFrom;b.indexCount=a.indexCount;
b.materialInfo=a.materialInfo;b.meshData=null;b.sortKey=0;b.symbolLevel=0;b.zOrder=0;return b});a.sort(function(a,b){return a.sortKey-b.sortKey});b.hlDisplayList.addToList(a);for(var c=0;c<a.length;c++)q.pool.release(a[c])}})};c.pool=new w(c);return c}(z)});