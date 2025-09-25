"use client"

import { useState } from "react"
import { X, CheckCircle, Zap, Apple, Droplets, Flame } from "lucide-react"

interface NutritionData {
  food: string
  totalCalories: string
  protein: string
  fat: string
  carbohydrates: string
}

interface NutritionResultProps {
  data: NutritionData
  onClose: () => void
  onAddToMeal: (data: NutritionData) => void
}

export default function NutritionResult({ data, onClose, onAddToMeal }: NutritionResultProps) {
  const [isAdding, setIsAdding] = useState(false)

  // 칼로리 범위에서 평균값 계산
  const getAverageCalories = (caloriesStr: string) => {
    const match = caloriesStr.match(/(\d{1,3}(?:,\d{3})*)\s*~\s*(\d{1,3}(?:,\d{3})*)/)
    if (match) {
      const min = parseInt(match[1].replace(/,/g, ''))
      const max = parseInt(match[2].replace(/,/g, ''))
      return Math.round((min + max) / 2)
    }
    return parseInt(caloriesStr.replace(/[^\d]/g, '')) || 0
  }

  // 영양성분에서 숫자만 추출
  const extractNumber = (str: string) => {
    const match = str.match(/(\d+(?:\.\d+)?)/)
    return match ? parseFloat(match[1]) : 0
  }

  const averageCalories = getAverageCalories(data.totalCalories)
  const proteinValue = extractNumber(data.protein)
  const fatValue = extractNumber(data.fat)
  const carbsValue = extractNumber(data.carbohydrates)

  const handleAddToMeal = async () => {
    setIsAdding(true)
    try {
      await onAddToMeal(data)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">분석 완료!</h2>
                <p className="text-sm text-gray-600">AI가 음식을 분석했습니다</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* 음식 이름 */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.food}</h3>
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-green-50 px-4 py-2 rounded-full">
              <Apple className="w-4 h-4 text-green-600" />
              <span>AI 분석 결과</span>
            </div>
          </div>

          {/* 칼로리 카드 */}
          <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-6 mb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">총 칼로리</p>
                <p className="text-3xl font-bold">{averageCalories.toLocaleString()}</p>
                <p className="text-orange-100 text-sm">{data.totalCalories}</p>
              </div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Flame className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* 영양성분 그리드 */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xs text-blue-600 font-medium mb-1">탄수화물</p>
              <p className="text-lg font-bold text-blue-900">{carbsValue}g</p>
              <p className="text-xs text-blue-600">{data.carbohydrates}</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              </div>
              <p className="text-xs text-purple-600 font-medium mb-1">단백질</p>
              <p className="text-lg font-bold text-purple-900">{proteinValue}g</p>
              <p className="text-xs text-purple-600">{data.protein}</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-4 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Droplets className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-xs text-orange-600 font-medium mb-1">지방</p>
              <p className="text-lg font-bold text-orange-900">{fatValue}g</p>
              <p className="text-xs text-orange-600">{data.fat}</p>
            </div>
          </div>

          {/* 영양 정보 요약 */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">영양 정보 요약</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">총 칼로리</span>
                <span className="font-medium text-gray-900">{data.totalCalories}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">탄수화물</span>
                <span className="font-medium text-gray-900">{data.carbohydrates}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">단백질</span>
                <span className="font-medium text-gray-900">{data.protein}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">지방</span>
                <span className="font-medium text-gray-900">{data.fat}</span>
              </div>
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              닫기
            </button>
            <button
              onClick={handleAddToMeal}
              disabled={isAdding}
              className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAdding ? '추가 중...' : '식단에 추가'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
