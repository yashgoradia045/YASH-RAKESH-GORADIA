import { MenuItem, QuizQuestion, SmoreStep, ChronologyAct } from './types';
// @ts-ignore
import carterRoadCampfireImage from './assets/images/regenerated_image_1781757213222.png';
// @ts-ignore
import fudgyBrownieImage from './assets/images/regenerated_image_1782547922979.png';
// @ts-ignore
import midnightBerryTorchImage from './assets/images/regenerated_image_1781757579056.png';
// @ts-ignore
import bandraNutellaGoldImage from './assets/images/regenerated_image_1781757585855.png';
// @ts-ignore
import peanutButterCrunchImage from './assets/images/regenerated_image_1781757763286.png';
// @ts-ignore
import foundationStackImage from './assets/images/regenerated_image_1781833293455.png';
// @ts-ignore
import coreElementsImage from './assets/images/regenerated_image_1781881025217.png';
// @ts-ignore
import cozyCaramelMaltImage from './assets/images/regenerated_image_1782548100775.png';
// @ts-ignore
import assemblyImage from './assets/images/regenerated_image_1782548907314.png';

export const MENU_ITEMS: MenuItem[] = [
  // Classics
  {
    id: 'classic-campfire',
    title: 'The Carter Road Campfire',
    price: 189,
    description: 'Double layer of caramelized 100% vegetarian marshmallow puffed on sweet dark cocoa blocks, sandwiched between crispy salted graham cookie sheets.',
    category: 'classics',
    image: carterRoadCampfireImage,
    isVeg: true,
    isBestSeller: true,
  },
  {
    id: 'double-choco-fudge',
    title: 'Fudgy Brownie Cruncher',
    price: 219,
    description: 'Fresh toasted sugary marshmallow topped with rich Belgian chocolate curls between two dense double-chocolate chip brownie cookies.',
    category: 'classics',
    image: fudgyBrownieImage,
    isVeg: true,
  },
  // Signatures
  {
    id: 'berry-torch',
    title: 'Midnight Berry Torch',
    price: 249,
    description: 'Fluffy strawberry-infused marshmallow, artisan dark dark chocolate bar, and a thick layer of fresh sweet Mahabaleshwar strawberry slices.',
    category: 'signatures',
    image: midnightBerryTorchImage,
    isVeg: true,
    isBestSeller: true,
  },
  {
    id: 'nutella-gold',
    title: 'Bandra Nutella Gold',
    price: 269,
    description: 'A decadent combination of warm melted Nutella spread, toasted sea salt caramel marshmallow, and toasted hazelnut crumbles.',
    category: 'signatures',
    image: bandraNutellaGoldImage,
    isVeg: true,
  },
  {
    id: 'peanut-butter-crunch',
    title: 'Salted PB & Cookie Crisp',
    price: 239,
    description: 'Creamy peanut butter base layer with a chocolate chip cookie wrap, fluffy classic puff, and gourmet toffee crunch sprinkles.',
    category: 'signatures',
    image: peanutButterCrunchImage,
    isVeg: true,
  },
  // Shakes
  {
    id: 'toasted-smore-shake',
    title: 'Toasted Fluff Thick Shake',
    price: 279,
    description: 'Creamy custom malted chocolate cold shake blended with crunchy graham crumbs, crowned with a fully roasted s\'more sticking out.',
    category: 'shakes',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isBestSeller: true,
  },
  {
    id: 'cozy-caramel-malt',
    title: 'Sea-Salted Caramel Shake',
    price: 259,
    description: 'Cold whipped premium vanilla ice cream with butter caramel drizzle, malt, and toasted marshmallow fluff lining the cup.',
    category: 'shakes',
    image: cozyCaramelMaltImage,
    isVeg: true,
  }
];

