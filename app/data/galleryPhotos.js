// Photos offered in the "Choose from our gallery" picker on the order forms.
// These mirror the photos on the Gallery page.
const f = (file, alt) => ({ src: `/images/food/moreno-bakery-${file}.jpg`, alt });

export const GALLERY_PICKER_CATEGORIES = {
  "Cakes & Celebrations": [
    f("cheesecakes", "Cheesecakes"),
    f("heart-shaped-vanilla-cake", "Heart-shaped vanilla cake"),
    f("heart-shaped-red-velvet-cake", "Heart-shaped red velvet cake"),
    f("heart-shaped-chocolate-mousse", "Chocolate mousse cake"),
    f("heart-shaped-dulce-de-leche-cake", "Dulce de leche cake"),
    f("heart-shaped-marble-cake", "Marble cake"),
    f("gooey-butter-cake", "Gooey butter cake"),
    { src: "/images/events/birthday-cake-celebration.webp", alt: "Birthday celebration cake" },
    { src: "/images/events/graduation-dessert-table.webp", alt: "Graduation dessert table" },
    { src: "/images/catering/party-dessert-table.webp", alt: "Party dessert table" },
  ],
  "Cupcakes & Sweets": [
    f("french-vanilla-cupcake", "French vanilla cupcake"),
    f("boston-creme-cupcake", "Boston creme cupcake"),
    f("carrot-cake-cupcake", "Carrot cake cupcake"),
    f("chocolate-mousse-cupcake", "Chocolate mousse cupcake"),
    f("cannoli-cupcake", "Cannoli cupcake"),
    f("german-chocolate-cupcake", "German chocolate cupcake"),
    f("nutella-cupcake", "Nutella cupcake"),
    f("peanut-butter-cupcake", "Peanut butter cupcake"),
    f("malybu-dream-cup", "Malibu dream cup"),
    f("chocolate-bonbon", "Chocolate bonbon"),
    f("almond-joy-bonbon", "Almond joy bonbon"),
    f("mocha-bonbon", "Mocha bonbon"),
  ],
  "Pastries & Cookies": [
    f("eclairs", "Eclairs"),
    f("cream-horns", "Cream horns"),
    f("cinnamon-roll", "Cinnamon roll"),
    f("linzer-tarts", "Linzer tarts"),
    f("elephant-ears-palmiers", "Elephant ears palmiers"),
    f("hamantaschen", "Hamantaschen"),
    f("almond-horns", "Almond horns"),
    f("mini-cannolis", "Mini cannolis"),
    f("chocolate-chunk-cookie", "Chocolate chunk cookie"),
    f("peanut-butter-cookies", "Peanut butter cookies"),
    f("gingerbread-cookie", "Gingerbread cookie"),
    f("chocolate-chip-sandwich-cookies", "Chocolate chip sandwich cookies"),
  ],
  "Catering & Events": [
    { src: "/images/catering/catering-buffet-setup.webp", alt: "Catering buffet setup" },
    { src: "/images/catering/corporate-catering-spread.webp", alt: "Corporate catering spread" },
    { src: "/images/events/events-hub-hero.webp", alt: "Event celebration spread" },
    { src: "/images/events/baby-shower-desserts.webp", alt: "Baby shower desserts" },
    { src: "/images/events/anniversary-dinner.webp", alt: "Anniversary dinner" },
  ],
};
