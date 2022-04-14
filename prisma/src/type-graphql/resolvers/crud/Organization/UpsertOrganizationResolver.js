"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOrganizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOrganizationArgs_1 = require("./args/UpsertOrganizationArgs");
const Organization_1 = require("../../../models/Organization");
const helpers_1 = require("../../../helpers");
let UpsertOrganizationResolver = class UpsertOrganizationResolver {
    async upsertOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Organization_1.Organization, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOrganizationArgs_1.UpsertOrganizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOrganizationResolver.prototype, "upsertOrganization", null);
UpsertOrganizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], UpsertOrganizationResolver);
exports.UpsertOrganizationResolver = UpsertOrganizationResolver;
