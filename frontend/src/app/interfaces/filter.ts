export interface FilterItemInterface{
    id: string;
    name: string;
    args:any[];
}

export interface FilterSubItemsInterface extends FilterItemInterface{
    subitem: FilterItemInterface[]
}
export interface FilterParamInterface{
    product_price__lte: number;
    product_price__gte: number;
    product_specification__contains: string;
}

export interface FilterParamListInterface{
    product_price__lte: number[];
    product_price__gte: number[];
    product_specification__contains: string[];
}