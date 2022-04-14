"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOrganizationArgs_1 = require("./args/AggregateOrganizationArgs");
const CreateOrganizationArgs_1 = require("./args/CreateOrganizationArgs");
const DeleteManyOrganizationArgs_1 = require("./args/DeleteManyOrganizationArgs");
const DeleteOrganizationArgs_1 = require("./args/DeleteOrganizationArgs");
const FindFirstOrganizationArgs_1 = require("./args/FindFirstOrganizationArgs");
const FindManyOrganizationArgs_1 = require("./args/FindManyOrganizationArgs");
const FindUniqueOrganizationArgs_1 = require("./args/FindUniqueOrganizationArgs");
const GroupByOrganizationArgs_1 = require("./args/GroupByOrganizationArgs");
const UpdateManyOrganizationArgs_1 = require("./args/UpdateManyOrganizationArgs");
const UpdateOrganizationArgs_1 = require("./args/UpdateOrganizationArgs");
const UpsertOrganizationArgs_1 = require("./args/UpsertOrganizationArgs");
const helpers_1 = require("../../../helpers");
const Organization_1 = require("../../../models/Organization");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrganization_1 = require("../../outputs/AggregateOrganization");
const OrganizationGroupBy_1 = require("../../outputs/OrganizationGroupBy");
let OrganizationCrudResolver = class OrganizationCrudResolver {
    async organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async organizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateOrganization(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByOrganization(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], OrganizationCrudResolver.prototype, "organization", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Organization_1.Organization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOrganizationArgs_1.FindFirstOrganizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "findFirstOrganization", null);
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
], OrganizationCrudResolver.prototype, "organizations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Organization_1.Organization, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOrganizationArgs_1.CreateOrganizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "createOrganization", null);
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
], OrganizationCrudResolver.prototype, "deleteOrganization", null);
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
], OrganizationCrudResolver.prototype, "updateOrganization", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOrganizationArgs_1.DeleteManyOrganizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "deleteManyOrganization", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOrganizationArgs_1.UpdateManyOrganizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "updateManyOrganization", null);
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
], OrganizationCrudResolver.prototype, "upsertOrganization", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOrganization_1.AggregateOrganization, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOrganizationArgs_1.AggregateOrganizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "aggregateOrganization", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrganizationGroupBy_1.OrganizationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOrganizationArgs_1.GroupByOrganizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "groupByOrganization", null);
OrganizationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], OrganizationCrudResolver);
exports.OrganizationCrudResolver = OrganizationCrudResolver;
