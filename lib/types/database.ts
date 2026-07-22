export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      vehicle_types: {
        Row: {
          id: string
          name: string
          seating_capacity: number
          luggage_capacity: string | null
          best_for: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['vehicle_types']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['vehicle_types']['Insert']>
      }
      vehicles: {
        Row: {
          id: string
          vehicle_type_id: string | null
          name: string
          registration_number: string | null
          is_ac: boolean
          is_featured: boolean
          status: string
          description: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['vehicles']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['vehicles']['Insert']>
      }
      services: {
        Row: {
          id: string
          slug: string
          name: string
          description: string | null
          icon: string | null
          sort_order: number
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['services']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['services']['Insert']>
      }
      destinations: {
        Row: {
          id: string
          slug: string
          name: string
          distance_km: number | null
          estimated_travel_time: string | null
          recommended_vehicle_type_id: string | null
          places_to_visit: string | null
          travel_tips: string | null
          image_url: string | null
          is_featured: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['destinations']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['destinations']['Insert']>
      }
      customers: {
        Row: {
          id: string
          full_name: string
          phone: string
          email: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['customers']['Row'], 'created_at'>
        Update: Partial<Database['public']['Tables']['customers']['Insert']>
      }
      bookings: {
        Row: {
          id: string
          booking_reference: string
          customer_id: string
          service_id: string | null
          destination_id: string | null
          vehicle_id: string | null
          vehicle_type_preference_id: string | null
          pickup_location: string
          drop_location: string
          pickup_date: string
          pickup_time: string | null
          return_date: string | null
          passenger_count: number | null
          notes: string | null
          status: string
          admin_notes: string | null
          assigned_to: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['bookings']['Row'], 'id' | 'booking_reference' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['bookings']['Insert']>
      }
      testimonials: {
        Row: {
          id: string
          customer_name: string
          service_id: string | null
          rating: number
          quote: string
          is_published: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['testimonials']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['testimonials']['Insert']>
      }
      faqs: {
        Row: {
          id: string
          question: string
          answer: string
          sort_order: number
          is_published: boolean
        }
        Insert: Omit<Database['public']['Tables']['faqs']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['faqs']['Insert']>
      }
    }
  }
}
