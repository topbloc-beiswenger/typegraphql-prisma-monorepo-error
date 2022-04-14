import { Organization } from "../../../models/Organization";
import { User } from "../../../models/User";
import { UserOrganizationsArgs } from "./args/UserOrganizationsArgs";
export declare class UserRelationsResolver {
    organizations(user: User, ctx: any, args: UserOrganizationsArgs): Promise<Organization[]>;
}
