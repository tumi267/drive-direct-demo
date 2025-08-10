// /app/vehicles/types.ts

// /vehicles/types.ts

export type Filters = {
    vehicleType: string
    postcode: string
    distance: string
    paymentType: string
    minPrice: string
    maxPrice: string
    minYear: string
    maxYear: string
    make: string
    selectedMakes: string[]
  }
  
  export type Car = {
    id: number | string
    name: string
    type: string | string[]
    price: number
    // add more fields as needed
  }
  