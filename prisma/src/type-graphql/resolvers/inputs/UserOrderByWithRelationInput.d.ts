import { OrganizationOrderByRelationAggregateInput } from "../inputs/OrganizationOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    organizations?: OrganizationOrderByRelationAggregateInput | undefined;
    email?: "asc" | "desc" | undefined;
}
