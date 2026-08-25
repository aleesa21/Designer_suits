import React, { useState } from "react";
import { ArrowLeft, Trash2 } from "lucide-react";

function ProductsForm({ categories, closeForm, editedData }) {
  const initialFormData = () => {
    if (editedData) {
      return {
        category_id: Number(editedData.category_id),
        title: editedData.name ?? "",
        description: editedData.description ?? "",
        fabric_options: editedData.fabric_options ?? "",
        is_featured: Boolean(editedData.is_featured),
        is_visible: Boolean(editedData.is_visible),
        display_order: editedData.display_order ?? 0,
      };
    }

    return {
      category_id: categories?.[0]?.category_id
        ? Number(categories[0].category_id)
        : 1,
      title: "",
      description: "",
      fabric_options: "",
      is_featured: false,
      is_visible: true,
      display_order: 0,
    };
  };
  const [formData, setFormData] = useState(initialFormData);
  // const [images, setImages] = useState([]);

  const handleOnchange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "category_id"
            ? Number(value)
            : value,
    }));
  };

  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   if (!files.length) return;

  //   setImages((prev) => {
  //     const hasExistingPrimary = prev.some((img) => img.is_primary);
  //     const newImages = files.map((file, index) => ({
  //       file,
  //       previewUrl: URL.createObjectURL(file),
  //       is_primary: !hasExistingPrimary && index === 0,
  //       display_order: prev.length + index,
  //     }));
  //     return [...prev, ...newImages];
  //   });

  //   // Reset input so re-selecting the same file triggers onChange
  //   e.target.value = "";
  // };

  // const setPrimaryImage = (selectedIndex) => {
  //   setImages((prev) =>
  //     prev.map((img, i) => ({
  //       ...img,
  //       is_primary: i === selectedIndex,
  //     })),
  //   );
  // };

  // const handleOrderChange = (index, value) => {
  //   setImages((prev) =>
  //     prev.map((img, i) =>
  //       i === index ? { ...img, display_order: Number(value) } : img,
  //     ),
  //   );
  // };

  // const handleRemoveImage = (index) => {
  //   setImages((prev) => {
  //     URL.revokeObjectURL(prev[index].previewUrl);
  //     const filtered = prev.filter((_, i) => i !== index);

  //     // Reassign primary to the first item if the primary image was removed
  //     if (prev[index].is_primary && filtered.length > 0) {
  //       filtered[0].is_primary = true;
  //     }
  //     return filtered;
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productPayload = {
      ...formData,
      fabric_options: formData.fabric_options
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
    };

    // const imagesPayload = images.map((img) => ({
    //   file: img.file,
    //   is_primary: img.is_primary,
    //   display_order: img.display_order,
    // }));

    console.log("Product Payload:", productPayload);
    // console.log("Images Payload:", imagesPayload);

    // Cleanup Object URLs upon success
    // images.forEach((img) => URL.revokeObjectURL(img.previewUrl));
    // setImages([]);
    setFormData(initialFormData);
    if (closeForm) closeForm();
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
          {editedData ? "Editing Entry" : "New Creation"}
        </span>
      </div>

      <div className="bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.01] backdrop-blur-md border border-white/10 rounded-xl p-8 space-y-8 shadow-xl">
        <div className="border-b border-white/10 pb-4">
          <h1 className="font-serif text-3xl font-light">
            {editedData ? "Edit" : "Create"}{" "}
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
                  value={formData.description}
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

            <div className="col-span-full border-t border-white/10 pt-6">
              <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-primary-light mb-2">
                Design Images
              </label>
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                // onChange={handleImageChange}
                className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-foreground file:mr-4 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-[10px] file:uppercase file:tracking-[0.15em] file:font-semibold file:bg-primary file:text-foreground-inverted hover:file:bg-primary-light file:cursor-pointer cursor-pointer focus:outline-none focus:border-primary transition-colors"
              />

              {/* {images.length > 0 && (
                <div className="space-y-3 mt-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-foreground-subtle">
                    Image Gallery Settings & Ordering
                  </p>

                  <div className="grid grid-cols-1 gap-3">
                    {images.map((img, index) => (
                      <div
                        key={img.previewUrl}
                        className={`flex items-center gap-4 p-3 rounded-lg border bg-black/40 transition-colors ${
                          img.is_primary ? "border-primary" : "border-white/10"
                        }`}
                      >
                        <img
                          src={img.previewUrl}
                          alt={`Upload ${index}`}
                          className="w-14 h-14 object-cover rounded border border-white/10 shrink-0"
                        />

                        <div className="flex-1 flex flex-wrap items-center justify-between gap-4">
                          <label className="flex items-center gap-2 cursor-pointer text-xs text-foreground">
                            <input
                              type="radio"
                              name="primary_image"
                              checked={img.is_primary}
                              onChange={() => setPrimaryImage(index)}
                              className="accent-primary cursor-pointer"
                            />
                            <span
                              className={
                                img.is_primary ? "text-primary font-medium" : ""
                              }
                            >
                              {img.is_primary
                                ? "Primary Cover"
                                : "Set as Cover"}
                            </span>
                          </label>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-foreground-subtle uppercase tracking-wider">
                              Order:
                            </span>
                            <input
                              type="number"
                              min="0"
                              value={img.display_order}
                              onChange={(e) =>
                                handleOrderChange(index, e.target.value)
                              }
                              className="w-16 bg-black/60 border border-white/10 rounded px-2 py-1 text-xs text-foreground focus:outline-none focus:border-primary"
                            />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="text-xs text-red-400 hover:text-red-300 p-2 rounded transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
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
              {editedData ? "Update Design" : "Create Design"}{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductsForm;
