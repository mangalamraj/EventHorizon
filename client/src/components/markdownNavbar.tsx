import {
  EllipsisIcon,
  MenuIcon,
  MessageSquareText,
  Option,
} from "lucide-react";

import { ModeToggle } from "./modeToggler";
import { Button } from "./ui/button";
import SideBar from "./sideBar";

const MarkdownNavbar = () => {
  return (
    <>
      <div className="sticky z-50 top-0 text-sm h-12 w-full items-center  px-2 flex justify-between">
        <div className="flex items-center">
          <div>Name</div>
        </div>
        <div className="flex items-center ">
          <Button variant="ghost">Share</Button>
          <Button variant="ghost">
            <MessageSquareText className="w-4" />
          </Button>
          <Button variant="ghost">
            <EllipsisIcon className="w-4" />
          </Button>

          <ModeToggle />
        </div>
      </div>
    </>
  );
};
export default MarkdownNavbar;
