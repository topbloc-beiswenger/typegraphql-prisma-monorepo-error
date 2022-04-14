"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrganizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationOrderByWithAggregationInput_1 = require("../../../inputs/OrganizationOrderByWithAggregationInput");
const OrganizationScalarWhereWithAggregatesInput_1 = require("../../../inputs/OrganizationScalarWhereWithAggregatesInput");
const OrganizationWhereInput_1 = require("../../../inputs/OrganizationWhereInput");
const OrganizationScalarFieldEnum_1 = require("../../../../enums/OrganizationScalarFieldEnum");
let GroupByOrganizationArgs = class GroupByOrganizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationWhereInput_1.OrganizationWhereInput)
], GroupByOrganizationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationOrderByWithAggregationInput_1.OrganizationOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrganizationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationScalarFieldEnum_1.OrganizationScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrganizationArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationScalarWhereWithAggregatesInput_1.OrganizationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationScalarWhereWithAggregatesInput_1.OrganizationScalarWhereWithAggregatesInput)
], GroupByOrganizationArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrganizationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrganizationArgs.prototype, "skip", void 0);
GroupByOrganizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByOrganizationArgs);
exports.GroupByOrganizationArgs = GroupByOrganizationArgs;
