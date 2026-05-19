export function AgarthaLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src="/logo-agartha-horizontal.svg" alt="Agartha" className={className} />;
}

export function AgarthaSymbol({ className = "h-8 w-8" }: { className?: string }) {
  return <img src="/agartha-symbol.svg" alt="" aria-hidden="true" className={className} />;
}