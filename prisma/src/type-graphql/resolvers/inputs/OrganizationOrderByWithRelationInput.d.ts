import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
export declare class OrganizationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    users?: UserOrderByRelationAggregateInput | undefined;
}
