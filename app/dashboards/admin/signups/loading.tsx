import { AdminLayout } from "@/components/dashboard/admin-layout"

export default function SignupsAnalyticsLoading() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="h-8 w-48 bg-zinc-800 rounded-md animate-pulse"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 h-32 animate-pulse">
              <div className="h-4 w-24 bg-zinc-800 rounded-md"></div>
              <div className="h-8 w-16 bg-zinc-800 rounded-md mt-2"></div>
              <div className="mt-4 h-10 bg-zinc-800 rounded-md"></div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <div className="h-5 w-40 bg-zinc-800 rounded-md animate-pulse"></div>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 bg-zinc-800 rounded-md animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <div className="h-5 w-40 bg-zinc-800 rounded-md animate-pulse"></div>
          </div>
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
