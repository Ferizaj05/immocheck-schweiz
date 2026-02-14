import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border border-white/15 bg-card px-4 py-2.5 text-sm text-white outline-none ring-accent/50 transition focus:ring-2 ${className}`}
      {...props}
    />
  );
}
