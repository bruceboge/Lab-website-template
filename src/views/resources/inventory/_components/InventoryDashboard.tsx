"use client";
import { useMemo, useState } from "react";
import {
  CATEGORIES,
  INVENTORY_ITEMS,
  type InventoryItem,
  type ItemCategory,
  TEMPLATE_COURSES,
} from "@/data/inventory";
import { BorrowModal } from "./BorrowModal";

export function InventoryDashboard() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ItemCategory | "all">("all");
  const [selectedCourse, setSelectedCourse] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<InventoryItem | null>(null);

  const filteredItems = useMemo(() => {
    return INVENTORY_ITEMS.filter((item) => {
      // 1. Category Filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // 2. Course Filter
      if (selectedCourse !== "all" && !item.courses.includes(selectedCourse)) {
        return false;
      }

      // 3. Status Filter
      if (selectedStatus === "available" && item.status !== "available") {
        return false;
      }
      if (selectedStatus === "in-lab-only" && item.status !== "in-lab-only") {
        return false;
      }

      // 4. Search Filter
      if (search.trim()) {
        const query = search.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(query);
        if (!matchesName && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [search, activeCategory, selectedCourse, selectedStatus]);

  return (
    <div className="inventory-dashboard">
      <div className="inventory-controls">
        <div className="search-wrap">
          <input
            type="search"
            className="inventory-search"
            placeholder="Search equipment by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search laboratory inventory"
          />
          {search && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search query"
            >
              ✕
            </button>
          )}
        </div>

        <div className="filter-dropdowns">
          <label className="select-wrap">
            <span className="filter-label">Filter by Course:</span>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              aria-label="Filter equipment by course"
            >
              <option value="all">All Lab Courses</option>
              {TEMPLATE_COURSES.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </label>

          <label className="select-wrap">
            <span className="filter-label">Availability:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              aria-label="Filter by availability status"
            >
              <option value="all">All Statuses</option>
              <option value="available">Available to Borrow</option>
              <option value="in-lab-only">In-lab use</option>
            </select>
          </label>
        </div>
      </div>

      <nav className="category-pills" aria-label="Inventory categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`category-pill${activeCategory === cat.id ? " active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
            aria-pressed={activeCategory === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <div className="inventory-status-bar" role="status" aria-live="polite">
        <span>
          Showing <b>{filteredItems.length}</b> of {INVENTORY_ITEMS.length} equipment items
          {selectedCourse !== "all" && ` for "${selectedCourse}"`}
        </span>
      </div>

      {filteredItems.length > 0 ? (
        <ul className="inventory-list">
          {filteredItems.map((item) => {
            const availability =
              item.status === "in-lab-only"
                ? "In-lab use"
                : item.status === "reserved"
                  ? "Reserved"
                  : "Available";

            return (
              <li className="inventory-list-item" key={item.id}>
                <div className="inventory-list-name">
                  <span className="eyebrow">{item.categoryLabel}</span>
                  <h3>{item.name}</h3>
                </div>
                <div className="inventory-list-actions">
                  <span
                    className={`status-badge ${item.status === "available" ? "status-avail" : "status-lab"}`}
                  >
                    {availability}
                  </span>
                  <button
                    type="button"
                    className="button button-gold button-small"
                    onClick={() => setActiveItem(item)}
                  >
                    {item.status === "in-lab-only" ? "Reserve" : "Request"}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="inventory-empty">
          <p>No equipment matching your filters was found.</p>
          <button
            type="button"
            className="button secondary button-small"
            onClick={() => {
              setSearch("");
              setActiveCategory("all");
              setSelectedCourse("all");
              setSelectedStatus("all");
            }}
          >
            Clear all filters
          </button>
        </div>
      )}

      {activeItem && (
        <BorrowModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </div>
  );
}
