import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { SidebarProvider } from "@/components/ui/sidebar"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import type { ReactNode } from "react"

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex-1">
          <DashboardHeader />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

