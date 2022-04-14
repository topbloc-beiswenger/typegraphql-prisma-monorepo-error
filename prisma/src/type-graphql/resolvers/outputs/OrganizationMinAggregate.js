"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrganizationMinAggregate = class OrganizationMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationMinAggregate.prototype, "name", void 0);
OrganizationMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrganizationMinAggregate", {
        isAbstract: true
    })
], OrganizationMinAggregate);
exports.OrganizationMinAggregate = OrganizationMinAggregate;
