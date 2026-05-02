import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
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

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.clientWidth * 0.78 + 24; // approx card + gap
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(countries.length - 1, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 pt-10 pb-6 flex items-center justify-between">
        <div>
          <p className="text-[10px] tracking-micro uppercase text-muted-foreground">
            Origins in Africa
          </p>
          <h1 className="font-serif italic text-3xl md:text-4xl mt-2">
            Les fleurs du monde
          </h1>
        </div>
        <Link
          to="/amazones"
          className="hidden md:inline-block text-[11px] tracking-micro uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          Voir les Amazones →
        </Link>
      </header>

      <section className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 pb-4">
        <p className="max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed font-serif italic">
          Seize territoires, seize fleurs. Glissez horizontalement pour voyager
          de pays en pays — touchez une carte pour rencontrer ses Amazones.
        </p>
      </section>

      {/* Carrousel swipe */}
      <section className="flex-1 flex flex-col justify-center py-8">
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[11vw] pb-8 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
              className="snap-center shrink-0 w-[78vw] sm:w-[60vw] md:w-[44vw] lg:w-[34vw] xl:w-[28vw] cursor-pointer group"
              style={
                {
                  // expose accent as CSS var for hover ring
                  ["--accent-hsl" as never]: c.accent,
                } as React.CSSProperties
              }
            >
              <div className="relative overflow-hidden hairline bg-card transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.name} — ${c.flower}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
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
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {c.intro}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[10px] tracking-micro uppercase text-foreground/70 group-hover:text-foreground transition-colors">
                    Découvrir les Amazones
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 flex items-center justify-center gap-2 pt-4">
          {countries.map((c, i) => (
            <button
              key={c.id}
              onClick={() => scrollTo(i)}
              aria-label={`Aller à ${c.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-foreground"
                  : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
        <p className="text-center text-[10px] tracking-micro uppercase text-muted-foreground mt-4">
          {countries[activeIndex]?.name} — {activeIndex + 1} / {countries.length}
        </p>
      </section>
    </main>
  );
}
