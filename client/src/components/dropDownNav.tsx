"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronsUpDown } from "lucide-react"

export function DropdownNav() {
  const [position, setPosition] = React.useState("Developer")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
            <div className="flex gap-2 text-sm items-center font-medium">{position}<ChevronsUpDown className="w-3"/></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative w-56 z-[99999]">
        <DropdownMenuLabel>Select Your Project</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="Horizon1">Horizon1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Horizon2">Horizon2</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Horizon3">Horizon3</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
