import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrganizationScalarWhereWithAggregatesInput {
    AND?: OrganizationScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrganizationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrganizationScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
}
