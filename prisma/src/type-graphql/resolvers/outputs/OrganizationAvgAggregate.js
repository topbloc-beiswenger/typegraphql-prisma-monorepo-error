"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrganizationAvgAggregate = class OrganizationAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationAvgAggregate.prototype, "id", void 0);
OrganizationAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrganizationAvgAggregate", {
        isAbstract: true
    })
], OrganizationAvgAggregate);
exports.OrganizationAvgAggregate = OrganizationAvgAggregate;
