import { GraphQLResolveInfo } from "graphql";
import { AggregateOrganizationArgs } from "./args/AggregateOrganizationArgs";
import { AggregateOrganization } from "../../outputs/AggregateOrganization";
export declare class AggregateOrganizationResolver {
    aggregateOrganization(ctx: any, info: GraphQLResolveInfo, args: AggregateOrganizationArgs): Promise<AggregateOrganization>;
}
