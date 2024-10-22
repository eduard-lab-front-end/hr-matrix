import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Sector } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "../ui/badge";

const chartData = [
  { employees: "women", amount: 300, fill: "var(--color-firefox)" },
  { employees: "men", amount: 556, fill: "var(--color-chrome)" },
];

const GridItemBottomLeft = () => {
  return (
    <Card className="flex flex-col bg-transparent">
      <CardHeader className="items-center pb-0">
        <CardTitle>Employee Composition</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0 relative">
        <Badge className="bg-popover-foreground absolute bottom-7 right-1/2 z-50 text-sm text-muted hover:bg-bg-popover-foreground">
          Men 65%
        </Badge>
        <Badge className="bg-popover-foreground absolute top-4 right-1/4 z-50 text-sm text-muted hover:bg-bg-popover-foreground">
          Women 35%
        </Badge>
        <ChartContainer
          config={{
            employees: {
              label: "Employees",
            },
            chrome: {
              label: "Men",
              color: "hsl(var(--primary))",
            },
            firefox: {
              label: "Women",
              color: "hsl(var(--chart-5))",
            },
          }}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="employees"
              innerRadius={65}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({ outerRadius = 0, ...props }) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total employees for the last 8 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default GridItemBottomLeft;
