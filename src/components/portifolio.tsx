import { animate } from "../constants/animate";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

export default function Portifolio() {
  const members = [
    {
      name: "Freire Assistant",
      role: "Assistente Virtual sobre Editais da UFC",
      image: "/public/freire_icon.png",
    },
  ];

  return (
    <section id="about-us" className="py-10">
      <div className="container flex justify-center cursor-pointer mx-auto px-4">
        <div className="flex gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              {...animate}
              transition={{ duration: 0.15, delay: index * 0.2 }}
            >
              <Card className="group text-center shadow-lg rounded-md ease-in-out hover:bg-gray-300 hover:-translate-y-1 hover:scale-105 duration-300 p-6 border-[3px] hover:border-primary transition-all">
                <CardContent className="flex bg-inherit flex-col items-center text-white text-center">
                  <Avatar>
                    <AvatarImage src={member.image} alt={member.name} />
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-2 bg-inherit group-hover:text-black">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground bg-inherit mb-2 group-hover:text-black ">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
