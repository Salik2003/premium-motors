export type CarStatus = 'active' | 'sold';

export interface Car {
    id: string;
    title: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuel_type: string;
    transmission: string;
    condition: string;
    color: string;
    city: string;
    registered_in?: string;
    num_owners: number;
    engine_cc: number;
    description?: string;
    images: string[];
    slug?: string;
    is_featured: boolean;
    status: CarStatus;
    view_count: number;
    created_at: string;
}

export interface InvestorLead {
    id: string;
    full_name: string;
    phone: string;
    email: string;
    city: string;
    investment_amount: number;
    plan_selected: string;
    message?: string;
    status: 'new' | 'contacted' | 'converted';
    created_at: string;
}

export interface ContactMessage {
    id: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    is_read: boolean;
    created_at: string;
}
