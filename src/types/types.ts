export type MenuType = {
  id: number;
  catSlug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type ProductType = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};
