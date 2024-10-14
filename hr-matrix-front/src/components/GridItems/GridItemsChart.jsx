import { TrendingUp } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts";

const data = [
  { name: "2000", revenue: 1133432 },
  { name: "2001", revenue: 1233432 },
  { name: "2002", revenue: 1333432 },
  { name: "2003", revenue: 1433432 },
  { name: "2004", revenue: 1533432 },
  { name: "2005", revenue: 1633432 },
  { name: "2006", revenue: 1733432 },
  { name: "2007", revenue: 1833432 },
  { name: "2008", revenue: 1933432 },
  { name: "2009", revenue: 2033432 },
  { name: "2010", revenue: 2133432 },
  { name: "2011", revenue: 2233432 },
  { name: "2012", revenue: 2333432 },
];

const DetailsCard = ({ title, details }) => {
  return (
    <div className="w-full h-fit border rounded p-4 flex flex-col gap-1">
      <p className="text-sm text-muted-foreground">{title}</p>
      <div className="flex items-center justify-between">
        <p className="text-Ig 2x1 : text-3x1 font-bold truncate">{details}</p>
        <TrendingUp className="text-3xl text-blue-500" />
      </div>
    </div>
  );
};

const GridItemsChart = () => {
  return (
    <div className="w-full h-full flex flex-col-reverse lg:flex-row p-4 border rounded gap-8">
      <div className="w-full Ig:w-3/4 h-full p-2 border rounded-">
        <div className="w-full h-full flex items-center justify-center">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <AreaChart data={data}>
              <Area
                type="monotone"
                dataKey={"revenue"}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--muted))"
              />
              <YAxis
                dataKey={"revenue"}
                orientation={"right"}
                type="number"
                tickFormatter={(tick) => {
                  const formatted = Intl.NumberFormat("en", {
                    notation: "compact",
                  });
                  return formatted.format(tick);
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full lg:w-1/4 h-full flex flex-col items-center justify-start gap-8">
        <DetailsCard title="Total Revenue 2024" details={"$4.124.732"} />
        <DetailsCard title="Revenue Increase From 2023" details={"5.5%"} />
        <DetailsCard title="Projected Revenue 2025" details={"$4.241.657"} />
      </div>
    </div>
  );
};

export default GridItemsChart;
