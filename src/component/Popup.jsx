import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  Link2,
  Save,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export default function Popup() {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    text: "",
    image_path: "",
    is_visible: true,
  });

  useEffect(() => {
    setLoading(true);
    //  fetch logic
    setTimeout(() => {
      setFormData({
        text: "Get 15% off your first bespoke suit — book a fitting today.",
        image_path: "",
        is_visible: true,
      });
      setLoading(false);
    }, 400);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      // await supabase.from('popup').upsert({ id: 1, ...formData });
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSuccessMsg("Popup saved successfully!");
      setTimeout(() => setSuccessMsg(""), 4000);
      console.log(formData);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-foreground">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
        <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
          Loading popup details...
        </span>
      </div>
    );
  }

  const inputClass =
    "w-full bg-black/40 border border-white/10 rounded-md pl-9 pr-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-colors";
  const labelClass =
    "block text-[10px] uppercase tracking-[0.2em] font-medium text-white/70 mb-2";
  const cardClass =
    "bg-gradient-to-br from-white/[0.06] via-white/[0.025] to-transparent border border-white/10 rounded-2xl p-6 md:p-7 shadow-lg shadow-black/30 space-y-5";
  const cardHeaderClass =
    "flex items-center gap-2 border-b border-white/10 pb-4 mb-5";

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 text-foreground font-sans">
      {/* Top Bar */}
      <div className="flex items-end justify-between border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold">
            Site Settings
          </span>
          <h1 className="font-serif text-2xl font-light text-white mt-1">
            Promo <span className="italic text-primary font-serif">Popup</span>
          </h1>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={saving}
          className="flex items-center gap-2 bg-primary hover:bg-primary-light text-foreground-inverted text-[10px] uppercase tracking-[0.2em] font-semibold px-5 py-2.5 rounded shadow-md transition-all disabled:opacity-50 cursor-pointer shrink-0"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          Save Changes
        </button>
      </div>

      {/* Success Alert */}
      {successMsg && (
        <div className="flex items-center gap-2 bg-black/40 border border-primary/40 text-primary-light px-4 py-3 rounded-lg text-xs backdrop-blur-md">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-primary" />
          <span className="tracking-wide">{successMsg}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className={cardClass}>
        <div className={cardHeaderClass}>
          <MessageSquare className="w-4 h-4 text-primary" />
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">
            Popup Content
          </h2>
        </div>

        <div>
          <label className={labelClass}>Text</label>
          <textarea
            name="text"
            rows={3}
            value={formData.text}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary resize-none transition-colors"
          />
        </div>

        <div>
          <label className={labelClass}>Image Path</label>
          <div className="relative">
            <Link2 className="w-3.5 h-3.5 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="image_path"
              value={formData.image_path}
              onChange={handleChange}
              placeholder="/uploads/popup.jpg"
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <label className={`${labelClass} mb-0`}>Visible on site</label>
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({ ...prev, is_visible: !prev.is_visible }))
            }
            className={`relative w-10 h-6 rounded-full transition-colors cursor-pointer ${
              formData.is_visible ? "bg-primary" : "bg-white/10"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                formData.is_visible ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
