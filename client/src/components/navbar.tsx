"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./modeToggler";
import Link from "next/link";
import useFetchData from "@/hooks/fetchData";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { data, error, loading } = useFetchData();
  const router = useRouter();
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div className="sticky top-0 z-50  h-16 w-full items-center backdrop-blur shadow-sm md:container px-2 flex justify-between">
      <div className="font-semibold text-xl md:text-2xl">🪐EventHorizon</div>
      <div className="flex justify-between gap-4">
        {data ? <div className="m-auto">{data.msg.name}</div> : <div></div>}
        <ModeToggle />
        <Button variant="outline">
          {data ? (
            <Link href="" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
