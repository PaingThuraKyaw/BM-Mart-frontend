import {  z } from "zod";

export default function getApiSchema<DataType extends z.ZodTypeAny>(
  dataType: DataType
) {
  return z.object({
    data: dataType,
    pagination: z.object({
      size: z.number().optional(),
      total: z.number().optional(),
      page: z.number().optional(),
    }),
  });
}
