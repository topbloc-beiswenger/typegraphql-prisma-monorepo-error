import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class OrganizationWhereInput {
    AND?: OrganizationWhereInput[] | undefined;
    OR?: OrganizationWhereInput[] | undefined;
    NOT?: OrganizationWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    users?: UserListRelationFilter | undefined;
}
