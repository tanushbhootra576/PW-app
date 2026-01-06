import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface CommissionTableProps {
  data: { batchCategory: string; couponCode: string; discount: string }[];
}

export function CommissionTable({ data }: CommissionTableProps) {
  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary hover:bg-primary">
            <TableHead className="text-primary-foreground">Batch Category</TableHead>
            <TableHead className="text-primary-foreground">Coupon Code</TableHead>
            <TableHead className="text-right text-primary-foreground">Discount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.batchCategory}>
              <TableCell className="font-medium">{item.batchCategory}</TableCell>
              <TableCell className='font-bold text-primary'>{item.couponCode}</TableCell>
              <TableCell className="text-right font-semibold">{item.discount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
