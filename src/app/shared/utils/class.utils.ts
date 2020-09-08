import {findDateDiff} from './date.utils';
import {SearchItem} from '../../youtube/models/search-item.model';

function getBorderClass(item: SearchItem): string {
  let borderClass: string = '';
  let dateDiff: { [p: string]: number } = findDateDiff(item);
  if (dateDiff.diffDays > -7) {
    borderClass = 'public_date_seven_days';
  } else {
    borderClass = dateDiff.diffMonth > -1 ? 'public_date_month' :
      (dateDiff.diffMonth < -6 ? 'public_date_six_month' : 'public_date_default');
  }
  return borderClass;
}

export {getBorderClass};
