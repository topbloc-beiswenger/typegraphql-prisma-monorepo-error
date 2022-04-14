"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Organization: crudResolvers.OrganizationCrudResolver,
    User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
    Organization: {
        organization: actionResolvers.FindUniqueOrganizationResolver,
        findFirstOrganization: actionResolvers.FindFirstOrganizationResolver,
        organizations: actionResolvers.FindManyOrganizationResolver,
        createOrganization: actionResolvers.CreateOrganizationResolver,
        deleteOrganization: actionResolvers.DeleteOrganizationResolver,
        updateOrganization: actionResolvers.UpdateOrganizationResolver,
        deleteManyOrganization: actionResolvers.DeleteManyOrganizationResolver,
        updateManyOrganization: actionResolvers.UpdateManyOrganizationResolver,
        upsertOrganization: actionResolvers.UpsertOrganizationResolver,
        aggregateOrganization: actionResolvers.AggregateOrganizationResolver,
        groupByOrganization: actionResolvers.GroupByOrganizationResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    }
};
const crudResolversInfo = {
    Organization: ["organization", "findFirstOrganization", "organizations", "createOrganization", "deleteOrganization", "updateOrganization", "deleteManyOrganization", "updateManyOrganization", "upsertOrganization", "aggregateOrganization", "groupByOrganization"],
    User: ["user", "findFirstUser", "users", "createUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"]
};
const argsInfo = {
    FindUniqueOrganizationArgs: ["where"],
    FindFirstOrganizationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyOrganizationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateOrganizationArgs: ["data"],
    DeleteOrganizationArgs: ["where"],
    UpdateOrganizationArgs: ["data", "where"],
    DeleteManyOrganizationArgs: ["where"],
    UpdateManyOrganizationArgs: ["data", "where"],
    UpsertOrganizationArgs: ["where", "create", "update"],
    AggregateOrganizationArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByOrganizationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Organization: relationResolvers.OrganizationRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
    Organization: ["users"],
    User: ["organizations"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Organization: ["id", "name"],
    User: ["id", "name", "email"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateOrganization: ["_count", "_avg", "_sum", "_min", "_max"],
    OrganizationGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    OrganizationCount: ["users"],
    OrganizationCountAggregate: ["id", "name", "_all"],
    OrganizationAvgAggregate: ["id"],
    OrganizationSumAggregate: ["id"],
    OrganizationMinAggregate: ["id", "name"],
    OrganizationMaxAggregate: ["id", "name"],
    UserCount: ["organizations"],
    UserCountAggregate: ["id", "name", "email", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "name", "email"],
    UserMaxAggregate: ["id", "name", "email"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    OrganizationWhereInput: ["AND", "OR", "NOT", "id", "name", "users"],
    OrganizationOrderByWithRelationInput: ["id", "name", "users"],
    OrganizationWhereUniqueInput: ["id"],
    OrganizationOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
    OrganizationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "organizations", "email"],
    UserOrderByWithRelationInput: ["id", "name", "organizations", "email"],
    UserWhereUniqueInput: ["id"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email"],
    OrganizationCreateInput: ["name", "users"],
    OrganizationUpdateInput: ["name", "users"],
    OrganizationUpdateManyMutationInput: ["name"],
    UserCreateInput: ["name", "organizations", "email"],
    UserUpdateInput: ["name", "organizations", "email"],
    UserUpdateManyMutationInput: ["name", "email"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    UserListRelationFilter: ["every", "some", "none"],
    UserOrderByRelationAggregateInput: ["_count"],
    OrganizationCountOrderByAggregateInput: ["id", "name"],
    OrganizationAvgOrderByAggregateInput: ["id"],
    OrganizationMaxOrderByAggregateInput: ["id", "name"],
    OrganizationMinOrderByAggregateInput: ["id", "name"],
    OrganizationSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    OrganizationListRelationFilter: ["every", "some", "none"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    OrganizationOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "name", "email"],
    UserMinOrderByAggregateInput: ["id", "name", "email"],
    UserSumOrderByAggregateInput: ["id"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    UserCreateNestedManyWithoutOrganizationsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    UserUpdateManyWithoutOrganizationsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    OrganizationCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "connect"],
    OrganizationUpdateManyWithoutUsersInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserCreateWithoutOrganizationsInput: ["name", "email"],
    UserCreateOrConnectWithoutOrganizationsInput: ["where", "create"],
    UserUpsertWithWhereUniqueWithoutOrganizationsInput: ["where", "update", "create"],
    UserUpdateWithWhereUniqueWithoutOrganizationsInput: ["where", "data"],
    UserUpdateManyWithWhereWithoutOrganizationsInput: ["where", "data"],
    UserScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "email"],
    OrganizationCreateWithoutUsersInput: ["name"],
    OrganizationCreateOrConnectWithoutUsersInput: ["where", "create"],
    OrganizationUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
    OrganizationUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
    OrganizationUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
    OrganizationScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
    UserUpdateWithoutOrganizationsInput: ["name", "email"],
    OrganizationUpdateWithoutUsersInput: ["name"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
