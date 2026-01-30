import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    className?: string;
    onClick?: () => void;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    className = "",
    onClick,
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all btn-animate";

    const variants = {
        primary: "bg-teal-600 text-white hover:bg-teal-700",
        secondary: "bg-teal-50 text-teal-700 hover:bg-teal-100",
        outline: "border-2 border-teal-600 text-teal-600 hover:bg-teal-50",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
}
