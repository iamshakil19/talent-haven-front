export const mergeFilters = (filters: any) => {
    const mergedFilters: Record<string, string> = {};
  
    filters.forEach((filter: any) => {
      if (filter?.name && filter?.value) {
        if (mergedFilters[filter.name]) {
          mergedFilters[filter.name] += `,${filter.value}`;
        } else {
          mergedFilters[filter.name] = filter.value;
        }
      }
    });
  
    return mergedFilters;
  };