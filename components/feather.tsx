/** The app's Little Poult artwork, adapted from HolidayPets for the web. */
export function Feather() {
  return (
    <svg viewBox="25 42 150 156" role="img" aria-label="Feather, a little turkey Prayer Pal">
      <ellipse cx="100" cy="190" rx="50" ry="7" fill="#090c19" opacity=".6" />
      <g className="feather-bob">
        {[-44, -22, 0, 22, 44].map((angle, index) => <ellipse key={angle} cx="100" cy="94" rx="13" ry="36" fill={["#E8913A", "#F2C462", "#8A5A3C", "#F2C462", "#E8913A"][index]} transform={`rotate(${angle} 100 142)`} />)}
        <path d="M90 176 88 190M110 176 112 190M82 190h12M106 190h12" stroke="#E8A24B" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="100" cy="150" rx="34" ry="32" fill="#A8704A" />
        <ellipse cx="100" cy="158" rx="20" ry="20" fill="#C8946A" />
        <g fill="#6E4630"><ellipse cx="126" cy="150" rx="13" ry="22" /><ellipse cx="74" cy="150" rx="13" ry="22" /></g>
        <circle cx="100" cy="104" r="22" fill="#B9783F" />
        <g fill="#2B2420"><circle cx="92" cy="100" r="3.6" /><circle cx="108" cy="100" r="3.6" /></g>
        <g fill="white"><circle cx="93.2" cy="98.8" r="1.2" /><circle cx="109.2" cy="98.8" r="1.2" /></g>
        <path d="m95 107 5 9 5-9Z" fill="#E8A24B" />
        <g fill="#E8998A" opacity=".5"><circle cx="86" cy="110" r="4" /><circle cx="114" cy="110" r="4" /></g>
      </g>
    </svg>
  );
}