export const BUILDER_STEPS: SmoreStep[] = [
  {
    title: 'Choose Your Base',
    options: [
      { id: 'graham', name: 'Classic Graham Crackers', description: 'Light, crunchy & sweet honey-toasted sheets', priceModifier: 0, color: 'bg-amber-100 border-amber-300', emoji: '🍪' },
      { id: 'brownie', name: 'Fudgy Brownies', description: 'Double dense chewy chocolate slabs (+₹40)', priceModifier: 40, color: 'bg-yellow-950 border-amber-900', emoji: '🍫' },
      { id: 'choco-cookie', name: 'Choco-Chip Cookies', description: 'Soft-baked cookies stuffed with dark chocolate chips (+₹30)', priceModifier: 30, color: 'bg-amber-200 border-amber-400', emoji: '🍪' },
    ],
  },
  {
    title: 'Pick Your Marshmallow Core',
    options: [
      { id: 'classic-mallow', name: 'Classic Vanilla Fluff', description: '100% Vegetarian sweet airy vanilla marshmallow', priceModifier: 0, color: 'bg-stone-50 border-stone-200', emoji: '☁️' },
      { id: 'veg-salted', name: 'Toasted Caramel Fluff', description: '100% Vegetarian salted gourmet caramel flavor (+₹20)', priceModifier: 20, color: 'bg-amber-50 border-amber-100', emoji: '🍮' },
      { id: 'strawberry-mylar', name: 'Exotic Strawberry Puff', description: '100% Vegetarian strawberry-infused pink puff (+₹20)', priceModifier: 20, color: 'bg-rose-50 border-rose-100', emoji: '🍓' },
    ],
  },
  {
    title: 'Select Your Filling',
    options: [
      { id: 'belgian-dark', name: 'Dark Belgian Chocolate', description: 'Intense 70% dark melted gourmet squares', priceModifier: 0, color: 'bg-zinc-800 border-zinc-900', emoji: '🍫' },
      { id: 'nutella-heaven', name: 'Nutella Caramel Spread', description: 'Classic creamy hazelnut spread (+₹30)', priceModifier: 30, color: 'bg-amber-950 border-amber-900', emoji: '🌰' },
      { id: 'fresh-strawberries', name: 'Fresh Strawberries', description: 'Sliced ripe strawberries from Mahabaleshwar (+₹30)', priceModifier: 30, color: 'bg-rose-100 border-rose-300', emoji: '🍓' },
      { id: 'peanut-butter', name: 'Creamy Peanut Butter', description: 'Rich, salty-sweet velvety peanut spread (+₹20)', priceModifier: 20, color: 'bg-yellow-100 border-yellow-300', emoji: '🥜' },
    ],
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What's your sweet tooth intensity today?",
    choices: [
      { text: "Rich & Balanced", value: "medium", desc: "A cozy combination of bittersweet cocoa and toasted sweetness" },
      { text: "Late Night Sugar Rush", value: "high", desc: "Warm gooey syrup, multiple hazelnut swirls, and melting chocolate cookies" },
      { text: "Light & Fruit-infused", value: "fresh", desc: "Zesty berries or sweet fruits cutting through buttery sugar fluff" }
    ]
  },
  {
    id: 2,
    question: "What is your current campfire vibe?",
    choices: [
      { text: "Classic Cozy Nostalgia", value: "nostalgic", desc: "Visions of acoustic guitars, sea breezes, and crackling dry pine" },
      { text: "Urban Explorer", value: "modern", desc: "Late-night drives on the Bandra Sea Link looking for sweet thrills" },
      { text: "S'more Chef Enthusiast", value: "craft", desc: "Inspecting the crust color and marshmallow elasticity like a pro" }
    ]
  },
  {
    id: 3,
    question: "Any dietary preferences?",
    choices: [
      { text: "100% Vegetarian (Cruelty-Free)", value: "veg", desc: "Always. Gelatin-free cloud puffs only!" },
      { text: "I enjoy everything!", value: "flex", desc: "No specific restrictions" }
    ]
  }
];

export const CHRONOLOGY_ACTS: ChronologyAct[] = [
  {
    act: 1,
    title: "The Foundation",
    subtitle: "A Stack of Artisanal Bases",
    description: "Thick, slightly rough-textured graham cracker rounds and chocolate chip sheets stacked high on a rustic wooden board. The air smells slightly of toasted grain and vanilla butter.",
    stylistSecret: "Press the center base firmly. A tiny pocket holds the cascading chocolate without overflowing the crust.",
    image: foundationStackImage,
    cameraSettings: { shutter: "1/160s", aperture: "f/2.8", iso: "400", focusPoint: "Center-Grid" }
  },
  {
    act: 2,
    title: "The Core Elements",
    subtitle: "Plump Fluffs meet Belgian Kakao",
    description: "Dark, premium Belgian chocolate blocks rest adjacent to vanilla bean-flecked marshmallow clouds on crisp parchment paper, awaiting the heat.",
    stylistSecret: "Mist the chocolate surface with ambient humidity to prevent visual powdery drying under hot lights.",
    image: coreElementsImage,
    cameraSettings: { shutter: "1/125s", aperture: "f/1.8", iso: "200", focusPoint: "Edge-Contrast" }
  },
  {
    act: 3,
    title: "The Assembly",
    subtitle: "Precision Stacking Under the Blowtorch",
    description: "Hands carefully balance the layers on wood. The chef fires the butane torch, positioning the golden cone of flame directly above the chocolate boundary.",
    stylistSecret: "A slight twist of the chef's wrist keeps the heat circling evenly, preventing high spots from burning.",
    image: assemblyImage,
    cameraSettings: { shutter: "1/250s", aperture: "f/3.2", iso: "640", focusPoint: "Flame-Tip" }
  },
  {
    act: 4,
    title: "The Preparation",
    subtitle: "Caramelizing the Fluff",
    description: "The energetic electric-blue flame grazes the soft marshmallow skin, triggering an instant amber caramelization. Bubbles puff up, and the chocolate core softens.",
    stylistSecret: "Watch the corner bubbles. The exact millisecond they turn mahogany, remove the heat for perfect elasticity.",
    image: "https://images.unsplash.com/photo-1517093602195-b40af9688b46?auto=format&fit=crop&w=800&q=80",
    cameraSettings: { shutter: "1/500s", aperture: "f/2.2", iso: "800", focusPoint: "Puff-Crust" }
  },
  {
    act: 5,
    title: "The Final Product",
    subtitle: "The Masterpiece Stretch",
    description: "Sandwiched to perfection in a custom box. Hands pull the crackers apart, stretching a glowing, hot, gooey core of caramelized fluff that drips with rich melted cocoa butter.",
    stylistSecret: "Gently squeeze the graham borders right before the shot to trigger an irresistible drip on the side.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    cameraSettings: { shutter: "1/200s", aperture: "f/2.0", iso: "160", focusPoint: "Gooey-Bridge" }
  }
];
