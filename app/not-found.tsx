import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-6 text-center">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="mt-4 text-gray-400">
        The page you are looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-cyan-400 px-6 py-3 font-medium text-black"
      >
        Back Home
      </Link>
    </main>
  );
}