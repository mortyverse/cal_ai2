"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, Filter, Search, Clock, Utensils, BarChart3, Camera } from "lucide-react"
import Link from "next/link"

export default function MyDietPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedMealType, setSelectedMealType] = useState<string | null>(null)

  // 임시 데이터 - 실제로는 Server Actions로 가져올 예정
  const mockMeals = [
    {
      id: 1,
      type: "아침",
      time: "08:30",
      date: "2024-12-19",
      items: [
        { name: "현미밥", calories: 310, confidence: 0.98, quantity: "1 공기 (210g)" },
        { name: "김치찌개", calories: 450, confidence: 0.92, quantity: "1 인분 (400g)" },
        { name: "계란말이", calories: 280, confidence: 0.95, quantity: "1 접시 (150g)" }
      ],
      totalCalories: 1040,
      imageUrl: "/api/placeholder/300/200",
      nutrients: {
        carbohydrates: { value: 86.8, unit: "g" },
        protein: { value: 51.8, unit: "g" },
        fat: { value: 49.9, unit: "g" }
      }
    },
    {
      id: 2,
      type: "점심",
      time: "12:45",
      date: "2024-12-19",
      items: [
        { name: "치킨샐러드", calories: 320, confidence: 0.89, quantity: "1 그릇 (300g)" },
        { name: "아보카도", calories: 160, confidence: 0.94, quantity: "1 개 (150g)" }
      ],
      totalCalories: 480,
      imageUrl: "/api/placeholder/300/200",
      nutrients: {
        carbohydrates: { value: 15.2, unit: "g" },
        protein: { value: 25.1, unit: "g" },
        fat: { value: 28.3, unit: "g" }
      }
    },
    {
      id: 3,
      type: "간식",
      time: "15:20",
      date: "2024-12-19",
      items: [
        { name: "사과", calories: 80, confidence: 0.97, quantity: "1 개 (150g)" }
      ],
      totalCalories: 80,
      imageUrl: "/api/placeholder/300/200",
      nutrients: {
        carbohydrates: { value: 21.0, unit: "g" },
        protein: { value: 0.4, unit: "g" },
        fat: { value: 0.3, unit: "g" }
      }
    }
  ]

  const mealTypes = ["아침", "점심", "저녁", "간식"]
  const filteredMeals = selectedMealType 
    ? mockMeals.filter(meal => meal.type === selectedMealType)
    : mockMeals

  const totalCalories = mockMeals.reduce((sum, meal) => sum + meal.totalCalories, 0)
  const totalNutrients = mockMeals.reduce((acc, meal) => ({
    carbohydrates: acc.carbohydrates + meal.nutrients.carbohydrates.value,
    protein: acc.protein + meal.nutrients.protein.value,
    fat: acc.fat + meal.nutrients.fat.value
  }), { carbohydrates: 0, protein: 0, fat: 0 })

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">CalAI</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              나의 식단 기록
            </h1>
            <p className="text-gray-600">
              {formatDate(selectedDate)}
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">총 칼로리</p>
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
                  <p className="text-sm text-gray-600">탄수화물</p>
                  <p className="text-2xl font-bold text-gray-900">{Math.round(totalNutrients.carbohydrates)}g</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">단백질</p>
                  <p className="text-2xl font-bold text-gray-900">{Math.round(totalNutrients.protein)}g</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">지방</p>
                  <p className="text-2xl font-bold text-gray-900">{Math.round(totalNutrients.fat)}g</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Meal Type Filter */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedMealType(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedMealType === null
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                전체
              </button>
              {mealTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedMealType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedMealType === type
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Meals List */}
          <div className="space-y-6">
            {filteredMeals.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
                <Utensils className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {selectedMealType ? `${selectedMealType} 기록이 없어요` : '기록된 식단이 없어요'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedMealType ? '다른 끼니를 확인해보세요' : '첫 번째 식단을 기록해보세요!'}
                </p>
                <Link 
                  href="/dashboard"
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                >
                  식단 기록하기
                </Link>
              </div>
            ) : (
              filteredMeals.map((meal) => (
                <div key={meal.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        meal.type === '아침' ? 'bg-yellow-400' :
                        meal.type === '점심' ? 'bg-orange-400' :
                        meal.type === '저녁' ? 'bg-blue-400' : 'bg-purple-400'
                      }`}></div>
                      <h3 className="text-lg font-semibold text-gray-900">{meal.type}</h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{meal.time}</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-gray-900">{meal.totalCalories} kcal</span>
                  </div>
                  
                  {/* Meal Image */}
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Camera className="w-12 h-12 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Food Items */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">분석된 음식</h4>
                    {meal.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-900 font-medium">{item.name}</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {Math.round(item.confidence * 100)}% 신뢰도
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{item.quantity}</p>
                        </div>
                        <span className="text-gray-600 font-medium">{item.calories} kcal</span>
                      </div>
                    ))}
                  </div>

                  {/* Nutrition Summary */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">영양성분 요약</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-gray-500">탄수화물</p>
                        <p className="font-semibold text-gray-900">{meal.nutrients.carbohydrates.value}g</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500">단백질</p>
                        <p className="font-semibold text-gray-900">{meal.nutrients.protein.value}g</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500">지방</p>
                        <p className="font-semibold text-gray-900">{meal.nutrients.fat.value}g</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
