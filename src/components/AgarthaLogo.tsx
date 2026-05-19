const asset = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

export function AgarthaLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src={asset("logo-agartha-horizontal.svg")} alt="Agartha" className={className} />;
}

export function AgarthaSymbol({ className = "h-8 w-8" }: { className?: string }) {
  return <img src={asset("agartha-symbol.svg")} alt="" aria-hidden="true" className={className} />;
}
