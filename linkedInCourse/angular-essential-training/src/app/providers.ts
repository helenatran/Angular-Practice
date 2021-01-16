import { InjectionToken } from '@angular/core';

// token name needs to be unique
export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {
  mediums: ['Movies', 'Series']
};
