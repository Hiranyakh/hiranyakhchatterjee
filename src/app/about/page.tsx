import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="bg-[#0B132B] px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              About HIRANYAKH
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Think Better.
              <br />
              Decide Better.
              <br />
              Build Better.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              HIRANYAKH exists to help people create greater clarity across
              health, career, wealth, leadership and life — and turn that
              clarity into meaningful action.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/freedom-score"
                className="rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] transition hover:bg-white"
              >
                Take the Freedom Score™
              </Link>

              <Link
                href="/framework"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Explore the Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* MY STORY */}
      {/* ===================================================== */}

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              My Story
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              A journey shaped by curiosity, change and purpose.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              My journey has never been limited to one discipline. I have
              always been curious about how people think, how they make
              decisions and how they can create a better life.
            </p>

            <p>
              That curiosity led me across different areas of learning and
              experience — from technology and nutrition to business,
              leadership, personal development and emerging technologies such
              as artificial intelligence.
            </p>

            <p>
              Over time, one idea became increasingly clear: meaningful
              transformation rarely comes from improving only one area of
              life. Health, financial capability, career direction,
              leadership and personal growth are deeply connected.
            </p>

            <p>
              HIRANYAKH was created from that belief.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* BELIEF */}
      {/* ===================================================== */}

      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              What I Believe
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Freedom is built, not found.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Real freedom is not simply about money or time. It is the
              ability to make better decisions because your health, mindset,
              capabilities and resources are working together.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Think Better",
                text: "Develop clarity, awareness and a stronger way of approaching decisions.",
              },
              {
                number: "02",
                title: "Decide Better",
                text: "Turn information into deliberate choices aligned with your priorities.",
              },
              {
                number: "03",
                title: "Build Better",
                text: "Create systems, capabilities and habits that compound over time.",
              },
              {
                number: "04",
                title: "Live Better",
                text: "Use what you build to create a healthier and more purposeful life.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-sm font-black text-[#D4AF37]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* WHAT I DO */}
      {/* ===================================================== */}

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              What I Do
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Connecting the areas that shape your future.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              My work sits at the intersection of personal transformation,
              practical strategy and emerging technology.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
              <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
                Health
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Build the foundation.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Better health creates the energy and resilience required to
                pursue everything else effectively.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
              <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
                Career & AI
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Stay relevant in a changing world.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Understand emerging technology, identify opportunities and
                build capabilities that remain valuable as the world changes.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
              <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
                Wealth
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Build financial capability.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Think beyond income and focus on creating stronger financial
                systems, opportunities and long-term resilience.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
              <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
                Leadership
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Increase your impact.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Develop the clarity, communication and leadership capability
                needed to influence people and create meaningful outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FRAMEWORK */}
      {/* ===================================================== */}

      <section className="bg-[#0B132B] px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                The HIRANYAKH Framework
              </p>

              <h2 className="mt-5 text-4xl font-black sm:text-5xl">
                Clarity before action.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Before trying to change everything, understand where you
                actually are. Then identify what matters most, decide what
                needs to change and build a practical path forward.
              </p>

              <Link
                href="/framework"
                className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] transition hover:bg-white"
              >
                Explore the Framework
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="space-y-6">

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    Step 01
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Understand where you are
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    Step 02
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Identify what matters
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    Step 03
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Make better decisions
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    Step 04
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Build your next chapter
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FREEDOM SCORE */}
      {/* ===================================================== */}

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200 md:p-12">

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Freedom Score™
                </p>

                <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                  Start with clarity.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  The Freedom Score™ is designed to help you look at the
                  different dimensions influencing your current position and
                  identify where your greatest opportunities may lie.
                </p>
              </div>

              <Link
                href="/freedom-score"
                className="inline-flex justify-center rounded-full bg-[#0B132B] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#D4AF37] hover:text-[#0B132B]"
              >
                Take the Assessment
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* MISSION */}
      {/* ===================================================== */}

      <section className="bg-slate-100 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            The Mission
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Help people create a life they have the freedom to choose.
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            HIRANYAKH is ultimately about creating a better relationship with
            health, knowledge, technology, money, leadership and personal
            growth — so that people can make more intentional choices about
            the future they want to build.
          </p>

        </div>
      </section>

      {/* ===================================================== */}
      {/* FINAL CTA */}
      {/* ===================================================== */}

      <section className="bg-[#0B132B] px-6 py-24 text-center text-white sm:py-32">
        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Your Next Chapter
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl">
            The future becomes clearer when you start measuring where you are.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Take the Freedom Score™ and begin with a clearer understanding of
            your current position.
          </p>

          <Link
            href="/freedom-score"
            className="mt-9 inline-flex rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-bold text-[#0B132B] transition hover:bg-white"
          >
            Start Your Freedom Score™
          </Link>

        </div>
      </section>

    </main>
  );
}