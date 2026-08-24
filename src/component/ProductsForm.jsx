import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

function ProductsForm({ categories, closeForm }) {
  const initialFormData = {
    category_id: categories?.category_id || 1,
    title: "",
    description: "",
    fabric_options: "",
    is_featured: false,
    is_visible: true,
    display_order: 0,
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form submitted", formData);
    setFormData(initialFormData);
  };
  return (
    <div className="w-full min-h-screen px-8 py-6 space-y-6 text-foreground">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <button
          type="button"
          onClick={closeForm}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground-subtle hover:text-primary transition-colors font-medium"
        >
          <ArrowLeft size={16} />
          Back to Catalog
        </button>
        <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold">
          New Creation
        </span>
      </div>

      {/* Semi-transparent Glass Panel */}
      <div className="bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.01] backdrop-blur-md border border-white/10 rounded-xl p-8 space-y-8 shadow-xl">
        {" "}
        <div className="border-b border-white/10 pb-4">
          <h1 className="font-serif text-3xl font-light">
            Create{" "}
            <span className="italic text-primary font-serif">
              Bespoke Design
            </span>
          </h1>
          <p className="text-xs text-foreground-subtle mt-1">
            Configure options, material listings, and visibility status.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-white mb-2">
                  Design Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  required
                  onChange={handleOnchange}
                  placeholder="e.g. Royal Silk Dinner Jacket"
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-white mb-2">
                  Collection Category *
                </label>
                <select
                  value={formData.category_id}
                  name="category_id"
                  onChange={handleOnchange}
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  {categories.map((cat) => (
                    <option
                      key={cat.category_id}
                      value={cat.category_id}
                      className="bg-neutral-900"
                    >
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-white mb-2">
                  Description & Craftsmanship
                </label>
                <textarea
                  rows={4}
                  name="description"
                  onChange={handleOnchange}
                  placeholder="Describe cut, lining, lapel accents, and finish..."
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary resize-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-white mb-2">
                  Fabrics
                </label>
                <input
                  type="text"
                  name="fabric_options"
                  value={formData.fabric_options}
                  onChange={handleOnchange}
                  placeholder="e.g. Velvet, Silk, Brocade"
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <span className="text-[11px] text-foreground-subtle mt-1.5 block">
                  Enter fabrics separated by commas.
                </span>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-white mb-2">
                  Display Rank
                </label>
                <input
                  type="number"
                  min="0"
                  name="display_order"
                  value={formData.display_order}
                  onChange={handleOnchange}
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div className="pt-4 space-y-4 border-t border-white/10">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="is_featured"
                    checked={formData.is_featured}
                    onChange={handleOnchange}
                    className="w-4 h-4 rounded accent-primary bg-black border-white/20"
                  />
                  <span className="text-xs text-foreground">
                    Featured on Home Page
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="is_visible"
                    checked={formData.is_visible}
                    onChange={handleOnchange}
                    className="w-4 h-4 rounded accent-primary bg-black border-white/20"
                  />
                  <span className="text-xs text-foreground">
                    Publish to Products Page
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={closeForm}
              className="px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-foreground-subtle hover:text-foreground transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-primary text-foreground-inverted text-[10px] uppercase tracking-[0.2em] font-semibold rounded shadow-md hover:bg-primary-light transition-all"
            >
              Create Design
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductsForm;
