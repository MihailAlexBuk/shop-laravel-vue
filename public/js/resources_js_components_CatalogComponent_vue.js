"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CatalogComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CatalogComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CatalogComponent",
  mounted: function mounted() {
    this.getProducts();
  },
  data: function data() {
    return {
      products: null,
      pagination: []
    };
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.axios.post("http://127.0.0.1:8000/api/products", {
        'page': page
      }).then(function (res) {
        _this.products = res.data.data;
        _this.pagination = res.data.meta;
      });
    },
    newPrice: function newPrice(oldPrice, discount) {
      return oldPrice - oldPrice * discount / 100;
    },
    roundPrice: function roundPrice(price) {
      return Math.round(price * 100) / 100;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CatalogComponent.vue?vue&type=template&id=0c212d62&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalog.vue?vue&type=template&id=0c212d62& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "content-container commerce page-layout-left-sidebar"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-9 main-wrap"
  }, [_c("div", {
    staticClass: "main-content"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "shop-loop grid"
  }, [_c("ul", {
    staticClass: "products"
  }, _vm._l(_vm.products, function (product) {
    return _c("li", {
      staticClass: "product product-no-border style-2 col-md-3 col-sm-6"
    }, [_c("div", {
      staticClass: "product-container"
    }, [_c("figure", [_c("div", {
      staticClass: "product-wrap"
    }, [_c("div", {
      staticClass: "product-images"
    }, [product.discount > 0 ? _c("span", {
      staticClass: "onsale"
    }, [_vm._v("Sale!")]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "shop-loop-thumbnail shop-loop-front-thumbnail"
    }, [_c("router-link", {
      attrs: {
        to: "shop-detail-1.html"
      }
    }, [_c("img", {
      attrs: {
        width: "450",
        height: "450",
        src: product.image_url_1,
        alt: ""
      }
    })])], 1)])]), _vm._v(" "), _c("figcaption", [_c("div", {
      staticClass: "shop-loop-product-info"
    }, [_vm._m(2, true), _vm._v(" "), _c("div", {
      staticClass: "info-content-wrap"
    }, [_c("h3", {
      staticClass: "product_title"
    }, [_c("a", {
      attrs: {
        href: "shop-detail-1.html"
      }
    }, [_vm._v(_vm._s(product.title))])]), _vm._v(" "), _c("div", {
      staticClass: "info-price"
    }, [product.discount > 0 ? _c("span", {
      staticClass: "price"
    }, [_c("del", [_c("span", {
      staticClass: "amount"
    }, [_vm._v(_vm._s(product.price) + "$")])]), _vm._v(" "), _c("ins", [_c("span", {
      staticClass: "amount"
    }, [_vm._v(_vm._s(_vm.roundPrice(_vm.newPrice(product.price, product.discount))) + "$")])])]) : _c("span", {
      staticClass: "price"
    }, [_c("ins", [_c("span", {
      staticClass: "amount"
    }, [_vm._v(_vm._s(product.price) + "$")])])])]), _vm._v(" "), _vm._m(3, true)])])])])])]);
  }), 0)]), _vm._v(" "), _c("nav", {
    staticClass: "commerce-pagination text-center",
    staticStyle: {
      "font-size": "20px"
    }
  }, [_c("ul", {
    staticClass: "pagination"
  }, [_vm.pagination.current_page !== 1 ? _c("li", {
    staticClass: "next"
  }, [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.getProducts(_vm.pagination.current_page - 1);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-angle-left",
    attrs: {
      "aria-hidden": "true"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.pagination.links, function (link) {
    return _c("li", [Number(link.label) && _vm.pagination.current_page - link.label < 2 && _vm.pagination.current_page - link.label > -2 || Number(link.lavel) === 1 || Number(link.lavel) === _vm.pagination.last_page ? [_c("a", {
      "class": link.active ? "active" : "",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.getProducts(link.label);
        }
      }
    }, [_vm._v(_vm._s(link.label))])] : _vm._e(), _vm._v(" "), Number(link.label) && _vm.pagination.current_page !== 3 && _vm.pagination.current_page - link.label === 2 || Number(link.label) && _vm.pagination.current_page !== _vm.pagination.last_page - 2 && _vm.pagination.current_page - link.label === -2 ? [_c("a", [_vm._v("...")])] : _vm._e()], 2);
  }), _vm._v(" "), _vm.pagination.current_page !== _vm.pagination.last_page ? _c("li", {
    staticClass: "next"
  }, [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.getProducts(_vm.pagination.current_page + 1);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-angle-right",
    attrs: {
      "aria-hidden": "true"
    }
  })])]) : _vm._e()], 2)])])]), _vm._v(" "), _vm._m(4)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "heading-container heading-resize heading-no-button"
  }, [_c("div", {
    staticClass: "heading-background heading-parallax bg-shop"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "heading-wrap"
  }, [_c("div", {
    staticClass: "page-title"
  }, [_c("h1", [_vm._v("Laptop")]), _vm._v(" "), _c("div", {
    staticClass: "page-breadcrumb"
  }, [_c("ul", {
    staticClass: "breadcrumb"
  }, [_c("li", [_c("span", [_c("a", {
    staticClass: "home",
    attrs: {
      href: "#"
    }
  }, [_c("span", [_vm._v("Home")])])])]), _vm._v(" "), _c("li", [_c("span", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("span", [_vm._v("Shop")])])])])])])])])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "shop-toolbar"
  }, [_c("form", {
    staticClass: "commerce-ordering clearfix"
  }, [_c("div", {
    staticClass: "commerce-ordering-select"
  }, [_c("label", {
    staticClass: "hide"
  }, [_vm._v("Sorting:")]), _vm._v(" "), _c("div", {
    staticClass: "form-flat-select"
  }, [_c("select", {
    staticClass: "orderby",
    attrs: {
      name: "orderby"
    }
  }, [_c("option", {
    attrs: {
      value: "",
      selected: "selected"
    }
  }, [_vm._v("Default sorting")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Sort by popularity")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Sort by average rating")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Sort by newness")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Sort by price: low to high")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Sort by price: high to low")])]), _vm._v(" "), _c("i", {
    staticClass: "fa fa-angle-down"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "commerce-ordering-select"
  }, [_c("label", {
    staticClass: "hide"
  }, [_vm._v("Show:")]), _vm._v(" "), _c("div", {
    staticClass: "form-flat-select"
  }, [_c("select", {
    staticClass: "per_page",
    attrs: {
      name: "per_page"
    }
  }, [_c("option", {
    attrs: {
      value: "",
      selected: "selected"
    }
  }, [_vm._v("12")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("24")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("36")])]), _vm._v(" "), _c("i", {
    staticClass: "fa fa-angle-down"
  })])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "info-meta clearfix"
  }, [_c("div", {
    staticClass: "star-rating"
  }, [_c("span", {
    staticStyle: {
      width: "0%"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "loop-add-to-wishlist"
  }, [_c("div", {
    staticClass: "yith-wcwl-add-to-wishlist"
  }, [_c("div", {
    staticClass: "yith-wcwl-add-button"
  }, [_c("a", {
    staticClass: "add_to_wishlist",
    attrs: {
      href: "#"
    }
  }, [_vm._v("\n                                                                            Add to Wishlist\n                                                                        ")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "loop-action"
  }, [_c("div", {
    staticClass: "loop-add-to-cart"
  }, [_c("a", {
    staticClass: "add_to_cart_button",
    attrs: {
      href: "#"
    }
  }, [_vm._v("\n                                                                        Add to cart\n                                                                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-3 sidebar-wrap"
  }, [_c("div", {
    staticClass: "main-sidebar"
  }, [_c("div", {
    staticClass: "widget commerce widget_product_search"
  }, [_c("h4", {
    staticClass: "widget-title"
  }, [_c("span", [_vm._v("Product Search")])]), _vm._v(" "), _c("form", {
    staticClass: "commerce-product-search"
  }, [_c("label", {
    staticClass: "screen-reader-text",
    attrs: {
      "for": "s"
    }
  }, [_vm._v("Search for:")]), _vm._v(" "), _c("input", {
    staticClass: "search-field rounded",
    attrs: {
      type: "search",
      placeholder: "Search Products&hellip;",
      value: "",
      id: "s"
    }
  }), _vm._v(" "), _c("input", {
    attrs: {
      type: "submit",
      value: "Search"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "widget widget_layered_nav"
  }, [_c("h4", {
    staticClass: "widget-title"
  }, [_c("span", [_vm._v("Filter by Color")])]), _vm._v(" "), _c("ul", [_c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Black")]), _vm._v(" "), _c("span", {
    staticClass: "count"
  }, [_vm._v("(1)")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Blue")]), _vm._v(" "), _c("span", {
    staticClass: "count"
  }, [_vm._v("(1)")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Brown")]), _vm._v(" "), _c("span", {
    staticClass: "count"
  }, [_vm._v("(1)")])])])]), _vm._v(" "), _c("div", {
    staticClass: "widget widget_price_filter"
  }, [_c("h4", {
    staticClass: "widget-title"
  }, [_c("span", [_vm._v("Price")])]), _vm._v(" "), _c("form", [_c("div", {
    staticClass: "price_slider_wrapper"
  }, [_c("div", {
    staticClass: "price_slider"
  }), _vm._v(" "), _c("div", {
    staticClass: "price_slider_amount"
  }, [_c("input", {
    attrs: {
      type: "text",
      id: "min_price",
      name: "min_price",
      value: "",
      "data-min": "10",
      placeholder: "Min price"
    }
  }), _vm._v(" "), _c("input", {
    attrs: {
      type: "text",
      id: "max_price",
      name: "max_price",
      value: "",
      "data-max": "732",
      placeholder: "Max price"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "button",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Filter")]), _vm._v(" "), _c("div", {
    staticClass: "price_label"
  }, [_vm._v("\n                                                Price: "), _c("span", {
    staticClass: "from"
  }), _vm._v(" — "), _c("span", {
    staticClass: "to"
  })]), _vm._v(" "), _c("div", {
    staticClass: "clear"
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "widget widget_layered_nav"
  }, [_c("h4", {
    staticClass: "widget-title"
  }, [_c("span", [_vm._v("Brands")])]), _vm._v(" "), _c("ul", [_c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Adesso")]), _vm._v(" "), _c("small", {
    staticClass: "count"
  }, [_vm._v("11")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Barbour")]), _vm._v(" "), _c("small", {
    staticClass: "count"
  }, [_vm._v("6")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Carvela")]), _vm._v(" "), _c("small", {
    staticClass: "count"
  }, [_vm._v("9")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Crocs")]), _vm._v(" "), _c("small", {
    staticClass: "count"
  }, [_vm._v("10")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Evans")]), _vm._v(" "), _c("small", {
    staticClass: "count"
  }, [_vm._v("12")])])])]), _vm._v(" "), _c("div", {
    staticClass: "widget widget_product_categories"
  }, [_c("h4", {
    staticClass: "widget-title"
  }, [_c("span", [_vm._v("Categories")])]), _vm._v(" "), _c("ul", {
    staticClass: "product-categories"
  }, [_c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Aliquam")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Donec")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Fusce")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Maecenas")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Nulla")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Proin")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Tortor")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Various")])])])]), _vm._v(" "), _c("div", {
    staticClass: "widget widget_products"
  }, [_c("h4", {
    staticClass: "widget-title"
  }, [_c("span", [_vm._v("Best Sellers")])]), _vm._v(" "), _c("ul", {
    staticClass: "product_list_widget"
  }, [_c("li", [_c("a", {
    attrs: {
      href: "shop-detail-1.html"
    }
  }, [_c("img", {
    attrs: {
      width: "200",
      height: "200",
      src: "assets/images/products/product_60x60.jpg",
      alt: "Product-1"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "product-title"
  }, [_vm._v("Donec tincidunt justo")])]), _vm._v(" "), _c("del", [_c("span", {
    staticClass: "amount"
  }, [_vm._v("20.50$")])]), _vm._v(" "), _c("ins", [_c("span", {
    staticClass: "amount"
  }, [_vm._v("19.00$")])])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "shop-detail-1.html"
    }
  }, [_c("img", {
    attrs: {
      width: "200",
      height: "200",
      src: "assets/images/products/product_60x60.jpg",
      alt: "Product-2"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "product-title"
  }, [_vm._v("Mauris egestas")])]), _vm._v(" "), _c("span", {
    staticClass: "amount"
  }, [_vm._v("14.95$")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "shop-detail-1.html"
    }
  }, [_c("img", {
    attrs: {
      width: "200",
      height: "200",
      src: "assets/images/products/product_60x60.jpg",
      alt: "Product-9"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "product-title"
  }, [_vm._v("Morbi fermentum")])]), _vm._v(" "), _c("span", {
    staticClass: "amount"
  }, [_vm._v("17.45$")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "shop-detail-1.html"
    }
  }, [_c("img", {
    attrs: {
      width: "200",
      height: "200",
      src: "assets/images/products/product_60x60.jpg",
      alt: "Product-8"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "product-title"
  }, [_vm._v("Morbi fermentum")])]), _vm._v(" "), _c("span", {
    staticClass: "amount"
  }, [_vm._v("23.00$")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "shop-detail-1.html"
    }
  }, [_c("img", {
    attrs: {
      width: "200",
      height: "200",
      src: "assets/images/products/product_60x60.jpg",
      alt: "Product-7"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "product-title"
  }, [_vm._v("Ut quis Aenean")])]), _vm._v(" "), _c("span", {
    staticClass: "amount"
  }, [_vm._v("10.95$")])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/CatalogComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Catalog.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CatalogComponent_vue_vue_type_template_id_0c212d62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Catalog.vue?vue&type=template&id=0c212d62& */ "./resources/js/components/CatalogComponent.vue?vue&type=template&id=0c212d62&");
/* harmony import */ var _CatalogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalog.vue?vue&type=script&lang=js& */ "./resources/js/components/CatalogComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CatalogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CatalogComponent_vue_vue_type_template_id_0c212d62___WEBPACK_IMPORTED_MODULE_0__.render,
  _CatalogComponent_vue_vue_type_template_id_0c212d62___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Catalog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CatalogComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Catalog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CatalogComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/CatalogComponent.vue?vue&type=template&id=0c212d62&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Catalog.vue?vue&type=template&id=0c212d62& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogComponent_vue_vue_type_template_id_0c212d62___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogComponent_vue_vue_type_template_id_0c212d62___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogComponent_vue_vue_type_template_id_0c212d62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalog.vue?vue&type=template&id=0c212d62& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CatalogComponent.vue?vue&type=template&id=0c212d62&");


/***/ })

}]);
