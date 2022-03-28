import "reflect-metadata";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export * from "@generated/type-graphql";
export default prisma;
