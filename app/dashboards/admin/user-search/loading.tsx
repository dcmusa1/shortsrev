import { AdminLayout } from "@/components/dashboard/admin-layout"

export default function Loading() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto animate-pulse">
        <div className="h-8 w-48 bg-zinc-800 rounded mb-6"></div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
          <div className="flex gap-4">
            <div className="h-10 bg-zinc-800 rounded flex-grow"></div>
            <div className="h-10 w-24 bg-zinc-800 rounded"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="bg-zinc-800 h-14 w-14 rounded-full"></div>
                <div className="ml-4">
                  <div className="h-6 w-48 bg-zinc-800 rounded"></div>
                  <div className="h-4 w-32 bg-zinc-800 rounded mt-2"></div>
                  <div className="h-4 w-40 bg-zinc-800 rounded mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="h-6 w-32 bg-zinc-800 rounded mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-zinc-800 rounded-lg p-4">
                  <div className="h-4 w-24 bg-zinc-700 rounded"></div>
                  <div className="h-8 w-20 bg-zinc-700 rounded mt-2"></div>
                  <div className="h-4 w-32 bg-zinc-700 rounded mt-2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
