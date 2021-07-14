export interface productType {
  _id: string;
  name: string;
  rating: string;
  catagory: string;
  image: string;
  disc: string;
  price: string;
}

export interface reduxStateType {
  Products: productType[];
}
