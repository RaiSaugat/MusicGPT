function DangerIcon({ color }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={color || '#D89C3A'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M9.998 7.5v3.334m0 3.333h.009M8.844 3.243 1.99 15.083c-.38.656-.57.984-.542 1.254a.83.83 0 0 0 .339.587c.219.16.598.16 1.357.16h13.708c.759 0 1.138 0 1.357-.16a.83.83 0 0 0 .34-.587c.027-.27-.163-.598-.543-1.255L11.152 3.243c-.379-.654-.568-.981-.815-1.091a.83.83 0 0 0-.677 0c-.248.11-.437.437-.816 1.091"
      />
    </svg>
  );
}

export default DangerIcon;
