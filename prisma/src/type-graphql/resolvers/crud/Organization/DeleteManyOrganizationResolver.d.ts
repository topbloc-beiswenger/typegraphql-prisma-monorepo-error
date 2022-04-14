import { GraphQLResolveInfo } from "graphql";
import { DeleteManyOrganizationArgs } from "./args/DeleteManyOrganizationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyOrganizationResolver {
    deleteManyOrganization(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrganizationArgs): Promise<AffectedRowsOutput>;
}
