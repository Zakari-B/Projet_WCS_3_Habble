const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createManyServices = async () => {
  try {
    return await prisma.services.createMany({
      data: [
        { name: "Conseils éducatifs" },
        { name: "Activités ludiques et sportives" },
        { name: "Garde d'enfant" },
        { name: "Coaching professionnel" },
        { name: "Compagnie et support social" },
        { name: "Service original" },
        { name: "Aide à domicile" },
        { name: "Rééducation, paramédical" },
        { name: "Soins personnels : toilette, habillement, ..." },
        { name: "Soins infirmiers" },
        { name: "Aide administrative, démarches, dossiers" },
        { name: "Soutien scolaire" },
        { name: "Soutien à la parentalité" },
        { name: "Soutien psychologique" },
        { name: "Transport, logistique, voyage" },
        { name: "Santé" },
        { name: "Bien être" },
        { name: "Aide technique" },
        { name: "Agencement PMR" },
      ],
      skipDuplicates: true,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createManyExpertises = async () => {
  try {
    return await prisma.expertises.createMany({
      data: [
        { name: "Démence", category: "Soins aux personnes agées" },
        { name: "Maladie d'Alzheimer", category: "Soins aux personnes agées" },
        { name: "Arthrite", category: "Maladies chroniques" },
        { name: "Asthme", category: "Maladies chroniques" },
        { name: "Diabète", category: "Maladies chroniques" },
        { name: "Maladie respiratoire", category: "Maladies chroniques" },
        { name: "Maladie cardiovasculaire", category: "Maladies chroniques" },
        { name: "Lésion cérébrale acquise", category: "Handicap" },
        { name: "Autisme", category: "Handicap" },
        { name: "Infirmité motric cérébrale", category: "Handicap" },
        { name: "Syndrome de down (trisomie 21)", category: "Handicap" },
        { name: "Fibrose kystique", category: "Handicap" },
        { name: "Épilepsie", category: "Handicap" },
        { name: "Déficience auditive", category: "Handicap" },
        { name: "Handicap intellectuel", category: "Handicap" },
        { name: "Maladie du motoneurone", category: "Handicap" },
        { name: "Dystrophie musculaire", category: "Handicap" },
        { name: "Handicap physique, moteur", category: "Handicap" },
        { name: "Spina-bifida", category: "Handicap" },
        { name: "Lésion de la moelle épinière", category: "Handicap" },
        { name: "Handicap visuel", category: "Handicap" },
        { name: "Handicap auditif", category: "Handicap" },
        { name: "Trouble DYS", category: "Handicap" },
        { name: "Anxiété", category: "Santé mentale" },
        { name: "Trouble bipolaire", category: "Santé mentale" },
        { name: "Dépression", category: "Santé mentale" },
        { name: "Troubles de l'alimentation", category: "Santé mentale" },
        { name: "Trouble de la thésaurisation", category: "Santé mentale" },
        {
          name: "Trouble obsessionnel-compulsif (TOC)",
          category: "Santé mentale",
        },
        {
          name: "Trouble de stress post-traumatique (TSPT)",
          category: "Santé mentale",
        },
        { name: "Skizophrénie", category: "Santé mentale" },
        {
          name: "Abus de substances et toxicomanie",
          category: "Santé mentale",
        },
        {
          name: "Trouble de l'attention avec ou sans hyperactivité (TDAH)",
          category: "Santé mentale",
        },
      ],
      skipDuplicates: true,
    });
  } finally {
    await prisma.$disconnect();
  }
};

createManyServices();
createManyExpertises();
