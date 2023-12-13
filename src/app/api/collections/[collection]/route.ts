import clientPromise from "@/mongodb"

type Props = {
    params: { collection: string }
}
export async function GET(request: Request, { params }: Props) {
    const db = (await clientPromise).db()
    const collection = db.collection(params.collection)
    
    const documents = await collection.find().toArray()
    return Response.json(documents)
}