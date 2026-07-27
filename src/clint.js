import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "mbta0e7b", //
  dataset: "production",
  useCdn: false, //
  apiVersion: "2026-07-27",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
