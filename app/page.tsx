import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-center">
        <div>
          <h1 className="mb-2 text-3xl font-bold">Chào mừng!</h1>
          <p className="text-muted-foreground">
            Dự án đã sẵn sàng với Sidebar và trang Demo
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/">
            <Button className="w-full">Đi đến Dashboard</Button>
          </Link>
          <Link href="/demo">
            <Button variant="outline" className="w-full">
              Xem trang Demo
            </Button>
          </Link>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Nhấn <kbd>d</kbd> để chuyển đổi chế độ tối)
        </div>
      </div>
    </div>
  )
}
