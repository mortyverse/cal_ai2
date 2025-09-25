import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL = 'https://leehan.app.n8n.cloud/webhook/726d8f32-8d7a-4354-a6d8-22f93aed14c1'

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 이미지 업로드 요청 시작')
    console.log('요청 URL:', request.url)
    console.log('요청 메서드:', request.method)
    console.log('요청 헤더:', Object.fromEntries(request.headers.entries()))
    
    // Content-Type 확인
    const contentType = request.headers.get('content-type')
    console.log('Content-Type:', contentType)
    
    if (!contentType || !contentType.includes('multipart/form-data')) {
      console.log('❌ 잘못된 Content-Type:', contentType)
      return NextResponse.json(
        { error: 'Content-Type이 multipart/form-data가 아닙니다.', success: false },
        { status: 400 }
      )
    }
    
    const formData = await request.formData()
    console.log('FormData 파싱 완료')
    
    const file = formData.get('image') as File
    console.log('파일 추출 완료:', !!file)

    console.log('📁 파일 정보:', {
      name: file?.name,
      size: file?.size,
      type: file?.type,
      lastModified: file?.lastModified
    })

    if (!file) {
      console.log('파일이 없음')
      return NextResponse.json(
        { error: '이미지 파일이 필요합니다.' },
        { status: 400 }
      )
    }

    // 파일 타입 검증
    if (!file.type.startsWith('image/')) {
      console.log('잘못된 파일 타입:', file.type)
      return NextResponse.json(
        { error: '이미지 파일만 업로드할 수 있습니다.' },
        { status: 400 }
      )
    }

    // 파일 크기 검증 (10MB 제한)
    if (file.size > 10 * 1024 * 1024) {
      console.log('파일 크기 초과:', file.size)
      return NextResponse.json(
        { error: '파일 크기는 10MB 이하여야 합니다.' },
        { status: 400 }
      )
    }

    console.log('웹훅으로 이미지 전송 시작:', WEBHOOK_URL)
    console.log('전송할 파일 정보:', {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
    })

    // 웹훅으로 이미지 전송
    const webhookFormData = new FormData()
    webhookFormData.append('image', file, file.name)
    webhookFormData.append('timestamp', new Date().toISOString())
    webhookFormData.append('source', 'cal_ai2_app')
    webhookFormData.append('filename', file.name)
    webhookFormData.append('filesize', file.size.toString())
    webhookFormData.append('filetype', file.type)
    
    console.log('FormData 생성 완료, 웹훅 전송 중...')

    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      body: webhookFormData,
    })

    console.log('웹훅 응답 상태:', webhookResponse.status)
    console.log('웹훅 응답 헤더:', Object.fromEntries(webhookResponse.headers.entries()))

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text()
      console.error('웹훅 오류 응답:', errorText)
      throw new Error(`웹훅 전송 실패: ${webhookResponse.status} ${webhookResponse.statusText} - ${errorText}`)
    }

    let webhookResult
    try {
      const responseText = await webhookResponse.text()
      console.log('웹훅 응답 텍스트:', responseText)
      
      if (responseText.trim()) {
        try {
          webhookResult = JSON.parse(responseText)
          console.log('웹훅 JSON 응답:', webhookResult)
        } catch (jsonError) {
          console.log('웹훅 응답이 JSON이 아님, 텍스트로 처리')
          webhookResult = { message: responseText }
        }
      } else {
        console.log('웹훅 응답이 비어있음')
        webhookResult = { message: '웹훅 전송 완료' }
      }
    } catch (responseError) {
      console.error('웹훅 응답 읽기 오류:', responseError)
      webhookResult = { message: '웹훅 전송 완료 (응답 읽기 실패)' }
    }

    // 웹훅 응답에서 영양 정보 추출
    let nutritionData = null
    if (webhookResult && typeof webhookResult === 'object') {
      // 웹훅 응답이 영양 정보를 포함하는지 확인
      if (webhookResult.food && webhookResult.totalCalories) {
        nutritionData = {
          food: webhookResult.food,
          totalCalories: webhookResult.totalCalories,
          protein: webhookResult.protein || '0g',
          fat: webhookResult.fat || '0g',
          carbohydrates: webhookResult.carbohydrates || '0g'
        }
        console.log('영양 정보 추출됨:', nutritionData)
      }
    }

    return NextResponse.json({
      success: true,
      message: '이미지가 성공적으로 전송되었습니다.',
      webhookResponse: webhookResult,
      nutritionData: nutritionData,
    })

  } catch (error) {
    console.error('이미지 업로드 오류:', error)
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : '이미지 업로드 중 오류가 발생했습니다.',
        success: false 
      },
      { status: 500 }
    )
  }
}
