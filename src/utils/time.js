export default function duration(ms) {
  ms = ms || 0;

  let remainingSeconds = ms / 1000;
  const h = Math.floor(remainingSeconds / (60 * 60));
  remainingSeconds -= h * 60 * 60;
  const m = Math.floor(remainingSeconds / 60);
  remainingSeconds -= m * 60;
  const s = Math.floor(remainingSeconds % 60);

  let formatted = "";
  formatted += h ? `${h}:` : "";
  formatted += m < 10 && h ? `0${m}` : m;
  formatted += s < 10 ? `:0${s}` : `:${s}`;

  return formatted;
}
