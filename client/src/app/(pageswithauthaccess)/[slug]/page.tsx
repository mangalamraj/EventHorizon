"use client";
import AutoTextArea from "@/components/autoTextArea";
import MarkdownNavbar from "@/components/markdownNavbar";
import ModifiedInput from "@/components/modifiedInout";
import SideBar from "@/components/sideBar";
import { Button } from "@/components/ui/button";
import AuthStatus from "@/utils/auth";
import { MenuIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

const MarkdownEditorPage = () => {
  // const collapseRef = useRef<HTMLDivElement | null>(null);
  // function collapse() {
  //   const collapseConst = collapseRef.current;
  //   if (collapseConst) {
  //     collapseConst.className = "w-[0px]";
  //   }
  // }

  useLayoutEffect(() => {
    const isAuth = AuthStatus;
    if (!isAuth) {
      redirect("/login");
    }
  }, []);

  return (
    <>
      <div>
        <div className="flex main h-screen	">
          <SideBar />
          <Button
            variant="ghost"
            className="sticky z-50 top-0 text-sm items-center  px-2 flex"
          >
            <MenuIcon className="w-4" />
          </Button>
          <div className="w-full">
            <MarkdownNavbar />
            <div className="my-20">
              <ModifiedInput />
              <AutoTextArea />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MarkdownEditorPage;
