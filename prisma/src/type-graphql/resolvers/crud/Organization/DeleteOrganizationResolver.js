"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrganizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOrganizationArgs_1 = require("./args/DeleteOrganizationArgs");
const Organization_1 = require("../../../models/Organization");
const helpers_1 = require("../../../helpers");
let DeleteOrganizationResolver = class DeleteOrganizationResolver {
    async deleteOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Organization_1.Organization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOrganizationArgs_1.DeleteOrganizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOrganizationResolver.prototype, "deleteOrganization", null);
DeleteOrganizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], DeleteOrganizationResolver);
exports.DeleteOrganizationResolver = DeleteOrganizationResolver;
