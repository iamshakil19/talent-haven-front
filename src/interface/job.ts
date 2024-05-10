export interface IJob {
  _id: string;
  updatedAt: string;
  type: string;
  title: string;
  technology: string[];
  salary: number;
  location: string;
  slug: string;
  isUrgent: boolean;
  id: string;
  experience: number;
  description: string;
  employer: any;
  profile: any;
  expDate: string;
  status: string;
  views: number;
  isDeleted: boolean;
  createdAt: string;
  category: string;
}
