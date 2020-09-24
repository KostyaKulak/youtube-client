import {SearchItem} from '../../youtube/models/search-item.model';

function findDateDiff(item: SearchItem): { [key: string]: number } {
  let publicDate: Date = new Date(item.snippet.publishedAt);
  let diffMs: number = (publicDate.valueOf() - new Date().valueOf());
  let diffDays: number = Math.floor(diffMs / 86400000);
  let diffHrs: number = Math.floor((diffMs % 86400000) / 3600000);
  let diffMins: number = Math.round(((diffMs % 86400000) % 3600000) / 60000);
  let diffMonth: number = diffDays / 31;
  return {
    diffMs: diffMs,
    diffDays: diffDays,
    diffHrs: diffHrs,
    diffMins: diffMins,
    diffMonth: diffMonth
  };
}

export {findDateDiff};
