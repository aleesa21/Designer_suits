import React, { useState, useEffect } from "react";
import {
  Building2,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Share2,
  Image as ImageIcon,
  Save,
  Loader2,
  CheckCircle2,
  Link2,
} from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function ShopDetails() {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    shop_name: "",
    tagline: "",
    about_text: "",
    logo_url: "",
    address: "",
    phone: "",
    whatsapp: "",
    email: "",
    opening_hours: "",
    instagram_url: "",
    facebook_url: "",
    tiktok_url: "",
    map_embed_url: "",
  });

  useEffect(() => {
    setLoading(true);
    //  DB fetch logic
    setTimeout(() => {
      setFormData({
        shop_name: "Designer Suits Nepal",
        tagline: "Crafting Sartorial Masterpieces",
        about_text:
          "Crafting custom bespoke and semi bespoke suits since 1989.",
        logo_url: "",
        hero_image_path: "",
        address: "Putalisadak, Ram Shah Path, KTM",
        phone: "01-4521574",
        whatsapp: "9851043895",
        email: "designer_suits@mail.com",
        opening_hours: "",
        instagram_url: "https://instagram.com/designersuits.np",
        facebook_url:
          "https://www.facebook.com/share/16ynmGLhmD/?mibextid=wwXlfr",
        tiktok_url: "https://www.tiktok.com/@designers_suits.np",
        map_embed_url:
          "https://maps.google.com/?cid=7009849515276161712&entry=gps&g_st=ac",
      });
      setLoading(false);
    }, 400);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      // await supabase.from('shop_info').upsert({ id: 1, ...formData });
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSuccessMsg("Shop details saved successfully!");
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24 text-foreground">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
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
    <div className="w-full max-w-6xl mx-auto space-y-6 text-foreground font-sans">
      {/* Top Bar */}
      <div className="flex items-end justify-between border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold">
            System Settings
          </span>
          <h1 className="font-serif text-2xl font-light text-white mt-1">
            Storefront{" "}
            <span className="italic text-primary font-serif">
              Configuration
            </span>
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
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* General Details */}
          <div className={cardClass}>
            <div className={cardHeaderClass}>
              <Building2 className="w-4 h-4 text-primary" />
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">
                General Details
              </h2>
            </div>

            <div>
              <label className={labelClass}>Shop Name *</label>
              <input
                type="text"
                name="shop_name"
                value={formData.shop_name}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className={labelClass}>Tagline</label>
              <input
                type="text"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className={labelClass}>About Text</label>
              <textarea
                name="about_text"
                rows={4}
                value={formData.about_text}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary resize-none transition-colors"
              />
            </div>
          </div>

          {/* Contact & Hours */}
          <div className={cardClass}>
            <div className={cardHeaderClass}>
              <Phone className="w-4 h-4 text-primary" />
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">
                Contact & Hours
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Phone</label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>WhatsApp</label>
                <div className="relative">
                  <MessageCircle className="w-3.5 h-3.5 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass}>Email</label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Address</label>
              <div className="relative">
                <MapPin className="w-3.5 h-3.5 text-white/30 absolute left-3.5 top-3.5" />
                <textarea
                  name="address"
                  rows={2}
                  value={formData.address}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Opening Hours</label>
              <div className="relative">
                <Clock className="w-3.5 h-3.5 text-white/30 absolute left-3.5 top-3.5" />
                <textarea
                  name="opening_hours"
                  rows={3}
                  value={formData.opening_hours}
                  onChange={handleChange}
                  placeholder={"Sun - Fri: 10am - 8pm\nSat: 11am - 6pm"}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>
          </div>

          {/* Media & Assets */}
          <div className={cardClass}>
            <div className={cardHeaderClass}>
              <ImageIcon className="w-4 h-4 text-primary" />
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">
                Media & Assets
              </h2>
            </div>

            <div>
              <label className={labelClass}>Logo URL</label>
              <div className="relative">
                <Link2 className="w-3.5 h-3.5 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="logo_url"
                  value={formData.logo_url}
                  onChange={handleChange}
                  placeholder="https://..."
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Socials & Embeds */}
          <div className={cardClass}>
            <div className={cardHeaderClass}>
              <Share2 className="w-4 h-4 text-primary" />
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">
                Socials & Embeds
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Instagram</label>
                <div className="relative">
                  <FaInstagram className="w-3.5 h-3.5 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="instagram_url"
                    value={formData.instagram_url}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Facebook</label>
                <div className="relative">
                  <FaFacebook className="w-3.5 h-3.5 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="facebook_url"
                    value={formData.facebook_url}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>TikTok</label>
                <div className="relative">
                  <FaTiktok className="w-3.5 h-3.5 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="tiktok_url"
                    value={formData.tiktok_url}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass}>Google Maps Embed URL</label>
              <div className="relative">
                <MapPin className="w-3.5 h-3.5 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="map_embed_url"
                  value={formData.map_embed_url}
                  onChange={handleChange}
                  placeholder="https://maps.google.com/embed?pb=..."
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
