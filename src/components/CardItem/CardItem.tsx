import SvgIcon from '../SvgIcon/SvgIcon';

export default function CardItem({ item }) {
  const openUrlInNewTab = () => {
    window.open(item.url, '_blank');
  };

  return (
    <div
      className="w-80 h-32 rounded-lg border border-[rgba(220,220,220,1)] hover:border-[rgba(240,240,240,0.8)] pt-4 pl-4 hover:bg-[rgba(240,240,240,0.8)] mb-2 cursor-pointer"
      onClick={openUrlInNewTab}
    >
      <div className="flex items-center space-x-4 mb-2">
        <img
          src="/img/idea.png"
          alt={item.keywords.zh}
          className="w-12 h-12 mb-1 p-1 bg-[rgba(240,240,240,0.8)] rounded-lg"
        />
        <div className="flex flex-col space-y-1">
          <div className="font-bold text-lg text-gray-900 opacity-75">
            {item.title.length > 13
              ? `${item.title.substring(0, 13)}...`
              : item.title}
          </div>
          <div className="flex space-x-2">
            {item.callword.slice(0, 2).map((callwordItem, index) => (
              <span
                key={index}
                className="bg-gray-200 text-xs px-2 py-0.5 rounded text-gray-900 opacity-75"
              >
                {callwordItem.zh}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="pl-2 pt-2 pr-2">
        <div className="text-xs text-gray-900 opacity-75">
          {item.description.zh.length > 45
            ? `${item.description.zh.substring(0, 45)}...` 
            : item.description.zh}
        </div>
      </div>
    </div>
  );
}
