import { GraphQLResolveInfo } from "graphql";
import { GroupByOrganizationArgs } from "./args/GroupByOrganizationArgs";
import { OrganizationGroupBy } from "../../outputs/OrganizationGroupBy";
export declare class GroupByOrganizationResolver {
    groupByOrganization(ctx: any, info: GraphQLResolveInfo, args: GroupByOrganizationArgs): Promise<OrganizationGroupBy[]>;
}
