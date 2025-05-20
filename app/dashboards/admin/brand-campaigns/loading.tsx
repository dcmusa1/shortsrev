import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>

      <div className="flex justify-between items-center">
        <Skeleton className="h-10 w-1/3" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-[180px]" />
          <Skeleton className="h-10 w-[150px]" />
        </div>
      </div>

      <Skeleton className="h-10 w-full" />

      <div className="rounded-md border">
        <div className="bg-gray-50 p-4">
          <div className="grid grid-cols-8 gap-4">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="p-4">
                <div className="grid grid-cols-8 gap-4">
                  {Array(8)
                    .fill(0)
                    .map((_, j) => (
                      <Skeleton key={j} className="h-10 w-full" />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
