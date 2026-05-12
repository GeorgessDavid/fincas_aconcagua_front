'use client';
import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type RevealVariant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'zoomIn';

interface RevealProps {
    children: ReactNode;
    variant?: RevealVariant;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    amount?: number;
}

const variants: Record<RevealVariant, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 48 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    zoomIn: {
        hidden: { opacity: 0, scale: 0.88 },
        visible: { opacity: 1, scale: 1 },
    },
};

export function Reveal({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 0.6,
    className,
    once = true,
    amount = 0.15,
}: RevealProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            variants={variants[variant]}
        >
            {children}
        </motion.div>
    );
}

/* ── Stagger container ────────────────────────────────────────────────────── */
interface StaggerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    delayChildren?: number;
    once?: boolean;
    amount?: number;
}

export function StaggerReveal({
    children,
    className,
    staggerDelay = 0.1,
    delayChildren = 0,
    once = true,
    amount = 0.1,
}: StaggerProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

/* ── Stagger child ────────────────────────────────────────────────────────── */
interface StaggerItemProps {
    children: ReactNode;
    variant?: RevealVariant;
    duration?: number;
    className?: string;
}

export function StaggerItem({
    children,
    variant = 'fadeUp',
    duration = 0.55,
    className,
}: StaggerItemProps) {
    return (
        <motion.div
            className={`w-full h-full${className ? ` ${className}` : ''}`}
            variants={variants[variant]}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
