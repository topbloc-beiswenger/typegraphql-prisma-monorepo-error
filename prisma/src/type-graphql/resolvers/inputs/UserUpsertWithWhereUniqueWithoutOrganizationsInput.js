"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutOrganizationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutOrganizationsInput_1 = require("../inputs/UserCreateWithoutOrganizationsInput");
const UserUpdateWithoutOrganizationsInput_1 = require("../inputs/UserUpdateWithoutOrganizationsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutOrganizationsInput = class UserUpsertWithWhereUniqueWithoutOrganizationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpsertWithWhereUniqueWithoutOrganizationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutOrganizationsInput_1.UserUpdateWithoutOrganizationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutOrganizationsInput_1.UserUpdateWithoutOrganizationsInput)
], UserUpsertWithWhereUniqueWithoutOrganizationsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOrganizationsInput_1.UserCreateWithoutOrganizationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOrganizationsInput_1.UserCreateWithoutOrganizationsInput)
], UserUpsertWithWhereUniqueWithoutOrganizationsInput.prototype, "create", void 0);
UserUpsertWithWhereUniqueWithoutOrganizationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutOrganizationsInput", {
        isAbstract: true
    })
], UserUpsertWithWhereUniqueWithoutOrganizationsInput);
exports.UserUpsertWithWhereUniqueWithoutOrganizationsInput = UserUpsertWithWhereUniqueWithoutOrganizationsInput;
