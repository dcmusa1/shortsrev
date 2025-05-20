import { AdminLayout } from "@/components/dashboard/admin-layout"

export default function FormSubmissionsLoading() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="h-8 w-48 bg-zinc-800 rounded-md animate-pulse"></div>

        <div className="flex border-b border-zinc-800">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="px-4 py-2 h-10">
              <div className="h-5 w-20 bg-zinc-800 rounded-md animate-pulse"></div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-zinc-800 rounded-md animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
