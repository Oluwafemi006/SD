export const site = {
  name: "SD International Group",
  description: "Groupe multisectoriel au service des projets, des opérations et des besoins d'approvisionnement au Bénin.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sdinternational-group.com",
  phone: "+229 01 96 97 18 32",
  phoneHref: "+2290196971832",
  email: "sdinter2009@yahoo.fr",
  location: "Bénin",
  whatsapp: "https://wa.me/2290196971832",
};

export const services = [
  { slug: "btp-genie-civil", number: "01", short: "BTP & GÉNIE CIVIL", title: "BTP, aménagement & génie civil", description: "Construction, réhabilitation, aménagement, ouvrages et travaux de génie civil.", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85", points: ["Construction et réhabilitation", "Aménagement et ouvrages", "Travaux de génie civil", "Suivi technique des interventions"] },
  { slug: "reseaux-electriques", number: "02", short: "ÉNERGIE & RÉSEAUX", title: "Réseaux électriques HT/MT/BT & solaire", description: "Études, travaux, électrification, raccordements, installations et solutions solaires.", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85", points: ["Réseaux HT, MT et BT", "Électrification et raccordements", "Installations électriques", "Solutions solaires adaptées"] },
  { slug: "etudes-environnement", number: "03", short: "ÉTUDES & ENVIRONNEMENT", title: "Études APD & environnement", description: "Préparation technique, études d'avant-projet détaillé et prise en compte des enjeux environnementaux.", image: "/images/services/etudes-apd-afrique.jpg", points: ["Études techniques", "Avant-projet détaillé", "Préparation des projets", "Considérations environnementales"] },
  { slug: "negoce-import-export", number: "04", short: "NÉGOCE & IMPORT-EXPORT", title: "Import-export, logistique & fournitures", description: "Approvisionnement en matériels techniques, équipements électriques et produits industriels.", image: "/images/services/import-export-abidjan.jpg", points: ["Import-export et logistique", "Matériels techniques", "Équipements électriques", "Lubrifiants industriels et marins"] },
] as const;

export type Project = {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
};

// Ajouter ici uniquement les réalisations et photographies validées par l'entreprise.
export const projects: Project[] = [];
