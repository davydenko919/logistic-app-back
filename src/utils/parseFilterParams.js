function parseNumber(value) {
    if (typeof value !== 'string') {
      return undefined;
    }

    const parsedNumber = parseInt(value);

    if (Number.isNaN(parsedNumber) === true) {
      return undefined;
    }

    return value;
  }

  export function parseFilterParams(query) {
    const { startDate, endDate } = query;

    const parsedStartDate = parseNumber(startDate);
    const parsedEndDate = parseNumber(endDate);

    return {
      minAge: parsedMinAge,
      maxAge: parsedMaxAge,
    };
  }
