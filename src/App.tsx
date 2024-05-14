import avatar from './assets/img/avatar.jpg';
import PhoneIcon from './assets/svg/phone.svg?react';
import EmailIcon from './assets/svg/email.svg?react';
import tgds_pc from './assets/img/tgds_pc.jpg';
import tgds_m from './assets/img/tgds_m.jpg';
import running_pc from './assets/img/running_pc.jpg';
import running_m from './assets/img/running_m.jpg';
import tea_pc from './assets/img/tea_pc.jpg';
import tea_m from './assets/img/tea_m.jpg';
import tokuyo_pc from './assets/img/tokuyo_pc.jpg';
import toyota_pc from './assets/img/toyota_pc.jpg';
import toyota_m from './assets/img/toyota_m.jpg';
import Works from './component/Works';

function App() {
  let WORKSLIST = [
    {
      webName: 'TGDS 同業網',
      webUrl: 'https://tmp.ticketgds.com',
      webCoverPc: tgds_pc,
      webCoverM: tgds_m,
      workList: ['網站、功能開發', '採用：vue3 前端框架 + Laravel api'],
    },
    {
      webName: '運動筆記',
      webUrl: 'https://running.biji.co',
      webCoverPc: running_pc,
      webCoverM: running_m,
      workList: [
        '網頁切版',
        'dfp 串接',
        '無限加載文章，利用history api變更網址',
        '利用fabric.js製作圖片拼貼功能',
      ],
    },
    {
      webName: '遊山茶訪',
      webUrl: 'https://www.yoshantea.com',
      webCoverPc: tea_pc,
      webCoverM: tea_m,
      workList: [
        '網頁切版',
        '後台可編輯產品、文章、活動，與資料庫串接',
        '發送email',
        'ga、search console設定',
      ],
    },
    {
      webName: 'tokuyo 按摩椅',
      webUrl: 'https://www.tokuyo.com.tw',
      webCoverPc: tokuyo_pc,
      webCoverM: '',
      workList: ['網站維護，首次接觸MVC架構，Zend與smarty撰寫', 'nccc串接'],
    },
    {
      webName: 'TOYOTA 認證中古車',
      webUrl: 'https://www.toyotacpo.com.tw',
      webCoverPc: toyota_pc,
      webCoverM: toyota_m,
      workList: ['RWD 網頁切版'],
    },
  ];

  let lists = WORKSLIST.map((work, key) => {
    return (
      <Works
        key={key}
        info={work}
      />
    );
  });

  return (
    <>
      <div className="mx-auto max-w-screen-md px-4 py-20 text-stone-700">
        <div className="flex items-center gap-4 sm:gap-12">
          <img
            src={avatar}
            className="w-1/3 sm:w-1/4"
          />
          <div className="grid gap-1">
            <div className="mb-2 flex items-end gap-3 sm:mb-3">
              <h1 className="text-3xl tracking-widest">黃懿瑢</h1>
              <span className="text-xl">Lea Huang</span>
            </div>
            <div className="group flex items-center gap-2">
              <PhoneIcon className="w-5 fill-lime-700 group-hover:fill-lime-800" />
              <a
                href="tel:0975425783"
                className="whitespace-nowrap text-lg text-lime-700 group-hover:text-lime-800">
                0975-425-783
              </a>
            </div>
            <div className="group flex items-center gap-2">
              <EmailIcon className="w-5 fill-lime-700 group-hover:fill-lime-800" />
              <a
                href="mailto:g5l64jo3@gmail.com"
                className="text-lg text-lime-700 group-hover:text-lime-800">
                g5l64jo3@gmail.com
              </a>
            </div>
          </div>
        </div>
        <ul className="mt-14 grid gap-8">
          <li className="flex flex-col gap-4 sm:flex-row">
            <h4 className="w-20 whitespace-nowrap font-bold sm:text-right">
              工作經歷
            </h4>
            <ul className="w-full">
              <li>
                <span className="text-sm text-gray-400">Aug 2020 - 現在</span>
                <p className="rounded-md bg-stone-100 px-4 py-3">
                  擔任雄獅資訊 TGDS 團隊前端工程師，主要負責同業網前、後端開發，
                  <br />
                  也支援後端的供應商 api 串接、站內查詢 elk 維護
                </p>
              </li>
              <li className="mt-3">
                <span className="text-sm text-gray-400">
                  Aug 2015 - Jul 2020
                </span>
                <p className="rounded-md bg-stone-100 px-4 py-3">
                  擔任運動筆記前端工程師，負責前端切版、edm、部分介面規劃、活動網站等
                  <br />
                  閒暇之餘自由接案、精進能力，同時也接觸不同的人事物增進溝通技巧
                </p>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-4 sm:flex-row">
            <h4 className="w-20 font-bold sm:text-right">學歷</h4>
            <div className="w-full">
              <span className="text-sm text-gray-400">Sep 2011 - Jun 2015</span>
              <p className="rounded-md bg-stone-100 px-4 py-3">
                畢業於國立臺灣科技大學資訊工程系
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-4 sm:flex-row">
            <h4 className="w-20 font-bold sm:text-right">技能</h4>
            <ul className="w-full rounded-md bg-stone-100 px-4 py-3">
              <li>前端：html, css, sass, javascript, jquery, vue2/3</li>
              <li>後端：php, mysql, git, laravel, elk, docker</li>
              <li>其他：ga, gtm</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="bg-stone-100">
        <div className="mx-auto grid max-w-screen-md gap-5 px-4 py-20 text-stone-700">
          <h2 className="mb-2 text-center text-2xl font-bold tracking-widest">
            專案開發
          </h2>
          {lists}
        </div>
      </div>
    </>
  );
}

export default App;
