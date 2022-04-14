import { GraphQLResolveInfo } from "graphql";
import { UpdateManyOrganizationArgs } from "./args/UpdateManyOrganizationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyOrganizationResolver {
    updateManyOrganization(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrganizationArgs): Promise<AffectedRowsOutput>;
}
