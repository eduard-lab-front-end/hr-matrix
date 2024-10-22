import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SessionContext } from "@/contexts/SessionContext";
import { useContext } from "react";
import { Badge } from "../ui/badge";

const GridItemTopRight = () => {
  const { employees } = useContext(SessionContext);

  return (
    <Table>
      <TableCaption>Employee Status.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Employee Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees && employees.slice(0,5).map((employee) => (
          <TableRow key={employee._id}>
            <TableCell className="font-medium">{employee.firstName} {employee.lastName}</TableCell>
            <TableCell>{employee.role}</TableCell>
            <TableCell>{employee.employmentType}</TableCell>
            <TableCell className="text-right"><Badge>{employee.status}</Badge></TableCell>
          </TableRow>
        ))}
      </TableBody>
    
    </Table>
  )
}

export default GridItemTopRight
