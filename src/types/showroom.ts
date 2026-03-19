export interface ShowroomHours {
  days: string
  hours: string
}

export interface Showroom {
  id: string
  slug: string
  name: string
  city: string
  country: string
  address: string
  phone: string
  email: string
  hours: ShowroomHours[]
  coordinates?: { lat: number; lng: number }
  heroImage: { url: string; alt: string }
  description?: string
  isHeadquarters?: boolean
}
