import { IntFilter } from "../inputs/IntFilter";
import { OrganizationListRelationFilter } from "../inputs/OrganizationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    organizations?: OrganizationListRelationFilter | undefined;
    email?: StringNullableFilter | undefined;
}
