import { Separator } from "@radix-ui/react-separator";
import { Avatar, AvatarImage } from "../ui/avatar";

const UserCard = () => {
  return (
    <>
      <Separator />
      <div className="w-full h-fit p-4 flex items-center justify-around">
        <Avatar className="w-8 h-8">
          <AvatarImage scr="https://img.freepik.com/vektoren-premium/technologie-konzept-vektor-illustration-mit-cloud-computing-design-elementen-im-flachen-stil_1226483-3884.jpg?w=1380" />
        </Avatar>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">Jimmy Joe</p>
        <p className="text-xs text-muted-foreground">Executive Sales</p>
      </div>
    </>
  );
};

export default UserCard;
