"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrganizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueOrganizationArgs_1 = require("./args/FindUniqueOrganizationArgs");
const Organization_1 = require("../../../models/Organization");
const helpers_1 = require("../../../helpers");
let FindUniqueOrganizationResolver = class FindUniqueOrganizationResolver {
    async organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Organization_1.Organization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrganizationArgs_1.FindUniqueOrganizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueOrganizationResolver.prototype, "organization", null);
FindUniqueOrganizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], FindUniqueOrganizationResolver);
exports.FindUniqueOrganizationResolver = FindUniqueOrganizationResolver;
