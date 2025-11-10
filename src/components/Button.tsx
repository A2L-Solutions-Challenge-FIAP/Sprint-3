import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

const baseStyles = "px-3 py-2 rounded-lg font-semibold transition text-sm";

const variants = {
  primary: "bg-blue-600 hover:bg-blue-400 text-white cursor-pointer",
  secondary:
    "bg-slate-500 hover:bg-slate-400 text-white border border-gray-200 cursor-pointer",
  danger:
    "border  bg-red-500 hover:bg-red-400 text-white text-sm cursor-pointer",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
