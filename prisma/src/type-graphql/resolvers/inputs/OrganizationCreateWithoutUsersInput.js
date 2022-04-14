"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrganizationCreateWithoutUsersInput = class OrganizationCreateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationCreateWithoutUsersInput.prototype, "name", void 0);
OrganizationCreateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationCreateWithoutUsersInput", {
        isAbstract: true
    })
], OrganizationCreateWithoutUsersInput);
exports.OrganizationCreateWithoutUsersInput = OrganizationCreateWithoutUsersInput;
