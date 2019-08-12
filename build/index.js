"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var login_routes_1 = __importDefault(require("./routes/login.routes"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(login_routes_1.default);
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
