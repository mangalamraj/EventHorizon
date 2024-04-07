"use client";
import MarkdownNavbar from "@/components/markdownNavbar";
import SideBar from "@/components/sideBar";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useRef } from "react";

const MarkdownEditor = () => {
  const collapseRef = useRef<HTMLDivElement | null>(null);
  function collapse() {
    const collapseConst = collapseRef.current;
    if (collapseConst) {
      collapseConst.className = "w-[0px]";
    }
  }
  return (
    <>
      <div className="flex main h-screen	">
        <SideBar />
        <Button
          variant="ghost"
          className="sticky z-50 top-0 text-sm   h-12  items-center  px-2 flex"
          onClick={collapse}
        >
          <MenuIcon className="w-4" />
        </Button>
        <div className="w-full" ref={collapseRef}>
          <MarkdownNavbar />
        </div>
      </div>
    </>
  );
};
export default MarkdownEditor;
