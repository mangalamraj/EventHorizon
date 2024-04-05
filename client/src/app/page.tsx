import Animation from "@/components/lottieAnimation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-8 flex flex-col justify-center items-center gap-8">
      <>
      <Animation />
      <div className="container flex justify-center flex-col items-center gap-4">
        <h1 className="text-4xl font-bold m-auto sm:text-5xl md:text-6xl max-w-4xl text-center">
          Navigate Through Time and Tasks with Ease
        </h1>
        <div className="md:text-2xl text-xl text-center font-medium text-slate-200 ">Experience the Connected Workspace of EventHorizon for Enhanced Efficiency.</div>
      </div>
      </>
     
      <div className="flex gap-4 items-center">
      <Button className="font-semibold text-md">Get EventHorizon Free <ArrowRight className="ml-1 h-5 w-5"/></Button>
      <div className="text-[#0a85d1] font-normal text-xl hover:underline cursor-pointer">Request a demo</div>
      </div>

    </main>
  );
}
