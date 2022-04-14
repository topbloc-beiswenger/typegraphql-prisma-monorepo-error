import { GraphQLResolveInfo } from "graphql";
import { CreateOrganizationArgs } from "./args/CreateOrganizationArgs";
import { Organization } from "../../../models/Organization";
export declare class CreateOrganizationResolver {
    createOrganization(ctx: any, info: GraphQLResolveInfo, args: CreateOrganizationArgs): Promise<Organization>;
}
