"use strict";
var OrganizationScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let OrganizationScalarWhereInput = OrganizationScalarWhereInput_1 = class OrganizationScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrganizationScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrganizationScalarWhereInput.prototype, "name", void 0);
OrganizationScalarWhereInput = OrganizationScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationScalarWhereInput", {
        isAbstract: true
    })
], OrganizationScalarWhereInput);
exports.OrganizationScalarWhereInput = OrganizationScalarWhereInput;
