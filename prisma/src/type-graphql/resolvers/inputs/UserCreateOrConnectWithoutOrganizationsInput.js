"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutOrganizationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutOrganizationsInput_1 = require("../inputs/UserCreateWithoutOrganizationsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutOrganizationsInput = class UserCreateOrConnectWithoutOrganizationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutOrganizationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOrganizationsInput_1.UserCreateWithoutOrganizationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOrganizationsInput_1.UserCreateWithoutOrganizationsInput)
], UserCreateOrConnectWithoutOrganizationsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutOrganizationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutOrganizationsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutOrganizationsInput);
exports.UserCreateOrConnectWithoutOrganizationsInput = UserCreateOrConnectWithoutOrganizationsInput;
