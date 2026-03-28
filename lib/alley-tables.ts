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

import type { ArtistTable, InfoTable, VendorTable } from "./data";

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
    artist( 1, ["jay k.", "Abby Xiong"],  "", ["/images/artists/table1.webp"]),
    artist( 2, ["Neveah", "brexx2"], "", ["/images/artists/table2-1.avif", "/images/artists/table2-2.avif"]),
    artist( 3, ["Amber Ultramarine", "Chamen"], "", ["/images/artists/table3.avif"]),
    artist( 4, ["Fishbone.png", "duhhh.hhh.hhh"], "", []),
    artist( 5, ["Iraine", "Mirabelle"], "", ["/images/artists/table5.avif"]),
    artist( 6, ["boiredsl", "kakemoth"], "", []),
    artist( 7, ["ctso___333", "yang pangzi"], "", []),
    artist( 8, ["khanchan.arts", "magnificloud"], "", ["/images/artists/table8.avif"]),
    artist( 9, ["kodaunie", "latesummers"], "", []),
    artist(10, ["Posh", "Munin Jitsajjapong"], "", ["/images/artists/table10.avif"]),
    artist(11, ["Mini Raccoon Factory / QwistayCat", "Mini Raccoon Factory / J"], "", []),
    artist(12, ["stxrryfish", "aru"], "", ["/images/artists/table12.avif"]),
    artist(13, ["Anqi Chen", "Kayla Jung"], "", []),
    artist(14, ["Kany", "Mafulun"], "", ["/images/artists/table14.avif"]),
    artist(15, ["star", "Gyanepsaa Singh"], "", []),
    artist(16, ["Rain", "novaridium"], "", []),
    artist(17, ["mellowjjello", "beji"], "", ["/images/artists/table17.avif"]),
    artist(18, ["Grass", "i.asterisk"], "", []),
    artist(19, ["Colins", "Yuki Zhang"], "", ["/images/artists/table19.avif"]),
    artist(20, ["phaethoniic", "jamrockjammin"], "", ["/images/artists/table20-1.avif", "/images/artists/table20-2.avif"]),
    artist(21, ["MercailleCream", "Raven"], "", ["/images/artists/table21.avif"]),
    artist(22, ["zemyata", "aartemus"], "", ["/images/artists/table22.avif"]),
    artist(23, ["Laila Davis", "eatgruel"], "", ["/images/artists/table23-1.avif", "/images/artists/table23-2.avif"]),
    artist(24, ["roastedcha", "yinyoru"], "", []),
    artist(25, ["honk shoo", "kawaiicornz"], "", ["/images/artists/table25.avif"]),
    artist(26, ["Silvia Kim", "phosilli"], "", ["/images/artists/table26.avif"]),
    artist(27, ["beeveeomaart", "Sachi Amanze"], "", []),
    artist(28, ["swordsoup", "George Capital"], "", ["/images/artists/table28.avif"]),
    artist(29, ["Suhl Hong", "Tinaaa"], "", []),
    artist(30, ["jofipop", "Sulli Yatabe"], "", ["/images/artists/table30.avif"]),
    artist(31, ["Yiyu Wang", "Yiming Wang"], "", []),
    artist(32, ["Chloe Zu", "Monica Wan"], "", []),
    artist(33, ["marmilai", "Jiaxin Lin"], "", ["/images/artists/table33.avif"]),
    artist(34, ["Sylvia Lyu", "lemon bandito"], "", ["/images/artists/table34.avif"]),
    artist(35, ["RookiEnn", "Bosi Li"], "", []),
    artist(36, ["Muukahsa", "Amanda Witt"], "", ["/images/artists/table36.avif"]),
    artist(37, ["Edward", "yaM"], "", []),
    artist(38, ["Janine Zeng", "Shanti Gerry"], "", ["/images/artists/table38.avif"]),
    artist(39, ["@len_likes_line_art", "le croissant"], "", ["/images/artists/table39.avif"]),
    artist(40, ["Lilian Zhao", "shono"], "", []),
    artist(41, ["moistsourbread", "Melissa Qin"], "", []),
    artist(42, ["helixirette", "Ever Karlson"], "", ["/images/artists/table42.avif"]),
    artist(43, ["tospiwe", "moerex"], "", []),
    artist(44, ["Helen Yang", "ARiko"], "", ["/images/artists/table44.avif"]),
    artist(45, ["Stacy Chen", "meiyuqiiii"], "", ["/images/artists/table45-1.avif", "/images/artists/table45-2.avif"]),
    artist(46, ["scs anime girls"]),
    artist(47, ["acatto", "jesvded"], "", ["/images/artists/table47.avif"]),
    artist(48, ["CHILIPOWDAA", "Piosyne"], "", ["/images/artists/table48-1.avif", "/images/artists/table48-2.avif"]),
    artist(49, ["whimstrel", "Anisha Jog"], "", ["/images/artists/table49.avif"]),
    artist(50, ["Suni", "vantawack"], "", []),
    artist(51, ["Moka", "breaddbox"], "", ["/images/artists/table51.avif"]),
    artist(52, ["Abigail Torbatian", "ironaxebroke"], "", ["/images/artists/table52.avif"]),
    artist(53, ["Grace En Color", "Aya Al Sabahi"], "", ["/images/artists/table53.avif"]),
    artist(54, ["snowhua_co", "KAMiTO"], "", []),
    artist(55, ["aaztatine"], "", []),
    artist(56, ["Nezt's Doodles"], "", []),
    artist(57, ["Marimondart"], "", ["/images/artists/table57.avif"]),
    artist(58, ""),
];

