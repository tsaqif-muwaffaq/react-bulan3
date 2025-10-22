// // // src/components/ModeToggle.jsx
// // import React from "react";
// // import { Button } from "@/components/ui/button";
// // import { useTheme } from "@/theme/ThemeProvider";

// // export default function ModeToggle() {
// //   const { theme, setTheme } = useTheme();
// //   return (
// //     <Button
// //       variant="outline"
// //       size="icon"
// //       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// //     >
// //       {theme === "dark" ? "Light Mode" : "Dark Mode"}
// //     </Button> 
// //   );
// // }

// // src/pages/ProfilePage.jsx
// import React, { useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// export default function ProfilePage() {
//   const [profile, setProfile] = useState({
//     name: "",
//     email: "",
//     bio: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleCancel = () => {
//     setProfile({ name: "", email: "", bio: "" });
//   };

//   const handleUpdate = () => {
//     alert(`Data berhasil diupdate!\n\nNama: ${profile.name}\nEmail: ${profile.email}\nBio: ${profile.bio}`);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle>Profil Saya</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <Input
//               name="name"
//               placeholder="Nama lengkap"
//               value={profile.name}
//               onChange={handleChange}
//             />
//             <Input
//               name="email"
//               placeholder="Email"
//               value={profile.email}
//               onChange={handleChange}
//             />
//             <Input
//               name="bio"
//               placeholder="Bio singkat"
//               value={profile.bio}
//               onChange={handleChange}
//             />
//           </div>
//         </CardContent>
//         <CardFooter className="flex justify-end gap-2">
//           <Button variant="outline" onClick={handleCancel}>
//             Batal
//           </Button>
//           <Button onClick={handleUpdate}>Update</Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

// src/components/mode-toggle.jsx
import React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </Button>
  )
}
