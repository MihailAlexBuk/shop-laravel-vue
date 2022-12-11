"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_HomeComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "HomeComponent",
  mounted: function mounted() {
    this.loadSlider();
  },
  methods: {
    loadSlider: function loadSlider() {
      var tpj = jQuery;
      var revapi7;
      tpj(document).ready(function () {
        if (tpj("#rev_slider").revolution === undefined) {
          revslider_showDoubleJqueryError("#rev_slider");
        } else {
          revapi7 = tpj("#rev_slider").show().revolution({
            sliderType: "standard",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
              keyboardNavigation: "off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation: "off",
              onHoverStop: "on",
              touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 50,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              },
              arrows: {
                style: "gyges",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '',
                left: {
                  h_align: "left",
                  v_align: "center",
                  h_offset: 30,
                  v_offset: 0
                },
                right: {
                  h_align: "right",
                  v_align: "center",
                  h_offset: 30,
                  v_offset: 0
                }
              },
              bullets: {
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                style: "hephaistos",
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: ''
              }
            },
            gridwidth: 1170,
            gridheight: 600,
            lazyType: "smart",
            parallax: {
              type: "mouse",
              origo: "slidercenter",
              speed: 10000,
              levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: "off",
              nextSlideOnWindowFocus: "off",
              disableFocusListener: false
            }
          });
        }
      }); /*ready*/
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=782dcf83& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "content-container no-padding"
  }, [_c("div", {
    staticClass: "container-full"
  }, [_c("div", {
    staticClass: "main-content"
  }, [_c("div", {
    staticClass: "row row-fluid mb-10"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "rev_slider_wrapper fullwidthbanner-container"
  }, [_c("div", {
    staticClass: "rev_slider fullwidthabanner",
    attrs: {
      id: "rev_slider"
    }
  }, [_c("ul", [_c("li", {
    attrs: {
      "data-transition": "fade",
      "data-slotamount": "default",
      "data-easein": "default",
      "data-easeout": "default",
      "data-masterspeed": "default",
      "data-thumb": "",
      "data-rotate": "0",
      "data-saveperformance": "off",
      "data-title": "Slide"
    }
  }, [_c("img", {
    staticClass: "rev-slidebg",
    attrs: {
      src: "assets/images/slideshow/dummy.png",
      alt: "",
      width: "1920",
      height: "656",
      "data-lazyload": "images/slideshow/slider_1920x657.jpg",
      "data-bgposition": "center center",
      "data-bgfit": "cover",
      "data-bgrepeat": "no-repeat",
      "data-bgparallax": "off"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "tp-caption home1-small-black tp-resizeme",
    attrs: {
      "data-x": "586",
      "data-y": "217",
      "data-width": "['auto']",
      "data-height": "['auto']",
      "data-transform_idle": "o:1;",
      "data-transform_in": "y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;",
      "data-transform_out": "y:[100%];rZ:0deg;sX:0.7;sY:0.7;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;",
      "data-mask_in": "x:0px;y:0px;s:inherit;e:inherit;",
      "data-mask_out": "x:0;y:0;s:inherit;e:inherit;",
      "data-start": "500",
      "data-splitin": "chars",
      "data-splitout": "none",
      "data-responsive_offset": "on",
      "data-elementdelay": "0.05"
    }
  }, [_vm._v("\n                                                the best gadgets 2016\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "tp-caption primary-button rev-btn",
    attrs: {
      "data-x": "628",
      "data-y": "342",
      "data-width": "['auto']",
      "data-height": "['auto']",
      "data-transform_idle": "o:1;",
      "data-transform_hover": "o:1;rX:0;rY:0;rZ:0;z:0;s:0;e:Linear.easeNone;",
      "data-style_hover": "c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bs:solid;bw:1px;cursor:pointer;",
      "data-transform_in": "y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power2.easeInOut;",
      "data-transform_out": "y:[100%];rZ:0deg;sX:0.7;sY:0.7;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;",
      "data-mask_in": "x:0px;y:[100%];s:inherit;e:inherit;",
      "data-mask_out": "x:0;y:0;s:inherit;e:inherit;",
      "data-start": "500",
      "data-splitin": "none",
      "data-splitout": "none",
      "data-responsive_offset": "on",
      "data-responsive": "off"
    }
  }, [_vm._v("\n                                                shop now\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "tp-caption home1-primary tp-resizeme",
    attrs: {
      "data-x": "427",
      "data-y": "261",
      "data-width": "['auto']",
      "data-height": "['auto']",
      "data-transform_idle": "o:1;",
      "data-transform_in": "y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;",
      "data-transform_out": "y:[100%];rZ:0deg;sX:0.7;sY:0.7;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;",
      "data-mask_in": "x:0px;y:0px;s:inherit;e:inherit;",
      "data-mask_out": "x:0;y:0;s:inherit;e:inherit;",
      "data-start": "500",
      "data-splitin": "chars",
      "data-splitout": "none",
      "data-responsive_offset": "on",
      "data-elementdelay": "0.05"
    }
  }, [_vm._v("\n                                                changed is everything.\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "tp-caption tp-resizeme",
    attrs: {
      "data-x": "-391",
      "data-y": "-51",
      "data-width": "['none','none','none','none']",
      "data-height": "['none','none','none','none']",
      "data-transform_idle": "o:1;",
      "data-transform_in": "x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;",
      "data-transform_out": "x:[-100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;",
      "data-mask_in": "x:0px;y:0px;",
      "data-mask_out": "x:inherit;y:inherit;s:inherit;e:inherit;",
      "data-start": "500",
      "data-responsive_offset": "on"
    }
  }, [_c("img", {
    attrs: {
      src: "assets/images/slideshow/dummy.png",
      alt: "",
      width: "613",
      height: "707",
      "data-ww": "613px",
      "data-hh": "707px",
      "data-lazyload": "images/slideshow/imac.png"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "tp-caption tp-resizeme",
    attrs: {
      "data-x": "172",
      "data-y": "311",
      "data-width": "['none','none','none','none']",
      "data-height": "['none','none','none','none']",
      "data-transform_idle": "o:1;",
      "data-transform_in": "y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power2.easeInOut;",
      "data-transform_out": "y:[100%];s:1000;s:1000;",
      "data-mask_in": "x:0px;y:[100%];",
      "data-mask_out": "x:inherit;y:inherit;s:inherit;e:inherit;",
      "data-start": "500",
      "data-responsive_offset": "on"
    }
  }, [_c("img", {
    attrs: {
      src: "assets/images/slideshow/dummy.png",
      alt: "",
      width: "260",
      height: "303",
      "data-ww": "260px",
      "data-hh": "303px",
      "data-lazyload": "images/slideshow/ipad.png"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "tp-caption tp-resizeme",
    attrs: {
      "data-x": "281",
      "data-y": "390",
      "data-width": "['none','none','none','none']",
      "data-height": "['none','none','none','none']",
      "data-transform_idle": "o:1;",
      "data-transform_in": "y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power2.easeInOut;",
      "data-transform_out": "y:[100%];s:1000;s:1000;",
      "data-mask_in": "x:0px;y:[100%];",
      "data-mask_out": "x:inherit;y:inherit;s:inherit;e:inherit;",
      "data-start": "500",
      "data-responsive_offset": "on"
    }
  }, [_c("img", {
    attrs: {
      src: "assets/images/slideshow/dummy.png",
      alt: "",
      width: "221",
      height: "228",
      "data-ww": "221px",
      "data-hh": "228px",
      "data-lazyload": "images/slideshow/iphone.png"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "tp-caption tp-resizeme",
    attrs: {
      "data-x": "768",
      "data-y": "276",
      "data-width": "['none','none','none','none']",
      "data-height": "['none','none','none','none']",
      "data-transform_idle": "o:1;",
      "data-transform_in": "x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;",
      "data-transform_out": "x:[100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;",
      "data-mask_in": "x:0px;y:0px;",
      "data-mask_out": "x:inherit;y:inherit;s:inherit;e:inherit;",
      "data-start": "500",
      "data-responsive_offset": "on"
    }
  }, [_c("img", {
    attrs: {
      src: "assets/images/slideshow/dummy.png",
      alt: "",
      width: "694",
      height: "347",
      "data-ww": "694px",
      "data-hh": "347px",
      "data-lazyload": "images/slideshow/macbook.png"
    }
  })])]), _vm._v(" "), _c("li", {
    attrs: {
      "data-transition": "fade",
      "data-slotamount": "default",
      "data-easein": "default",
      "data-easeout": "default",
      "data-masterspeed": "default",
      "data-thumb": "",
      "data-rotate": "0",
      "data-saveperformance": "off",
      "data-title": "Slide"
    }
  }, [_c("img", {
    staticClass: "rev-slidebg",
    attrs: {
      src: "assets/images/slideshow/dummy.png",
      alt: "",
      "data-lazyload": "images/slideshow/slider_1920x657.jpg",
      "data-bgposition": "center center",
      "data-bgfit": "cover",
      "data-bgrepeat": "no-repeat",
      "data-bgparallax": "off"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "tp-caption tp-resizeme",
    attrs: {
      "data-x": "-191",
      "data-y": "46",
      "data-width": "['none','none','none','none']",
      "data-height": "['none','none','none','none']",
      "data-transform_idle": "o:1;",
      "data-transform_in": "x:-50px;opacity:0;s:300;e:Power2.easeInOut;",
      "data-transform_out": "x:-50px;opacity:0;s:300;s:300;",
      "data-start": "500",
      "data-responsive_offset": "on"
    }
  }, [_c("img", {
    attrs: {
      src: "assets/images/slideshow/dummy.png",
      alt: "",
      width: "704",
      height: "523",
      "data-ww": "704px",
      "data-hh": "523px",
      "data-lazyload": "images/slideshow/rev_img_home2.png"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "tp-caption home1-small-black tp-resizeme",
    attrs: {
      "data-x": "610",
      "data-y": "183",
      "data-width": "['auto']",
      "data-height": "['auto']",
      "data-transform_idle": "o:1;",
      "data-transform_in": "z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;s:1500;e:Power4.easeOut;",
      "data-transform_out": "y:[100%];rZ:0deg;sX:0.7;sY:0.7;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;",
      "data-mask_out": "x:0;y:0;s:inherit;e:inherit;",
      "data-start": "500",
      "data-splitin": "none",
      "data-splitout": "none",
      "data-responsive_offset": "on"
    }
  }, [_vm._v("\n                                                the best products 2015\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "tp-caption primary-button rev-btn",
    attrs: {
      "data-x": "610",
      "data-y": "402",
      "data-width": "['auto']",
      "data-height": "['auto']",
      "data-transform_idle": "o:1;",
      "data-transform_hover": "o:1;rX:0;rY:0;rZ:0;z:0;s:0;e:Linear.easeNone;",
      "data-style_hover": "c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bs:solid;bw:1px;cursor:pointer;",
      "data-transform_in": "z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;s:1500;e:Power4.easeOut;",
      "data-transform_out": "y:[100%];rZ:0deg;sX:0.7;sY:0.7;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;",
      "data-mask_out": "x:0;y:0;s:inherit;e:inherit;",
      "data-start": "500",
      "data-splitin": "none",
      "data-splitout": "none",
      "data-responsive_offset": "on",
      "data-responsive": "off"
    }
  }, [_vm._v("\n                                                shop now\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "tp-caption home1-primary tp-resizeme",
    attrs: {
      "data-x": "610",
      "data-y": "227",
      "data-width": "['auto']",
      "data-height": "['auto']",
      "data-transform_idle": "o:1;",
      "data-transform_in": "z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;s:1500;e:Power4.easeOut;",
      "data-transform_out": "y:[100%];rZ:0deg;sX:0.7;sY:0.7;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;",
      "data-mask_out": "x:0;y:0;s:inherit;e:inherit;",
      "data-start": "500",
      "data-splitin": "none",
      "data-splitout": "none",
      "data-responsive_offset": "on"
    }
  }, [_vm._v("\n                                                Built-in speakerphone\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "tp-caption home3-small-black tp-resizeme",
    attrs: {
      "data-x": "610",
      "data-y": "296",
      "data-width": "['auto']",
      "data-height": "['auto']",
      "data-transform_idle": "o:1;",
      "data-transform_in": "z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;s:1500;e:Power4.easeOut;",
      "data-transform_out": "y:[100%];rZ:0deg;sX:0.7;sY:0.7;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;",
      "data-mask_out": "x:0;y:0;s:inherit;e:inherit;",
      "data-start": "500",
      "data-splitin": "none",
      "data-splitout": "none",
      "data-responsive_offset": "on"
    }
  }, [_vm._v("\n                                                Suscipit aliquam lorem ornare consectetur integer urna"), _c("br"), _vm._v(" fermentum venenatis, molestie a non phasellus feugiat curae nam"), _c("br"), _vm._v(" orci convallis\n                                            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "tp-bannertimer tp-bottom"
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row row-fluid"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "align_center wpb_animate_when_almost_visible wpb_left-to-right mb-3"
  }, [_c("a", {
    attrs: {
      href: "#",
      target: "_blank"
    }
  }, [_c("div", {
    staticClass: "box_border_grey"
  }, [_c("img", {
    attrs: {
      width: "269",
      height: "342",
      src: "assets/images/thumb_269x342.jpg",
      alt: "featured_img_1"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "align_center mb-3"
  }, [_c("a", {
    attrs: {
      href: "#",
      target: "_blank"
    }
  }, [_c("div", {
    staticClass: "box_border_grey"
  }, [_c("img", {
    attrs: {
      width: "571",
      height: "342",
      src: "assets/images/thumb_570x341.jpg",
      alt: "featured_img_2"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "align_center wpb_animate_when_almost_visible wpb_right-to-left mb-3"
  }, [_c("a", {
    attrs: {
      href: "#",
      target: "_blank"
    }
  }, [_c("div", {
    staticClass: "box_border_grey"
  }, [_c("img", {
    attrs: {
      width: "269",
      height: "342",
      src: "assets/images/thumb_269x342.jpg",
      alt: "featured_img_3"
    }
  })])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-full"
  }, [_c("div", {
    staticClass: "row row-fluid hot-trend"
  }, [_c("div", {
    staticClass: "col-sm-6 pt-5 pb-5"
  }, [_c("div", {
    staticClass: "mb-0 mt-7 text-uppercase"
  }, [_c("p", {
    staticClass: "text-center"
  }, [_vm._v("\n                                        best offer of this month\n                                    ")])]), _vm._v(" "), _c("h3", {
    staticClass: "text-uppercase text-center mb-3"
  }, [_vm._v("\n                                    hot trends sales\n                                ")]), _vm._v(" "), _c("p", {
    staticClass: "text-center mb-5"
  }, [_vm._v("\n                                    Get Discount -50% for all Mens Clothes\n                                ")]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-default-outline btn-outline btn-align-center rounded",
    attrs: {
      href: "#",
      target: "_blank"
    }
  }, [_c("span", [_vm._v("shop now")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 hidden-xs"
  }, [_c("div", {
    staticClass: "align_center"
  }, [_c("div", {
    staticClass: "box_border_grey"
  }, [_c("img", {
    attrs: {
      width: "368",
      height: "521",
      src: "assets/images/thumb_368x521.png",
      alt: "home3_img_1"
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row row-fluid mb-5"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("h3", {
    staticClass: "heading-center-custom text-center"
  }, [_vm._v("\n                                    our of blog\n                                ")]), _vm._v(" "), _c("div", {
    staticClass: "post-grid-wrap"
  }, [_c("ul", {
    staticClass: "row grid col-3"
  }, [_c("li", {
    staticClass: "col-sm-4"
  }, [_c("article", {
    staticClass: "hentry"
  }, [_c("div", {
    staticClass: "hentry-wrap"
  }, [_c("div", {
    staticClass: "entry-featured"
  }, [_c("a", {
    attrs: {
      href: "blog-detail.html",
      title: "Blog-1"
    }
  }, [_c("img", {
    attrs: {
      width: "600",
      height: "450",
      src: "assets/images/blog/blog_370x238.jpg",
      alt: "Blog-1"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "entry-info"
  }, [_c("div", {
    staticClass: "entry-header"
  }, [_c("h3", {
    staticClass: "entry-title"
  }, [_c("a", {
    attrs: {
      href: "blog-detail.html"
    }
  }, [_vm._v("Monogrammed Speedy in Tow ")])])]), _vm._v(" "), _c("div", {
    staticClass: "entry-content"
  }, [_c("p", [_vm._v("\n                                                                The summer holidays are wonderful. Dressing for them can be significantly less so: Packing light is always at a premium, but one never wants to feel high, dry, and seriously...\n                                                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "entry-meta"
  }, [_c("span", {
    staticClass: "meta-date"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("time", {
    attrs: {
      datetime: "2015-08-11T06:27:49+00:00"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAugust 11, 2015\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("span", {
    staticClass: "meta-author"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBy:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("sitesao")])]), _vm._v(" "), _c("span", {
    staticClass: "meta-category"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCategory:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Aliquam")]), _vm._v(", "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Nunc")])])])])])])]), _vm._v(" "), _c("li", {
    staticClass: "col-sm-4"
  }, [_c("article", {
    staticClass: "hentry"
  }, [_c("div", {
    staticClass: "hentry-wrap"
  }, [_c("div", {
    staticClass: "entry-featured"
  }, [_c("a", {
    attrs: {
      href: "blog-detail.html",
      title: "Blog-1"
    }
  }, [_c("img", {
    attrs: {
      width: "600",
      height: "450",
      src: "assets/images/blog/blog_370x238.jpg",
      alt: "Blog-2"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "entry-info"
  }, [_c("div", {
    staticClass: "entry-header"
  }, [_c("h3", {
    staticClass: "entry-title"
  }, [_c("a", {
    attrs: {
      href: "blog-detail.html"
    }
  }, [_vm._v("Summer Classics in Positano ")])])]), _vm._v(" "), _c("div", {
    staticClass: "entry-content"
  }, [_c("p", [_vm._v("\n                                                                The summer holidays are wonderful. Dressing for them can be significantly less so: Packing light is always at a premium, but one never wants to feel high, dry, and seriously...\n                                                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "entry-meta"
  }, [_c("span", {
    staticClass: "meta-date"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("time", {
    attrs: {
      datetime: "2015-08-11T06:27:49+00:00"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAugust 11, 2015\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("span", {
    staticClass: "meta-author"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBy:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("sitesao")])]), _vm._v(" "), _c("span", {
    staticClass: "meta-category"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCategory:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Nunc")])])])])])])]), _vm._v(" "), _c("li", {
    staticClass: "col-sm-4"
  }, [_c("article", {
    staticClass: "hentry"
  }, [_c("div", {
    staticClass: "hentry-wrap"
  }, [_c("div", {
    staticClass: "entry-featured"
  }, [_c("a", {
    attrs: {
      href: "blog-detail.html",
      title: "Blog-1"
    }
  }, [_c("img", {
    attrs: {
      width: "600",
      height: "450",
      src: "assets/images/blog/blog_370x238.jpg",
      alt: "Blog-3"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "entry-info"
  }, [_c("div", {
    staticClass: "entry-header"
  }, [_c("h3", {
    staticClass: "entry-title"
  }, [_c("a", {
    attrs: {
      href: "blog-detail.html"
    }
  }, [_vm._v("That Most Modern ")])])]), _vm._v(" "), _c("div", {
    staticClass: "entry-content"
  }, [_c("p", [_vm._v("\n                                                                The summer holidays are wonderful. Dressing for them can be significantly less so: Packing light is always at a premium, but one never wants to feel high, dry, and seriously...\n                                                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "entry-meta"
  }, [_c("span", {
    staticClass: "meta-date"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("time", {
    attrs: {
      datetime: "2015-08-11T06:27:49+00:00"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAugust 11, 2015\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("span", {
    staticClass: "meta-author"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBy:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("sitesao")])]), _vm._v(" "), _c("span", {
    staticClass: "meta-category"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCategory:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Nunc")]), _vm._v(", "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Aliquam")])])])])])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row row-fluid mb-4"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "client client-slider"
  }, [_c("div", {
    staticClass: "caroufredsel",
    attrs: {
      "data-height": "variable",
      "data-visible-min": "1",
      "data-visible-max": "4",
      "data-responsive": "1",
      "data-infinite": "1",
      "data-autoplay": "1",
      "data-speed": "15000"
    }
  }, [_c("div", {
    staticClass: "caroufredsel-wrap"
  }, [_c("ul", {
    staticClass: "caroufredsel-items row"
  }, [_c("li", {
    staticClass: "caroufredsel-item col-md-3"
  }, [_c("a", {
    attrs: {
      target: "_blank",
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      alt: "",
      src: "assets/images/client/client_270x100.png"
    }
  })])]), _vm._v(" "), _c("li", {
    staticClass: "caroufredsel-item col-md-3"
  }, [_c("a", {
    attrs: {
      target: "_blank",
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      alt: "",
      src: "assets/images/client/client_270x100.png"
    }
  })])]), _vm._v(" "), _c("li", {
    staticClass: "caroufredsel-item col-md-3"
  }, [_c("a", {
    attrs: {
      target: "_blank",
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      alt: "",
      src: "assets/images/client/client_270x100.png"
    }
  })])]), _vm._v(" "), _c("li", {
    staticClass: "caroufredsel-item col-md-3"
  }, [_c("a", {
    attrs: {
      target: "_blank",
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      alt: "",
      src: "assets/images/client/client_270x100.png"
    }
  })])]), _vm._v(" "), _c("li", {
    staticClass: "caroufredsel-item col-md-3"
  }, [_c("a", {
    attrs: {
      target: "_blank",
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      alt: "",
      src: "assets/images/client/client_270x100.png"
    }
  })])]), _vm._v(" "), _c("li", {
    staticClass: "caroufredsel-item col-md-3"
  }, [_c("a", {
    attrs: {
      target: "_blank",
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      alt: "",
      src: "assets/images/client/client_270x100.png"
    }
  })])])]), _vm._v(" "), _c("a", {
    staticClass: "caroufredsel-prev",
    attrs: {
      href: "#"
    }
  }), _vm._v(" "), _c("a", {
    staticClass: "caroufredsel-next",
    attrs: {
      href: "#"
    }
  })])])])])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/HomeComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeComponent_vue_vue_type_template_id_782dcf83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=782dcf83& */ "./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&");
/* harmony import */ var _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeComponent_vue_vue_type_template_id_782dcf83___WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeComponent_vue_vue_type_template_id_782dcf83___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=782dcf83& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=782dcf83& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&");


/***/ })

}]);
