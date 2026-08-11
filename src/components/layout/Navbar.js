"use client";

import { useState, useEffect } from "react";
import { navLinks, profile } from "@/lib/data";
import useScrollSpy from "@/hooks/useScrollSpy";
import {
  GithubIcon,
  JayTrixMarkIcon,
  LinkedinIcon,
  MenuIcon,
  WhatsAppIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b",
        scrolled
          ? "bg-background/70 border-border shadow-lg shadow-black/10"
          : "bg-background/30 border-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 transition-colors duration-300"
          aria-label={profile.name}
        >
          <JayTrixMarkIcon
            size={42}
            className="shrink-0 drop-shadow-[0_10px_18px_rgba(7,58,133,0.18)] transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          <span className="leading-none">
            <span className="block text-lg font-extrabold tracking-[0.14em] text-accent sm:text-xl">
              JAYTRIX
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.42em] text-foreground sm:text-[11px]">
              SYSTEMS
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeId === id ? "page" : undefined}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  activeId === id
                    ? "text-accent bg-accent/10"
                    : "text-foreground-secondary hover:text-foreground hover:bg-surface"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground-secondary hover:text-accent transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "md:hidden fixed inset-0 top-16 z-40 transition-all duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Menu */}
        <div
          className={cn(
            "relative bg-surface border-b border-border p-6 transition-transform duration-300",
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="mb-5 flex items-center gap-3 border-b border-border pb-5">
            <JayTrixMarkIcon size={42} className="shrink-0" />
            <span className="leading-none">
              <span className="block text-lg font-extrabold tracking-[0.14em] text-accent">
                JAYTRIX
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.42em] text-foreground">
                SYSTEMS
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={activeId === id ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "relative px-4 py-3 text-base font-medium rounded-xl transition-all duration-200",
                    activeId === id
                      ? "text-accent bg-accent/10 pl-6 before:absolute before:left-3 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-accent"
                      : "text-foreground-secondary hover:text-foreground hover:bg-background"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 text-foreground-secondary transition-colors duration-200 hover:bg-background hover:text-accent"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-foreground-secondary transition-colors duration-200 hover:bg-background hover:text-accent"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={profile.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="rounded-full p-2 text-foreground-secondary transition-colors duration-200 hover:bg-background hover:text-accent"
            >
              <YouTubeIcon size={22} />
            </a>
            <a
              href={profile.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full p-2 text-foreground-secondary transition-colors duration-200 hover:bg-background hover:text-accent"
            >
              <WhatsAppIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
