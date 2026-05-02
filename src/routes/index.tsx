import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { countries } from "@/data/countries";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Origins in Africa — Les fleurs du monde" },
      {
        name: "description",
        content:
          "Découvrez seize pays à travers leurs fleurs emblématiques et les Amazones qui en portent l'héritage.",
      },
    ],
  }),
});

function HomePage() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // Track active card on scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(Math.min(countries.length - 1, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Mouse drag-to-swipe (desktop)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      moved = false;
      startX = e.pageX;
      startScroll = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 5) moved = true;
      el.scrollLeft = startScroll - dx;
    };
    const endDrag = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove("cursor-grabbing");
      // Snap to nearest card
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
    };
    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", endDrag);
    el.addEventListener("mouseleave", endDrag);
    el.addEventListener("click", onClickCapture, true);
    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", endDrag);
      el.removeEventListener("mouseleave", endDrag);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden bg-background text-foreground">
      <div
        ref={scrollerRef}
        className="h-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth cursor-grab select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {countries.map((c, i) => (
          <article
            key={c.id}
            role="link"
            tabIndex={0}
            onClick={() => navigate({ to: "/amazones" })}
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate({ to: "/amazones" });
            }}
            className="snap-center shrink-0 w-screen h-full flex items-center justify-center px-6 md:px-12"
          >
            <div
              className="relative overflow-hidden hairline bg-card w-full max-w-[520px] cursor-pointer transition-shadow duration-500 hover:shadow-2xl"
              style={
                {
                  ["--accent-hsl" as never]: c.accent,
                } as React.CSSProperties
              }
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={c.image}
                  alt={`${c.name} — ${c.flower}`}
                  draggable={false}
                  loading="lazy"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="p-6 md:p-8 space-y-3">
                <p
                  className="text-[10px] tracking-micro uppercase"
                  style={{ color: `hsl(${c.accent})` }}
                >
                  {String(i + 1).padStart(2, "0")} — {c.flower}
                  {c.flowerLatin && (
                    <span className="font-serif italic normal-case tracking-normal text-muted-foreground ml-2">
                      {c.flowerLatin}
                    </span>
                  )}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl">{c.name}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.intro}
                </p>
                <div className="pt-2 flex items-center gap-2 text-[10px] tracking-micro uppercase text-foreground/70">
                  Découvrir les Amazones
                  <span aria-hidden>→</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Counter discret */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] tracking-micro uppercase text-muted-foreground">
        {activeIndex + 1} / {countries.length} — {countries[activeIndex]?.name}
      </div>
    </main>
  );
}
