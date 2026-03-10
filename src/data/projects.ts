export interface Project {
    id: string
    title: string
    description: string
    tags: string[]           // ["React", "Node", "Postgres"]
    url: string              // lien live
    repo?: string            // lien GitHub (optionnel)
    image: string            // screenshot
    featured: boolean        // mis en avant sur le hero ?
}