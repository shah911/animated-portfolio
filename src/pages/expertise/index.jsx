import CallToAction from "@/components/CallToAction";
import Curve from "@/components/Curve";
import Header from "@/components/Header";
import React from "react";

const data = [
  {
    no: "01",
    title: "design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    no: "02",
    title: "Development",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },
  {
    no: "03",
    title: "All in one",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];

function Expertise() {
  return (
    <Curve>
      <div>
        <Header home={false} />
        <div className="w-[95vw] mx-auto min-h-[960px] lg:min-h-[600px] 2xl:h-[768px] flex flex-col items-center justify-evenly">
          <h1 className="py-10 w-[75%] md:w-[60%] mx-auto text-[48px] lg:text-[75px] font-[400] tracking-tighter leading-[100%]">
            I can help you with...
          </h1>
          <div className="flex flex-wrap items-center justify-between">
            {data.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-evenly w-[100%] md:w-[50%] lg:w-[33.3%] h-[300px] 2xl:h-[400px]"
              >
                <div className="w-[100%] h-[30%] flex flex-col items-center justify-evenly">
                  <span className="w-[90%]">{item.no}</span>
                  <hr className="w-[90%]" />
                </div>
                <div className="h-[70%] flex flex-col items-center justify-evenly">
                  <h2 className="font-bold uppercase">{item.title}</h2>
                  <p className="w-[90%] font-[500] text-[14px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CallToAction />
      </div>
    </Curve>
  );
}

export default Expertise;
