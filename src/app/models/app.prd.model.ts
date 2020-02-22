export class ProductModel {
  constructor(
    public ProdId:number,
    public ProdName: string,
    public CatId: number
  ){}
}

export const Products =[
  {ProdId: 1001, ProdName:'P1', CatId:101},
  {ProdId: 1002, ProdName:'P2', CatId:102},
  {ProdId: 1003, ProdName:'P3', CatId:103},
  {ProdId: 1004, ProdName:'P4', CatId:101},
  {ProdId: 1005, ProdName:'P5', CatId:102},
  {ProdId: 1006, ProdName:'P6', CatId:103}
];
