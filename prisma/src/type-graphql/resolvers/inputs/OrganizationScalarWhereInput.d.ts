import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class OrganizationScalarWhereInput {
    AND?: OrganizationScalarWhereInput[] | undefined;
    OR?: OrganizationScalarWhereInput[] | undefined;
    NOT?: OrganizationScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
}
