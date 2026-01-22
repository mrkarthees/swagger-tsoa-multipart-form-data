import { string, z } from "zod";

export const createStudent = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  address: z.object({
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    pincode: z
      .string()
      .min(6, "Pincode must be 6 digits")
      .max(6, "Pincode must be 6 digits"),
  }),
});
