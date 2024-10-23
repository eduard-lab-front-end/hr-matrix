import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  File,
  Image,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react";
import { SheetForm } from "../SheetForm/SheetForm";
import { useContext } from "react";
import { SessionContext } from "@/contexts/SessionContext";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const { employees, fetchWithToken, setNeedRefresh } =
    useContext(SessionContext);
  const navigate = useNavigate();
  const deleteEmployeeHandle = async (employeeId) => {
    try {
      await fetchWithToken(`/employees/${employeeId}`, "DELETE");
      setNeedRefresh(true);
    } catch (error) {
      console.log("Can't remove an employee", error);
    }
  };
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Archived
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Active
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>
            <SheetForm
              sheetTrigger={
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Employee
                  </span>
                </Button>
              }
            />
          </div>
        </div>
        <TabsContent value="all">
          <Card x-chunk="A list of products in a table with actions. Each row has an image, name, status, price, total sales, created at and actions.">
            <CardHeader>
              <CardTitle>Employees</CardTitle>
              <CardDescription>Manage your employees.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden sm:table-cell">
                      <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Salary
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Type</TableHead>
                    <TableHead className="hidden lg:table-cell">
                      Employee ID
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees?.map((currentEmployee) => (
                    <TableRow key={currentEmployee._id}>
                      <TableCell className="hidden sm:table-cell">
                        <img
                          alt="Employee image"
                          className="aspect-square rounded-2xl object-cover"
                          height="46"
                          src="https://github.com/shadcn.png"
                          width="40"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        <p>
                          {currentEmployee.firstName} {currentEmployee.lastName}
                        </p>
                        <p className="text-muted-foreground">
                          {currentEmployee.email}
                        </p>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {currentEmployee.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        ${currentEmployee.salary}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {currentEmployee.employmentType}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        #{currentEmployee._id}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel className="hover:bg">
                              Actions
                            </DropdownMenuLabel>
                            <SheetForm
                              employee={currentEmployee}
                              isUpdate
                              sheetTrigger={
                                <DropdownMenuLabel className="hover:bg-muted rounded-sm">
                                  Edit
                                </DropdownMenuLabel>
                              }
                            />

                            <DropdownMenuItem
                              onClick={() =>
                                deleteEmployeeHandle(currentEmployee._id)
                              }
                            >
                              Delete
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => navigate(`${currentEmployee._id}`)}
                            >
                              Info
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Employees;
