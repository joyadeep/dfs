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
    userid:number;
    id:number;
    time:string; // TODO should be Date but used string for convention
    quantity:number;
    price:number;

}
export interface IfilterType{
    type:string;
}