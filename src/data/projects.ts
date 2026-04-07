import { Project, Tags } from "@/lib/type";

export const projects: Project[] = [
    {
        id: "1",
        title: "CoworkHub",
        description: "Site pour réserver des espaces de coworking",
        tags: [Tags.NEXT, Tags.NEST, Tags.POSTGRES],
        url: "https://coworkhub.vercel.app/",
        image: "/projets/coworkhub.png",
        featured: true
    },
    {
        id: "2",
        title: "Marvel Project React",
        description: "Site utilisant l'API Marvel pour découvrir react",
        tags: [Tags.REACT],
        url: "",
        image: "/projets/coworkhub.png",
        featured: false
    },
    {
        id: "3",
        title: "Marvel Project VueJs",
        description: "Site utilisant l'API Marvel pour découvrir Vue",
        tags: [Tags.VUE],
        url: "",
        image: "/projets/coworkhub.png",
        featured: false
    }
]

