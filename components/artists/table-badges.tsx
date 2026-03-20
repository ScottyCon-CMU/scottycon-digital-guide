import { Users, Store, Info } from "lucide-react";
import type { AlleyTable } from "@/lib/data";

export function TableTypeChip({ type, className = "bg-primary/10 text-secondary" }: {
    type: AlleyTable["type"];
    className?: string;
}) {
    return (
        <div className={`font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1 ${className}`}>
            {type === "artist" ? <><Users size={10} />Artists</>
                : type === "vendor" ? <><Store size={10} />Vendor</>
                    : <><Info size={10} />Information</>}
        </div>
    );
}

export function VendorBadge({ tableNumber }: { tableNumber: number }) {
    return (
        <div className="font-mono font-semibold text-xs px-3 py-1 rounded-sm bg-accent/30 text-secondary">
            Vendor {Math.abs(tableNumber)}
        </div>
    );
}
