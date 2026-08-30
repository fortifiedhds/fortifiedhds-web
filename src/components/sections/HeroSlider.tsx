"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

const slides = [
  {
    image: "/images/hero/advisory.jpg",
    alt: "Healthcare advisory session with professionals",
  },
  {
    image: "/images/hero/research.jpg",
    alt: "Health and development research in the field",
  },
  {
    image: "/images/hero/outreach.png",
    alt: "Community health outreach programme",
  },
  {
    image: "/images/hero/training.jpg",
    alt: "Professional health and development training workshop",
  },
  {
    image: "/images/hero/supplies.jpg",
    alt: "Medical equipment and health supplies",
  },
  {
    image: "/images/hero/elite-care.jpg",
    alt: "Personalised home care for older adults",
  },
];

const SLIDE_DURATION = 6000;
const TRANSITION_DURATION = 800;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (transitioning || index === current) return;
      setNext(index);
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setNext(null);
        setTransitioning(false);
      }, TRANSITION_DURATION);
    },
    [current, transitioning],
  );

  const startTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      goToSlide((current + 1) % slides.length);
    }, SLIDE_DURATION);
  }, [current, goToSlide]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startTimer]);

  return (
    <section className="bg-white py-10 md:py-12">
      <div className="site-shell">
        {/* Slider card — same width as all other sections, rounded like a card */}
        <div className="relative h-[78vh] min-h-[520px] max-h-[820px] overflow-hidden rounded-2xl bg-fhds-ink">

          {/* Background image layers */}
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              aria-hidden="true"
              className="absolute inset-0 transition-opacity"
              style={{
                opacity: index === current || index === next ? 1 : 0,
                transitionDuration: `${TRANSITION_DURATION}ms`,
                zIndex: index === next ? 2 : index === current ? 1 : 0,
              }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-center"
              />
            </div>
          ))}

          {/* Dark gradient overlays */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/50 to-black/20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-transparent to-transparent"
          />

          {/* Text content — perfectly centred vertically and horizontally */}
          <div className="relative z-20 flex h-full items-center justify-center">
            <div className="w-full px-5 py-8 text-center sm:px-8 md:px-12 lg:px-20">
              <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-normal text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Evidence-based solutions for stronger people, systems, and communities.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
                {site.name} supports organisations, communities, governments, and development
                partners through advisory, research, outreach, training, supplies, and
                personalised care.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href="/services" className="w-full sm:w-auto">Explore services</ButtonLink>
                <ButtonLink href="/contact" variant="white" className="w-full sm:w-auto">
                  Contact FHDS
                </ButtonLink>
              </div>

              {/* Slide indicator dots */}
              <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10">
                {slides.map((slide, i) => (
                  <button
                    key={slide.image}
                    onClick={() => goToSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1 rounded-full transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                      i === current ? "w-8 bg-white sm:w-10" : "w-3 bg-white/35 hover:bg-white/60 sm:w-4"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
