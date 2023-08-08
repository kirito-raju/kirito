import React from "react"
import { GiUnstableOrb, GiBatBlade, GiAlienSkull} from "react-icons/gi"
const services = [
  {
    id: 1,
    icon: <GiUnstableOrb className="service-icon" />,
    title: "Sword Art Online",
    text: `The wondeous world of Aincrad where users can do anything within the limits of imagination.`,
  },
  {
    id: 2,
    icon: <GiBatBlade className="service-icon" />,
    title: "Alfheim Online",
    text: `A world of faries with magic and swords with difficult bosses and conquerors.`,
  },
  {
    id: 3,
    icon: <GiAlienSkull className="service-icon" />,
    title: "Gun Gale Online",
    text: `A virtual game world where shooting using guns and snipers.`,
  },
]

export default services
