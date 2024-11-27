import Mencard from "@/components/component/menu_card";

export default function first() {return
<div className="my-4 justify-around gap-y-11 gap-x-2 grid column md:grid-cols-[repeat(3,500px)] sm:grid-cols-[repeat(auto-fill,500px)]">
      <Mencard title="Hamburger" imgRef="/hamb.jpg"></Mencard>
      <Mencard title="Pizza" imgRef="/pizza2.jpg"></Mencard>
      <Mencard title="Mlawi" imgRef="/mlawi.jpg"></Mencard>
      <Mencard title="Makloub" imgRef="/makloub.jpg"></Mencard>
      <Mencard title="Salades" imgRef="/salade.jpg"></Mencard>
      <Mencard title="Baguette farcie" imgRef="/baguette.jpg"></Mencard>
    </div>
 }