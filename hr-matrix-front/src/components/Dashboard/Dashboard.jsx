import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import GridItemsChart from "../GridItems/GridItemsChart";
import GridItemTopRight from "../GridItems/GridItemBottom";
import GridItemBottomLeft from "../GridItems/GridItemBottomLeft";


export default function Dashboard() {
  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
    { month: "July", desktop: 250 },
    { month: "August", desktop: 290 },
  ];

  return (
    <>
      <GridItemsChart />
      <div className="p-4">
        <Card className='bg-transparent'>
          <CardHeader>
            <CardTitle className='text-lg lg:text-2xl'>Job Statistic</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
            className='max-h-96 w-full'
              config={{
                desktop: {
                  label: "Employees",
                  color: "hsl(var(--primary))",
                },
              }}
            >
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={true}
                  tickMargin={15}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={10} />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total employees for the last 8 months
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="p-4 grid w-full gap-10 sm:grid-cols-1 md:grid-cols-2">
        <GridItemTopRight />
        <GridItemBottomLeft />
      </div>
    </>
  );
}
