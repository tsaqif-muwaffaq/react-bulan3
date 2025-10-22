// // src/pages/ProfilePage.jsx
// import React from "react";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ModeToggle } from "@/components/mode-toggle"

// export default function ProfilePage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle>Profil Saya</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <Input placeholder="Nama lengkap" />
//             <Input placeholder="Email" />
//             <Input placeholder="Bio singkat" />
//           </div>
//         </CardContent>
//         <CardFooter className="flex justify-end gap-2">
//           <Button variant="outline">Batal</Button>
//           <Button>Update</Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <div className="mb-4">
        <ModeToggle />
      </div>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Profil Saya</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Nama lengkap</label>
            <Input placeholder="Masukkan nama" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input placeholder="Masukkan email" />
          </div>
          <div>
            <label className="text-sm font-medium">Bio singkat</label>
            <Input placeholder="Masukkan bio" />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Batal</Button>
            <Button>Update</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
