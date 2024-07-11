import { z } from "@hono/zod-openapi";

export const ParamsSchema = z.object({
  address: z
    .string()
    .min(3)
    .openapi({
      param: {
        name: "address",
        in: "path",
      },
      example: "1212121",
    }),
});
