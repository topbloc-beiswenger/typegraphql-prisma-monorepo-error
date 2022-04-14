"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOrganizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationCreateInput_1 = require("../../../inputs/OrganizationCreateInput");
const OrganizationUpdateInput_1 = require("../../../inputs/OrganizationUpdateInput");
const OrganizationWhereUniqueInput_1 = require("../../../inputs/OrganizationWhereUniqueInput");
let UpsertOrganizationArgs = class UpsertOrganizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], UpsertOrganizationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationCreateInput_1.OrganizationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationCreateInput_1.OrganizationCreateInput)
], UpsertOrganizationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationUpdateInput_1.OrganizationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationUpdateInput_1.OrganizationUpdateInput)
], UpsertOrganizationArgs.prototype, "update", void 0);
UpsertOrganizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOrganizationArgs);
exports.UpsertOrganizationArgs = UpsertOrganizationArgs;
