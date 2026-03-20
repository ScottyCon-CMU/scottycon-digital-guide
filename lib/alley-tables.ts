/**
 * alley-tables.ts — Artist Alley table data
 *
 * This is the only file you need to edit to update the Artist Alley guide.
 * Fill in each table's artists/vendor name, description, and optional image
 * path (relative to /public, e.g. "/images/table1.jpg"). Leave description
 * as "" if you don't have it yet — the card will still render.
 *
 * Three helper functions keep entries concise:
 *   artist(tableNumber, name | [name, name], description?, image?)
 *   vendor(tableNumber, vendorName, description?, image?)
 *   info(tableNumber, title, description?, hours?, image?)
 */

import type { ArtistTable, VendorTable, InfoTable } from "./data";

// ─── Factory helpers ─────────────────────────────────────────────────────────

function artist(
    tableNumber: number,
    /** One name, or an array for a shared table: ["Alex", "Sam"] */
    artists: string | string[],
    description = "",
    images?: string | string[],
): ArtistTable {
    return {
        type: "artist",
        tableNumber,
        artists: Array.isArray(artists) ? artists : [artists],
        description,
        images: images === undefined ? undefined : Array.isArray(images) ? images : [images],
    };
}

function vendor(
    /** Match the map position: -1 through -9 */
    tableNumber: number,
    vendorName: string,
    description = "",
    images?: string | string[],
): VendorTable {
    return { type: "vendor", tableNumber, vendorName, description, images: images === undefined ? undefined : Array.isArray(images) ? images : [images] };
}

function info(
    /** -100 = dark blue desk · -101 / -102 = green desks */
    tableNumber: number,
    title: string,
    description = "",
    hours?: string,
    images?: string | string[],
): InfoTable {
    return { type: "info", tableNumber, title, description, hours, images: images === undefined ? undefined : Array.isArray(images) ? images : [images] };
}

// ─── Artist tables (1 – 58) ───────────────────────────────────────────────────
// One entry per table. Tables that share a spot get an array of names.

export const artistTables: ArtistTable[] = [
    artist( 1, ["Aritst 1", "Artist 2"],  "Table description here", ["/images/example_illustration.jpeg", "/images/example_illustration_2.jpeg"]),
    artist( 2, ""),
    artist( 3, ""),
    artist( 4, ""),
    artist( 5, ""),
    artist( 6, ""),
    artist( 7, ""),
    artist( 8, ""),
    artist( 9, ""),
    artist(10, ""),
    artist(11, ""),
    artist(12, ""),
    artist(13, ""),
    artist(14, ""),
    artist(15, ""),
    artist(16, ""),
    artist(17, ""),
    artist(18, ""),
    artist(19, ""),
    artist(20, ""),
    artist(21, ""),
    artist(22, ""),
    artist(23, ""),
    artist(24, ""),
    artist(25, ""),
    artist(26, ""),
    artist(27, ""),
    artist(28, ""),
    artist(29, ""),
    artist(30, ""),
    artist(31, ""),
    artist(32, ""),
    artist(33, ""),
    artist(34, ""),
    artist(35, ""),
    artist(36, ""),
    artist(37, ""),
    artist(38, ""),
    artist(39, ""),
    artist(40, ""),
    artist(41, ""),
    artist(42, ""),
    artist(43, ""),
    artist(44, ""),
    artist(45, ""),
    artist(46, ""),
    artist(47, ""),
    artist(48, ""),
    artist(49, ""),
    artist(50, ""),
    artist(51, ""),
    artist(52, ""),
    artist(53, ""),
    artist(54, ""),
    artist(55, ""),
    artist(56, ""),
    artist(57, ""),
    artist(58, ""),
];

// ─── Vendor tables (-1 through -8) ───────────────────────────────────────────
// IDs are negative to distinguish vendors from artist tables on the map.
// Numbered top→bottom, right col (x≈74) first then left col (x≈13).

export const vendorTables: VendorTable[] = [
    vendor(-1, "Vendor Name",       "Vendor description here."),
    vendor(-2, ""),
    vendor(-3, ""),
    vendor(-4, ""),
    vendor(-5, ""),
    vendor(-6, ""),
];

// ─── Info / service tables ────────────────────────────────────────────────────
// -100 = dark blue desk · -101 and -102 = green desks (see map)

export const infoTables: InfoTable[] = [
    info(-100, "Artist Alley Registration",  "Check in here to receive your table badge, tote bag, and exhibitor packet. Have your confirmation email ready. Staff can also help resolve table assignment issues.", "10:00 AM – 5:00 PM"),
    info(-101, "Information Desk",           "General convention information, maps, and lost & found. Staff here can direct you to programming rooms, restrooms, first aid, and accessibility services.",          "9:00 AM – 6:00 PM"),
];
