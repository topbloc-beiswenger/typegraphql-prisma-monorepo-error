"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyOrganizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyOrganizationArgs_1 = require("./args/FindManyOrganizationArgs");
const Organization_1 = require("../../../models/Organization");
const helpers_1 = require("../../../helpers");
let FindManyOrganizationResolver = class FindManyOrganizationResolver {
    async organizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Organization_1.Organization], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyOrganizationArgs_1.FindManyOrganizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyOrganizationResolver.prototype, "organizations", null);
FindManyOrganizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], FindManyOrganizationResolver);
exports.FindManyOrganizationResolver = FindManyOrganizationResolver;
