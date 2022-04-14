"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrganizationWhereUniqueInput = class OrganizationWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationWhereUniqueInput.prototype, "id", void 0);
OrganizationWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationWhereUniqueInput", {
        isAbstract: true
    })
], OrganizationWhereUniqueInput);
exports.OrganizationWhereUniqueInput = OrganizationWhereUniqueInput;
