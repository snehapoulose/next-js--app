import { NextResponse } from "next/server"

export function GET(){
    const post = [{
        id:"1",name:"wer"
    },{
        id:"3",name:"uuy"
    }]
    NextResponse.json(post)
}