import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export * from "./type-graphql";

export default prisma;
