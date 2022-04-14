"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrganizationMaxAggregate = class OrganizationMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationMaxAggregate.prototype, "name", void 0);
OrganizationMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrganizationMaxAggregate", {
        isAbstract: true
    })
], OrganizationMaxAggregate);
exports.OrganizationMaxAggregate = OrganizationMaxAggregate;
