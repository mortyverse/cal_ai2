"use client"

import { useState } from "react"
import { Camera, Plus, Calendar, BarChart3, Settings, LogOut, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const router = useRouter()

  // 임시 데이터
  const mockMeals = [
    {
      id: 1,
      type: "아침",
      time: "08:30",
      items: [
        { name: "현미밥", calories: 310, confidence: 0.98 },
        { name: "김치찌개", calories: 450, confidence: 0.92 },
        { name: "계란말이", calories: 280, confidence: 0.95 }
      ],
      totalCalories: 1040
    },
    {
      id: 2,
      type: "점심",
      time: "12:45",
      items: [
        { name: "치킨샐러드", calories: 320, confidence: 0.89 },
        { name: "아보카도", calories: 160, confidence: 0.94 }
      ],
      totalCalories: 480
    },
    {
      id: 3,
      type: "간식",
      time: "15:20",
      items: [
        { name: "사과", calories: 80, confidence: 0.97 }
      ],
      totalCalories: 80
    }
  ]

  const totalCalories = mockMeals.reduce((sum, meal) => sum + meal.totalCalories, 0)

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">CalAI</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              안녕하세요! 👋
            </h1>
            <p className="text-gray-600">
              오늘도 건강한 식단 관리를 시작해보세요
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">오늘 총 칼로리</p>
                  <p className="text-2xl font-bold text-gray-900">{totalCalories}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">기록된 끼니</p>
                  <p className="text-2xl font-bold text-gray-900">{mockMeals.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">목표 칼로리</p>
                  <p className="text-2xl font-bold text-gray-900">2000</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Meal Button */}
          <div className="mb-8">
            <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Camera className="w-5 h-5" />
              <span>식단 기록하기</span>
            </button>
          </div>

          {/* Meals List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              오늘의 식단 기록
            </h2>
            
            {mockMeals.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
                <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  아직 기록된 식단이 없어요
                </h3>
                <p className="text-gray-600 mb-4">
                  첫 번째 식단을 기록해보세요!
                </p>
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  식단 기록하기
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {mockMeals.map((meal) => (
                  <div key={meal.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          meal.type === '아침' ? 'bg-yellow-400' :
                          meal.type === '점심' ? 'bg-orange-400' :
                          meal.type === '저녁' ? 'bg-blue-400' : 'bg-purple-400'
                        }`}></div>
                        <h3 className="text-lg font-semibold text-gray-900">{meal.type}</h3>
                        <span className="text-sm text-gray-500">{meal.time}</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">{meal.totalCalories} kcal</span>
                    </div>
                    
                    <div className="space-y-2">
                      {meal.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-900">{item.name}</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {Math.round(item.confidence * 100)}% 신뢰도
                            </span>
                          </div>
                          <span className="text-gray-600">{item.calories} kcal</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🚀 곧 출시될 기능들
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 실제 AI 음식 분석 및 영양성분 계산</li>
              <li>• 식단 통계 및 차트 분석</li>
              <li>• 목표 설정 및 진행률 추적</li>
              <li>• 식단 수정 및 삭제 기능</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
