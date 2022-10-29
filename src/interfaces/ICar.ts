import { z } from 'zod';
import { vehicleSchema } from './IVehicle';

const carSchema = z.object({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

export const carMerge = carSchema.merge(vehicleSchema);

export type ICar = z.infer<typeof carMerge>;