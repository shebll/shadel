import { getProduct } from "@/sanity/sanity-utils";
import ProductMachinePage from "../../components/ProductMachinePage";
export const dynamic = "force-dynamic";
type props = {
  params: { id: string };
};
async function ProductPage({ params: { id } }: props) {
  const product = await getProduct(id);
  return <ProductMachinePage product={product} />;
}

export default ProductPage;
