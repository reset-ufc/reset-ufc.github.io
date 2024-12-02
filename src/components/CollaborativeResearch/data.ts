interface InstitutionsDataProps {
  name: string;
  src: string;
  description?: string;
}

export const institutionsData: InstitutionsDataProps[] = [
  { name: "PUC-RIO", src: "/puc-rio-logo.png" },
  {
    name: "USP",
    src: "/usp-logo.png",
    description: "Universidade de São Paulo",
  },
  { name: "UECE", src: "/uece-logo.png" },
  { name: "FIOCRUZ", src: "/fiocruz-logo.jpg" },
];
