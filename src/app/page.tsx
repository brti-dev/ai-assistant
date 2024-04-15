import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/strategic-planning')

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <b className="my-10">Hello world</b>
      <ul>
        <li>
          <Link href="/strategic-planning" className="underline">
            Strategic Planning Instructor
          </Link>
        </li>
      </ul>
    </main>
  )
}
