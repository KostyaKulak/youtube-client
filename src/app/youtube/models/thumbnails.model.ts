import { Default } from './default.model';
import { Medium } from './medium.model';
import { High } from './high.model';
import { Standard } from './standard.model';
import { Maxres } from './maxres.model';

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
  standard: Standard;
  maxres: Maxres;
}
