import React from "react";
import Image from "next/image";
import CardCircle from "../atoms/CardCircle";
import Button from "../atoms/Button";
import TimSehijira from "./TimSehijira";
import VisiMisi from "../atoms/VisiMisi";
import Glock from "./Glock";
import LogoSlider from "./LogoSlider";

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <VisiMisi
          image="/images/c.jpg"
          title="Tentang Sehjira"
          desc="Rachmita Harahap, Pendiri Yayasan Sehat Jiwa Raga tampil pada Metro TV acara Kick Andy"
        ></VisiMisi>
        <VisiMisi
          image="/images/c.jpg"
          title="Latar Belakang"
          content="Yayasan SEHJIRA adalah sebuah yayasan yang berfokus pada perlindungan dan advokasi bagi penyandang disabilitas khususnya disabilitas rungu/tuli. Yayasan ini ingin membantu para anggotanya mengembangkan potensi dan mendapatkan hak serta kehidupan yang layak di masyarakat. SEHJIRA menyadari pentingnya memiliki tujuan dan program kerja yang sesuai dengan visi misi untuk mencapai hal tersebut. Melalui pelatihan dan kemandirian yang diadakan, SEHJIRA dapat membantu para penyandang disabilitas rungu/tuli bersosialisasi dengan masyarakat luas. Disabilitas rungu/tuli membutuhkan dukungan dan perlindungan agar merasa terlindungi dari segala macam bentuk stigma atau diskriminasi, serta mendapatkan kehidupan yang setara dengan masyarakat non-tuli pada umumnya. SEHJIRA memberikan pelatihan bahasa isyarat yang berbasis internasional agar gerak dan bahasa tubuh yang digunakan oleh disabilitas rungu/tuli dapat dipahami dengan sempurna."
          desc="Forum The Art of Sign Language"
        ></VisiMisi>
        <VisiMisi title="Linimasa Sehjira">
          <li>
            Tanggal 5 Desember 2001: Yayasan SEHJIRA didirikan oleh sekelompok
            relawan yang memiliki hambatan pendengaran dengan tujuan menggalang
            dana dan menyediakan informasi seputar pendidikan dan lapangan kerja
            bagi disabilitas rungu/Tuli.
          </li>
          <li>
            Tahun-tahun awal: SEHJIRA hanya beranggotakan 20 orang disabilitas
            rungu/Tuli.
          </li>
          <li>
            Pertengahan tahun 2001: Rachmita Maun Harahap mendirikan Yayasan
            SEHJIRA.
          </li>
          <li>
            Anggota SEHJIRA semakin bertambah dan pada saat ini mencapai lebih
            dari 3020 orang disabilitas rungu/Tuli dari hampir seluruh wilayah
            di Indonesia yang ikut dalam program SEHJIRA.
          </li>
          <li>
            Para disabilitas rungu/Tuli yang mengikuti pelatihan dan
            keterampilan di SEHJIRA berhasil memiliki keterampilan menjahit dan
            membuka usaha mandiri, bekerja di perusahaan garmen, menjadi PNS,
            pegawai swasta, desainer, arsitek, programmer, barista, dan
            lain-lain.
          </li>
          <li>
            Salah satu anggota SEHJIRA berhasil meraih prestasi sebagai juara
            pertama dalam lomba membuat jas tingkat Nasional.
          </li>
          <li>
            SEHJIRA juga memberikan dukungan kepada keluarga disabilitas
            rungu/Tuli untuk mendapatkan kesetaraan.
          </li>
          <li>
            SEHJIRA dihadapkan pada suatu tantangan untuk mengembangkan
            organisasi agar eksistensinya dapat membantu pengembangan potensi
            para anggota untuk mendapatkan hak dan kehidupan yang layak di
            masyarakat.
          </li>
          <li>
            SEHJIRA dihadapkan pada suatu tantangan untuk mengembangkan
            organisasi agar eksistensinya dapat membantu pengembangan potensi
            para anggota untuk mendapatkan hak dan kehidupan yang layak di
            masyarakat.
          </li>
          <li>
            SEHJIRA menyadari pentingnya suatu tujuan dan program kerja yang
            sesuai dengan visi, misi serta ciri khas atau kondisi budaya
            identitas saat ini.
          </li>
        </VisiMisi>
        <div className="flex w-[70%] items-start">
          <VisiMisi
            title="Visi"
            content="Visi Yayasan SEHJIRA adalah pemberdayaaan disabilitas rungu/Tuli guna terwujudnya individu yang tangguh dan mandiri serta ikut berpartisipasi dalam pembangunan Indonesia inklusif."
          ></VisiMisi>
          <VisiMisi title="Misi">
            <li>
              Membantu disabilitas rungu/Tuli dengan pemberian advokasi atau
              perlindungan terutama menjembatani penyandang disabilitas dengan
              organisasi kemitraan;
            </li>
            <li>
              Menjalin kerjasama antar lembaga misalnya lembaga pemerintah baik
              sektor sosial, pendidikan, kesehatan,  tenaga kerja, olah raga,
              seni budaya dan pariwisata, infrastruktur, dan sebagainya; dan 
            </li>
            <li>
              Pemberdayaan disabilitas rungu/Tuli turut berpartisipasi dalam
              pembangunan dan memberikan sosialisasi kepada masyarakat umum
              mengenai ketulian.
            </li>
          </VisiMisi>
        </div>
        <VisiMisi
          title="Mitra Kerja Sama"
          content="Berikut adalah Partner yang pernah bekerja Sama dengan Yayasan Sehjira"
        ></VisiMisi>
      </div>
      <div className="py-5-">
        <LogoSlider />
      </div>
      <TimSehijira />

      <div className=" flex text-center justify-center items-center">
        <div className="mt-16 w-auto p-2  px-16 border-2 rounded-full text-white border-[#843C74] bg-[#843C74] ">
          <Button title="Lihat Selengkapnya 🡲" />
        </div>
      </div>
    </div>
  );
};

export default About;
