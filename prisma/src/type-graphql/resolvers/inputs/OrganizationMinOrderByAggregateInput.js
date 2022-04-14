"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrganizationMinOrderByAggregateInput = class OrganizationMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationMinOrderByAggregateInput.prototype, "name", void 0);
OrganizationMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationMinOrderByAggregateInput", {
        isAbstract: true
    })
], OrganizationMinOrderByAggregateInput);
exports.OrganizationMinOrderByAggregateInput = OrganizationMinOrderByAggregateInput;
