// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["../../config","../../core/lang","../../core/kebabDictionary","./WKIDUnitConversion"],function(h,n,p,e){var k=20015077/180,l=/UNIT\[([^\]]+)\]\]$/i,m=p({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",
chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"},{ignoreUnknown:!0}),f={unitFromRESTJSON:function(a){return m.fromJSON(a.toLowerCase())||null},unitToRESTJSON:function(a){return m.toJSON(a)||null},getMetersPerVerticalUnitForSR:function(a){a=this.getMetersPerUnitForSR(a);return 1E5<a?1:a},getVerticalUnitStringForSR:function(a){return 1E5<this.getMetersPerUnitForSR(a)?"meters":this.getUnitString(a)},getMetersPerUnitForSR:function(a){return this.getMetersPerUnit(a)||
k},getMetersPerUnit:function(a){var b,c,d;a&&("object"===typeof a?(b=a.wkid,c=a.wkt):"number"===typeof a?b=a:"string"===typeof a&&(c=a));b?d=e.values[e[b]]:c&&-1!==c.search(/^PROJCS/i)&&(a=l.exec(c))&&a[1]&&(d=parseFloat(a[1].split(",")[1]));return d},getUnitString:function(a){var b,c,d;a&&("object"===typeof a?(b=a.wkid,c=a.wkt):"number"===typeof a?b=a:"string"===typeof a&&(c=a));b?d=e.units[e[b]]:c&&-1!==c.search(/^PROJCS/i)&&(a=l.exec(c))&&a[1]&&(d=(a=/[\\"\\']{1}([^\\"\\']+)/.exec(a[1]))&&a[1]);
return d?this.unitFromRESTJSON(d):null},getScale:function(a,b,c){var d,e,g;1<arguments.length&&n.isDefined(b)&&!b.declaredClass?(d=a,e=b,b=null,g=f.getMetersPerUnit(c)):(d=b||a.extent,e=a.width,g=f.getMetersPerUnit(d&&d.spatialReference));return d&&e?d.width/e*(g||k)*39.37*h.screenDPI:0},getResolutionForScale:function(a,b){b=f.getMetersPerUnitForSR(b);return a/(39.37*b*h.screenDPI)},getExtentForScale:function(a,b){var c=a.extent;a=a.width;b=f.getResolutionForScale(b,c.spatialReference);return c.clone().expand(b*
a/c.width)}};return f});