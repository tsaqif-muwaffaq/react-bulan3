import React, { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface FormData {
  name: string;
  email: string;
  address: string;
  city: string;
  cardNumber: string;
}

const steps = ["Informasi Pribadi", "Alamat", "Pembayaran"];

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert("Checkout sukses! ");
    console.log("Form data:", data);
  };

  const nextStep = async () => {
    const valid = await trigger();
    if (valid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const progressPercent = ((step + 1) / steps.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br">
      <motion.div
        key="form"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white text-gray-800 rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-indigo-600">
          Multi-Step Checkout Form
        </h2>

        {/* Progress bar */}
        <motion.div
          key={step}
          initial={{ opacity: 0.6, scaleX: 0.9 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Progress value={progressPercent} className="h-2 mb-6" />
        </motion.div>

        {/* Step labels */}
        <div className="flex justify-between text-xs font-medium mb-6">
          {steps.map((label, index) => (
            <span
              key={index}
              className={`transition-colors duration-300 ${
                index === step
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-400"
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Step contents */}
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
            >
              <Label>Nama Lengkap</Label>
              <Input
                {...register("name", { required: "Nama wajib diisi" })}
                placeholder="Masukkan nama..."
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}

              <Label className="mt-3">Email</Label>
              <Input
                type="email"
                {...register("email", {
                  required: "Email wajib diisi",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Format email tidak valid",
                  },
                })}
                placeholder="Masukkan email..."
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
            >
              <Label>Alamat</Label>
              <Input
                {...register("address", { required: "Alamat wajib diisi" })}
                placeholder="Masukkan alamat..."
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}

              <Label className="mt-3">Kota</Label>
              <Input
                {...register("city", { required: "Kota wajib diisi" })}
                placeholder="Masukkan kota..."
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
            >
              <Label>Nomor Kartu</Label>
              <Input
                {...register("cardNumber", {
                  required: "Nomor kartu wajib diisi",
                  minLength: {
                    value: 12,
                    message: "Nomor kartu minimal 12 digit",
                  },
                })}
                placeholder="1234 5678 9012"
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.cardNumber.message}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 0 && (
            <Button
              onClick={prevStep}
              variant="secondary"
              className="bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
            >
              Kembali
            </Button>
          )}
          {step < steps.length - 1 ? (
            <Button
              onClick={nextStep}
              className="ml-auto bg-indigo-600 hover:bg-indigo-700 transition-transform hover:scale-105"
            >
              Lanjut
            </Button>
          ) : (
            <Button
              onClick={handleSubmit(onSubmit)}
              className="ml-auto bg-green-600 hover:bg-green-700 transition-transform hover:scale-105"
            >
              Selesai
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MultiStepForm;