interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => (
  <a
    href="/"
    className={`font-baiti font-normal text-[32px] leading-[44px] block ${className}`}
  >
    LOGO
  </a>
);
