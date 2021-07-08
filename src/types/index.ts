type Categorie = {
  id: number;
  label: string;
  link: string;
}

type Breadcrumb = {
  id: number;
  link: string;
  name: string;
}

type TProduct = {
  sku: number;
  image: string;
  name: string;
  price: string;
}

type Filter = {
  id: string;
  label: string;
}

export type { Categorie, Breadcrumb, TProduct, Filter }