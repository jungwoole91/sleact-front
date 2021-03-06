"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var component_1 = __importDefault(require("@loadable/component"));
var LogIn = (0, component_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@pages/LogIn')); }); });
var SignUp = (0, component_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@pages/SignUp')); }); });
var Workspace = (0, component_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@layouts/Workspace')); }); });
var Index = function () {
    // @ts-ignore
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(react_router_dom_1.Redirect, { exact: true, path: '/', to: "/login" }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/login", component: LogIn }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/signup", component: SignUp }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/workspace/:workspace", component: Workspace })));
};
exports.default = Index;
//# sourceMappingURL=index.js.map