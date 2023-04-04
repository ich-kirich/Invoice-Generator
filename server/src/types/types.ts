import Invoice from "models/invoice";
import Work from "models/work";

export interface IWork {
  nameWork: string;
  priceWork: number;
}

export interface IWorksProps {
  works: Work[];
}

export interface IPageProps {
  invoice: Invoice;
}
