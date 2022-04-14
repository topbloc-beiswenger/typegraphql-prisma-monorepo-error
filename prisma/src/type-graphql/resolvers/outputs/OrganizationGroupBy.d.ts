import { OrganizationAvgAggregate } from "../outputs/OrganizationAvgAggregate";
import { OrganizationCountAggregate } from "../outputs/OrganizationCountAggregate";
import { OrganizationMaxAggregate } from "../outputs/OrganizationMaxAggregate";
import { OrganizationMinAggregate } from "../outputs/OrganizationMinAggregate";
import { OrganizationSumAggregate } from "../outputs/OrganizationSumAggregate";
export declare class OrganizationGroupBy {
    id: number;
    name: string;
    _count: OrganizationCountAggregate | null;
    _avg: OrganizationAvgAggregate | null;
    _sum: OrganizationSumAggregate | null;
    _min: OrganizationMinAggregate | null;
    _max: OrganizationMaxAggregate | null;
}
