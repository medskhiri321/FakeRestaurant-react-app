import Mencard from "@/components/component/menu_card";
export default function Home() {
  return (
    <div className="my-4 justify-around flex-grow gap-y-11 gap-x-8  grid md:grid-cols-[repeat(3,500px)] sm:grid-cols-[repeat(auto-fill,500px)]">
      <Mencard title="Hamburger" imgRef="/hamb.jpg"></Mencard>
      <Mencard title="Pizza" imgRef="/pizza2.jpg"></Mencard>
      <Mencard title="Mlawi" imgRef="/mlawi.jpg"></Mencard>
      <Mencard title="Makloub" imgRef="/makloub.jpg"></Mencard>
      <Mencard title="Salades" imgRef="/salade.jpg"></Mencard>
      <Mencard title="Baguette farcie" imgRef="/baguette.jpg"></Mencard>
    </div>
  );
}
