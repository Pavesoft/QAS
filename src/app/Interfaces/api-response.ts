import { ListRange } from "@angular/cdk/collections";
import { FormDto, PressReleseList, ResearchMasterDto } from "./research-master-dto";

export interface ApiResponse {
    success: boolean;
    message: string;
    status: number;
    // product: Product[];  // Assuming Product is another interface/class
    researchMaster: ResearchMasterDto;
    researchMasterList: ResearchMasterDto[];
    pagination: PaginationMetadata;
    paymentStatus:boolean;
    blogList:PressReleseList[],
    singlePressRelease:PressReleseList,
    formDto:FormDto
}

export interface PaginationMetadata {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}

export interface OrderRequestDto {
    cart: CartItem[];
}

export interface CartItem {
    research: Research;
    quantity: number;
    totalPrice: number;
}

export interface Research {
    id: number;
    categoryName: string;
    reportType: string;
    report: string;
    description: string;
    author: string;
    publishDate: number;
    price: number;
    price2: number;
    tableOfContent: string;
    mauthor: string;
}