"use client";

export function GalleryFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === cat
              ? "bg-accent text-white"
              : "bg-slate-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#222] border border-slate-200 dark:border-[#2a2a2a]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
