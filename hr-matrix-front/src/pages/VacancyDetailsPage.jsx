import {
  ChevronLeft,
  ChevronRight,
  Pencil,
  Trash2,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VacancyForm } from "@/components/VacancyForm/VacancyForm";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { SessionContext } from "@/contexts/SessionContext";

const VacancyDetailsPage = () => {
  const [vacancy, setVacancy] = useState();
  const [needRefreshVacancy, setNeedRefreshVacancy] = useState(true);
  const { setNeedRefresh, fetchWithToken } = useContext(SessionContext);
  const { vacancyId } = useParams();
  const navigate = useNavigate();

  const fetchVacancyHandle = async () => {
    try {
      const response = await fetchWithToken(`/vacancies/${vacancyId}`);
      setVacancy(response);
      setNeedRefresh(false)
      setNeedRefreshVacancy(false);
    } catch (error) {
      console.log("Can't fetch vacancy", error);
    }
  };
  const deleteEmployeeHandle = async () => {
    try {
      await fetchWithToken(`/vacancies/${vacancyId}`, "DELETE");
      setNeedRefresh(true);
      navigate("/vacancies");
    } catch (error) {
      console.log("Can't remove an employee", error);
    }
  };
  useEffect(() => {
    fetchVacancyHandle(); 
  }, []);
  useEffect(() => {
    if(needRefreshVacancy) {
      fetchVacancyHandle();
    }
  }, [needRefreshVacancy]);

  return (
    <>
      {vacancy && (
        <div className="p-6">
          <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
            <CardHeader className="flex flex-row items-start bg-muted/50">
              <div className="grid gap-0.5">
                <CardTitle className="group flex items-center gap-2 text-lg">
                  Position{" "}
                  <span className="text-muted-foreground">
                    {vacancy.positionTitle}
                  </span>
                </CardTitle>
                <CardDescription>
                  Publication: {vacancy.publication}
                </CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 gap-1"
                        onClick={deleteEmployeeHandle}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Remove</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <VacancyForm
                        isUpdate={true}
                        vacancy={vacancy}
                        dialogTrigger={
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 gap-1"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                          </Button>
                        }
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <div className="font-semibold">Location Information</div>
                  <address className="grid gap-0.5 not-italic text-muted-foreground">
                    <span>{vacancy.location}</span>
                    <span>1234 Main St.</span>
                    <span>Anytown, CA 12345</span>
                  </address>
                </div>
                <div className="grid auto-rows-max gap-3 text-right">
                  <div className="font-semibold">Company Information</div>
                  <div className="text-muted-foreground">
                    Same as location address
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="grid gap-3">
                <div className="font-semibold">Responsible recruiter</div>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <div className="text-muted-foreground">Name</div>
                    <dd>John Doe</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-muted-foreground">Email</div>
                    <dd>
                      <a href="mailto:">john.doe@example.com</a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-muted-foreground">Phone</div>
                    <dd>
                      <a href="tel:">+1 234 567 890</a>
                    </dd>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="grid gap-3">
                <div className="font-semibold">Position Information</div>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      Status
                    </div>
                    <dd>Open</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      Id
                    </div>
                    <dd>#515498593589535621</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-muted-foreground">
                      Skills
                    </div>
                    <div className="flex gap-1">
                      <dd>JavaScript</dd>
                      <dd>React</dd>
                      <dd>Node.js</dd>
                      <dd>MongoDb</dd>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-muted-foreground">
                      Responsibilities
                    </div>
                    <div className="flex flex-col gap-1 text-right">
                      <dd>Developed web applications</dd>
                      <dd>Led a small team of developers</dd>
                      <dd>Integrated third-party APIs</dd>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
              <div className="text-xs text-muted-foreground">
                Updated <time dateTime="2023-11-23">November 23, 2023</time>
              </div>
              <Pagination className="ml-auto mr-0 w-auto">
                <PaginationContent>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="h-6 w-6">
                      <ChevronLeft className="h-3.5 w-3.5" />
                      <span className="sr-only">Previous Order</span>
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="h-6 w-6">
                      <ChevronRight className="h-3.5 w-3.5" />
                      <span className="sr-only">Next Order</span>
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default VacancyDetailsPage;
