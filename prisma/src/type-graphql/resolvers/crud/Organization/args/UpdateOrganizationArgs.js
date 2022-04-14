"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrganizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationUpdateInput_1 = require("../../../inputs/OrganizationUpdateInput");
const OrganizationWhereUniqueInput_1 = require("../../../inputs/OrganizationWhereUniqueInput");
let UpdateOrganizationArgs = class UpdateOrganizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationUpdateInput_1.OrganizationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationUpdateInput_1.OrganizationUpdateInput)
], UpdateOrganizationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], UpdateOrganizationArgs.prototype, "where", void 0);
UpdateOrganizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOrganizationArgs);
exports.UpdateOrganizationArgs = UpdateOrganizationArgs;
