const DEFAULT_SITE_URL = "https://fincasdeaconcagua.com.ar";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function resolveSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.site_url ??
    process.env.NEXT_PUBLIC_APP_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (!configuredUrl) {
    return DEFAULT_SITE_URL;
  }

  const urlWithProtocol = configuredUrl.startsWith("http")
    ? configuredUrl
    : `https://${configuredUrl}`;

  return normalizeSiteUrl(urlWithProtocol);
}

export const siteConfig = {
  name: "Fincas de Aconcagua",
  companyName: "Urbanizadora Tres Pinos S.A.",
  description:
    "Desarrollo residencial de parcelas en Ingeniero Maschwitz, Buenos Aires, pensado para quienes buscan amplitud, naturaleza y tranquilidad.",
  url: resolveSiteUrl(),
  locale: "es_AR",
  email: "u3pinfo@gmail.com",
  address: "Aconcagua 450, Maquinista Savio, Buenos Aires, Argentina",
  ogImage: "/fincas_img.jpg",
  icon: "/fincas_web_tab_logo.png",
  keywords: [
    "Fincas de Aconcagua",
    "parcelas en venta",
    "lotes en venta",
    "desarrollo residencial",
    "Ingeniero Maschwitz",
    "Buenos Aires",
    "inversion inmobiliaria",
    "terrenos residenciales",
    "barrios abiertos",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
