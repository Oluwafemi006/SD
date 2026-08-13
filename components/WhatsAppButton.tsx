import { site } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter SD International Group sur WhatsApp"
      title="WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(0,0,0,.22)] transition hover:-translate-y-1 hover:bg-[#20bd5a] sm:bottom-7 sm:right-7"
    >
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.04 3C8.85 3 3 8.73 3 15.78c0 2.25.6 4.45 1.74 6.38L3 28.5l6.56-1.69a13.2 13.2 0 0 0 6.47 1.68h.01C23.23 28.49 29 22.76 29 15.7 29 8.67 23.22 3 16.04 3Zm0 23.33h-.01a11 11 0 0 1-5.61-1.51l-.4-.24-3.89 1 1.04-3.7-.26-.4a10.47 10.47 0 0 1-1.7-5.7c0-5.86 4.86-10.62 10.84-10.62 5.98 0 10.83 4.72 10.83 10.55 0 5.86-4.82 10.62-10.8 10.62Zm5.94-7.95c-.33-.16-1.93-.94-2.23-1.05-.3-.1-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.26-.19.22-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.58a9.72 9.72 0 0 1-1.82-2.22c-.19-.32-.02-.5.14-.66.15-.14.33-.37.49-.56.17-.19.22-.32.33-.54.1-.21.05-.4-.03-.56-.08-.16-.74-1.75-1.01-2.39-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.4-.3.32-1.15 1.1-1.15 2.68s1.18 3.11 1.34 3.33c.16.21 2.32 3.48 5.63 4.88.78.33 1.4.53 1.87.68.79.25 1.5.21 2.07.13.63-.09 1.93-.78 2.2-1.53.28-.75.28-1.39.2-1.53-.08-.13-.3-.21-.63-.37Z" />
      </svg>
    </a>
  );
}
