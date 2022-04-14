"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutOrganizationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutOrganizationsInput_1 = require("../inputs/UserCreateOrConnectWithoutOrganizationsInput");
const UserCreateWithoutOrganizationsInput_1 = require("../inputs/UserCreateWithoutOrganizationsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutOrganizationsInput = class UserCreateNestedManyWithoutOrganizationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutOrganizationsInput_1.UserCreateWithoutOrganizationsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutOrganizationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutOrganizationsInput_1.UserCreateOrConnectWithoutOrganizationsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutOrganizationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutOrganizationsInput.prototype, "connect", void 0);
UserCreateNestedManyWithoutOrganizationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutOrganizationsInput", {
        isAbstract: true
    })
], UserCreateNestedManyWithoutOrganizationsInput);
exports.UserCreateNestedManyWithoutOrganizationsInput = UserCreateNestedManyWithoutOrganizationsInput;
