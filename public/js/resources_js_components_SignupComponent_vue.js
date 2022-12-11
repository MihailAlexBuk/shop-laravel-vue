"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SignupComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SignUpComponent",
  data: function data() {
    return {
      name: null,
      email: null,
      password: null
    };
  },
  mounted: function mounted() {
    this.onRegister();
  },
  methods: {
    onRegister: function onRegister() {
      var dataReg = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.axios.post('http://127.0.0.1:8000/register', dataReg).then(function (res) {
        console.log('Success');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "register"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.onRegister.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "d-flex flex-row align-items-center mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    staticStyle: {
      "margin-left": "0px"
    },
    attrs: {
      "for": "form3Example1c"
    }
  }, [_vm._v("Your Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      type: "text",
      id: "form3Example1c"
    },
    domProps: {
      value: _vm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-row align-items-center mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    staticStyle: {
      "margin-left": "0px"
    },
    attrs: {
      "for": "form3Example3c"
    }
  }, [_vm._v("Your Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.email,
      expression: "email"
    }],
    staticClass: "form-control",
    attrs: {
      name: "email",
      type: "email",
      id: "form3Example3c"
    },
    domProps: {
      value: _vm.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.email = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-row align-items-center mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    staticStyle: {
      "margin-left": "0px"
    },
    attrs: {
      "for": "form3Example4c"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password,
      expression: "password"
    }],
    staticClass: "form-control",
    attrs: {
      name: "password",
      type: "password",
      id: "form3Example4c",
      required: "",
      autocomplete: "new-password"
    },
    domProps: {
      value: _vm.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.password = $event.target.value;
      }
    }
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex flex-row align-items-center mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    staticStyle: {
      "margin-left": "0px"
    },
    attrs: {
      "for": "form3Example4cd"
    }
  }, [_vm._v("Repeat your password")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      name: "password_confirmation",
      type: "password",
      id: "form3Example4cd",
      required: "",
      autocomplete: "new-password"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center mx-4 mb-3 mb-lg-4"
  }, [_c("button", {
    staticClass: "btn btn-warning btn-lg",
    attrs: {
      type: "button"
    }
  }, [_vm._v("Register")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/SignupComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/SignupComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignupComponent.vue?vue&type=template&id=e902aeac& */ "./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac&");
/* harmony import */ var _SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignupComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SignupComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__.render,
  _SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SignupComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SignupComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SignupComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignupComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignupComponent.vue?vue&type=template&id=e902aeac& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac&");


/***/ })

}]);