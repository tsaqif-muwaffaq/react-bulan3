import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  username: z.string().min(1, "Nama wajib diisi"),
  file: z
    .any()
    .refine((file) => file?.length > 0, "File wajib diunggah")
    .refine(
      (file) => file?.[0]?.size <= 2 * 1024 * 1024, // max 2MB
      "Ukuran file maksimal 2MB"
    )
    .refine(
      (file) => ["image/jpeg", "image/png"].includes(file?.[0]?.type),
      "Hanya menerima file JPG atau PNG"
    ),
});

type FormData = z.infer<typeof schema>;

export default function FileUploadForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [preview, setPreview] = useState<string | null>(null);

  const selectedFile = watch("file");

  useEffect(() => {
    if (selectedFile && selectedFile.length > 0) {
      const file = selectedFile[0];
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      return () => URL.revokeObjectURL(previewUrl);
    } else {
      setPreview(null);
    }
  }, [selectedFile]);

  const onSubmit = async (data: FormData) => {
    console.log("Form data:", data);
    alert("Form berhasil dikirim! ");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white text-gray-800 rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Form Upload File + Preview
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nama */}
          <div>
            <Label>Nama Lengkap</Label>
            <Input
              {...register("username")}
              placeholder="Masukkan nama..."
              className="mt-1"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* File Upload */}
          <div>
            <Label>Upload Foto</Label>
            <Input
              type="file"
              accept="image/*"
              {...register("file")}
              className="mt-1"
            />
            {errors.file && (
              <p className="text-red-500 text-sm mt-1">
                {errors.file.message as string}
              </p>
            )}
          </div>

          {/* Preview Image */}
          {preview && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center"
            >
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 rounded-xl mt-3 object-cover shadow-md border border-gray-300"
              />
            </motion.div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-transform hover:scale-105"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Form"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}