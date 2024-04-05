import { Button } from "@/components/ui/button"
import { ModeToggle } from "./modeToggler"
const Navbar = () =>{
    return(
        <div className="sticky top-0 z-50  h-16 w-full items-center backdrop-blur shadow-sm md:container px-2 flex justify-between">
            <div className="font-semibold text-xl md:text-2xl">
            🪐EventHorizon
            </div>
            <div className="flex justify-between gap-4">
                <ModeToggle/>
                <Button variant="outline">Login</Button>
            </div>
        </div>
    )
}
export default Navbar