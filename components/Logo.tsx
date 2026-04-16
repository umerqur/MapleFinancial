type Props = { className?: string; inverse?: boolean };

export function Logo({ className = "", inverse = false }: Props) {
  const ink = inverse ? "#F5F1E6" : "#0B2F20";
  const accent = inverse ? "#D9B553" : "#33694A";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="20" cy="20" r="19.25" stroke={ink} strokeWidth="1.2" />
        <path
          d="M20 9.5 L22 14 L26.5 13 L25 17 L29 19.5 L25.5 21.5 L27 26 L22.5 25 L20 29.5 L17.5 25 L13 26 L14.5 21.5 L11 19.5 L15 17 L13.5 13 L18 14 Z"
          fill={accent}
        />
        <line x1="20" y1="29.5" x2="20" y2="33" stroke={accent} strokeWidth="1.2" />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className="font-display text-[17px] font-semibold tracking-tight"
          style={{ color: ink }}
        >
          Maple Financial
        </span>
        <span
          className="text-[9px] uppercase tracking-[0.28em] font-semibold mt-[3px]"
          style={{ color: accent }}
        >
          Capital Corp.
        </span>
      </div>
    </div>
  );
}
