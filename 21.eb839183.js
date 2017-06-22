webpackJsonp([21],{"6b5A":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[[a("h1",[t._v("圆形")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("在地图中添加圆形")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[a("bm-circle",{attrs:{center:t.circlePath.center,radius:t.circlePath.radius,editing:!0},on:{lineupdate:t.updateCirclePath}})],1),t._v(" "),a("div",{staticClass:"toolbar"},[a("table",[a("thead",[a("tr",[a("th",[t._v("圆心经度")]),t._v(" "),a("th",[t._v("圆心纬度")]),t._v(" "),a("th",[t._v("半径")])]),a("tr")]),t._v(" "),a("tbody",[a("tr",[a("td",[a("text-field",{attrs:{pattern:"-?[0-9]*(\\.[0-9]+)?"},model:{value:t.circlePath.center.lng,callback:function(e){t.circlePath.center.lng=t._n(e)},expression:"circlePath.center.lng"}})],1),t._v(" "),a("td",[a("text-field",{attrs:{pattern:"-?[0-9]*(\\.[0-9]+)?"},model:{value:t.circlePath.center.lat,callback:function(e){t.circlePath.center.lat=t._n(e)},expression:"circlePath.center.lat"}})],1),t._v(" "),a("td",[a("text-field",{attrs:{pattern:"-?[0-9]*(\\.[0-9]+)?"},model:{value:t.circlePath.radius,callback:function(e){t.circlePath.radius=t._n(e)},expression:"circlePath.radius"}})],1)])])])])],1)]],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("code",[t._v("BmCircle")]),t._v(" 圆形覆盖物组件由于内部实现所局限，在可编辑状态下进行双向绑定时更新 model 会重置组件状态。")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("center")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Point")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("圆心，单位为米")])]),t._v(" "),a("tr",[a("td",[t._v("radius")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("半径，单位为米")])]),t._v(" "),a("tr",[a("td",[t._v("strokeColor")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("折线颜色")])]),t._v(" "),a("tr",[a("td",[t._v("strokeWeight")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("折线的宽度，以像素为单位")])]),t._v(" "),a("tr",[a("td",[t._v("strokeOpacity")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("折线的透明度，取值范围0 - 1")])]),t._v(" "),a("tr",[a("td",[t._v("strokeStyle")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'solid'")]),t._v(" "),a("td",[t._v("折线的样式，solid或dashed")])]),t._v(" "),a("tr",[a("td",[t._v("fillColor")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("填充颜色。当参数为空时，折线覆盖物将没有填充效果")])]),t._v(" "),a("tr",[a("td",[t._v("fillOpacity")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("填充的透明度，取值范围0 - 1")])]),t._v(" "),a("tr",[a("td",[t._v("enableMassClear")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("是否在调用map.clearOverlays清除此覆盖物")])]),t._v(" "),a("tr",[a("td",[t._v("enableEditing")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",[t._v("是否启用线编辑")])]),t._v(" "),a("tr",[a("td",[t._v("enableClicking")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("是否响应点击事件")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("click")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("鼠标点击圆形后会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("dblclick")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("鼠标双击圆形后会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mousedown")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("鼠标在圆形上按下触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mouseup")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("鼠标在圆形释放触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mouseout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("鼠标离开圆形时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mouseover")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("当鼠标进入圆形区域时会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("remove")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("移除圆形时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("lineupdate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("圆形覆盖物的属性发生变化时触发此事件")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-circle")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"circlePath.center"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":radius")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"circlePath.radius"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("stroke-color")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"blue"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":stroke-opacity")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"0.5"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":stroke-weight")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@lineupdate")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"updateCirclePath"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":editing")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-circle")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("circlePath")]),t._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[t._v("center")]),t._v(": {\n          "),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(",\n          "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("\n        },\n        "),a("span",{staticClass:"hljs-attr"},[t._v("radius")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("500")]),t._v("\n      }\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    updateCirclePath (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".circlePath.center = e.target.getCenter()\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".circlePath.radius = e.target.getRadius()\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},"7xcH":function(t,e,a){var s=a("VU/8")(a("xr/H"),a("6b5A"),null,null);t.exports=s.exports},xhcv:function(t,e,a){t.exports=a("7xcH")},"xr/H":function(t,e,a){var s,v,l;!function(a,n){v=[t,e],s=n,void 0!==(l="function"==typeof s?s.apply(e,v):s)&&(t.exports=l)}(0,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{circlePath:{center:{lng:116.404,lat:39.915},radius:500}}},methods:{updateCirclePath:function(t){this.circlePath.center=t.target.getCenter(),this.circlePath.radius=t.target.getRadius()}}},t.exports=e.default})}});