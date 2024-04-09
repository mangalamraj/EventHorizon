import { Avatar } from "@radix-ui/react-avatar";
import { NavAvatar } from "./avatar";
import { DropdownNav } from "./dropDownNav";
import { ChevronRight, LucidePaperclip, NotepadText, Plus, PlusCircleIcon, Settings } from "lucide-react";

const SideBar = () => {
  return (
    <aside
      className="group/sidebar h-full bg-[#202020] overflow-y-auto relative flex w-60
flex-col z-[99999] text-white "
    >
      <div className="flex items-center gap-2 hover:bg-gray-rgba w-full p-2">
      <NavAvatar/>
      <DropdownNav/>
      </div>
      <div className="flex gap-6 flex-col">
      <div>
        <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><Settings className="w-4"/>Settings & members</div>
        <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><PlusCircleIcon className="w-4"/>New Page</div>
      </div>
      <div className="pages">
      <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><ChevronRight className="w-4"/><NotepadText className="w-4"/>Page 1</div>
      <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><ChevronRight className="w-4"/><NotepadText className="w-4"/>Page 2</div>
      <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><ChevronRight className="w-4"/><NotepadText className="w-4"/>Page 3</div>
      <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><ChevronRight className="w-4"/><NotepadText className="w-4"/>Page 4</div>
      <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><ChevronRight className="w-4"/><NotepadText className="w-4"/>Page 5</div>
      <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><ChevronRight className="w-4"/><NotepadText className="w-4"/>Page 6</div>
      <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><ChevronRight className="w-4"/><NotepadText className="w-4"/>Page 7</div>
      <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><ChevronRight className="w-4"/><NotepadText className="w-4"/>Page 8</div>
      <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><ChevronRight className="w-4"/><NotepadText className="w-4"/>Page 9</div>
      <div className="flex gap-2 text-sm font-medium items-center px-2 py-1 text-[#9B9B9B] hover:bg-gray-rgba "><Plus className="w-4"/>Add Page</div>
      </div>
      </div>
    </aside>
  );
};
export default SideBar;
