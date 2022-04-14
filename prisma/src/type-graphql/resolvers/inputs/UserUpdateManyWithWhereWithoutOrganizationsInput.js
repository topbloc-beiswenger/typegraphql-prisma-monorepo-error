"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithWhereWithoutOrganizationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyMutationInput_1 = require("../inputs/UserUpdateManyMutationInput");
let UserUpdateManyWithWhereWithoutOrganizationsInput = class UserUpdateManyWithWhereWithoutOrganizationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserScalarWhereInput_1.UserScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserScalarWhereInput_1.UserScalarWhereInput)
], UserUpdateManyWithWhereWithoutOrganizationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyMutationInput_1.UserUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateManyMutationInput_1.UserUpdateManyMutationInput)
], UserUpdateManyWithWhereWithoutOrganizationsInput.prototype, "data", void 0);
UserUpdateManyWithWhereWithoutOrganizationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithWhereWithoutOrganizationsInput", {
        isAbstract: true
    })
], UserUpdateManyWithWhereWithoutOrganizationsInput);
exports.UserUpdateManyWithWhereWithoutOrganizationsInput = UserUpdateManyWithWhereWithoutOrganizationsInput;
