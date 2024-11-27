import { PrismaClient } from "@prisma/client";

function main()
{
 const data= new PrismaClient();
 const res= data.pizza.findMany();
 console.log(res)

}