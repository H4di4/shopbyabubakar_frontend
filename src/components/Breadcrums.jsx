import { Link } from 'react-router-dom';

const categoryMap = {
  'aew-belts': 'AEW Belts',
  'boxing': 'Boxing',
  'cnc-belts': 'CNC Belts',
  'iwgp-belts': 'IWGP Belts',
  'mlb-championship-belts': 'MLB Championship Belts',
  'nba-championship-belts': 'NBA Championship Belts',
  'nfl-championship-belts': 'NFL Championship Belts',
  'nhl-championship-belts': 'NHL Championship Belts',
  'wwe-wwf-wcw': 'WWE/WWF/WCW',
  'customized': 'Customized',
  'design-your-custom-belt': 'Design Your Custom Belt',
  'custom-design-ideas': 'Custom Design Ideas'
};

export default function Breadcrumb({ title, category }) {
  const categorySlug = Object.keys(categoryMap).find(
    (key) => categoryMap[key] === category
  );

  return (
    <nav className="w-full px-6 py-8 text-[darkText ] flex flex-col items-center  h-36 ">
      {/* Category Heading */}
      <h1 className="text-[23px]  font-medium mb-4">{category}</h1>

      {/* Breadcrumb Links */}
      <div className="flex items-center text-[12px] space-x-2">
        <Link to="/" className="text-blue-600 hover:text-blue">Home</Link>
        {categorySlug && (
          <>
            <span className="text-gray-500">/</span>
            <Link to={`/category/${categorySlug}`} className="text-blue-600 ">
              {category}
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
