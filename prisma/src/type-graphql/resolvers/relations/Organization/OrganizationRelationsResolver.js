"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Organization_1 = require("../../../models/Organization");
const User_1 = require("../../../models/User");
const OrganizationUsersArgs_1 = require("./args/OrganizationUsersArgs");
const helpers_1 = require("../../../helpers");
let OrganizationRelationsResolver = class OrganizationRelationsResolver {
    async users(organization, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findUnique({
            where: {
                id: organization.id,
            },
        }).users(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Organization_1.Organization, Object, OrganizationUsersArgs_1.OrganizationUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrganizationRelationsResolver.prototype, "users", null);
OrganizationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], OrganizationRelationsResolver);
exports.OrganizationRelationsResolver = OrganizationRelationsResolver;
