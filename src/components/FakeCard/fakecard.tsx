"use client";

export default function FakeCard({ count }: { count: number }) {
  return (
    <div className="w-full flex flex-col gap-4 sm:flex-row py-10 md:gap-6 xl:flex-col xl:gap-7 ">
      <div className="grid gap-4 md:grid-cols-3">
        {[...Array(count)].map((_, index) => (
          <div key={index} className=" border border-neutral-800 shadow rounded-md p-4 max-w-sm w-full mx-auto flex justify-center">
            <div className="animate-pulse flex space-x-4 items-center w-full">
              <div className="rounded-full bg-neutral-500 dark:bg-neutral-800 h-14 w-14"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-3 bg-neutral-500 dark:bg-neutral-800 rounded col-span-2"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-3 bg-neutral-500 dark:bg-neutral-800 rounded col-span-2"></div>
                    <div className="h-3 bg-neutral-500 dark:bg-neutral-800 rounded col-span-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

