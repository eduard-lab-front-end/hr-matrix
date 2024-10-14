import { Separator } from "@/components/ui/separator";
import { Funnel, FunnelChart, LabelList, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Basic",
    value: 42,
  },
  {
    name: "Premium",
    value: 24,
  },
  {
    name: "Premium +",
    value: 34,
  },
];

const GridItemBottomRight = () => {
  return (
    <div className="w-full h-full border rounded p-4 flex flex-col gap-4">
      <div className="w-full h-fit flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">Total Paying Users</p>
        <p className="text-3xl font-bold">3.543.776</p>
      </div>
      <Separator />
      <div className="flex">
        <div className="h-full w-1/3 flex flex-col gap-1">
          <p className="text-3xl xl:text-sm text-muted-foreground">Basic</p>
          <p className="text-xl xl:text-3xl font-bold">42%</p>
        </div>
        <div className="h-full w-1/3 flex flex-col gap-1">
          <p className="text-3xl xl:text-sm text-muted-foreground">Premium</p>
          <p className="text-xl xl:text-3xl font-bold">24%</p>
        </div>
        <div className="h-full w-1/3 flex flex-col gap-1">
          <p className="text-3xl xl:text-sm text-muted-foreground">Premium +</p>
          <p className="text-xl xl:text-3xl font-bold">34%</p>
        </div>
      </div>
      <Separator />
      <div className="w-full flex-grow flex items-center justify-center">
        <ResponsiveContainer height={"75%"} width={"75%"}>
          <FunnelChart width={730} height={250}> 
            <Tooltip />
            <Funnel dataKey={"value"} data={data} stroke="hsl(var(--primary))" fill="hsl(var(--muted))"> 
              <LabelList position={'right'} fill="#fff" stroke="none" data={"name"}/> 
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GridItemBottomRight;
