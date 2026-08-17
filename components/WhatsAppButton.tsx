import { site } from "@/data/site";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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
      <WhatsAppIcon size={30} />
    </a>
  );
}
