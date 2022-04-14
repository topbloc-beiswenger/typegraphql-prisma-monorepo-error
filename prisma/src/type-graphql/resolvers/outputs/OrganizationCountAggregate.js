"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrganizationCountAggregate = class OrganizationCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationCountAggregate.prototype, "_all", void 0);
OrganizationCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrganizationCountAggregate", {
        isAbstract: true
    })
], OrganizationCountAggregate);
exports.OrganizationCountAggregate = OrganizationCountAggregate;
