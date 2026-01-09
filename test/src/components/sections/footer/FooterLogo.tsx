"use client";

// import Image from "next/image";
import FillWidthText from "@/components/shared/FillWidthText/FillWidthText";
import { cls } from "@/lib/utils";

interface FooterLogoProps {
    // logoSrc?: string;
    // logoAlt?: string;
    logoText?: string;
    logoLineHeight?: number;
    className?: string;
    logoClassName?: string;
}

const FooterLogo = ({
    // logoSrc,
    // logoAlt = "Logo",
    logoText = "Webild",
    logoLineHeight = 1.1,
    className = "",
    logoClassName = ""
}: FooterLogoProps) => {
    return (
        <div className={cls("relative z-1 w-full", className)}>
            {/* {logoSrc ? (
                <Image
                    src={logoSrc}
                    alt={logoAlt}
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                    unoptimized={logoSrc.startsWith('http') || logoSrc.startsWith('//')}
                    aria-hidden={logoAlt === ""}
                />
            ) : ( */}
                <FillWidthText lineHeight={logoLineHeight} className={logoClassName}>
                    {logoText}
                </FillWidthText>
            {/* )} */}
        </div>
    );
};

FooterLogo.displayName = "FooterLogo";

export default FooterLogo;