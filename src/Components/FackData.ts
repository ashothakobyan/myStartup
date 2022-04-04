import { Interface } from "readline"
import React from "react"

export interface IChilde {
    title:string
    index:number
}

export interface IData {
    name:string
    childes:IChilde[]
    index:number
}

export const data = [
    {
        name:"Foundation",
        childes:[
            {title:"Setup virtual office",index:0},
            {title:"set mission & vision",index:1},
            {title:"Select business name",index:2},
            {title:"Buy domains",index:3}
        ],
        index:1
    },
    {
        name:"Discovery",
        childes:[
            {title:"Create roadmap",index:0},
            {title:"Competitor analysis",index:1},
        ],
        index:2
    },
    {
        name:"Delivery",
        childes:[
            {title:"Release marketing website",index:0},
            {title:"Release MVP",index:1},
        ],
        index:3
    },
]

