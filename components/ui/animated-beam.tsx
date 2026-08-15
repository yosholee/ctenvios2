"use client";

import {
  useEffect,
  useId,
  useState,
  type ReactElement,
  type RefObject,
} from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  repeat?: number;
  repeatDelay?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  fromAnchor?: "auto" | "center" | "left" | "right" | "top" | "bottom";
  toAnchor?: "auto" | "center" | "left" | "right" | "top" | "bottom";
  pathType?: "quad" | "cubic";
}

type BeamAnchor = "center" | "left" | "right" | "top" | "bottom";

function resolveAnchors(
  fromRect: DOMRect,
  toRect: DOMRect
): { from: BeamAnchor; to: BeamAnchor } {
  const fromX = fromRect.left + fromRect.width / 2;
  const fromY = fromRect.top + fromRect.height / 2;
  const toX = toRect.left + toRect.width / 2;
  const toY = toRect.top + toRect.height / 2;
  const dx = toX - fromX;
  const dy = toY - fromY;

  if (Math.abs(dx) >= Math.abs(dy)) {
    return dx >= 0
      ? { from: "right", to: "left" }
      : { from: "left", to: "right" };
  }

  return dy >= 0 ? { from: "bottom", to: "top" } : { from: "top", to: "bottom" };
}

function anchorX(
  rect: DOMRect,
  container: DOMRect,
  anchor: BeamAnchor,
  offset: number
): number {
  const left = rect.left - container.left;

  if (anchor === "left") {
    return left + offset;
  }

  if (anchor === "right") {
    return left + rect.width + offset;
  }

  return left + rect.width / 2 + offset;
}

function anchorY(
  rect: DOMRect,
  container: DOMRect,
  anchor: BeamAnchor,
  offset: number
): number {
  const top = rect.top - container.top;

  if (anchor === "top") {
    return top + offset;
  }

  if (anchor === "bottom") {
    return top + rect.height + offset;
  }

  return top + rect.height / 2 + offset;
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 5,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  repeat = Infinity,
  repeatDelay = 0,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  fromAnchor = "auto",
  toAnchor = "auto",
  pathType = "quad",
}: AnimatedBeamProps): ReactElement {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = (): void => {
      if (!containerRef.current || !fromRef.current || !toRef.current) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const rectA = fromRef.current.getBoundingClientRect();
      const rectB = toRef.current.getBoundingClientRect();

      setSvgDimensions({
        width: containerRect.width,
        height: containerRect.height,
      });

      const auto = resolveAnchors(rectA, rectB);
      const resolvedFrom = fromAnchor === "auto" ? auto.from : fromAnchor;
      const resolvedTo = toAnchor === "auto" ? auto.to : toAnchor;
      const startX = anchorX(rectA, containerRect, resolvedFrom, startXOffset);
      const startY = anchorY(rectA, containerRect, resolvedFrom, startYOffset);
      const endX = anchorX(rectB, containerRect, resolvedTo, endXOffset);
      const endY = anchorY(rectB, containerRect, resolvedTo, endYOffset);
      const dx = endX - startX;
      const dy = endY - startY;

      if (pathType === "cubic") {
        if (Math.abs(dx) >= Math.abs(dy)) {
          const pull = Math.max(40, Math.abs(dx) * 0.35);
          const dir = dx >= 0 ? 1 : -1;
          setPathD(
            `M ${startX},${startY} C ${startX + dir * pull},${startY} ${endX - dir * pull},${endY} ${endX},${endY}`
          );
          return;
        }

        const pull = Math.max(24, Math.abs(dy) * 0.28);
        const dir = dy >= 0 ? 1 : -1;
        setPathD(
          `M ${startX},${startY} C ${startX},${startY + dir * pull} ${endX},${endY - dir * pull} ${endX},${endY}`
        );
        return;
      }

      const controlY = startY - curvature;
      setPathD(
        `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`
      );
    };

    const resizeObserver = new ResizeObserver(updatePath);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
    fromAnchor,
    toAnchor,
    pathType,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute top-0 left-0 transform-gpu stroke-2",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat,
            repeatDelay,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}
