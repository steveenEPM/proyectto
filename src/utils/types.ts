export interface TypeProduct {
    id: string;
    title: string;
    condition?: string;
    thumbnail_id: string;
    catalog_product_id?: string;
    listing_type_id?: string;
    sanitized_title?: string;
    permalink?: string;
    buying_mode?: string;
    site_id?: string;
    category_id?: string;
    domain_id?: string;
    thumbnail: string;
    currency_id?: string;
    order_backend?: number;
    price: number;
    original_price?: number | null;
    sale_price?: {
        price_id?: string;
        amount?: number;
        conditions?: Record<string, unknown>;
        currency_id?: string;
        exchange_rate?: number | null;
        payment_method_prices?: unknown[];
        payment_method_type?: string;
        regular_amount?: number | null;
        type?: string;
        metadata?: Record<string, unknown>;
    };
    available_quantity?: number;
    official_store_id?: number | null;
    use_thumbnail_id?: boolean;
    accepts_mercadopago?: boolean;
    shipping?: Record<string, unknown>;
    stop_time?: string;
    seller?: Record<string, unknown>;
    attributes?: unknown[];
    installments?: unknown | null;
    winner_item_id?: string | null;
    catalog_listing?: boolean;
    discounts?: unknown | null;
    promotions?: unknown[];
    inventory_id?: string | null;
}


export interface TypeBook {
    id?: string;
    site_id?: string;
    title?: string;
    seller_id?: number;
    category_id?: string;
    official_store_id?: number | null;
    price?: number;
    base_price?: number;
    original_price?: number | null;
    currency_id?: string;
    initial_quantity?: number;
    sale_terms?: any[];
    buying_mode?: string;
    listing_type_id?: string;
    condition?: string;
    permalink?: string;
    thumbnail_id?: string;
    thumbnail?: string;
    pictures?: any[];
    video_id?: string | null;
    descriptions?: any[];
    accepts_mercadopago?: boolean;
    non_mercado_pago_payment_methods?: any[];
    shipping?: any;
    international_delivery_mode?: string;
    seller_address?: any;
    seller_contact?: any | null;
    location?: any;
    coverage_areas?: any[];
    attributes?: any[];
};



export interface TypeAttributes {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    values: TypeValueAttri[];
    value_type: string;
  }
  
  interface TypeValueAttri {
    id: string;
    name: string;
    struct: any | null;
  }