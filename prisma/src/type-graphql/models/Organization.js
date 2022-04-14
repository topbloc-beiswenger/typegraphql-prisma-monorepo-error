"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationCount_1 = require("../resolvers/outputs/OrganizationCount");
let Organization = class Organization {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Organization.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Organization.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationCount_1.OrganizationCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationCount_1.OrganizationCount)
], Organization.prototype, "_count", void 0);
Organization = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Organization", {
        isAbstract: true
    })
], Organization);
exports.Organization = Organization;
