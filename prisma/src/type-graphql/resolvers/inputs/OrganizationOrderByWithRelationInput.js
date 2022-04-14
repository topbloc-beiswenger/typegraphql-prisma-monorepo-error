"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserOrderByRelationAggregateInput_1 = require("../inputs/UserOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrganizationOrderByWithRelationInput = class OrganizationOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput)
], OrganizationOrderByWithRelationInput.prototype, "users", void 0);
OrganizationOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationOrderByWithRelationInput", {
        isAbstract: true
    })
], OrganizationOrderByWithRelationInput);
exports.OrganizationOrderByWithRelationInput = OrganizationOrderByWithRelationInput;
