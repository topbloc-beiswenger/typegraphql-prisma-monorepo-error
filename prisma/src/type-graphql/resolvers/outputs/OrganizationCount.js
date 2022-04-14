"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrganizationCount = class OrganizationCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationCount.prototype, "users", void 0);
OrganizationCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrganizationCount", {
        isAbstract: true
    })
], OrganizationCount);
exports.OrganizationCount = OrganizationCount;
