import React, { useState, useEffect } from "react";
import {
  Image as ImageIcon,
  Pencil,
  Trash2,
  Plus,
  Save,
  Loader2,
  CheckCircle2,
  X,
  Upload,
} from "lucide-react";

const emptyForm = {
  gallery_id: null,
  title: "",
  image_path: "",
  category_id: "",
  display_order: 1,
  is_visible: true,
};

// fetch logic
const mockCategories = [
  { category_id: 1, name: "Suits" },
  { category_id: 2, name: "Fabrics" },
  { category_id: 3, name: "Groomswear" },
];

export default function Pastworks() {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const fetchItems = async () => {
    //fetch
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            gallery_id: 1,
            title: "Charcoal Three-Piece",
            image_path:
              "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600",
            category_id: 1,
            display_order: 1,
            is_visible: true,
          },
          {
            gallery_id: 2,
            title: "Italian Wool Fabric Selection",
            image_path:
              "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600",
            category_id: 2,
            display_order: 2,
            is_visible: true,
          },
          {
            gallery_id: 3,
            title: "Groom's Wedding Suit",
            image_path:
              "https://images.unsplash.com/photo-1550246140-29f40b909e5a?w=600",
            category_id: 3,
            display_order: 3,
            is_visible: true,
          },
        ]);
      }, 400);
    });
  };

  useEffect(() => {
    setLoading(true);
    setCategories(mockCategories);
    fetchItems()
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const openAddModal = () => {
    setForm(emptyForm);
    setImageFile(null);
    setImagePreview("");
    setShowModal(true);
  };

  const openEditModal = (item) => {
    setForm(item);
    setImageFile(null);
    setImagePreview(item.image_path);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      let image_path = form.image_path;

      if (imageFile) {
        // Upload the file to storage and use the returned public URL, e.g:
        image_path = imagePreview;
      }

      const payload = { ...form, image_path };

      if (form.gallery_id) {
        // await supabase.from('gallery_items').update(payload).eq('gallery_id', form.gallery_id);
        await new Promise((resolve) => setTimeout(resolve, 600));
        setSuccessMsg("Item updated successfully!");
      } else {
        // await supabase.from('gallery_items').insert(payload);
        await new Promise((resolve) => setTimeout(resolve, 600));
        setSuccessMsg("Item added successfully!");
      }

      const data = await fetchItems();
      setItems(data);
      setShowModal(false);
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (gallery_id) => {
    // await supabase.from('gallery_items').delete().eq('gallery_id', gallery_id);
    setItems((prev) => prev.filter((i) => i.gallery_id !== gallery_id));
  };

  const categoryName = (id) =>
    categories.find((c) => c.category_id === Number(id))?.name ||
    "Uncategorized";

  const inputClass =
    "w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-colors";
  const labelClass =
    "block text-[10px] uppercase tracking-[0.2em] font-medium text-white/70 mb-2";

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-foreground">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
        <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
          Loading past works...
        </span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 text-foreground font-sans">
      {/* Top Bar */}
      <div className="flex items-end justify-between border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold">
            Catalog
          </span>
          <h1 className="font-serif text-2xl font-light text-white mt-1">
            Past <span className="italic text-primary font-serif">Works</span>
          </h1>
        </div>
        <button
          type="button"
          onClick={openAddModal}
          className="flex items-center gap-2 bg-primary hover:bg-primary-light text-foreground-inverted text-[10px] uppercase tracking-[0.2em] font-semibold px-5 py-2.5 rounded shadow-md transition-all cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          Add New
        </button>
      </div>

      {/* Success Alert */}
      {successMsg && (
        <div className="flex items-center gap-2 bg-black/40 border border-primary/40 text-primary-light px-4 py-3 rounded-lg text-xs backdrop-blur-md">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-primary" />
          <span className="tracking-wide">{successMsg}</span>
        </div>
      )}

      {/* Gallery grid */}
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-20 border border-dashed border-white/15 rounded-2xl text-white/40">
          <ImageIcon className="w-6 h-6" />
          <p className="text-xs">No past works yet.</p>
          <button
            type="button"
            onClick={openAddModal}
            className="text-[11px] uppercase tracking-[0.2em] text-primary hover:text-primary-light cursor-pointer"
          >
            Add your first item
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items
            .slice()
            .sort((a, b) => a.display_order - b.display_order)
            .map((item) => (
              <div
                key={item.gallery_id}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/30 aspect-[3/4]"
              >
                <img
                  src={item.image_path}
                  alt={item.title || "Past work"}
                  className="w-full h-full object-cover"
                />

                {/* hover actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-start justify-end p-2 gap-2 opacity-0 group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => openEditModal(item)}
                    className="w-7 h-7 rounded-full bg-black/70 flex items-center justify-center text-white hover:text-primary transition-colors cursor-pointer"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.gallery_id)}
                    className="w-7 h-7 rounded-full bg-black/70 flex items-center justify-center text-white hover:text-red-400 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-8">
                  <p className="text-[11px] font-medium text-white truncate">
                    {item.title || "Untitled"}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-white/60">
                      {categoryName(item.category_id)}
                    </span>
                    {!item.is_visible && (
                      <span className="text-[9px] uppercase tracking-[0.1em] text-white/40 border border-white/20 rounded px-1.5">
                        Hidden
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-md bg-[#141318] border border-white/10 rounded-2xl p-6 md:p-7 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">
                {form.gallery_id ? "Edit Item" : "Add Item"}
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="text-white/30 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <label className={labelClass}>Image</label>
              <div className="rounded-lg border border-white/10 bg-black/40 overflow-hidden mb-3 aspect-video flex items-center justify-center">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImageIcon className="w-6 h-6 text-white/20" />
                )}
              </div>
              <label className="flex items-center justify-center gap-2 border border-dashed border-white/15 rounded-md py-2.5 text-[11px] uppercase tracking-[0.15em] text-white/50 hover:text-primary hover:border-primary/40 transition-colors cursor-pointer">
                <Upload className="w-3.5 h-3.5" />
                {imageFile ? imageFile.name : "Choose Image"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required={!form.gallery_id}
                  className="hidden"
                />
              </label>
            </div>

            <div>
              <label className={labelClass}>Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Category</label>
                <select
                  value={form.category_id ?? ""}
                  onChange={(e) =>
                    handleChange(
                      "category_id",
                      e.target.value ? Number(e.target.value) : null,
                    )
                  }
                  className={inputClass}
                >
                  <option value="">Uncategorized</option>
                  {categories.map((c) => (
                    <option key={c.category_id} value={c.category_id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Display Order</label>
                <input
                  type="number"
                  value={form.display_order}
                  onChange={(e) =>
                    handleChange("display_order", Number(e.target.value))
                  }
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <label className={`${labelClass} mb-0`}>Visible</label>
              <button
                type="button"
                onClick={() => handleChange("is_visible", !form.is_visible)}
                className={`relative w-10 h-6 rounded-full transition-colors cursor-pointer ${
                  form.is_visible ? "bg-primary" : "bg-white/10"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                    form.is_visible ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-foreground-inverted text-[10px] uppercase tracking-[0.2em] font-semibold px-5 py-2.5 rounded shadow-md transition-all disabled:opacity-50 cursor-pointer"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {form.gallery_id ? "Save Changes" : "Add Item"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
