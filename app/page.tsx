import Product from "@/components/Product";

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();
  const topProducts = products.slice(0, 3); // Get the first three products
  const remainingProducts = products.slice(3); // Get the remaining products

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-35">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center mb-10">TOP 3 PRODUCTS</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {topProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center mb-10">ALL PRODUCTS</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {remainingProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
