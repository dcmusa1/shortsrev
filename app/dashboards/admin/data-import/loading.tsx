import { AdminLayout } from "@/components/dashboard/admin-layout"

export default function Loading() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto animate-pulse">
        <div className="h-8 w-48 bg-zinc-800 rounded mb-6"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="h-6 w-32 bg-zinc-800 rounded mb-4"></div>
              <div className="space-y-4">
                <div>
                  <div className="h-4 w-24 bg-zinc-800 rounded mb-1"></div>
                  <div className="h-10 w-full bg-zinc-800 rounded"></div>
                </div>
                <div>
                  <div className="h-4 w-24 bg-zinc-800 rounded mb-1"></div>
                  <div className="border-2 border-dashed border-zinc-700 rounded-lg p-6">
                    <div className="h-8 w-8 bg-zinc-800 rounded-full mx-auto"></div>
                    <div className="h-4 w-48 bg-zinc-800 rounded mx-auto mt-2"></div>
                    <div className="h-3 w-32 bg-zinc-800 rounded mx-auto mt-1"></div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="h-10 w-full bg-zinc-800 rounded"></div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-6">
              <div className="h-6 w-40 bg-zinc-800 rounded mb-4"></div>
              <div className="space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 w-full bg-zinc-800 rounded"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-6 w-32 bg-zinc-800 rounded"></div>
                <div className="h-6 w-24 bg-zinc-800 rounded"></div>
              </div>

              <div className="h-64 bg-zinc-800 rounded"></div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-6">
              <div className="h-6 w-40 bg-zinc-800 rounded mb-4"></div>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-12 w-full bg-zinc-800 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
