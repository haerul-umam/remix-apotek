import { z } from "zod";

export const queryFindAllDto = z.object({
	page: z.number().positive().optional(),
	search: z.string().toUpperCase().optional(),
	start: z.string().datetime({ offset: false }).optional(),
	end: z.string().datetime({ offset: false }).optional(),
	exportExcel: z.boolean().optional(),
});

export type QueryFindAllDto = z.infer<typeof queryFindAllDto>;
