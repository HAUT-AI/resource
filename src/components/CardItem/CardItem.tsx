import SvgIcon from '../SvgIcon/SvgIcon';

export default function CardItem() {
  return (
    <div className="w-80 h-32 rounded-lg border border-[rgba(240, 240, 240, 1)] hover:border-[rgba(240,240,240,0.8)] pt-4 pl-4 hover:bg-[rgba(240,240,240,0.8)]"> 
      <div id='firstLine' className='flex items-center space-x-4 mb-2'> 
        <div id="img">
          <img src="/img/demo.ico" alt="" className='w-12 h-12 mb-1 p-1 bg-[rgba(240,240,240,0.8)] rounded-lg' />
        </div>
        <div id="title-tag" className='flex flex-col space-y-1'> 
          <div className='title font-bold text-lg text-gray-900 opacity-75'>百度</div>
          <div className='tags flex space-x-2'>
            <span id='tag' className='tag bg-gray-200 text-xs px-2 py-0.5 rounded text-gray-900 opacity-75'>搜索</span>
            <span id='tag' className='tag bg-gray-200 text-xs px-2 py-0.5 rounded text-gray-900 opacity-75'>知识</span>
          </div>
        </div>
      </div>
      <div id='describe' className='pl-2'>
        <div className='text-xs text-gray-900 opacity-75'>
          Lorem, ipsum dolor 
        </div>
      </div>
    </div>
  );
}
