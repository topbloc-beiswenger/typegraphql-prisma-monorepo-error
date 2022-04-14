"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrganizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOrganizationArgs_1 = require("./args/UpdateOrganizationArgs");
const Organization_1 = require("../../../models/Organization");
const helpers_1 = require("../../../helpers");
let UpdateOrganizationResolver = class UpdateOrganizationResolver {
    async updateOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOrganizationArgs_1.UpdateOrganizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOrganizationResolver.prototype, "updateOrganization", null);
UpdateOrganizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], UpdateOrganizationResolver);
exports.UpdateOrganizationResolver = UpdateOrganizationResolver;
