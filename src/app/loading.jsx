import { Skeleton } from "../components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Skeleton className="h-10 w-3/4 mx-auto mb-8 sm:mb-12" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col space-y-4">
            <Skeleton className="h-[300px] w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-5 w-1/2" />
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
