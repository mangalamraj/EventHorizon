import {
  EllipsisIcon,
  MenuIcon,
  MessageSquareText,
  Option,
  Star,
} from "lucide-react";

import { ModeToggle } from "./modeToggler";
import { Button } from "./ui/button";
import SideBar from "./sideBar";
import { cn } from "@/lib/utils";

const MarkdownNavbar = () => {
  return (
    <>
      <div className="sticky z-50 top-0 text-sm  w-full items-center  px-2 flex justify-between">
        <div className="flex items-center">
          <div>Horizon A</div>
        </div>
        <div className="flex items-center">
          <Button variant="ghost">Share</Button>
          <Button variant="ghost">
            <MessageSquareText className="w-4" />
          </Button>
          <Button variant="ghost">
            <EllipsisIcon className="w-4" />
          </Button>
          <Button variant="ghost">
            <Star className="w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};
export default MarkdownNavbar;
