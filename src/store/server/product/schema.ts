import { z } from "zod";
import getApiSchema from "../common/getApiSchema";

export const productData = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.array(z.string()),
  rating: z.number().nullable(),
});

export const productDataSchema = getApiSchema(z.array(productData));
