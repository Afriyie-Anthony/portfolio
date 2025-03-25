import { NextResponse } from 'next/server';
import { getGalleryImages, getUniqueCategories } from '../../utils/galleryUtils';

export async function GET() {
  const images = [
    // Commercial Projects
    {
      src: "/images/Commercial/6_unitClassroom_EstiSunkwa.jpg",
      category: "Commercial",
      title: "ESTI SUNKWA(GETFUND)"
    },
    {
      src: "/images/Commercial/AchiaseKG.jpg",
      category: "Commercial",
      title: "Achiase KG Block"
    },
    {
      src: "/images/Commercial/FomenaPoliceStation_1.jpg",
      category: "Commercial",
      title: "Akrokeri Fomena Police Station"
    },
    {
      src: "/images/Commercial/FomenaPoliceStation_2.jpg",
      category: "Commercial",
      title: "Akrokeri Fomena Police Station"
    },
    {
      src: "/images/Commercial/FomenaPoliceStation_3.jpg",
      category: "Commercial",
      title: "Akrokeri Fomena Police Station"
    },
    {
      src: "/images/Commercial/PatakromClassroom_1.jpg",
      category: "Commercial",
      title: "Patakrom Classroom"
    },
    {
      src: "/images/Commercial/PatakromClassroom_2.jpg",
      category: "Commercial",
      title: "Patakrom Classroom"
    },
    {
      src: "/images/Commercial/PatakromClassroom_3.jpg",
      category: "Commercial",
      title: "Patakrom Classroom"
    },
    {
      src: "/images/Commercial/PatakromClassroom_4.jpg",
      category: "Commercial",
      title: "Patakrom Classroom"
    },
    {
      src: "/images/Commercial/PatakromClassroom_5.jpg",
      category: "Commercial",
      title: "Patakrom Classroom"
    },
    {
      src: "/images/Commercial/WiasoKG_1.jpg",
      category: "Commercial",
      title: "Wiaso KG"
    },
    {
      src: "/images/Commercial/WiasoKG_2.jpg",
      category: "Commercial",
      title: "Wiaso KG"
    },
    {
      src: "/images/Commercial/AkrokeriMeth_1.jpg",
      category: "Commercial",
      title: "Akrokeri Methodist"
    },
    {
      src: "/images/Commercial/AkrokeriMeth_2.jpg",
      category: "Commercial",
      title: "Akrokeri Methodist"
    },
    {
      src: "/images/Commercial/AkrokeriMeth_3.jpg",
      category: "Commercial",
      title: "Akrokeri Methodist"
    },
    {
      src: "/images/Commercial/DwameanPolice_1.jpg",
      category: "Commercial",
      title: "Dwamean Police Station"
    },
    {
      src: "/images/Commercial/DwameanPolice_2.jpg",
      category: "Commercial",
      title: "Dwamean Police Station"
    },
    {
      src: "/images/Commercial/AkrokeriPractice_1.jpg",
      category: "Commercial",
      title: "Akrokeri Practice"
    },
    {
      src: "/images/Commercial/AkrokeriPractice_2.jpg",
      category: "Commercial",
      title: "Akrokeri Practice"
    },
    {
      src: "/images/Commercial/PatakromKG_1.jpg",
      category: "Commercial",
      title: "Patakrom KG"
    },
    {
      src: "/images/Commercial/PatakromKG_2.jpg",
      category: "Commercial",
      title: "Patakrom KG"
    },

    // Industrial Projects
    {
      src: "/images/Industrial/Concrete U-drain_1.jpg",
      category: "Industrial",
      title: "Concrete U-drain at Walanu Village"
    },
    {
      src: "/images/Industrial/Concrete_Udrain_2.jpg",
      category: "Industrial",
      title: "Concrete U-drain at Walanu Village"
    },
    {
      src: "/images/Industrial/Concrete_Udran_3.jpg",
      category: "Industrial",
      title: "Concrete U-drain at Walanu Village"
    },

    // Remodelling Projects
    {
      src: "/images/Remodelling/DambalaMarket_1.jpg",
      category: "Remodelling",
      title: "Dambala Market in South Tongu District"
    },
    {
      src: "/images/Remodelling/DambalaMarket_2.jpg",
      category: "Remodelling",
      title: "Dambala Market in South Tongu District"
    },
    {
      src: "/images/Remodelling/DambalaMarket_3.jpg",
      category: "Remodelling",
      title: "Dambala Market in South Tongu District"
    },
    {
      src: "/images/Remodelling/DambalaMarket_4.jpg",
      category: "Remodelling",
      title: "Dambala Market in South Tongu District"
    },
    {
      src: "/images/Remodelling/DambalaMarket_5.jpg",
      category: "Remodelling",
      title: "Dambala Market in South Tongu District"
    },
    {
      src: "/images/Remodelling/SogakopeMarket_1.jpg",
      category: "Remodelling",
      title: "Sogakope Market in South Tongu District"
    },
    {
      src: "/images/Remodelling/SogakopeMarket_2.jpg",
      category: "Remodelling",
      title: "Sogakope Market in South Tongu District"
    },
    {
      src: "/images/Remodelling/SogakopeMarket_3.jpg",
      category: "Remodelling",
      title: "Sogakope Market in South Tongu District"
    },
    {
      src: "/images/Remodelling/SogakopeMarket_4.jpg",
      category: "Remodelling",
      title: "Sogakope Market in South Tongu District"
    },

    // Residential Projects
    {
      src: "/images/Residential/4_Bedroom-Ashogman.jpg",
      category: "Residential",
      title: "4 Bedroom House at Ashongman Estate"
    }
  ];

  const categories = ["Commercial", "Industrial", "Remodelling", "Residential"];

  return Response.json({ images, categories });
} 