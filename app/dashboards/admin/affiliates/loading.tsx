import { AdminLayout } from "@/components/dashboard/admin-layout"

export default function AffiliateManagementLoading() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="h-8 w-48 bg-zinc-800 rounded-md animate-pulse"></div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <div className="h-6 w-40 bg-zinc-800 rounded-md animate-pulse mb-4"></div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2 h-20 bg-zinc-800 rounded-md animate-pulse"></div>
              <div className="h-20 bg-zinc-800 rounded-md animate-pulse"></div>
            </div>
            <div className="flex justify-end">
              <div className="h-10 w-32 bg-zinc-800 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <div className="h-5 w-40 bg-zinc-800 rounded-md animate-pulse"></div>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-16 bg-zinc-800 rounded-md animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
