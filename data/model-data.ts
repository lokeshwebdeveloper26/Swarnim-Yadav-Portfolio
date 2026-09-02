import type { ModelData } from "./types"

/**
 * ============================================================
 *  EDIT THIS FILE WHEN CREATING A NEW MODEL
 * ============================================================
 *
 * This is the single source of truth for everything about the
 * model shown on the site. No model information is hard-coded
 * inside components — change the values below and the entire
 * site updates.
 *
 * HOW TO REUSE THIS TEMPLATE FOR A NEW MODEL:
 *   1. Replace the text fields (name, title, bio, details...).
 *   2. Drop new images into /public and update the image paths.
 *   3. Update the gallery and videos arrays.
 *   4. Update the Instagram handle.
 *   5. Update company details in `data/company-data.ts`.
 *   6. Build & deploy.
 *
 * PRIVACY NOTE (junior models):
 *   Any field left as an empty string OR removed is automatically
 *   hidden from the UI. Only include information you are comfortable
 *   making public. Bookings always route through the company/agency,
 *   never directly to the model.
 */
export const modelData: ModelData = {
  name: "SWARNIM YADAV",
  title: "Junior Fashion & Commercial Model",
  profileImage: "/portfolio/profile.jpg",
  heroImage: "/portfolio/hero.jpg",

  intro:
    "A young and talented junior model with a passion for fashion, commercial shoots and creative campaigns.",

  bio: "SWARNIM  is a confident young talent with a natural presence and an interest in fashion, commercial and lifestyle shoots. Available for professional projects through agency management.",

  availability: "Available for professional bookings — enquire via the agency",

  // Optional fields left blank are automatically hidden.
  details: {
    age: "3 years" ,
    dateOfBirth: "07 Oct 2022",
    height: "",
    weight: "28 kg",
    Bust: "",
    skinTone: "Fair",
    hairColor: "black",
    eyeColor: "Brown",
    ShoeSize: "",
    Hips: "",
    Waist: "",
    location: "Jabalpur, MP, India",
  },

  // Parent/guardian names are optional and often kept private.
  // Leave blank to hide them entirely.
  parents: {
    fatherName: "Mr. Siddhant Yadav",
    motherName: "Mrs. Pooja Yadav",
  },

  // Instagram handle WITHOUT the @ (managed by parents/agency).
  instagram: "modelswarnim",

  ecommerce: [
  {
    name: "Flipkart",
    url: "https://www.flipkart.com/product/p/itme?pid=KPBHZT69GSZ7NZ3H",
    description: "Shop featured products and collections.",
  },
],

  /**
   * GALLERY — supports 10–20+ images across categories:
   * "Fashion" | "Commercial" | "Studio" | "Outdoor" | "Casual" | "Campaign"
   * Mark up to a couple of images as `featured: true` for the editorial layout.
   */
  gallery: [
     {
      src: "/portfolio/gallery-1.jpg",
      alt: "SWARNIM YADAV fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-2.jpg",
      alt: "SWARNIM YADAV fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-3.jpg",
      alt: "SWARNIM YADAV studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-4.jpg",
      alt: "SWARNIM YADAV outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-5.jpg",
      alt: "SWARNIM YADAV commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-6.jpg",
      alt: "SWARNIM YADAV lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-7.jpg",
      alt: "SWARNIM YADAV fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-8.jpg",
      alt: "SWARNIM YADAV campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-9.jpg",
      alt: "SWARNIM YADAV editorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/hero.jpg",
      alt: "SWARNIM YADAV hero portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/profile.jpg",
      alt: "SWARNIM YADAV profile portrait",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-10.jpg",
      alt: "SWARNIM YADAV commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-11.jpg",
      alt: "SWARNIM YADAV lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-12.jpg",
      alt: "SWARNIM YADAV fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-13.jpg",
      alt: "SWARNIM YADAV fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-14.jpg",
      alt: "SWARNIM YADAV campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-15.jpg",
      alt: "SWARNIM YADAV editorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-16.jpg",
      alt: "SWARNIM YADAV commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-17.jpg",
      alt: "SWARNIM YADAV lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-18.jpg",
      alt: "SWARNIM YADAV fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-19.jpg",
      alt: "SWARNIM YADAV fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-20.jpg",
      alt: "SWARNIM YADAV fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-21.jpg",
      alt: "SWARNIM YADAV fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-22.jpg",
      alt: "SWARNIM YADAV fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-23.jpg",
      alt: "SWARNIM YADAV fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-24.jpg",
      alt: "SWARNIM YADAV fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-25.jpg",
      alt: "SWARNIM YADAV fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-26.jpg",
      alt: "SWARNIM YADAV fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-27.jpg",
      alt: "SWARNIM YADAV studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-28.jpg",
      alt: "SWARNIM YADAV outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-29.jpg",
      alt: "SWARNIM YADAV commercial portfolio",
      category: "Commercial",
    },
  ],

  /**
   * VIDEOS / REELS
   * type: "mp4"   -> plays inline from a local or remote MP4 file
   * type: "embed" -> plays an external URL (YouTube/Vimeo) in the modal
   * Videos never autoplay with sound.
   */
  videos: [
  {
    title: "SWARNIM YADAVModel Shoot",
    category: "Fashion",
    thumbnail: "/portfolio/profile.jpg",
    src: "/portfolio/videos/New Folder (1).mp4",
    type: "mp4",
  },
  {
    title: "SWARNIM YADAVModel Shoot",
    category: "Fashion",
    thumbnail: "/portfolio/profile.jpg",
    src: "/portfolio/videos/New Folder.mp4",
    type: "mp4",
  },
  {
    title: "SWARNIM YADAVModel Shoot",
    category: "Fashion",
    thumbnail: "/portfolio/profile.jpg",
    src: "/portfolio/videos/swaenim.mp4",
    type: "mp4",
  },
],

   
/**{
    name: "Flipkart",
    description: "Featured e-commerce and commercial work.",
    url: "https://www.flipkart.com/",
  },
  {
    name: "Amazon",
    description: "Commercial and e-commerce collaboration.",
    url: "https://www.amazon.in/",
  },*/
  
  
}
