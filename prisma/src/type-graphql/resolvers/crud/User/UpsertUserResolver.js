"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertUserArgs_1 = require("./args/UpsertUserArgs");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let UpsertUserResolver = class UpsertUserResolver {
    async upsertUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertUserArgs_1.UpsertUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertUserResolver.prototype, "upsertUser", null);
UpsertUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UpsertUserResolver);
exports.UpsertUserResolver = UpsertUserResolver;
