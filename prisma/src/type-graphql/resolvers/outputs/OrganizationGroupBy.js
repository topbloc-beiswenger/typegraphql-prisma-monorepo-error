"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationAvgAggregate_1 = require("../outputs/OrganizationAvgAggregate");
const OrganizationCountAggregate_1 = require("../outputs/OrganizationCountAggregate");
const OrganizationMaxAggregate_1 = require("../outputs/OrganizationMaxAggregate");
const OrganizationMinAggregate_1 = require("../outputs/OrganizationMinAggregate");
const OrganizationSumAggregate_1 = require("../outputs/OrganizationSumAggregate");
let OrganizationGroupBy = class OrganizationGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationCountAggregate_1.OrganizationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationCountAggregate_1.OrganizationCountAggregate)
], OrganizationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationAvgAggregate_1.OrganizationAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationAvgAggregate_1.OrganizationAvgAggregate)
], OrganizationGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationSumAggregate_1.OrganizationSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationSumAggregate_1.OrganizationSumAggregate)
], OrganizationGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationMinAggregate_1.OrganizationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationMinAggregate_1.OrganizationMinAggregate)
], OrganizationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationMaxAggregate_1.OrganizationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationMaxAggregate_1.OrganizationMaxAggregate)
], OrganizationGroupBy.prototype, "_max", void 0);
OrganizationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrganizationGroupBy", {
        isAbstract: true
    })
], OrganizationGroupBy);
exports.OrganizationGroupBy = OrganizationGroupBy;
