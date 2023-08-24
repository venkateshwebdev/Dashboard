export interface CarouselDataObject {
  index: number;
  title: string;
  image: string;
  description: string;
  downloadLink:string;
  getStats:string;
}

export const carouselDataList: CarouselDataObject[] = [
  {
    index: 0,
    title: "Jungle Run",
    image:
      "https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
    downloadLink:"",
    getStats:"/jungle_run/getstats"
  },
  {
    index: 1,
    title: "Vital Mornings",
    image:
      "https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
    downloadLink:"",
    getStats:"/vital_mornings/getstats"
  },
  {
    index: 2,
    title: "The BoogeyMan",
    image:
      "https://images.unsplash.com/photo-1621274283140-e4450435a76a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
    downloadLink:"",
    getStats:"/the_boogey_man/getstats"
  },
  {
    index: 3,
    title: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
    downloadLink:"",
    getStats:"/"
  },
];
