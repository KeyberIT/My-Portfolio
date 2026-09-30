const activeLocks = new Set<symbol>();
let previousOverflow: string | null = null;

export function lockBodyScroll() {
  if (typeof document === "undefined") return () => {};

  const lockToken = Symbol("body-scroll-lock");

  if (activeLocks.size === 0) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }

  activeLocks.add(lockToken);

  return () => {
    if (!activeLocks.delete(lockToken)) return;

    if (activeLocks.size === 0) {
      document.body.style.overflow = previousOverflow ?? "";
      previousOverflow = null;
    }
  };
}
