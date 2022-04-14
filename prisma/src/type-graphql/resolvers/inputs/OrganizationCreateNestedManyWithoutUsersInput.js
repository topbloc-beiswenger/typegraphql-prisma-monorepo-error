"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateNestedManyWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationCreateOrConnectWithoutUsersInput_1 = require("../inputs/OrganizationCreateOrConnectWithoutUsersInput");
const OrganizationCreateWithoutUsersInput_1 = require("../inputs/OrganizationCreateWithoutUsersInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationCreateNestedManyWithoutUsersInput = class OrganizationCreateNestedManyWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationCreateWithoutUsersInput_1.OrganizationCreateWithoutUsersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationCreateNestedManyWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationCreateOrConnectWithoutUsersInput_1.OrganizationCreateOrConnectWithoutUsersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationCreateNestedManyWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationCreateNestedManyWithoutUsersInput.prototype, "connect", void 0);
OrganizationCreateNestedManyWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationCreateNestedManyWithoutUsersInput", {
        isAbstract: true
    })
], OrganizationCreateNestedManyWithoutUsersInput);
exports.OrganizationCreateNestedManyWithoutUsersInput = OrganizationCreateNestedManyWithoutUsersInput;
