"use client"

import React, {
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react"
import { AnimatePresence, motion, useReducedMotion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

export function AnimatedListItem({
  children,
  reduceMotion,
}: {
  children: React.ReactNode
  reduceMotion: boolean | null
}) {
  const animations: MotionProps = reduceMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0 },
      }
    : {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1, originY: 0 },
        exit: { scale: 0, opacity: 0 },
        transition: { type: "spring", stiffness: 350, damping: 40 },
      }

  return (
    <motion.div {...animations} layout={!reduceMotion} className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const reduceMotion = useReducedMotion()
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    useEffect(() => {
      if (childrenArray.length <= 1 || reduceMotion) {
        return
      }

      const timeout = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
      }, delay)

      return () => {
        clearTimeout(timeout)
      }
    }, [index, delay, childrenArray.length, reduceMotion])

    const itemsToShow = useMemo(() => {
      if (reduceMotion) {
        return childrenArray.slice(0, Math.min(5, childrenArray.length))
      }
      return childrenArray.slice(0, index + 1).reverse()
    }, [index, childrenArray, reduceMotion])

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem
              key={(item as React.ReactElement).key}
              reduceMotion={reduceMotion}
            >
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
