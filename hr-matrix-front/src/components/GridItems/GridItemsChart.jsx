import { Percent, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";

const DetailsCard = ({ title, details, percentsDetails }) => {
  return (
    <div className="w-full h-fit border rounded-sm p-4 flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <p className="text-base text-muted-foreground font-bold">{title}</p>
        <Badge className="bg-green-600 w-20">
          <TrendingUp size={17} />{" "}
          <span className="px-1 text-sm">{percentsDetails}</span>
          <Percent size={13} />
        </Badge>
      </div>
      <p className="text-Ig 2x1 : text-3x1 font-bold truncate">{details}</p>
      <p className="text-xs text-muted-foreground font-bold">{title}</p>
    </div>
  );
};

const GridItemsChart = () => {
  return (
    <div className="p-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <DetailsCard
        title="Total Employees"
        details={"856"}
        percentsDetails={"22.0"}
      />
      <DetailsCard
        title="Job View"
        details={"3,342"}
        percentsDetails={"12.0"}
      />
      <DetailsCard
        title="Job Applied"
        details={"77"}
        percentsDetails={"10.0"}
      />
      <DetailsCard
        title="Resigned Employees"
        details={"17"}
        percentsDetails={"7.0"}
      />
    </div>
  );
};

export default GridItemsChart;
