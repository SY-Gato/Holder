const LZString=(()=>{const r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(r,o){if(!e[r]){e[r]={};for(let n=0;n<r.length;n++)e[r][r.charAt(n)]=n}
return e[r][o]}
const i={compressToBase64:function(r){if(null==r)return"";const n=i._compress(r,6,function(r){return o.charAt(r)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(n){return t(o,r.charAt(n))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(r){return null==r?"":""==r?null:i._decompress(r.length,16384,function(o){return r.charCodeAt(o)-32})},compressToUint8Array:function(r){const o=i.compress(r),n=new Uint8Array(2*o.length);for(let r=0;r<o.length;r++){const e=o.charCodeAt(r);n[2*r]=e>>>8,n[2*r+1]=255&e}
return n},decompressFromUint8Array:function(o){if(null==o)return i.decompress(o);const n=new Array(o.length/2);for(let e=0;e<n.length;e++)n[e]=256*o[2*e]+o[2*e+1];const t=[];return n.forEach(e=>{t.push(r(e))}),i.decompress(t.join(""))},compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,function(r){return n.charAt(r)})},decompressFromEncodedURIComponent:function(r){return null==r?"":(r=r.replace(/ /g,"+"),""==r?null:i._decompress(r.length,32,function(o){return t(n,r.charAt(o))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(r,o,n){if(null==r)return"";let e,t,i,s={},u={},a="",p="",c="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<r.length;i+=1)
if(((a=r.charAt(i)),Object.prototype.hasOwnProperty.call(s,a)||((s[a]=f++),(u[a]=!0)),(p=c+a),Object.prototype.hasOwnProperty.call(s,p)))c=p;else{if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)(m<<=1),v==o-1?((v=0),d.push(n(m)),(m=0)):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)(m=(m<<1)|(1&t)),v==o-1?((v=0),d.push(n(m)),(m=0)):v++,(t>>=1)}else{for(t=1,e=0;e<h;e++)(m=(m<<1)|t),v==o-1?((v=0),d.push(n(m)),(m=0)):v++,(t=0);for(t=c.charCodeAt(0),e=0;e<16;e++)(m=(m<<1)|(1&t)),v==o-1?((v=0),d.push(n(m)),(m=0)):v++,(t>>=1)}
0==--l&&((l=Math.pow(2,h)),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)(m=(m<<1)|(1&t)),v==o-1?((v=0),d.push(n(m)),(m=0)):v++,(t>>=1);if(0==--l&&((l=Math.pow(2,h)),h++),(s[p]=f++),(c=String(a)),f==(1<<o)-1){for(t=0,e=0;e<h;e++)(t=(t<<1)|(1&t)),v==o-1?((v=0),d.push(n(t)),(t=0)):v++;l=2,h++,delete s[c]}}
if(""!==c){if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)(m<<=1),v==o-1?((v=0),d.push(n(m)),(m=0)):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)(m=(m<<1)|(1&t)),v==o-1?((v=0),d.push(n(m)),(m=0)):v++,(t>>=1)}else{for(t=1,e=0;e<h;e++)(m=(m<<1)|t),v==o-1?((v=0),d.push(n(m)),(m=0)):v++,(t=0);for(t=c.charCodeAt(0),e=0;e<16;e++)(m=(m<<1)|(1&t)),v==o-1?((v=0),d.push(n(m)),(m=0)):v++,(t>>=1)}
0==--l&&((l=Math.pow(2,h)),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)(m=(m<<1)|(1&t)),v==o-1?((v=0),d.push(n(m)),(m=0)):v++,(t>>=1);0==--l&&((l=Math.pow(2,h)),h++)}
for(t=2,e=0;e<h;e++)(m=(m<<1)|(1&t)),v==o-1?((v=0),d.push(n(m)),(m=0)):v++,(t>>=1);for(;;){if(((m<<=1),v==o-1)){d.push(n(m));break}
v++}
return d.join("")},decompress:function(r){return null==r?"":""==r?null:i._decompress(r.length,32768,function(o){return r.charCodeAt(o)})},_decompress:function(r,o,n){if(null==r)return"";let e,t,i,s,u,a,p,c=[],l=4,f=4,h=3,d="",m=[],v={val:n(0),position:o,index:1};for(t=0;t<3;t+=1)c[t]=t;for(s=0,a=Math.pow(2,2),p=1;p!=a;)(u=v.val&v.position),v.position>>=1,0==v.position&&(v.position=o,v.val=n(v.index++)),s|=(u>0?1:0)*p,p<<=1;switch(s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)(u=v.val&v.position),v.position>>=1,0==v.position&&(v.position=o,v.val=n(v.index++)),s|=(u>0?1:0)*p,p<<=1;d=r(s);break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)(u=v.val&v.position),v.position>>=1,0==v.position&&(v.position=o,v.val=n(v.index++)),s|=(u>0?1:0)*p,p<<=1;d=r(s);break;case 2:return""}
for(c[3]=d,i=d,m.push(d);;){if(v.index>r)return"";for(s=0,a=Math.pow(2,h),p=1;p!=a;)(u=v.val&v.position),v.position>>=1,0==v.position&&(v.position=o,v.val=n(v.index++)),s|=(u>0?1:0)*p,p<<=1;switch(d=s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)(u=v.val&v.position),v.position>>=1,0==v.position&&(v.position=o,v.val=n(v.index++)),s|=(u>0?1:0)*p,p<<=1;c[f++]=r(s),d=f-1,l--;break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)(u=v.val&v.position),v.position>>=1,0==v.position&&(v.position=o,v.val=n(v.index++)),s|=(u>0?1:0)*p,p<<=1;c[f++]=r(s),d=f-1,l--;break;case 2:return m.join("")}
if(0==l&&(l=Math.pow(2,h),h++),c[d])d=c[d];else{if(d!==f)return null;d=i+i.charAt(0)}
m.push(d),(c[f++]=i+d.charAt(0)),(i=d),0==--l&&(l=Math.pow(2,h),h++)}}};return i})();module.exports=LZString
