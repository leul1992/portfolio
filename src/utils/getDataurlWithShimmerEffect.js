const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f3f4f6" offset="0%" />
      <stop stop-color="#e5e7eb" offset="50%" />
      <stop stop-color="#f3f4f6" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f3f4f6" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate 
    xlink:href="#r" 
    attributeName="x" 
    from="-${w}" 
    to="${w}" 
    dur="1.5s" 
    repeatCount="indefinite"
    keyTimes="0;0.3;1"
    values="-${w};${w};${w * 2}"
  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function getDataUrlWithShimmerEffect(width = 600, height = 400) {
  return `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;
}
