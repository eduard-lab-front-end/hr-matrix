import { Separator } from "@/components/ui/separator"

const GridItemTopRight = () => {
  return (
    <div className="w-full h-full border p-4 rounded flex flex-col justify-around">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">
          Total User Count
        </p>
        <p>9.543.324</p>
      </div>
      <Separator /> 
      <div className="flex">
          <div className="h-full w-1/2 flex flex-col gap-1">
            <p className="text-sm text-muted-foreground">Men</p>
            <p className="text-3xl font-bold">64%</p>
          </div>
          <div className="h-full w-1/2 flex flex-col gap-1">
            <p className="text-sm text-muted-foreground">Women</p>
            <p className="text-3xl font-bold">36%</p>
          </div>
      </div>
    </div>
  )
}

export default GridItemTopRight
