import React, { useState } from 'react';
import { 
  Folder, 
  Scissors, 
  Image as ImageIcon, 
  HelpCircle, 
  Megaphone, 
  Store, 
  Plus, 
  Trash2, 
  Edit3, 
  Eye, 
  EyeOff, 
  Star, 
  Upload, 
  Save, 
  GripVertical 
} from 'lucide-react';

export default function AdminDashboard2() {
  const [activeTab, setActiveTab] = useState('categories');

  // --- MOCK STATES ---
  const [categories, setCategories] = useState([
    { category_id: 1, name: "Men's Wear" },
    { category_id: 2, name: "Women's Wear" },
    { category_id: 3, name: "Bridal & Ceremonial" },
  ]);
  const [newCatName, setNewCatName] = useState('');

  const [designs, setDesigns] = useState([
    { design_id: 1, name: "Nehru Collar Shirt", category: "Men's Wear", fabrics: ["Cotton", "Linen"], is_featured: true, is_visible: true },
    { design_id: 2, name: "Double Breasted Tuxedo", category: "Men's Wear", fabrics: ["Wool", "Silk"], is_featured: false, is_visible: true },
  ]);

  const [popup, setPopup] = useState({
    text: "Book your private fitting session for the upcoming wedding season.",
    is_visible: true,
    image_path: null
  });

  const [shopInfo, setShopInfo] = useState({
    shop_name: "Atelier Bespoke",
    tagline: "Crafting Timeless Elegance",
    phone: "+977 9800000000",
    email: "contact@atelierbespoke.com",
    address: "Kathmandu, Nepal",
    opening_hours: "Sun - Fri: 10:00 AM - 7:00 PM\nSat: Closed"
  });

  // --- HANDLERS ---
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    setCategories([...categories, { category_id: Date.now(), name: newCatName }]);
    setNewCatName('');
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(c => c.category_id !== id));
  };

  const navItems = [
    { id: 'categories', label: 'Categories', icon: Folder, section: 'Catalog' },
    { id: 'designs', label: 'Designs Catalog', icon: Scissors, section: 'Catalog' },
    { id: 'gallery', label: 'Gallery / Portfolio', icon: ImageIcon, section: 'Catalog' },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle, section: 'Site Settings' },
    { id: 'popup', label: 'Promo Popup', icon: Megaphone, section: 'Site Settings' },
    { id: 'shop', label: 'Shop Details', icon: Store, section: 'Site Settings' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] font-[family-name:var(--font-sans)] flex">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-[var(--color-surface)] border-r border-[var(--color-border)] flex flex-col justify-between p-4">
        <div>
          <div className="px-3 py-4 mb-6 border-b border-[var(--color-border)]">
            <h1 className="font-[family-name:var(--font-serif)] text-xl font-bold text-[var(--color-primary)] tracking-wider">
              ATELIER CMS
            </h1>
            <p className="text-xs text-[var(--color-foreground-subtle)] uppercase tracking-widest mt-1">Admin Panel</p>
          </div>

          <nav className="space-y-6">
            {['Catalog', 'Site Settings'].map(section => (
              <div key={section}>
                <p className="text-[10px] font-semibold text-[var(--color-foreground-subtle)] uppercase tracking-wider px-3 mb-2">
                  {section}
                </p>
                <div className="space-y-1">
                  {navItems.filter(item => item.section === section).map(item => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
                          isActive 
                            ? 'bg-[var(--color-primary-alpha)] text-[var(--color-foreground)] border-l-2 border-[var(--color-primary)]' 
                            : 'text-[var(--color-foreground-muted)] hover:bg-[var(--color-surface-inset)] hover:text-[var(--color-foreground)]'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-[var(--color-primary-light)]' : 'text-[var(--color-foreground-subtle)]'}`} />
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="p-3 border-t border-[var(--color-border)] bg-[var(--color-surface-inset)] rounded-lg">
          <p className="text-xs text-[var(--color-foreground-subtle)]">Logged in as Admin</p>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* TAB 1: CATEGORIES (Minimal: Name Only) */}
          {activeTab === 'categories' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-serif)] text-[var(--color-primary-light)]">
                  Categories
                </h2>
                <p className="text-sm text-[var(--color-foreground-subtle)]">
                  Simple list of garment categories displayed across the site.
                </p>
              </div>

              {/* Add New Category Input */}
              <form onSubmit={handleAddCategory} className="flex gap-3 max-w-md">
                <input
                  type="text"
                  placeholder="e.g. Outerwear"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  className="flex-1 bg-[var(--color-surface-inset)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-primary)]"
                />
                <button
                  type="submit"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-[var(--color-foreground-inverted)] px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 transition-colors"
                >
                  <Plus className="w-4 h-4" /> Add
                </button>
              </form>

              {/* Categories Table */}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[var(--color-surface-inset)] text-[var(--color-foreground-subtle)] border-b border-[var(--color-border)]">
                    <tr>
                      <th className="py-3 px-4 w-12">#</th>
                      <th className="py-3 px-4">Category Name</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    {categories.map((cat, index) => (
                      <tr key={cat.category_id} className="hover:bg-[var(--color-surface-inset)]/50 transition-colors">
                        <td className="py-3 px-4 text-[var(--color-foreground-subtle)]">{index + 1}</td>
                        <td className="py-3 px-4 font-medium text-[var(--color-foreground)]">{cat.name}</td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button className="p-1 hover:text-[var(--color-primary)] transition-colors">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDeleteCategory(cat.category_id)}
                            className="p-1 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: DESIGNS CATALOG */}
          {activeTab === 'designs' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold font-[family-name:var(--font-serif)] text-[var(--color-primary-light)]">
                    Designs Catalog
                  </h2>
                  <p className="text-sm text-[var(--color-foreground-subtle)]">
                    Manage individual suits, shirts, and bespoke outfit designs.
                  </p>
                </div>
                <button className="bg-[var(--color-primary)] text-[var(--color-foreground-inverted)] px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2">
                  <Plus className="w-4 h-4" /> New Design
                </button>
              </div>

              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[var(--color-surface-inset)] text-[var(--color-foreground-subtle)] border-b border-[var(--color-border)]">
                    <tr>
                      <th className="py-3 px-4">Design Name</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Fabrics</th>
                      <th className="py-3 px-4 text-center">Featured</th>
                      <th className="py-3 px-4 text-center">Visible</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    {designs.map((design) => (
                      <tr key={design.design_id} className="hover:bg-[var(--color-surface-inset)]/50">
                        <td className="py-3 px-4 font-medium text-[var(--color-foreground)]">{design.name}</td>
                        <td className="py-3 px-4 text-[var(--color-foreground-muted)]">{design.category}</td>
                        <td className="py-3 px-4">
                          <div className="flex gap-1">
                            {design.fabrics.map(f => (
                              <span key={f} className="text-xs bg-[var(--color-surface-inset)] border border-[var(--color-border)] px-2 py-0.5 rounded">
                                {f}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button className={`p-1 ${design.is_featured ? 'text-[var(--color-primary)]' : 'text-[var(--color-foreground-subtle)]'}`}>
                            <Star className="w-4 h-4 fill-current" />
                          </button>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button className="p-1 text-[var(--color-foreground-subtle)]">
                            {design.is_visible ? <Eye className="w-4 h-4 text-green-400" /> : <EyeOff className="w-4 h-4 text-red-400" />}
                          </button>
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button className="p-1 hover:text-[var(--color-primary)]"><Edit3 className="w-4 h-4" /></button>
                          <button className="p-1 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: PROMOTIONAL POPUP */}
          {activeTab === 'popup' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-serif)] text-[var(--color-primary-light)]">
                  Promotional Popup
                </h2>
                <p className="text-sm text-[var(--color-foreground-subtle)]">
                  Configure the single modal popup displayed to visitors when entering the site.
                </p>
              </div>

              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 rounded-lg space-y-6 max-w-2xl">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Popup Status</label>
                  <button 
                    onClick={() => setPopup({...popup, is_visible: !popup.is_visible})}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 ${
                      popup.is_visible 
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                        : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                    }`}
                  >
                    {popup.is_visible ? '● Active on Site' : '○ Disabled'}
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--color-foreground-muted)]">Announcement Text</label>
                  <textarea 
                    rows="3"
                    value={popup.text}
                    onChange={(e) => setPopup({...popup, text: e.target.value})}
                    className="w-full bg-[var(--color-surface-inset)] border border-[var(--color-border)] rounded-md p-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--color-foreground-muted)]">Banner Image</label>
                  <div className="border-2 border-dashed border-[var(--color-border)] rounded-lg p-6 text-center hover:border-[var(--color-primary)] cursor-pointer transition-colors">
                    <Upload className="w-8 h-8 text-[var(--color-foreground-subtle)] mx-auto mb-2" />
                    <p className="text-xs text-[var(--color-foreground-subtle)]">Click to upload or drag image here</p>
                  </div>
                </div>

                <button className="bg-[var(--color-primary)] text-[var(--color-foreground-inverted)] px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2">
                  <Save className="w-4 h-4" /> Save Popup
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: SHOP INFORMATION */}
          {activeTab === 'shop' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-serif)] text-[var(--color-primary-light)]">
                  Shop Identity & Contact
                </h2>
                <p className="text-sm text-[var(--color-foreground-subtle)]">
                  Global branding details, store address, and contact numbers.
                </p>
              </div>

              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 rounded-lg space-y-6 max-w-3xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--color-foreground-muted)]">Shop Name</label>
                    <input 
                      type="text" 
                      value={shopInfo.shop_name}
                      onChange={(e) => setShopInfo({...shopInfo, shop_name: e.target.value})}
                      className="w-full bg-[var(--color-surface-inset)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--color-foreground-muted)]">Tagline</label>
                    <input 
                      type="text" 
                      value={shopInfo.tagline}
                      onChange={(e) => setShopInfo({...shopInfo, tagline: e.target.value})}
                      className="w-full bg-[var(--color-surface-inset)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--color-foreground-muted)]">Phone / WhatsApp</label>
                    <input 
                      type="text" 
                      value={shopInfo.phone}
                      onChange={(e) => setShopInfo({...shopInfo, phone: e.target.value})}
                      className="w-full bg-[var(--color-surface-inset)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--color-foreground-muted)]">Email Address</label>
                    <input 
                      type="email" 
                      value={shopInfo.email}
                      onChange={(e) => setShopInfo({...shopInfo, email: e.target.value})}
                      className="w-full bg-[var(--color-surface-inset)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--color-foreground-muted)]">Opening Hours</label>
                  <textarea 
                    rows="3"
                    value={shopInfo.opening_hours}
                    onChange={(e) => setShopInfo({...shopInfo, opening_hours: e.target.value})}
                    className="w-full bg-[var(--color-surface-inset)] border border-[var(--color-border)] rounded-md p-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                  />
                </div>

                <button className="bg-[var(--color-primary)] text-[var(--color-foreground-inverted)] px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2">
                  <Save className="w-4 h-4" /> Save Shop Details
                </button>
              </div>
            </div>
          )}

          {/* FALLBACK FOR OTHER TABS */}
          {(activeTab === 'gallery' || activeTab === 'faqs') && (
            <div className="p-8 border border-dashed border-[var(--color-border)] rounded-lg text-center text-[var(--color-foreground-subtle)]">
              {activeTab.toUpperCase()} management UI goes here (Follows standard table structure).
            </div>
          )}

        </div>
      </main>
    </div>
  );
}