"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateOrConnectWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationCreateWithoutUsersInput_1 = require("../inputs/OrganizationCreateWithoutUsersInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationCreateOrConnectWithoutUsersInput = class OrganizationCreateOrConnectWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationCreateOrConnectWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutUsersInput_1.OrganizationCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationCreateWithoutUsersInput_1.OrganizationCreateWithoutUsersInput)
], OrganizationCreateOrConnectWithoutUsersInput.prototype, "create", void 0);
OrganizationCreateOrConnectWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationCreateOrConnectWithoutUsersInput", {
        isAbstract: true
    })
], OrganizationCreateOrConnectWithoutUsersInput);
exports.OrganizationCreateOrConnectWithoutUsersInput = OrganizationCreateOrConnectWithoutUsersInput;
