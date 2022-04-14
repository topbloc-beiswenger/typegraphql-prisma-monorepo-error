"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationAvgOrderByAggregateInput_1 = require("../inputs/OrganizationAvgOrderByAggregateInput");
const OrganizationCountOrderByAggregateInput_1 = require("../inputs/OrganizationCountOrderByAggregateInput");
const OrganizationMaxOrderByAggregateInput_1 = require("../inputs/OrganizationMaxOrderByAggregateInput");
const OrganizationMinOrderByAggregateInput_1 = require("../inputs/OrganizationMinOrderByAggregateInput");
const OrganizationSumOrderByAggregateInput_1 = require("../inputs/OrganizationSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrganizationOrderByWithAggregationInput = class OrganizationOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationCountOrderByAggregateInput_1.OrganizationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationCountOrderByAggregateInput_1.OrganizationCountOrderByAggregateInput)
], OrganizationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationAvgOrderByAggregateInput_1.OrganizationAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationAvgOrderByAggregateInput_1.OrganizationAvgOrderByAggregateInput)
], OrganizationOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationMaxOrderByAggregateInput_1.OrganizationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationMaxOrderByAggregateInput_1.OrganizationMaxOrderByAggregateInput)
], OrganizationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationMinOrderByAggregateInput_1.OrganizationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationMinOrderByAggregateInput_1.OrganizationMinOrderByAggregateInput)
], OrganizationOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationSumOrderByAggregateInput_1.OrganizationSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationSumOrderByAggregateInput_1.OrganizationSumOrderByAggregateInput)
], OrganizationOrderByWithAggregationInput.prototype, "_sum", void 0);
OrganizationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationOrderByWithAggregationInput", {
        isAbstract: true
    })
], OrganizationOrderByWithAggregationInput);
exports.OrganizationOrderByWithAggregationInput = OrganizationOrderByWithAggregationInput;
