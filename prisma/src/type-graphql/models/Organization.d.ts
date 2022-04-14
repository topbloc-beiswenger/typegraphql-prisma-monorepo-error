import { User } from "../models/User";
import { OrganizationCount } from "../resolvers/outputs/OrganizationCount";
export declare class Organization {
    id: number;
    name: string;
    users?: User[];
    _count?: OrganizationCount | null;
}
