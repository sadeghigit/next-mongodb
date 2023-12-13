"use client"

import { useDocuments } from "@/hooks/use-documents"
import Link from "next/link"
import { useState } from "react"

type Props = {
  params: { collection: string }
}

export default function Page({ params }: Props) {
  const { documents } = useDocuments(params.collection)

  let doc: any = {}
  for (const document of documents || []) {
    doc = { ...doc, ...document }
  }
  let fields = Object.keys(doc)

  return (
    <div className="p-4">
      <div className="pb-4 flex gap-2">
        <Link href={'/database'} className="text-blue-500">Collections</Link>
        <div>\</div>
        <div>{params.collection}</div>
      </div>
      <div className="w-full overflow-x-scroll">
        <table className="w-full bg-white table-fixed">
          <thead>
            <tr>
              {fields.map((field, i) => (
                <td key={i} className="text-left p-2 bg-slate-200 truncate" width={200}>{field}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {documents?.map((document, i) => (
              <tr key={i} className="border-b hover:bg-slate-100 ">
                {fields.map((field, j) => (
                  <td className="p-2 truncate " key={j} >{document[field]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  )
}
