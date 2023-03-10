import Image from "next/image";

const section = () => {
  return (
    <>
      <h1 className="text-center mt-10 text-[24px] text-[#843C74] font-extrabold ">Visi Misi Sehjira</h1>
      <div className="flex flex-row  flex-wrap justify-evenly py-10 mr-10">
        <div>
          <Image
            src="/images/Section.jpg"
            alt="sehijra"
            width={750}
            height={500}
          />
        </div>
        <div className="w-[0.1rem]"></div>
        <div className="w-[17rem] flex justify-around  flex-col flex-wrap pr-5 text-justify pt-10">
          <div>
            <h3 className="p-5 text-[29px] font-semibold text-[#843C74]">
              Visi
            </h3>
            <p className="text-[18px] font-normal ">
              pemberdayaaan disabilitas rungu/Tuli guna terwujudnya individu yang tangguh dan mandiri serta ikut berpartisipasi dalam pembangunan Indonesia inklusif.
            </p>
          </div>
          <div>
            <h3 className="p-5 text-[22px] font-semibold text-[#843C74]">
              Misi
            </h3>
            <p className="text-[18px] font-normal ">
              Membantu disabilitas rungu/Tuli dengan pemberian advokasi atau perlindungan terutama menjembatani penyandang disabilitas dengan organisasi kemitraan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default section;
