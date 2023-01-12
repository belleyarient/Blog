import "tailwindcss/tailwind.css";
import Link from 'next/link'
export default function Head() {
    return(
        <div className="p-3 bg-indigo-600 pl-8">
            <div>
            <Link href={`/`}>
                <h1>My Blog</h1>
              </Link>
            </div>
        </div>
    )
}