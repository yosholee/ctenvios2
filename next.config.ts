import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.1.10.70"],
  images: {
    // Default Next quality is 75; keep allowlist tight for /_next/image.
    qualities: [75],
    formats: ["image/avif", "image/webp"],
  },
  async redirects(): Promise<
    { source: string; destination: string; permanent: boolean }[]
  > {
    // URLs antiguas que Google Search Console reportaba como 404 (oct 2026):
    // cada una apunta a la página viva de contenido equivalente.
    return [
      {
        source: "/blog/impuestos-aduana-cuba-2026",
        destination:
          "/blog/cambios-aduana-cuba-2026-importaciones-viajeros-aranceles",
        permanent: true,
      },
      {
        source: "/blog/consejos-empacar-paquetes-cuba",
        destination: "/blog/que-se-puede-enviar-a-cuba-2026",
        permanent: true,
      },
      {
        source: "/blog/como-enviar-medicinas-a-cuba",
        destination: "/envio-alimentos-cuba",
        permanent: true,
      },
      {
        source: "/blog/envio-maritimo-vs-aereo-cuba",
        destination: "/envios-maritimos-cuba",
        permanent: true,
      },
      {
        source: "/envios-aereos-cuba",
        destination: "/envios-maritimos-cuba",
        permanent: true,
      },
      {
        source: "/blog/errores-comunes-al-enviar-paquetes-cuba",
        destination: "/blog/articulos-prohibidos-cuba",
        permanent: true,
      },
      { source: "/&", destination: "/", permanent: true },
    ];
  },
  async headers(): Promise<
    { source: string; headers: { key: string; value: string }[] }[]
  > {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
