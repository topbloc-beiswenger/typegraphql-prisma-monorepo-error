"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutOrganizationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutOrganizationsInput_1 = require("../inputs/UserUpdateWithoutOrganizationsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutOrganizationsInput = class UserUpdateWithWhereUniqueWithoutOrganizationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateWithWhereUniqueWithoutOrganizationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutOrganizationsInput_1.UserUpdateWithoutOrganizationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutOrganizationsInput_1.UserUpdateWithoutOrganizationsInput)
], UserUpdateWithWhereUniqueWithoutOrganizationsInput.prototype, "data", void 0);
UserUpdateWithWhereUniqueWithoutOrganizationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutOrganizationsInput", {
        isAbstract: true
    })
], UserUpdateWithWhereUniqueWithoutOrganizationsInput);
exports.UserUpdateWithWhereUniqueWithoutOrganizationsInput = UserUpdateWithWhereUniqueWithoutOrganizationsInput;
