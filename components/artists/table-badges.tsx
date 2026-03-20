import { Users, Store, Info } from "lucide-react";
import type { AlleyTable } from "@/lib/data";

export function TableTypeChip({ type }: {
    type: AlleyTable["type"];
}) {
    return (
        <div className="font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1 bg-primary/10 text-secondary">
            {type === "artist" ? <><Users size={10} />Artists</>
                : type === "vendor" ? <><Store size={10} />Vendor</>
                    : <><Info size={10} />Information</>}
        </div>
    );
}

export function VendorBadge({ tableNumber }: { tableNumber: number }) {
    return (
        <div
            className="font-mono font-semibold text-xs px-3 py-1 rounded-sm text-white"
            style={{ background: "var(--table-vendor)" }}
        >
            Vendor {Math.abs(tableNumber)}
        </div>
    );
}
