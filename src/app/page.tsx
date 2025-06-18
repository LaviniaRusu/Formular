// "use client";
////////////////////////////1//////////////////////
// import { SchemaZOD, UserFormData } from "@/ZOD/schema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";

// export default function Home() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<UserFormData>({ resolver: zodResolver(SchemaZOD) });

//   const onSubmit = (data: UserFormData) => {
//     console.log("Date:", data);
//     reset();
//   };

//   return (
//     <div>
//       <p>Formular</p>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Nume</label>
//           <input
//             {...register("name")}
//             className="border-2 border-b-black bg-gray-200"
//           />
//           {errors.name && <p>{errors.name.message}</p>}
//         </div>
//         <div>
//           <button className="bg-blue-500 hover:bg-sky-700 border-2 border-b-black p-3">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
///////////////////////////////2//////////////////////////////
// "use client";

// import { SchemaZOD, UserFormData } from "@/ZOD/schema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";

// export default function Home() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<UserFormData>({ resolver: zodResolver(SchemaZOD) });

//   const onSubmit = (data: UserFormData) => {
//     console.log("Date:", data);
//     reset();
//   };

//   return (
//     <div>
//       <p>Formular</p>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Nume</label>
//           <input
//             {...register("name")}
//             className="border-2 border-b-black bg-gray-200"
//           />
//           {errors.name && <p>{errors.name.message}</p>}
//         </div>
//         <div>
//           <label>Vârstă</label>
//           <input
//             type="number"
//             {...register("age", { valueAsNumber: true })}
//             className="border-2 border-b-black bg-gray-200"
//           />
//           {errors.age && <p>{errors.age.message}</p>}
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             {...register("email")}
//             className="border-2 border-b-black bg-gray-200"
//           />
//           {errors.email && <p>{errors.email.message}</p>}
//         </div>

//         <button className="bg-blue-500 hover:bg-sky-700 border-2 border-b-black p-3 mt-4">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";
// Dacă e în `app/page.tsx` sau `app/Home.tsx` (în funcție de structură)

type User = {
  id: string;
  name: string;
  age: number;
  email: string;
};

async function getUsers(): Promise<User[]> {
  const res = await fetch("http://localhost:3001/users");
  if (!res.ok) throw new Error("Eroare la preluare utilizatori");
  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      <p>Hello</p>
      <h2>Lista utilizatori:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
