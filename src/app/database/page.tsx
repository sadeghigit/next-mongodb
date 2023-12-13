"use client"

import { useCollections } from "@/hooks/use-collections"
import Link from "next/link"

export default function Page() {
  const { collections } = useCollections()

  return (
    <div className="p-4">
      <div className="pb-4 flex gap-2">
        <div>Collections</div>
      </div>

      <div className="w-full overflow-x-scroll">
        <table className="w-full bg-white table-fixed">
          <thead>
            <tr>
              <td className="text-left p-2 bg-slate-200 truncate">Name</td>
              <td className="text-left p-2 bg-slate-200 truncate" width={100}>Type</td>
              <td className="text-left p-2 bg-slate-200 truncate" width={100}>Action</td>
            </tr>
          </thead>
          <tbody>
            {collections?.map((collection, i) => (
              <tr key={i} className="border-b hover:bg-slate-100">
                <td className="p-2 truncate ">{collection.name}</td>
                <td className="p-2 truncate ">{collection.type}</td>
                <td className="p-2 truncate ">
                  <Link href={'/database/' + collection.name} className="text-blue-500">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
