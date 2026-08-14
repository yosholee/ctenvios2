"use client";

import { useId, type ReactElement } from "react";
import { DottedMap, type Marker } from "@/components/ui/dotted-map";

interface RouteMarker extends Marker {
  overlay: {
    countryCode: string;
    label: string;
    labelSide: "left" | "right";
    labelOffsetY: number;
  };
}

const markers: RouteMarker[] = [
  {
    lat: 25.7617,
    lng: -80.1918,
    size: 2.2,
    pinOffsetX: 2.6,
    pinOffsetY: -2.4,
    overlay: {
      countryCode: "us",
      label: "Miami",
      labelSide: "right",
      labelOffsetY: -0.4,
    },
  },
  {
    lat: 23.1136,
    lng: -82.3666,
    size: 2.2,
    pinOffsetX: -2.6,
    pinOffsetY: 2.6,
    overlay: {
      countryCode: "cu",
      label: "Cuba",
      labelSide: "left",
      labelOffsetY: 0.6,
    },
  },
];

export function FooterRouteMap(): ReactElement {
  const id = useId();

  return (
    <figure
      aria-label="Ruta de envío de Miami a Cuba"
      className="relative aspect-2/1 w-full"
      style={{
        maskImage:
          "radial-gradient(ellipse 92% 88% at 50% 42%, black 42%, transparent 78%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 92% 88% at 50% 42%, black 42%, transparent 78%)",
      }}
    >
      <DottedMap<RouteMarker>
        className="text-white/70"
        markers={markers}
        markerColor="#FF6900"
        renderMarkerOverlay={({ marker, x, y, r, index }) => {
          const { countryCode, label, labelSide, labelOffsetY } = marker.overlay;
          const href = `https://flagcdn.com/w80/${countryCode}.webp`;
          const clipId = `${id}-flag-clip-${index}`.replace(/:/g, "-");
          const imgR = r * 0.75;
          const fontSize = r * 0.9;
          const pillH = r * 1.5;
          const pillW = label.length * (fontSize * 0.62) + r * 1.4;
          const pillX =
            labelSide === "left"
              ? x - r - r * 0.6 - pillW
              : x + r + r * 0.6;
          const pillY = y + labelOffsetY - pillH / 2;

          return (
            <g style={{ pointerEvents: "none" }}>
              <clipPath id={clipId}>
                <circle cx={x} cy={y} r={imgR} />
              </clipPath>
              <image
                href={href}
                x={x - imgR}
                y={y - imgR}
                width={imgR * 2}
                height={imgR * 2}
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#${clipId})`}
              />
              <rect
                x={pillX}
                y={pillY}
                width={pillW}
                height={pillH}
                rx={pillH / 2}
                fill="rgba(0,0,0,0.55)"
              />
              <text
                x={pillX + r * 0.7}
                y={y + labelOffsetY + fontSize * 0.35}
                fontSize={fontSize}
                fill="white"
              >
                {label}
              </text>
            </g>
          );
        }}
      />
    </figure>
  );
}
