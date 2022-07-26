import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen border-r border-gray-300 shadow">
      <div className="px-6 pt-4">
        <div className="bg-white menu">
          <div className="ui tabular">
            <div className="item">회원 관리</div>
          </div>
          <div className="ui vertical">
            <div className="item">
              <Link href="/account/list">회원 목록 조회</Link>
            </div>
            <div className="item">
              <Link href="/account/admin">관리자 관리</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
