///////////////////////1/////////////////
// import { z } from "zod";

// export const SchemaZOD = z.object({
//   name: z.string().min(1, "obligatoriu"),
// });

// export type UserFormData = z.infer<typeof SchemaZOD>;

/////////////////////////////////////2///////////////////////
// import { z } from "zod";

// export const SchemaZOD = z.object({
//   name: z.string().min(1, "obligatoriu"),
//   age: z.number({ invalid_type_error: "Trebuie sa fie numar" }),
//   email: z.string().email("Email invalid"),
// });

// export type UserFormData = z.infer<typeof SchemaZOD>;
