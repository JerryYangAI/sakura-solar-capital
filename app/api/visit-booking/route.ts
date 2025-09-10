import { NextRequest, NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, preferredDate, duration, participants, message } = body

    // 验证必填字段
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: '请填写所有必填字段' },
        { status: 400 }
      )
    }

    // 暂时注释掉邮件功能，先让网站正常运行
    console.log('收到考察预约申请:', {
      name,
      email,
      phone,
      preferredDate,
      duration,
      participants,
      message,
      timestamp: new Date().toISOString()
    })
    
    // TODO: 实现邮件发送功能
    // 需要先安装 nodemailer: npm install nodemailer @types/nodemailer

    return NextResponse.json(
      { message: '预约申请已提交，我们的客服将在24小时内与您联系！' },
      { status: 200 }
    )

  } catch (error) {
    console.error('邮件发送失败:', error)
    return NextResponse.json(
      { error: '提交失败，请稍后重试' },
      { status: 500 }
    )
  }
}
