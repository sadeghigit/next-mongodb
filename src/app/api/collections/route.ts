import clientPromise from "@/mongodb"

export async function GET(request: Request) {
    const db = (await clientPromise).db()

    const collections = await db.listCollections().toArray()
    return Response.json(collections)
}