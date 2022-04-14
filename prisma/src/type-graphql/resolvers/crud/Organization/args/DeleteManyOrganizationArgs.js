"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOrganizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationWhereInput_1 = require("../../../inputs/OrganizationWhereInput");
let DeleteManyOrganizationArgs = class DeleteManyOrganizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrganizationWhereInput_1.OrganizationWhereInput)
], DeleteManyOrganizationArgs.prototype, "where", void 0);
DeleteManyOrganizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyOrganizationArgs);
exports.DeleteManyOrganizationArgs = DeleteManyOrganizationArgs;
