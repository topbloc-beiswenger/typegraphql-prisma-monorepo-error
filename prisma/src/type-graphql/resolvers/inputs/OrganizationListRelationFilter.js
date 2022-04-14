"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationWhereInput_1 = require("../inputs/OrganizationWhereInput");
let OrganizationListRelationFilter = class OrganizationListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationWhereInput_1.OrganizationWhereInput)
], OrganizationListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationWhereInput_1.OrganizationWhereInput)
], OrganizationListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationWhereInput_1.OrganizationWhereInput)
], OrganizationListRelationFilter.prototype, "none", void 0);
OrganizationListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationListRelationFilter", {
        isAbstract: true
    })
], OrganizationListRelationFilter);
exports.OrganizationListRelationFilter = OrganizationListRelationFilter;
