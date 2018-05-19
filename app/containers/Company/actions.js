import { getCompany } from 'api/firestore/functions';

import {
  FETCH_COMPANY_INFO,
} from './constants';

export function fetchCompanyInfo(companyId) {
  return {
    type: FETCH_COMPANY_INFO,
    promise: getCompany(companyId),
  };
}
