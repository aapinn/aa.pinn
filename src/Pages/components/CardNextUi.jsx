import {Card, CardBody, CardFooter} from "@nextui-org/card";
import { NavLink } from "react-router-dom";
import indomaret from '../../image/indomaret.png'
import Giant from '../../image/giant.png'
import Ace from '../../image/aceHardware.png'
import Albany from '../../image/albany.png'
import Ahi from '../../image/ahi.png'
import azko from '../../image/azko.png'


export default function CardNextUi() {
  const list = [
    {
      path: "Giant",
      img: Giant,
      date: "Des 2017 - Jan 2018",
    },
    {
      path: "Albany",
      img: Albany,
      date: "Jul 2018 - Jan 2020",
    },
    {
      path: "Indomaret",
      img: indomaret,
      date: "Jan 2020 - Okt 2023",
    },
    {
      path: "Ace",
      img: Ace,
      date: "Nov 2023 - Mei 2024",
    },
    {
      path: "Ahi",
      img: Ahi,
      date: "Jun 2024 - Present",
    },
    {
      path: "azko",
      img: azko,
      date: "Jan 2021 - Present",
    },

  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 my-5">
      {list.map((item, index) => (
        <NavLink
        to={item.path}
        key={index}>
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className=" rounded-xl p-2 shadow-md">
          <CardBody className="overflow-visible p-0">
            <img
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-15  rounded-xl"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-xs flex justify-center py-2">
            <p className="text-xs">{item.date}</p>
          </CardFooter>
        </Card>
        </NavLink>
      ))}
    </div>
  );
}