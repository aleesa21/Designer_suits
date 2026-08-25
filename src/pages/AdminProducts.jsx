import React, { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Search, ArrowLeft, Layers } from "lucide-react";
import ProductsForm from "../component/ProductsForm";

const MOCK_CATEGORIES = [
  { category_id: 1, name: "Sherwanis" },
  { category_id: 2, name: "Three-Piece Suits" },
  { category_id: 3, name: "Tuxedos" },
  { category_id: 4, name: "Kurta Sets" },
];
const MOCK_PRODUCTS = [
  {
    design_id: 1,
    category_id: 3,
    name: "Midnight Royal Velvet Tuxedo",
    description: "Hand-embellished velvet tuxedo with satin lapels.",
    fabric_options: "Velvet, Silk",
    is_featured: true,
    is_visible: true,
    display_order: 1,
  },
  {
    design_id: 2,
    category_id: 1,
    name: "Gold Brocade Heritage Sherwani",
    description: "Traditional embroidered sherwani for formal occasions.",
    fabric_options: "Brocade, Raw Silk",
    is_featured: false,
    is_visible: true,
    display_order: 2,
  },
];

function AdminProducts() {
  const [isformOpen, setIsformOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(false);

  // const[products,setProducts]=useState([]);
  // async function FetchProducts() {
  //   try {
  //     const res = await fetch("url");
  //     if (!res.ok) {
  //       throw new Error("failed to fetch products data");
  //     }
  //     const data = res.json();
  //     setProducts(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // useEffect(() =>{
  //   Fetchproducrs();
  // }, []);

  const handleOpenEdit = (product) => {
    setSelectedProduct(product);
    setIsformOpen(true);
  };
  const handleDelete = () => {
    alert("delete this item");
  };

  const handleAddNew = () => {
    setSelectedProduct(null);
    setIsformOpen(true);
  };

  if (isformOpen) {
    return (
      <ProductsForm
        categories={MOCK_CATEGORIES}
        editedData={selectedProduct}
        closeForm={() => setIsformOpen(false)}
      />
    );
  }
  return (
    <div className="w-full min-h-screen px-8 py-6 space-y-8 text-foreground">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-semibold block mb-1">
            Management Panel
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
            Designs{" "}
            <span className="italic text-primary font-serif">Catalog</span>
          </h1>
        </div>
        <button
          onClick={handleAddNew}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-foreground-inverted text-xs uppercase tracking-[0.2em] font-semibold rounded shadow-md hover:bg-primary-light transition-all"
        >
          <Plus size={15} /> Add New Design
        </button>
      </div>

      <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-6 space-y-6 shadow-xl">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="relative w-full sm:w-80">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground-subtle"
            />
            <input
              type="text"
              placeholder="Search catalog..."
              className="w-full bg-black/40 border border-white/10 rounded-md pl-9 pr-4 py-2 text-xs text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-foreground-subtle font-mono">
            2 Entries
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-foreground-subtle text-[10px] uppercase tracking-[0.2em] font-semibold">
                <th className="py-3 font-medium">Design Name</th>
                <th className="py-3 font-medium">Category</th>
                {/* <th className="py-3 font-medium">Fabrics</th> */}
                <th className="py-3 font-medium text-center">Featured</th>
                <th className="py-3 font-medium text-center">Visibility</th>
                <th className="py-3 font-medium text-center">Order</th>
                <th className="py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_PRODUCTS.map((product) => {
                const category = MOCK_CATEGORIES.find(
                  (c) => c.category_id === Number(product.category_id),
                );
                return (
                  <tr
                    key={product.design_id}
                    className="hover:bg-white/[0.04] transition-colors group"
                  >
                    <td className="py-4 pr-4">
                      <p className="font-medium text-sm text-foreground">
                        {product.name}
                      </p>
                    </td>
                    <td className="py-4 px-2">
                      <span className="inline-flex items-center gap-1.5 text-xs text-foreground-subtle">
                        <Layers size={12} className="text-primary" />
                        {category?.name || "Uncategorized"}
                      </span>
                    </td>
                    {/* <td className="py-4 px-2">
                    <span className="text-xs text-foreground-muted">
                      {product.fabric_options
                        ? product.fabric_options
                            .split(",")
                            .map((f) => f.trim())
                            .join(" · ")
                        : "None"}
                    </span>
                  </td> */}
                    <td className="py-4 px-2 text-center">
                      {product.is_featured ? (
                        <span className="text-xs text-amber-400 font-medium">
                          Yes
                        </span>
                      ) : (
                        <span className="text-xs text-foreground-subtle opacity-50">
                          No
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-center">
                      {product.is_visible ? (
                        <span className="text-xs text-emerald-400 font-medium">
                          Visible
                        </span>
                      ) : (
                        <span className="text-xs text-rose-400 font-medium">
                          Hidden
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-center font-mono text-xs text-foreground-subtle">
                      {product.display_order}
                    </td>
                    <td className="py-4 pl-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => handleOpenEdit(product)}
                          className="p-1.5 text-foreground-subtle hover:text-primary transition-colors"
                          title="Edit Design"
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          onClick={() => handleDelete(product.design_id)}
                          className="p-1.5 text-foreground-subtle hover:text-rose-400 transition-colors"
                          title="Delete Design"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
