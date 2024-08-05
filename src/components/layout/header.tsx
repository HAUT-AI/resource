import SvgIcon from '../SvgIcon/SvgIcon';

export default function HeaderLayout() {
  return (
    <header className="flex justify-between items-center px-5 py-4 sticky top-0 z-50 shadow">
      <div className="text-2xl font-bold text-gray-800 ml-5" aria-label="Desine Notes">
        {/* Logo以及标题放在这里 */}
        HAUT AI
      </div>
      <nav aria-label="Main Navigation">
        <ul className="flex space-x-5 mr-10">
          <SvgIcon name="github" width={24} height={24} className="hover:scale-125 transition-transform duration-300"/>
          <SvgIcon name="lau" width={24} height={24} className="hover:scale-125 transition-transform duration-300"/>
        </ul>
      </nav>
    </header>
  );
}
