// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
// @ts-ignore;
import { Bell, UserCircle, Home, List, PlusCircle, User } from 'lucide-react';

export default function HomePage(props) {
  const {
    $w
  } = props;
  return <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen pb-16">
      <div className="container mx-auto px-4 py-6">
        {/* 顶部导航 */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-blue-800 flex items-center">
            <span className="mr-2">🏃</span>校园跑腿
          </h1>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="text-blue-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <UserCircle className="text-blue-600" />
            </Button>
          </div>
        </header>

        {/* 快速下单区域 */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>快速下单</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-blue-100 text-blue-800 h-14">
                  <span className="mr-2">🍔</span>外卖代取
                </Button>
                <Button className="bg-green-100 text-green-800 h-14">
                  <span className="mr-2">📄</span>文件代送
                </Button>
                <Button className="bg-yellow-100 text-yellow-800 h-14">
                  <span className="mr-2">📦</span>快递代取
                </Button>
                <Button className="bg-purple-100 text-purple-800 h-14">
                  <span className="mr-2">❓</span>其他帮助
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 进行中订单 */}
        <section className="mb-8">
          <Card>
            <CardHeader className="flex-row justify-between items-center">
              <CardTitle>进行中订单</CardTitle>
              <Button variant="link" className="text-blue-600 p-0">
                查看全部
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">外卖代取 - 食堂3楼</span>
                    <span className="text-green-600">¥5.00</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">取餐号: A12 | 送到: 3号楼201</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-500 text-sm">等待接单</span>
                    <Button variant="outline" size="sm">
                      取消
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 跑腿接单入口 */}
        <Button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium mb-4">
          成为跑腿员，立即赚钱
        </Button>
      </div>

      {/* 底部导航 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
        <Button variant="ghost" className="flex flex-col items-center text-blue-600">
          <Home className="w-5 h-5" />
          <span className="text-xs mt-1">首页</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <List className="w-5 h-5" />
          <span className="text-xs mt-1">订单</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <PlusCircle className="w-5 h-5" />
          <span className="text-xs mt-1">发布</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <User className="w-5 h-5" />
          <span className="text-xs mt-1">我的</span>
        </Button>
      </nav>
    </div>;
}