// ─── Vendor tables (-1 through -8) ───────────────────────────────────────────
// IDs are negative to distinguish vendors from artist tables on the map.
// Numbered top→bottom, right col (x≈74) first then left col (x≈13).

export const vendorTables: VendorTable[] = [
    vendor(-1, "Tekko", "Haven't gotten enough anime and gaming with ScottyCon? Check out Tekko, Pennsylvania's largest anime convention! With a whole weekend packed full of anime, gaming, and pop culture fun, Tekko has something for everyone.", ["/images/vendors/vendor1.avif"]),
    vendor(-2, "Mystic Mixtures Potion Bar", "Mystic Mixtures Potion Bar handcrafts fantasy themed beverage mixes that can be enjoyed with or without alcohol! Beverages that are easy to mix and magical to drink. Each potion is made by hand with simple ingredients and can be enjoyed by combining with spirits or with a bit of water for a delicious non-alcoholic beverage. See us on Instagram at @mysticmixturespotionbar.", ["/images/vendors/vendor2.avif"]),
    vendor(-3, "Kei-Mart", "From poofy petticoats to whimsical washi tape, Kei-mart offers unique new and gently used lolita fashion and Japanese novelties! We aim to celebrate beginners and established fashionistas!", ["/images/vendors/vendor3.avif"]),
    vendor(-4, "Megaroad Toys & Entertainment", "Megaroad Toys and Entertainment brings the best of Japan to your backyard! Whether you’re looking for goods and figures from your favorite anime, modeling kits and supplies, cute plush, or thoughtful gifts, we have something to surprise and delight fans  and fun-loving people of all ages. We’re a family run business supported by a staff of fans passionate about fandom. Come visit our store in Coraopolis to find a community of like-minded, friendly folks and shop anime, tokusatsu, gaming, kawaii culture, and more!", ["/images/vendors/vendor4.avif"]),
    vendor(-5, "CMU LCAL", "At the Department of Languages, Cultures & Applied Linguitics (LCAL), we prepare students to engage with the world’s complexity through language, culture and communication. By studying Arabic, Chinese, French, German, Italian, Japanese, Korean, Russian and Spanish, students develop the intercultural fluency and critical insight needed to navigate a globally connected, technologically evolving future.", ["/images/vendors/vendor5.avif"]),
    vendor(-6, "Perry's Cards", "Perry’s Cards is your one-stop shop for all your Pokémon collectibles and other trading card games. We specialize in unique offerings of vintage and modern box sets, trading card packs, graded slabs, raw singles, and Japanese promotional cards. We try to provide our customers with a friendly buying experience and offer the latest in must-have singles. We like to help our clients complete their sets with those last few cards they have not been able to pull. We have a partial selection of Garbage Pail Kids, Magic the Gathering, One Piece, and Yu-Gi-Oh. However, our main focus is Pokémon TCG. In addition to our trading cards, we also offer character plushies, enamel pins, Squishmallows, and apparel, such as custom hats. If you like Pokémon, you are sure to find something you’ll love.", ["/images/vendors/vendor6.avif"]),
    vendor(-7, "Ebisu Life Store", "Located in Squirrel Hill, Ebisu is Pittsburgh's first Japanese Lifestyle Store. Shop for a variety of Japanese goods from Ebisu PGH!", ["/images/vendors/vendor7.webp"]),
];

// ─── Info / service tables ────────────────────────────────────────────────────
// -100 = dark blue desk · -101 and -102 = green desks (see map)

export const infoTables: InfoTable[] = [
    info(-100, "AAC Stamp Cards",  "Stamp cards from the Artist Alley Club!"),
    info(-101, "ScottyCon Merch",  "Official ScottyCon merchandise!"),
];
