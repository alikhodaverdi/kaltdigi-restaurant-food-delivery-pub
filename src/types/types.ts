export type MenuType = {
  id: number;
  catSlug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type OrderType = {
  id: number;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: String;
};

export type CartItemType = {
  id: number;
  title: string;
  img?: string;
  price: number;
  status: string;
  optionTitle?: string;
  quantity: number;
};
