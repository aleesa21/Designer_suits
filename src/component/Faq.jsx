import React, { useState, useEffect, useRef } from "react";
import {
  HelpCircle,
  Pencil,
  Trash2,
  Save,
  Loader2,
  CheckCircle2,
  X,
} from "lucide-react";

const emptyForm = {
  faq_id: null,
  question: "",
  answer: "",
  display_order: 1,
  is_visible: true,
};

export default function Faq() {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [form, setForm] = useState(emptyForm);

  const formRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    //  fetch logic
    setTimeout(() => {
      setFaqs([
        {
          faq_id: 1,
          question: "Do you offer bespoke tailoring?",
          answer:
            "Yes, we craft fully bespoke and semi bespoke suits to your exact measurements.",
          display_order: 1,
          is_visible: true,
        },
        {
          faq_id: 2,
          question: "How long does a suit take to make?",
          answer:
            "A bespoke suit typically takes 2-3 weeks from first fitting to final delivery.",
          display_order: 2,
          is_visible: true,
        },
        {
          faq_id: 4,
          question: "what is ur name?",
          answer:
            "Yes, we craft fully bespoke and semi bespoke suits to your exact measurements.",
          display_order: 4,
          is_visible: true,
        },
      ]);
      setLoading(false);
    }, 400);
  }, []);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const startEdit = (faq) => {
    setForm(faq);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cancelEdit = () => {
    setForm(emptyForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      // await supabase.from('faqs').upsert(form);
      await new Promise((resolve) => setTimeout(resolve, 600));

      if (form.faq_id) {
        console.log("edited");
        setSuccessMsg("Updated sucessfully");
      } else {
        console.log("created");
        setSuccessMsg("Created sucessfully");
      }

      //refetch

      setForm(emptyForm);
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (faq_id) => {
    console.log("deleted");
    if (form.faq_id === faq_id) setForm(emptyForm);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-foreground">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
        <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
          Loading FAQs...
        </span>
      </div>
    );
  }

  const inputClass =
    "w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-colors";
  const labelClass =
    "block text-[10px] uppercase tracking-[0.2em] font-medium text-white/70 mb-2";
  const cardClass =
    "bg-gradient-to-br from-white/[0.06] via-white/[0.025] to-transparent border border-white/10 rounded-2xl p-6 md:p-7 shadow-lg shadow-black/30 space-y-5";

  return (
    <div
      ref={formRef}
      className="w-full max-w-4xl mx-auto space-y-6 text-foreground font-sans"
    >
      {/* Top Bar */}
      <div className="border-b border-white/10 pb-4">
        <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold">
          Site Settings
        </span>
        <h1 className="font-serif text-2xl font-light text-white mt-1">
          Frequently Asked{" "}
          <span className="italic text-primary font-serif">Questions</span>
        </h1>
      </div>

      {/* Success Alert */}
      {successMsg && (
        <div className="flex items-center gap-2 bg-black/40 border border-primary/40 text-primary-light px-4 py-3 rounded-lg text-xs backdrop-blur-md">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-primary" />
          <span className="tracking-wide">{successMsg}</span>
        </div>
      )}

      {/* Add / Edit form */}
      <form onSubmit={handleSubmit} className={cardClass}>
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">
              {form.faq_id ? "Edit FAQ" : "Add FAQ"}
            </h2>
          </div>
          {form.faq_id && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-white/30 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div>
          <label className={labelClass}>Question</label>
          <input
            type="text"
            value={form.question}
            onChange={(e) => handleChange("question", e.target.value)}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Answer</label>
          <textarea
            rows={3}
            value={form.answer}
            onChange={(e) => handleChange("answer", e.target.value)}
            required
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div>
            <label className={`${labelClass} mb-1`}>Display Order</label>
            <input
              type="number"
              value={form.display_order}
              onChange={(e) =>
                handleChange("display_order", Number(e.target.value))
              }
              className={`${inputClass} w-20`}
            />
          </div>

          <div className="flex items-center gap-3">
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
        </div>

        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 bg-primary hover:bg-primary-light text-foreground-inverted text-[10px] uppercase tracking-[0.2em] font-semibold px-5 py-2.5 rounded shadow-md transition-all disabled:opacity-50 cursor-pointer"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {form.faq_id ? "Save Changes" : "Add FAQ"}
        </button>
      </form>

      {/* List */}
      <div className="space-y-3">
        {faqs
          .slice()
          .sort((a, b) => a.display_order - b.display_order)
          .map((faq) => (
            <div
              key={faq.faq_id}
              className="flex items-start justify-between gap-4 bg-black/30 border border-white/10 rounded-xl px-5 py-4"
            >
              <div className="min-w-0">
                <p className="text-xs font-medium text-white truncate">
                  {faq.question}
                </p>
                <p className="text-[11px] text-white/40 mt-1 line-clamp-2">
                  {faq.answer}
                </p>
                {!faq.is_visible && (
                  <span className="inline-block mt-2 text-[9px] uppercase tracking-[0.15em] text-white/30 border border-white/10 rounded px-2 py-0.5">
                    Hidden
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => startEdit(faq)}
                  className="text-white/40 hover:text-primary transition-colors cursor-pointer"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(faq.faq_id)}
                  className="text-white/40 hover:text-red-400 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
