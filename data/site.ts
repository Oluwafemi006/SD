export const site = {
  name: "SD International Group",
  description: "Partenaire technique pour les projets de BTP, d'énergie, d'études et d'approvisionnement au Bénin.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sdinternational-group.com",
  phone: "+229 00 00 00 00",
  phoneHref: "+22900000000",
  email: "contact@sdinternational-group.com",
  location: "Bénin",
  whatsapp: "https://wa.me/22900000000",
};

export const services = [
  { slug: "btp-genie-civil", number: "01", short: "BTP & GÉNIE CIVIL", title: "BTP, aménagement & génie civil", description: "Construction, réhabilitation, aménagement, ouvrages et travaux de génie civil.", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85", points: ["Construction et réhabilitation", "Aménagement et ouvrages", "Travaux de génie civil", "Suivi technique des interventions"] },
  { slug: "reseaux-electriques", number: "02", short: "ÉNERGIE & RÉSEAUX", title: "Réseaux électriques HT/MT/BT & solaire", description: "Études, travaux, électrification, raccordements, installations et solutions solaires.", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85", points: ["Réseaux HT, MT et BT", "Électrification et raccordements", "Installations électriques", "Solutions solaires adaptées"] },
  { slug: "etudes-environnement", number: "03", short: "ÉTUDES & ENVIRONNEMENT", title: "Études APD & environnement", description: "Préparation technique, études d'avant-projet détaillé et prise en compte des enjeux environnementaux.", image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1400&q=85", points: ["Études techniques", "Avant-projet détaillé", "Préparation des projets", "Considérations environnementales"] },
  { slug: "negoce-import-export", number: "04", short: "NÉGOCE & IMPORT-EXPORT", title: "Import-export, logistique & fournitures", description: "Approvisionnement en matériels techniques, équipements électriques et produits industriels.", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=85", points: ["Import-export et logistique", "Matériels techniques", "Équipements électriques", "Lubrifiants industriels et marins"] },
] as const;

export const projects = [
  { title: "Projet d'infrastructure à renseigner", category: "BTP & Génie civil", location: "Localisation à renseigner", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=85" },
  { title: "Projet électrique à renseigner", category: "Réseaux électriques", location: "Localisation à renseigner", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85" },
  { title: "Opération de fourniture à renseigner", category: "Négoce & fourniture", location: "Localisation à renseigner", image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85" },
] as const;
