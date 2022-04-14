"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrganizationSumAggregate = class OrganizationSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationSumAggregate.prototype, "id", void 0);
OrganizationSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrganizationSumAggregate", {
        isAbstract: true
    })
], OrganizationSumAggregate);
exports.OrganizationSumAggregate = OrganizationSumAggregate;
