export interface Project {
  id: string
  name: string
  location: string
  area: number // 平方米
  capacity: number // kW
  investment: number // 万元人民币
  annualGeneration: number // kWh
  annualReturn: number // %
  image: string
  description: string
  features: string[]
  status: 'available' | 'sold' | 'reserved'
  priceRange: '200-300' | '300-400' | '400-500'
}

export const projects: Project[] = [
  {
    id: 'project-1',
    name: '东京都太阳能电站项目 #001',
    location: '大阪府大阪市阿倍野区',
    area: 5000,
    capacity: 1000,
    investment: 300,
    annualGeneration: 1200000,
    annualReturn: 15,
    image: '/images/projects/project-1.png',
    description: '位于大阪府大阪市阿倍野区的高效太阳能电站，采用最新光伏技术，年发电量稳定，投资回报率高。',
    features: [
      '土地+电站完整产权',
      '日本FIT制度保障',
      '专业运营维护',
      '20年回购保障'
    ],
    status: 'available',
    priceRange: '300-400'
  },
  {
    id: 'project-2',
    name: '大阪府太阳能电站项目 #002',
    location: '大阪府大阪市',
    area: 7500,
    capacity: 1500,
    investment: 450,
    annualGeneration: 1800000,
    annualReturn: 15,
    image: '/images/projects/project-2.png',
    description: '大阪府大型太阳能电站项目，规模大，发电效率高，适合大额投资。',
    features: [
      '大规模电站项目',
      '高发电效率',
      '稳定收益保障',
      '专业团队管理'
    ],
    status: 'available',
    priceRange: '400-500'
  },
  {
    id: 'project-3',
    name: '神奈川县太阳能电站项目 #003',
    location: '神奈川县横滨市',
    area: 6000,
    capacity: 1200,
    investment: 380,
    annualGeneration: 1440000,
    annualReturn: 15,
    image: '/images/projects/project-3.png',
    description: '神奈川县优质太阳能电站，地理位置优越，阳光充足，发电稳定。',
    features: [
      '地理位置优越',
      '阳光资源丰富',
      '发电稳定可靠',
      '维护成本低'
    ],
    status: 'available',
    priceRange: '300-400'
  },
  {
    id: 'project-4',
    name: '千叶县太阳能电站项目 #004',
    location: '千叶县千叶市',
    area: 8500,
    capacity: 1700,
    investment: 520,
    annualGeneration: 2040000,
    annualReturn: 15,
    image: '/images/projects/project-4.png',
    description: '千叶县超大型太阳能电站，投资规模大，适合机构投资者。',
    features: [
      '超大规模项目',
      '机构投资首选',
      '长期稳定收益',
      '政府政策支持'
    ],
    status: 'available',
    priceRange: '400-500'
  },
  {
    id: 'project-5',
    name: '埼玉县太阳能电站项目 #005',
    location: '埼玉县埼玉市',
    area: 4000,
    capacity: 800,
    investment: 280,
    annualGeneration: 960000,
    annualReturn: 15,
    image: '/images/projects/project-5.png',
    description: '埼玉县中型太阳能电站，投资门槛适中，适合个人投资者。',
    features: [
      '投资门槛适中',
      '个人投资首选',
      '收益稳定可期',
      '风险控制良好'
    ],
    status: 'available',
    priceRange: '200-300'
  },
  {
    id: 'project-6',
    name: '静冈县太阳能电站项目 #006',
    location: '静冈县静冈市',
    area: 6500,
    capacity: 1300,
    investment: 420,
    annualGeneration: 1560000,
    annualReturn: 15,
    image: '/images/projects/project-6.png',
    description: '静冈县优质太阳能电站，气候条件优越，发电效率高。',
    features: [
      '气候条件优越',
      '发电效率高',
      '维护便利',
      '收益保障完善'
    ],
    status: 'available',
    priceRange: '400-500'
  },
  {
    id: 'project-7',
    name: '爱知县太阳能电站项目 #007',
    location: '爱知县名古屋市',
    area: 7000,
    capacity: 1400,
    investment: 480,
    annualGeneration: 1680000,
    annualReturn: 15,
    image: '/images/projects/project-7.png',
    description: '爱知县大型太阳能电站，地理位置优越，阳光资源丰富，发电效率高。',
    features: [
      '地理位置优越',
      '阳光资源丰富',
      '发电效率高',
      '长期稳定收益'
    ],
    status: 'available',
    priceRange: '400-500'
  },
  {
    id: 'project-8',
    name: '福冈县太阳能电站项目 #008',
    location: '福冈县福冈市',
    area: 5500,
    capacity: 1100,
    investment: 350,
    annualGeneration: 1320000,
    annualReturn: 15,
    image: '/images/projects/project-8.png',
    description: '福冈县优质太阳能电站，气候条件良好，维护成本低，投资回报稳定。',
    features: [
      '气候条件良好',
      '维护成本低',
      '投资回报稳定',
      '风险控制完善'
    ],
    status: 'available',
    priceRange: '300-400'
  },
  {
    id: 'project-9',
    name: '北海道太阳能电站项目 #009',
    location: '北海道札幌市',
    area: 9000,
    capacity: 1800,
    investment: 580,
    annualGeneration: 2160000,
    annualReturn: 15,
    image: '/images/projects/project-9.png',
    description: '北海道超大型太阳能电站，规模宏大，适合大型机构投资，收益稳定可期。',
    features: [
      '超大规模项目',
      '机构投资首选',
      '收益稳定可期',
      '政府政策支持'
    ],
    status: 'available',
    priceRange: '400-500'
  }
]

export const getProjectsByPriceRange = (range: string) => {
  return projects.filter(project => project.priceRange === range)
}

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id)
}

