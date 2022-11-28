export interface SETTING_ITEM {
  id: number;
  logo: string;
  social_icons: SocialItem[];
  email: string;
  address: string;
  hotline: string;
  site: number;
}

interface SocialItem {
  block_type: string;
  value: SocialItemValue;
}

interface SocialItemValue {
  icon: string;
  link: string;
}
