export interface food{
    id:number;
    category:string;
    name:string;
    image:string;
    availableTime:string;
    rate:number;
    initialQty:number;
    availableQty:number;
    price:number;
}

export interface order{
    userId:number;
    foodId:number;
    item:string;
    rate:number;
    time:string; // TODO should be Date but used string for convention
    quantity:number;
    price:number;
    status:boolean;

}
export interface IfilterType{
    type:string;
}
