import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface OtherCoursesTableProps {
  data: { batchCategory: string; couponCode: string; discount: string }[];
}

export function OtherCoursesTable({ data }: OtherCoursesTableProps) {
  return (
    <div className="rounded-md border overflow-x-auto styled-table">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-muted/50 border-b">
            <TableHead className="font-semibold text-foreground">Batch Category</TableHead>
            <TableHead className="font-semibold text-foreground">Coupon Code</TableHead>
            <TableHead className="text-right font-semibold text-foreground">Discount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.batchCategory} className="even:bg-muted/20 border-b">
              <TableCell className="font-medium">{item.batchCategory}</TableCell>
              <TableCell>
                <Badge variant="secondary" className="font-bold">{item.couponCode}</Badge>
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="default" className="font-semibold">{item.discount}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
