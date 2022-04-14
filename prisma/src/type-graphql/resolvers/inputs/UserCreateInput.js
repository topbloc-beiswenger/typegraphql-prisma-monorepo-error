"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationCreateNestedManyWithoutUsersInput_1 = require("../inputs/OrganizationCreateNestedManyWithoutUsersInput");
let UserCreateInput = class UserCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationCreateNestedManyWithoutUsersInput_1.OrganizationCreateNestedManyWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationCreateNestedManyWithoutUsersInput_1.OrganizationCreateNestedManyWithoutUsersInput)
], UserCreateInput.prototype, "organizations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "email", void 0);
UserCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateInput", {
        isAbstract: true
    })
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
