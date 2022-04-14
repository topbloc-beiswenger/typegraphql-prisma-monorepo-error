"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedManyWithoutOrganizationsInput_1 = require("../inputs/UserCreateNestedManyWithoutOrganizationsInput");
let OrganizationCreateInput = class OrganizationCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutOrganizationsInput_1.UserCreateNestedManyWithoutOrganizationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutOrganizationsInput_1.UserCreateNestedManyWithoutOrganizationsInput)
], OrganizationCreateInput.prototype, "users", void 0);
OrganizationCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationCreateInput", {
        isAbstract: true
    })
], OrganizationCreateInput);
exports.OrganizationCreateInput = OrganizationCreateInput;
