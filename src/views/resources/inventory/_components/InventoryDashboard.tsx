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
        const matchesModel = item.model.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesSpecs = item.specs.some((spec) => spec.toLowerCase().includes(query));
        const matchesCourse = item.courses.some((course) => course.toLowerCase().includes(query));
        if (!matchesName && !matchesModel && !matchesDesc && !matchesSpecs && !matchesCourse) {
          return false;
        }
      }

      return true;
    });
  }, [search, activeCategory, selectedCourse, selectedStatus]);

  const totalInStock = useMemo(() => {
    return INVENTORY_ITEMS.reduce((acc, curr) => acc + curr.availableQuantity, 0);
  }, []);

  return (
    <div className="inventory-dashboard">
      {/* Search and Filter Controls */}
      <div className="inventory-controls">
        <div className="search-wrap">
          <input
            type="search"
            className="inventory-search"
            placeholder="Search Arduino, ESP32, FPGA, sensors, oscilloscopes, course tags..."
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
              <option value="available">Available to Borrow (Take-home)</option>
              <option value="in-lab-only">Supervised On-Site Bench Use</option>
            </select>
          </label>
        </div>
      </div>

      {/* Category Pills Bar */}
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

      {/* Inventory Status Bar */}
      <div className="inventory-status-bar" role="status" aria-live="polite">
        <span>
          Showing <b>{filteredItems.length}</b> of {INVENTORY_ITEMS.length} items
          {selectedCourse !== "all" && ` for "${selectedCourse}"`}
        </span>
        <span className="catalog-meta">
          Origin Labs Inventory · <b>{totalInStock}</b> total hardware units ready
        </span>
      </div>

      {/* Item Cards Grid */}
      {filteredItems.length > 0 ? (
        <div className="inventory-grid">
          {filteredItems.map((item) => (
            <article className="inventory-card" key={item.id}>
              <div className="inventory-card-top">
                <span className="eyebrow">{item.categoryLabel}</span>
                {item.status === "available" ? (
                  <span className="status-badge status-avail">
                    ● {item.availableQuantity} available
                  </span>
                ) : (
                  <span className="status-badge status-lab">
                    Bench Use Only
                  </span>
                )}
              </div>

              <h3 className="inventory-card-title">{item.name}</h3>
              <p className="inventory-card-model">{item.model}</p>
              <p className="inventory-card-desc">{item.description}</p>

              <div className="inventory-specs">
                <b>Key Specs & Capabilities:</b>
                <ul>
                  {item.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
              </div>

              <div className="inventory-courses">
                <span className="courses-label">Used in Courses:</span>
                <div className="course-tags">
                  {item.courses.map((course) => (
                    <span
                      key={course}
                      className={`course-tag${
                        selectedCourse === course ? " course-tag--highlight" : ""
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="inventory-card-footer">
                <div className="inventory-location">
                  <small>Storage Location</small>
                  <span>{item.location}</span>
                </div>
                <button
                  type="button"
                  className="button button-gold button-small"
                  onClick={() => setActiveItem(item)}
                >
                  {item.status === "in-lab-only"
                    ? "Reserve Bench Station →"
                    : "Borrow Hardware →"}
                </button>
              </div>
            </article>
          ))}
        </div>
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

      {/* Borrow / Reservation Modal */}
      {activeItem && (
        <BorrowModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </div>
  );
}
