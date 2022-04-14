"use strict";
var OrganizationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let OrganizationWhereInput = OrganizationWhereInput_1 = class OrganizationWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrganizationWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrganizationWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], OrganizationWhereInput.prototype, "users", void 0);
OrganizationWhereInput = OrganizationWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationWhereInput", {
        isAbstract: true
    })
], OrganizationWhereInput);
exports.OrganizationWhereInput = OrganizationWhereInput;
