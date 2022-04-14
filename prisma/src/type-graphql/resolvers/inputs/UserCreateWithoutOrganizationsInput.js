"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutOrganizationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserCreateWithoutOrganizationsInput = class UserCreateWithoutOrganizationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutOrganizationsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutOrganizationsInput.prototype, "email", void 0);
UserCreateWithoutOrganizationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutOrganizationsInput", {
        isAbstract: true
    })
], UserCreateWithoutOrganizationsInput);
exports.UserCreateWithoutOrganizationsInput = UserCreateWithoutOrganizationsInput;
