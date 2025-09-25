"use client"

import { useState, useRef } from "react"
import { Camera, Upload, X, Loader2 } from "lucide-react"

interface ImageUploadProps {
  onImageUpload: (file: File) => Promise<void>
  disabled?: boolean
}

export default function ImageUpload({ onImageUpload, disabled = false }: ImageUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // 파일 타입 검증
    if (!file.type.startsWith('image/')) {
      setError('이미지 파일만 업로드할 수 있습니다.')
      return
    }

    // 파일 크기 검증 (10MB 제한)
    if (file.size > 10 * 1024 * 1024) {
      setError('파일 크기는 10MB 이하여야 합니다.')
      return
    }

    setError(null)
    setSelectedFile(file)
    
    // 미리보기 URL 생성
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    setIsUploading(true)
    setError(null)

    try {
      await onImageUpload(selectedFile)
      // 업로드 성공 시 상태 초기화
      setSelectedFile(null)
      setPreviewUrl(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '이미지 업로드 중 오류가 발생했습니다.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleRemove = () => {
    setSelectedFile(null)
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    setError(null)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (disabled || isUploading) return

    const file = event.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const syntheticEvent = {
        target: { files: [file] }
      } as React.ChangeEvent<HTMLInputElement>
      handleFileSelect(syntheticEvent)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <div className="w-full">
      {/* 파일 입력 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        disabled={disabled || isUploading}
      />

      {/* 드래그 앤 드롭 영역 */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => !disabled && !isUploading && fileInputRef.current?.click()}
        className={`
          relative w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200
          ${disabled || isUploading
            ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
            : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
          }
          ${error ? 'border-red-300 bg-red-50' : ''}
        `}
      >
        {previewUrl ? (
          // 이미지 미리보기
          <div className="relative w-full h-full">
            <img
              src={previewUrl}
              alt="업로드할 이미지"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleRemove()
              }}
              className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              disabled={disabled || isUploading}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          // 업로드 영역
          <div className="flex flex-col items-center justify-center h-full text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              {isUploading ? (
                <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
              ) : (
                <Camera className="w-8 h-8 text-gray-400" />
              )}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {isUploading ? '업로드 중...' : '이미지를 업로드하세요'}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              클릭하거나 드래그하여 이미지를 선택하세요
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Upload className="w-4 h-4" />
              <span>JPG, PNG, GIF (최대 10MB)</span>
            </div>
          </div>
        )}
      </div>

      {/* 에러 메시지 */}
      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* 업로드 버튼 */}
      {selectedFile && !isUploading && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleUpload}
            disabled={disabled}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            분석하기
          </button>
        </div>
      )}
    </div>
  )
}
