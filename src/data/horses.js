import stetson from "../assets/cheval3.jpg";
import pokemon from "../assets/cheval1.jpg";
import jument from "../assets/cheval4.jpg";
export const horses = [
  {
    id: 1,
    name: "Quebo",
    breed: "Quarter Horse",
    age: 12,
    level: "Intermédiaire",
    discipline: "Reining",
    character: "Un partenaire fiable et spécialisé dans les disciplines Western.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=800",
    disponibility: "Club",
  },
  {
    id: 2,
    name: "Stetson",
    breed: "Cheval de Sport",
    age: 10,
    level: "Tous niveaux",
    discipline: "Classique / Loisir",
    character: "Polyvalent et calme, idéal pour l'apprentissage du classique.",
    image: stetson,
    disponibility: "Club",  
  },
  {
    id: 3,
    name: "Pokémon",
    breed: "Double Poney",
    age: 15,
    level: "Débutant",
    discipline: "Initiation",
    character: "Le favori des enfants pour découvrir l'équitation en toute sécurité.",
    image: pokemon,
    disponibility: "Club uniquement",
  }
  ,
  {
    id: 4,
    name: "jument",
    breed: "Double Poney",
    age: 15,
    level: "Débutant",
    discipline: "Dressage",
    character: "Le favori des enfants pour découvrir l'équitation en toute sécurité.",
    image: jument,
    disponibility: "Club uniquement",
  }
];
