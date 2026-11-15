/** Pip's stage-two artwork, adapted from the Prayer app's PipLamb component. */
export function Companion() {
  return (
    <svg viewBox="0 24 200 174" role="img" aria-label="Pip, Saint Central’s little lamb companion">
      <ellipse cx="100" cy="184" rx="52" ry="8" fill="#1F2A44" opacity=".09" />
      <g className="pip">
        <rect x="72" y="140" width="11" height="38" rx="5.5" fill="#4A3F3A" />
        <rect x="117" y="140" width="11" height="38" rx="5.5" fill="#4A3F3A" />
        <g fill="#F7F2E8" stroke="#E8DDCC" strokeWidth=".6">
          <circle cx="66" cy="122" r="26" />
          <circle cx="100" cy="114" r="34" />
          <circle cx="134" cy="122" r="26" />
          <circle cx="82" cy="142" r="24" />
          <circle cx="118" cy="142" r="24" />
        </g>
        <path d="M80 106 Q100 118 120 106" stroke="#8FC6A9" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="100" cy="115" r="5.5" fill="#F2C462" />
        <ellipse cx="72" cy="80" rx="14" ry="7" fill="#E9D3BA" transform="rotate(-22 72 80)" />
        <ellipse cx="128" cy="80" rx="14" ry="7" fill="#E9D3BA" transform="rotate(22 128 80)" />
        <ellipse cx="100" cy="88" rx="25" ry="23" fill="#F1E2CC" />
        <g fill="#F7F2E8">
          <circle cx="90" cy="66" r="9" />
          <circle cx="100" cy="62" r="10" />
          <circle cx="110" cy="66" r="9" />
        </g>
        <g className="pip-eyes" fill="#2B2420">
          <circle cx="91" cy="88" r="3.6" />
          <circle cx="109" cy="88" r="3.6" />
        </g>
        <circle cx="85" cy="97" r="4" fill="#E8998A" opacity=".6" />
        <circle cx="115" cy="97" r="4" fill="#E8998A" opacity=".6" />
        <path d="M96 99 Q100 103 104 99" stroke="#2B2420" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse className="pip-halo" cx="100" cy="42" rx="20" ry="5" fill="none" stroke="#E4B751" strokeWidth="4" />
      </g>
    </svg>
  );
}
