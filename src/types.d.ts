type TCdnImage = {
  cdnId: string;
  url: string;
};

type TPrice = {
  currency: {
    isoCode: string;
    symbol: string;
  };
  discountPrice?: string;
  retailPrice: string;
};

// For Product (Sizes or Colors variants)
type TProductVariant = {
  sku: string;
  variant: string;
  price: TPrice;
  url?: string;
  isOutOfStock?: boolean;
};

type TProduct = {
  id: string;
  name: string;
  images: TCdnImage[];
  variants: TProductVariant[];
  brand?: string;
  url?: string;
  alternatives?: TProduct[];
  isOutOfStock?: boolean;
};
