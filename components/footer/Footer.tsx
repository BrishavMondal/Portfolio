export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-gray-500">
      <p>
        © {new Date().getFullYear()} Brishav Mondal.
        All rights reserved.
      </p>
    </footer>
  );
}