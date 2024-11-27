import { Card, CardContent } from "@/components/card";
import Image from "next/image";
interface CardProps
{ 
    title : string;
    imgRef: string;
}
export default function home({title,imgRef}:CardProps) {
  return (
    <div>
      <Card className="w-full max-w-lg">
        <Image
          src={imgRef}
          width={800}
          height={400}
          alt="Hero"
          className="aspect-[2/1] w-full object-cover rounded-t-lg"
        />
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight hover:text-blue-600">
                {title}
          </h1>
        </CardContent>
      </Card>
    </div>
  );
}
