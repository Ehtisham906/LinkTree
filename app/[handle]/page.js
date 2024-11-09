import clientPromise from "@/lib/mongodb";
import Link from "next/link"
import { notFound } from "next/navigation";

export default async function page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("linktree")
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the bittree
    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }

    // const item = {
    //     "_id": {
    //         "$oid": "672f8fb9df7948c672e24854"
    //     },
    //     "links": [
    //         {
    //             "link": "sd.com",
    //             "linktext": "asdasd"
    //         }
    //     ],
    //     "handle": "ehtishams",
    //     "pic": "https://avatars.githubusercontent.com/u/76935365?v=4"
    // }



    return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
        <div className="photo flex flex-col items-center">
            <img className="rounded-full" src={item.pic} alt="" width={100} height={100} />
            <span className="font-bold text-xl">@{item.handle}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link} target="_blank" ><div className="py-4 shadow-lg px-2 rounded-md my-3 bg-white" >
                        {item.linktext}

                    </div></Link>
                })}
            </div>
        </div>


    </div>
}