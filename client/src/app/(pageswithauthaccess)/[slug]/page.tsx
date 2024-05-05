"use client";
import { useState, useEffect } from "react";
import AutoTextArea from "@/components/autoTextArea";
import MarkdownNavbar from "@/components/markdownNavbar";
import ModifiedInput from "@/components/modifiedInout";
import { useAuth } from "@/components/providers/data-provider";
import SideBar from "@/components/sideBar";
import { Button } from "@/components/ui/button";
import useFetchData from "@/hooks/fetchData";
import { checkAuthStatus } from "@/utils/auth";
import { MenuIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { useContext, useRef } from "react";

const MarkdownEditorPage = () => {
  const { data, loading } = useFetchData();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (data) {
      setShouldRender(true);
    }
  }, [data]);

  if (!shouldRender) {
    // Render a loading indicator or any other placeholder
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <div className="flex main h-screen">
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
