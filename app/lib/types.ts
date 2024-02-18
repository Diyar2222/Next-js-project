export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}
export interface ICustomers {
  id: string;
  name: string;
  email: string;
  image_url: string;
}
export interface IInvoices {
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
  date: string;
}
export interface IRevenue {
  month: string;
  revenue: number;
}
