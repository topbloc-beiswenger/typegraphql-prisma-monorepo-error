"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrganizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationWhereUniqueInput_1 = require("../../../inputs/OrganizationWhereUniqueInput");
let FindUniqueOrganizationArgs = class FindUniqueOrganizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], FindUniqueOrganizationArgs.prototype, "where", void 0);
FindUniqueOrganizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueOrganizationArgs);
exports.FindUniqueOrganizationArgs = FindUniqueOrganizationArgs;
