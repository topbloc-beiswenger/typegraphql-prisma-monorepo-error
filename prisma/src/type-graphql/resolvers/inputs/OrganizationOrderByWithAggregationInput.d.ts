import { OrganizationAvgOrderByAggregateInput } from "../inputs/OrganizationAvgOrderByAggregateInput";
import { OrganizationCountOrderByAggregateInput } from "../inputs/OrganizationCountOrderByAggregateInput";
import { OrganizationMaxOrderByAggregateInput } from "../inputs/OrganizationMaxOrderByAggregateInput";
import { OrganizationMinOrderByAggregateInput } from "../inputs/OrganizationMinOrderByAggregateInput";
import { OrganizationSumOrderByAggregateInput } from "../inputs/OrganizationSumOrderByAggregateInput";
export declare class OrganizationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    _count?: OrganizationCountOrderByAggregateInput | undefined;
    _avg?: OrganizationAvgOrderByAggregateInput | undefined;
    _max?: OrganizationMaxOrderByAggregateInput | undefined;
    _min?: OrganizationMinOrderByAggregateInput | undefined;
    _sum?: OrganizationSumOrderByAggregateInput | undefined;
}
