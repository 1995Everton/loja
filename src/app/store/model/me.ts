import { User } from 'src/app/shared/models/user';
import { Address } from 'src/app/shared/models/address';
import { Product } from 'src/app/shared/models/product';

export interface Me {
  user?: User;
  address?: Address[];
  favorites?: Product[];
}