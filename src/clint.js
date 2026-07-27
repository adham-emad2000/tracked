import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "mbta0e7b", // تأكد إن ده نفس الكود اللي ظاهر عندك في سانتي
  dataset: "production",
  useCdn: false, // خليناها false عشان يجيب الداتا فوراً من غير كاش القديم
  apiVersion: "2026-07-27",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
