export enum Tags {
    REACT = "React",
    NEST = "Nest.js",
    NEXT = "Next.js",
    POSTGRES = "PostgresSQL",
    VUE = "Vue.js"
}

export interface Project {
    id: string
    title: string
    description: string
    tags: Tags[]           // ["React", "Node", "Postgres"]
    url: string              // lien live
    repo?: string            // lien GitHub (optionnel)
    image: string            // screenshot
    featured: boolean        // mis en avant sur le hero ?
}

