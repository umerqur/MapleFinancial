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
          d="M20 9 L21.8 13.2 L25.2 12.3 L23.8 15.8 L28.2 17.3 L24.8 19.8 L27.2 24.8 L21.8 23.3 L20 26.8 L18.2 23.3 L12.8 24.8 L15.2 19.8 L11.8 17.3 L16.2 15.8 L14.8 12.3 L18.2 13.2 Z"
          fill={accent}
        />
        <line x1="20" y1="26.8" x2="20" y2="30.6" stroke={accent} strokeWidth="1.2" strokeLinecap="round" />
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
