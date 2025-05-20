import { AdminLayout } from "@/components/dashboard/admin-layout"

export default function Loading() {
  return (
    <AdminLayout>
      <div className="space-y-6 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="h-8 w-48 bg-zinc-800 rounded"></div>
          <div className="h-10 w-40 bg-zinc-800 rounded-md"></div>
        </div>

        {/* Stats Overview Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="h-4 w-24 bg-zinc-800 rounded mb-2"></div>
                  <div className="h-7 w-16 bg-zinc-800 rounded"></div>
                </div>
                <div className="h-9 w-9 bg-zinc-800 rounded-md"></div>
              </div>
              <div className="h-4 w-32 bg-zinc-800 rounded mt-2"></div>
            </div>
          ))}
        </div>

        {/* Tabs Skeleton */}
        <div className="border-b border-zinc-800">
          <div className="flex flex-wrap -mb-px">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="mr-2 inline-block p-4 border-b-2 border-transparent">
                <div className="h-5 w-28 bg-zinc-800 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter Skeleton */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-80 h-10 bg-zinc-800 rounded-md"></div>
          <div className="w-full md:w-40 h-10 bg-zinc-800 rounded-md"></div>
        </div>

        {/* Table Skeleton */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-zinc-800">
                  {[...Array(7)].map((_, i) => (
                    <th key={i} className="px-6 py-3">
                      <div className="h-5 w-20 bg-zinc-800 rounded"></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i} className="border-b border-zinc-800">
                    {[...Array(7)].map((_, j) => (
                      <td key={j} className="px-6 py-4">
                        <div className="h-5 w-full bg-zinc-800 rounded"></div>
                        {j === 1 && <div className="h-4 w-3/4 bg-zinc-800 rounded mt-2"></div>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
