import Link from "next/link";

const navigation = () => {
  return (
    <nav>
      <Link href="/homepage">Home</Link>
      <Link href="/">About</Link>
      <Link href="/">Product</Link>
    </nav>
  );
};
