import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/card";
import { PrismaClient } from "@prisma/client";
import { Button } from "@/components/button";
import Link from "next/link";
export default  async function Home() {
  const data= new PrismaClient();
  const res= await data.pizza.findMany();
  return (
    <div>
      <div className="my-4  gap-y-5 gap-x-[1.33%] grid justify-around column grid-cols-[repeat(auto-fill,400px)]">
        {res.map((pizza) => {
          return (
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>{pizza.pizza_name} </CardTitle>
                <CardDescription> </CardDescription>
                <CardContent className="flex-grow" >{pizza.pizza_ing} </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500">
                    <Link href={""}>Placer Commande</Link>
                  </Button>
                </CardFooter>
              </CardHeader>
            </Card>
         )})}
        
      </div>
    </div>
  );
}
