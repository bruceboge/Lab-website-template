import type { ReactNode } from "react";

export function DraftNotice({ children }: { children: ReactNode }) {
  return (
    <div className="draft-notice" role="note">
      <strong>Preview content:</strong> {children}
    </div>
  );
}
