import { Organization } from "../models/Organization";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: number;
    name: string;
    organizations?: Organization[];
    email?: string | null;
    _count?: UserCount | null;
}
