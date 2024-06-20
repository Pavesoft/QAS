export interface ResearchMasterDto {
  id: number;
  categoryName: string;
  reportType: string;
  report: string;
  description: string;
  author: string;
  mAuthor: string;
  publishDate: Date;
  price: number;
  price2: number;
  fullDescription?: string;
  fullTableOfContent?: string;
  tableOfContent: string;
  categoryList: string[];
  authors: string[];
}

export interface PressReleseList {
  singlePressRelease: PressReleseList;
  blogTitle: string;
  endDate: string;
  id: string;
  postAuthor: string;
  postCategory: string;
  postContent: string;
  postDate: string;
  postType: string;
  postImgPath: any;
}

export interface FormDto {
  id: number;
  fName: string;
  lName: string;
  officeEmail: string;
  businessPhone: number;
  jobTitle: string;
  categoryId: number;
  countryId: number;
  companyName: string;
  cityName: string;
  zipCode: number;
  description: string;
}
