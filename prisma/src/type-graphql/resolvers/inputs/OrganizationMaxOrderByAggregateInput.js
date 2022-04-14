"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrganizationMaxOrderByAggregateInput = class OrganizationMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationMaxOrderByAggregateInput.prototype, "name", void 0);
OrganizationMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationMaxOrderByAggregateInput", {
        isAbstract: true
    })
], OrganizationMaxOrderByAggregateInput);
exports.OrganizationMaxOrderByAggregateInput = OrganizationMaxOrderByAggregateInput;
