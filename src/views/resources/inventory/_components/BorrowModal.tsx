"use client";
import { useEffect, useRef, useState, FormEvent } from "react";
import { type InventoryItem, TEMPLATE_COURSES } from "@/data/inventory";

export type LoanReceipt = {
  reference: string;
  itemName: string;
  studentName: string;
  studentId: string;
  course: string;
  quantity: number;
  dueDate: string;
  pickupLocation: string;
};

export function BorrowModal({
  item,
  onClose,
}: {
  item: InventoryItem;
  onClose: () => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<LoanReceipt | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Default course selection matches item's primary course or first course
  const defaultCourse = item.courses[0] ?? TEMPLATE_COURSES[0];

  useEffect(() => {
    const modal = modalRef.current;
    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const focusableElements = () =>
      Array.from(
        modal?.querySelectorAll<HTMLElement>(
          'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    focusableElements()[0]?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") {
        return;
      }

      const focusable = focusableElements();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) {
        return;
      }

      if (e.shiftKey && (document.activeElement === first || !modal?.contains(document.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (
        !e.shiftKey &&
        (document.activeElement === last || !modal?.contains(document.activeElement))
      ) {
        e.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocused?.isConnected) {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      itemId: item.id,
      studentName: formData.get("studentName"),
      studentId: formData.get("studentId"),
      email: formData.get("email"),
      course: formData.get("course"),
      purpose: formData.get("purpose"),
      quantity: Number(formData.get("quantity") || 1),
      durationDays: Number(formData.get("durationDays") || 14),
    };

    try {
      const response = await fetch("/api/inventory/borrow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok || data.ok === false) {
        throw new Error(data.message || "Failed to submit loan request.");
      }

      setReceipt(data.receipt);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div
      className="modal-backdrop"
      ref={modalRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="borrow-modal-title"
    >
      <div className="modal-card">
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {!receipt ? (
          <>
            <div className="modal-header">
              <h2 id="borrow-modal-title">{item.name}</h2>
            </div>

            {error && (
              <div className="modal-alert" role="alert">
                {error}
              </div>
            )}

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-row-2">
                <label>
                  Full Name
                  <input
                    name="studentName"
                    required
                    placeholder="e.g. Faith Wangari"
                    autoComplete="name"
                  />
                </label>
                <label>
                  Registration / Staff ID
                  <input
                    name="studentId"
                    required
                    placeholder="e.g. C025-01-2045/2023"
                  />
                </label>
              </div>

              <div className="form-row-2">
                <label>
                  DeKUT Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="f.wangari@students.dkut.ac.ke"
                    autoComplete="email"
                  />
                </label>
                <label>
                  Course
                  <select name="course" defaultValue={defaultCourse}>
                    {TEMPLATE_COURSES.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="form-row-2">
                <label>
                  Purpose
                  <select name="purpose" defaultValue="Coursework Practical">
                    <option value="Coursework Practical">Coursework Practical</option>
                    <option value="Final Year Project (FYP)">Final Year Project (FYP)</option>
                    <option value="Research & Tapeout">Research & Tapeout</option>
                    <option value="Student Innovation / Club">Student Innovation</option>
                  </select>
                </label>
                <label>
                  Duration
                  <select name="durationDays" defaultValue="14">
                    <option value="7">7 Days</option>
                    <option value="14">14 Days</option>
                    <option value="30">30 Days</option>
                  </select>
                </label>
              </div>

              <label>
                Quantity
                <input
                  name="quantity"
                  type="number"
                  min={1}
                  max={Math.max(1, Math.min(item.availableQuantity, 4))}
                  defaultValue={1}
                  required
                />
              </label>

              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>
                  I agree to DICEL equipment use and return guidelines.
                </span>
              </label>

              <div className="modal-actions">
                <button
                  type="button"
                  className="button secondary"
                  onClick={onClose}
                  disabled={busy}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="button button-gold"
                  disabled={busy}
                >
                  {busy ? "Submitting…" : "Submit Request →"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="receipt-view" role="status" aria-live="polite">
            <div className="receipt-icon">✓</div>
            <span className="eyebrow">Request Submitted · Pending Lab Review</span>
            <h2>Equipment Request Receipt</h2>
            <p>
              Your request was sent to the lab for review. This reference confirms submission only; wait for approval before collecting equipment.
            </p>

            <div className="receipt-code-box">
              <span className="code-label">REQUEST REFERENCE</span>
              <span className="code-val">{receipt.reference}</span>
            </div>

            <dl className="receipt-details">
              <div>
                <dt>Requested Item</dt>
                <dd><b>{receipt.itemName}</b> (Qty: {receipt.quantity})</dd>
              </div>
              <div>
                <dt>Borrower</dt>
                <dd>{receipt.studentName} ({receipt.studentId})</dd>
              </div>
              <div>
                <dt>Course Track</dt>
                <dd>{receipt.course}</dd>
              </div>
              <div>
                <dt>Requested Return Date</dt>
                <dd><b>{receipt.dueDate}</b></dd>
              </div>
              <div>
                <dt>Collection Desk</dt>
                <dd>{receipt.pickupLocation}</dd>
              </div>
            </dl>

            <div className="modal-actions">
              <button
                type="button"
                className="button button-green"
                onClick={onClose}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
