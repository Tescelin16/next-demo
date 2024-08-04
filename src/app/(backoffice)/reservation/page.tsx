import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Invoices',
};
 
export default async function Reservation({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  return (
   <></>
  );
}