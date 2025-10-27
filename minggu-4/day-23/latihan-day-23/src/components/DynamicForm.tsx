import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const friendSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Format email tidak valid"),
});

const formSchema = z.object({
  friends: z.array(friendSchema).min(1, "Minimal 1 teman wajib diisi"),
});

type FormData = z.infer<typeof formSchema>;

export default function DynamicForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      friends: [{ name: "", email: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "friends",
  });

  const onSubmit = (data: FormData) => {
    alert("Data berhasil disubmit! ");
    console.log("Form data:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br">
      <div className="w-full max-w-lg bg-white text-gray-800 rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Dynamic Form (Tambah / Hapus Field)
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="p-4 border border-gray-200 rounded-lg shadow-sm relative"
            >
              <Label>Nama Teman {index + 1}</Label>
              <Input
                {...register(`friends.${index}.name`)}
                placeholder="Masukkan nama..."
              />
              {errors.friends?.[index]?.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.friends[index]?.name?.message}
                </p>
              )}

              <Label className="mt-3">Email</Label>
              <Input
                {...register(`friends.${index}.email`)}
                placeholder="Masukkan email..."
                type="email"
              />
              {errors.friends?.[index]?.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.friends[index]?.email?.message}
                </p>
              )}

              {fields.length > 1 && (
                <Button
                  type="button"
                  onClick={() => remove(index)}
                  className="absolute top-3 right-3 bg-red-500 hover:bg-red-600"
                >
                  Hapus
                </Button>
              )}
            </div>
          ))}

          <Button
            type="button"
            onClick={() => append({ name: "", email: "" })}
            className="bg-gray-600 hover:bg-gray-700 w-full"
          >
            + Tambah Teman
          </Button>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 mt-4"
          >
            Submit Form
          </Button>
        </form>
      </div>
    </div>
  );
}