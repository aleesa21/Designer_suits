import React from "react";
import { NavLink } from "react-router";
import {
  FolderOpen,
  Scissors,
  Image,
  HelpCircle,
  Megaphone,
  Store,
} from "lucide-react";

function Sidebar() {
  const sections = [
    {
      label: "Catalog",
      items: [
        { name: "Products", path: "/admin", icon: Scissors, end: true },

        { name: "Categories", path: "/admin/categories", icon: FolderOpen },
        { name: "Past works", path: "/admin/past-works", icon: Image },
      ],
    },
    {
      label: "Site Settings",
      items: [
        { name: "FAQs", path: "/admin/faq", icon: HelpCircle },
        { name: "Promo Popup", path: "/admin/popup", icon: Megaphone },
        { name: "Shop Details", path: "/admin/shop-details", icon: Store },
      ],
    },
  ];

  return (
    <nav className="w-[260px] h-screen bg-surface border-r border-border p-6 flex flex-col gap-6 font-sans text-foreground">
      <div className="pb-5 border-b border-border/60">
        <h1 className="font-serif text-2xl tracking-wide text-primary font-semibold">
          Designer Suits
        </h1>
        <p className="text-[10px] tracking-widest text-primary-light/80 mt-1 uppercase font-medium">
          Admin Panel
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-6 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.label} className="flex flex-col gap-1.5">
            <span className="text-[11px] font-semibold tracking-wider text-foreground-subtle uppercase mb-1 px-3">
              {section.label}
            </span>

            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-foreground-inverted font-semibold shadow-md shadow-primary/10"
                        : "text-foreground-muted hover:text-foreground hover:bg-surface-inset"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={18}
                        strokeWidth={isActive ? 2.2 : 1.8}
                        className={`transition-colors ${
                          isActive
                            ? "text-foreground-inverted"
                            : "text-foreground-subtle group-hover:text-primary-light"
                        }`}
                      />
                      <span>{item.name}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
