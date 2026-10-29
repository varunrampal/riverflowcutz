"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  Scissors,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const bookingUrl = "https://squareup.com/appointments/book/LJSAPZBSB6DMY";

const navItems = ["About", "Services", "Work", "Contact"];

const services = [
  { id: "01", title: "Skin fade", duration: "30 min" },
  { id: "02", title: "Haircut & beard", duration: "50 min" },
  { id: "03", title: "Beard and neck line up", duration: "20 min" },
  { id: "04", title: "Head massage", duration: "15 min" },
  { id: "05", title: "Skin fade & beard", duration: "1 hr" },
  { id: "06", title: "Nose wax", duration: "10 min" },
  { id: "07", title: "Ear wax", duration: "10 min" },
  { id: "08", title: "Hair color", duration: "20 min" },
  { id: "09", title: "Beard color", duration: "15 min" },
  { id: "10", title: "Kids cut", duration: "20 min" },
  { id: "11", title: "Kids skin fade", duration: "30 min" },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "1,500+", label: "Clients" },
  { value: "★★★★★", label: "Rated" },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
    alt: "Barber styling a client's hair",
    className: "md:col-span-5 md:row-span-2",
  },
  {
    src: "/barber-at-work.jpg",
    alt: "Barber shaping a client's hairline",
    className: "md:col-span-3",
  },
  {
    src: "/haircut-detail.jpg",
    alt: "Barber trimming a client's hair",
    className: "md:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80",
    alt: "Finished haircut side profile",
    className: "md:col-span-4",
  },
  {
    src: "/barber-combing-hair.jpg",
    alt: "Barber combing a client's hair",
    className: "md:col-span-3",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#F4F0E8] text-[#263B58]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#F4F0E8]/75 backdrop-blur-md border-b border-[#263B58]/12" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3 text-sm font-medium tracking-[0.24em] text-[#263B58] uppercase">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#5D7895]/70 text-[#5D7895]">
              <Scissors size={16} />
            </span>
            RIVERFLOW CUTZ
          </a>

          <div className="hidden items-center gap-8 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[#263B58]/80 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative pb-1 transition-colors hover:text-[#263B58]"
              >
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#5D7895] after:transition-transform after:duration-300 hover:after:scale-x-100">
                  {item}
                </span>
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#5D7895]/70 bg-[#5D7895]/10 px-5 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#263B58] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5D7895] hover:text-[#F4F0E8]"
            >
              Book Now
              <ArrowRight size={14} />
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#263B58]/12 bg-[#263B58]/5 text-[#263B58] md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#263B58]/12 bg-[#F4F0E8]/95 px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.22em] text-[#263B58]/80">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-[#5D7895]"
              >
                Book Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative isolate flex min-h-screen items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1800&q=80"
              alt="Barber cutting a client's hair"
              fill
              priority
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(93,120,149,0.16),_transparent_32%),linear-gradient(90deg,rgba(244,240,232,0.92)_0%,rgba(244,240,232,0.82)_42%,rgba(244,240,232,0.3)_100%)]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-20">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 border border-[#263B58]/20 bg-[#F4F0E8]/70 px-4 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-[#263B58]/80 backdrop-blur-sm">
                <MapPin size={12} className="text-[#5D7895]" />
                Langley, BC
              </div>

              <h1 className="font-serif text-5xl leading-[0.9] tracking-[-0.04em] text-[#263B58] sm:text-6xl lg:text-[7rem]">
                PRECISION.
                <span className="mt-3 block text-[#263B58]/80">STYLE.</span>
                <span className="mt-3 block text-[#5D7895]">CONFIDENCE.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base text-[#263B58]/75 sm:text-lg">
                Premium men&apos;s grooming, tailored to you.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5D7895] px-7 py-3.5 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-[#F4F0E8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8FA7BF]"
                >
                  [ Book Your Appointment ]
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-[#263B58]/80 transition-colors hover:text-[#263B58]"
                >
                  View My Work <ChevronDown size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.15 }}
          variants={reduceMotion ? undefined : reveal}
          id="about"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-7">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-[#5D7895]">
                The Barber
              </p>
              <h2 className="max-w-md font-serif text-4xl leading-none tracking-[-0.04em] text-[#263B58] sm:text-5xl lg:text-6xl">
                CRAFTED WITH
                <span className="block text-[#5D7895]">PRECISION.</span>
              </h2>
              <p className="max-w-lg text-lg leading-8 text-[#263B58]/75">
                &ldquo;I&apos;m Vinay, a men&apos;s barber focused on precision cuts, clean fades, and styles designed around the individual.&rdquo;
              </p>

        
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-8 h-44 w-44 rounded-full bg-[#5D7895]/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#263B58]/12 bg-[#FFFDF8] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/vinay-minhas.jpeg"
                    alt="Portrait of Vinay, the barber"
                    width={1200}
                    height={1500}
                    className="h-[620px] w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.15 }}
          variants={reduceMotion ? undefined : reveal}
          id="services"
          className="border-y border-[#263B58]/12 bg-[#EAE4D8]"
        >
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
            <div className="mb-12 flex items-end justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-[#5D7895]">
                  The Services
                </p>
                <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-[#263B58] sm:text-5xl">
                  Tailored service.
                </h2>
              </div>
              <div className="hidden items-center gap-2 text-[#263B58]/60 md:flex">
                <Clock3 size={16} className="text-[#5D7895]" />
                By appointment only
              </div>
            </div>

            <div className="grid gap-x-10 md:grid-cols-2">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={reduceMotion ? undefined : { x: 8 }}
                  className="group grid gap-3 border-t border-[#263B58]/12 py-5 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-6"
                >
                  <div>
                    <h3 className="text-lg font-medium text-[#263B58] sm:text-xl">
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[#263B58]/60">
                      {service.duration}
                  </div>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#263B58] transition-colors group-hover:text-[#5D7895]"
                  >
                    Book
                    <ArrowRight size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.15 }}
          variants={reduceMotion ? undefined : reveal}
          id="work"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-[#5D7895]">
                Selected Work
              </p>
              <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-[#263B58] sm:text-5xl">
                Precision in every detail.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-12">
            {gallery.map((item, index) => (
              <motion.figure
                key={item.alt}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-[1.6rem] border border-[#263B58]/12 bg-[#FFFDF8] ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={1000}
                  className="h-full min-h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.figure>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.15 }}
          variants={reduceMotion ? undefined : reveal}
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[#5D7895]/30 bg-[#EAE4D8]">
            <div className="relative grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:py-20">
              <div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-[#5D7895]">
                  Philosophy
                </p>
                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-none tracking-[-0.04em] text-[#263B58] sm:text-5xl lg:text-[4.5rem]">
                  NOT JUST
                  <span className="block text-[#5D7895]">A HAIRCUT.</span>
                </h2>
              </div>

              <div className="flex items-end justify-between gap-4">
                <p className="max-w-md text-lg leading-8 text-[#263B58]/78">
                  &ldquo;It&apos;s about walking out feeling sharper than when you walked in.&rdquo;
                </p>
                <div className="hidden h-20 w-px bg-white/15 lg:block" />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.15 }}
          variants={reduceMotion ? undefined : reveal}
          id="contact"
          className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:px-10"
        >
          <div className="rounded-[2rem] bg-[#F4F0E8] p-8 text-[#263B58] shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:p-10 lg:p-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-[#405D7A]">
                  Appointment
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.04em] text-[#263B58] sm:text-5xl lg:text-[4rem]">
                  Ready for your next cut?
                </h2>
                <address className="mt-6 space-y-2 text-sm not-italic text-[#263B58]/75">
                  <p>19705 56 Ave #108, Langley, BC V3A 3X7</p>
                  <p>
                    <a
                      href="https://www.google.com/search?q=riverflow+laser+and+skin+care&oq=riverflow+laser&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzINCAEQLhivARjHARiABDIGCAIQIxgnMg0DAQAAIYDGIAEGIoFMg0IBBAAGIYDGIAEGIoFMgoIBRAAGKIEGIkFMgoGBhAAGKIEGIkFMgoHCAAGIAEGKIEMgcICBAAGO8F0gEJNTIxMGowajE1qAIIsAIB8QUgU4nCXoCoAPEFIFOJwl6AqAA&sourceid=chrome&source=chrome.rb&ie=UTF-8#"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-[#405D7A]"
                    >
                      +1 833-498-9898
                    </a>
                  </p>
                </address>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#263B58] px-7 py-3.5 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-[#F4F0E8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#34516F]"
                >
                  Book Now
                  <ArrowRight size={16} />
                </a>
                <div className="flex items-center gap-2 text-sm text-[#263B58]/80">
                  <Sparkles size={16} className="text-[#5D7895]" />
                  Precision cuts. Confident finish.
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-[#263B58]/12 bg-[#F4F0E8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#263B58]/60 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-3 uppercase tracking-[0.2em] text-[#263B58]/80">
            <Scissors size={16} className="text-[#5D7895]" />
            RiverFlow Cutz
          </div>
          <div className="text-[0.62rem] uppercase tracking-[0.2em]">
            19705 56 Ave #108, Langley, BC V3A 3X7 • By Appointment
          </div>
        </div>
      </footer>
    </div>
  );
}
