"use client"

import { Cross, Filter, Search } from "lucide-react"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { type Task } from "./data"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const statusLabels: Record<Task["status"], string> = {
    todo: "Cần làm",
    "in-progress": "Đang làm",
    done: "Hoàn thành",
    cancelled: "Đã hủy",
  }

  const statusColors: Record<Task["status"], string> = {
    todo: "bg-slate-500",
    "in-progress": "bg-blue-500",
    done: "bg-green-500",
    cancelled: "bg-red-500",
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm tasks..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="w-[300px] pl-9"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Lọc
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Lọc theo trạng thái</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.entries(statusLabels).map(([key, label]) => (
              <DropdownMenuCheckboxItem
                key={key}
                checked={table.getColumn("status")?.getFilterValue() === key}
                onCheckedChange={(checked) => {
                  table.getColumn("status")?.setFilterValue(checked ? key : "")
                }}
              >
                <span
                  className={`mr-2 h-2 w-2 rounded-full ${statusColors[key as Task["status"]]}`}
                />
                {label}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => table.getColumn("status")?.setFilterValue("")}
            >
              <Cross className="mr-2 h-4 w-4" />
              Xóa bộ lọc
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
