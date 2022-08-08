import Link from 'next/link';

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Python: 'green',
    PHP: 'purple',
    React: 'gray',
    Ruby: 'red',
  };

  const bgColor = colorKey[children] || 'gray';
  return (
    <div
      className={`px-2 py-1 bg-${bgColor}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}