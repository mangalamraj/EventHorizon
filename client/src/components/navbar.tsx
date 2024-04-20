"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./modeToggler";
import Link from "next/link";
import useFetchData from "@/hooks/fetchData";
const Navbar = () => {
  const url = "http://localhost:8000/getUser";
  const { data, error, loading } = useFetchData(url);

  return (
    <div className="sticky top-0 z-50  h-16 w-full items-center backdrop-blur shadow-sm md:container px-2 flex justify-between">
      <div className="font-semibold text-xl md:text-2xl">🪐EventHorizon</div>
      <div className="flex justify-between gap-4">
        <ModeToggle />
        {data ? <div>{data.name}</div> : <div></div>}
        <Button variant="outline">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
