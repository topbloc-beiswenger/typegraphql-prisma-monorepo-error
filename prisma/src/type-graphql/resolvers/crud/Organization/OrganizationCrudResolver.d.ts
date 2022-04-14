import { GraphQLResolveInfo } from "graphql";
import { AggregateOrganizationArgs } from "./args/AggregateOrganizationArgs";
import { CreateOrganizationArgs } from "./args/CreateOrganizationArgs";
import { DeleteManyOrganizationArgs } from "./args/DeleteManyOrganizationArgs";
import { DeleteOrganizationArgs } from "./args/DeleteOrganizationArgs";
import { FindFirstOrganizationArgs } from "./args/FindFirstOrganizationArgs";
import { FindManyOrganizationArgs } from "./args/FindManyOrganizationArgs";
import { FindUniqueOrganizationArgs } from "./args/FindUniqueOrganizationArgs";
import { GroupByOrganizationArgs } from "./args/GroupByOrganizationArgs";
import { UpdateManyOrganizationArgs } from "./args/UpdateManyOrganizationArgs";
import { UpdateOrganizationArgs } from "./args/UpdateOrganizationArgs";
import { UpsertOrganizationArgs } from "./args/UpsertOrganizationArgs";
import { Organization } from "../../../models/Organization";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOrganization } from "../../outputs/AggregateOrganization";
import { OrganizationGroupBy } from "../../outputs/OrganizationGroupBy";
export declare class OrganizationCrudResolver {
    organization(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrganizationArgs): Promise<Organization | null>;
    findFirstOrganization(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrganizationArgs): Promise<Organization | null>;
    organizations(ctx: any, info: GraphQLResolveInfo, args: FindManyOrganizationArgs): Promise<Organization[]>;
    createOrganization(ctx: any, info: GraphQLResolveInfo, args: CreateOrganizationArgs): Promise<Organization>;
    deleteOrganization(ctx: any, info: GraphQLResolveInfo, args: DeleteOrganizationArgs): Promise<Organization | null>;
    updateOrganization(ctx: any, info: GraphQLResolveInfo, args: UpdateOrganizationArgs): Promise<Organization | null>;
    deleteManyOrganization(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrganizationArgs): Promise<AffectedRowsOutput>;
    updateManyOrganization(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrganizationArgs): Promise<AffectedRowsOutput>;
    upsertOrganization(ctx: any, info: GraphQLResolveInfo, args: UpsertOrganizationArgs): Promise<Organization>;
    aggregateOrganization(ctx: any, info: GraphQLResolveInfo, args: AggregateOrganizationArgs): Promise<AggregateOrganization>;
    groupByOrganization(ctx: any, info: GraphQLResolveInfo, args: GroupByOrganizationArgs): Promise<OrganizationGroupBy[]>;
}
